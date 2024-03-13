async function conditional(attendee, cond, show, dict) {
  if (cond.constructor === "".constructor) {
    // single question without further action
    const el = await custom_js("findQuestion", cond, attendee);
    if (show) {
      el.show();
    } else {
      el.hide();
    }
  } else if (cond.constructor === [].constructor) {
    // multiple questions without further action
    for (const c of cond) { await conditional(attendee, c, show, dict); }
  } else {
    for (const question in cond) {
      const answers = cond[question];
      if (answers == null || answers == "") {
        await conditional(attendee, question, show, dict);
        continue;
      }
      const el = await custom_js("findQuestion", question, attendee);

      // setup handler for sub-answers
      if (!(question in dict)) {
        const selector = await custom_js("answersSelector", el);
        async function handle() {
          const selected = selector();
          for (const possible in answers) {
            let same = false;
            for (const selection of selected) {
              const match = await custom_js("match", possible, selection);
              if (match) {
                same = true;
                break;
              }
            }
            console.log(question, "has answer:", selected, "matches", possible, ":", same);
            await conditional(attendee, answers[possible], same, dict);
          }
        }
        // whenever some action happens in that question
        await custom_js("questionHandler", el, handle)
        
        dict[question] = handle;
      }
      if (show) {
        // show the actual question and handle how to show sub-questions
        el.show();
        await dict[question]();
      } else {
        // hide the question and all sub-questions
        el.hide();
        for (const answer in answers) { await conditional(attendee, answers[answer], false, dict); }
      }
    }
  }
}

async function run(attendee, cond) {
  await conditional(attendee, cond, true, { });
}
