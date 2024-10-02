async function run(attendee, cond) {
// for the possibility of multiple answers pointing to the same question
  function propagateReferences(cond, path, ref) {
    console.log(cond, path, ref);
    if (cond.constructor == "".constructor) {
      // single question without further action
      if (!(cond in ref)) {
        ref[cond] = new Set();
      }
      ref[cond].add(path);
    } else if (cond.constructor === [].constructor) {
      // multiple questions without further action
      for (const c of cond) { propagateReferences(c, path, ref); }
    } else {
      for (const question in cond) {
        const answers = cond[question];
        propagateReferences(question, path, ref);
        if (answers == null || answers == "") {
          continue;
        }
        for (const possible in answers) {
          propagateReferences(answers[possible], path + "/" + question + "." + possible, ref);
        }
      }
    }
  }
  
  async function conditional(attendee, cond, show, dict, path) {
    if (cond.constructor === "".constructor) {
      // single question without further action
      const el = await custom_js("findQuestion", cond, attendee);
      if (show) {
        el_show(el, path);
      } else {
        el_hide(el, path);
      }
    } else if (cond.constructor === [].constructor) {
      // multiple questions without further action
      for (const c of cond) { await conditional(attendee, c, show, dict, path); }
    } else {
      for (const question in cond) {
        const answers = cond[question];
        if (answers == null || answers == "") {
          await conditional(attendee, question, show, dict, path);
          continue;
        }
        const el = await custom_js("findQuestion", question, attendee);
        if (!el.get(0)) return;
  
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
              await conditional(attendee, answers[possible], same, dict, path + "/" + question + "." + possible);
            }
          }
          // whenever some action happens in that question
          await custom_js("questionHandler", el, handle)
          
          dict[question] = handle;
        }
        if (show) {
          // show the actual question and handle how to show sub-questions
          el_show(el, path);
          await dict[question]();
        } else {
          // hide the question and all sub-questions
          el_hide(el, path);
          for (const answer in answers) { await conditional(attendee, answers[answer], false, dict, path + "/" + question + "." + answer); }
        }
      }
    }
  }
  
  function el_show(el, path) {
    el.show();
    for (const e of el.get()) {
      const data = new Set(JSON.parse(e.dataset.conditional_watching));
      data.add(path);
      e.dataset.conditional_watching = JSON.stringify([...data]);
    }
  }
  
  function el_hide(el, path) {
    for (const e of el.get()) {
      const data = new Set(JSON.parse(e.dataset.conditional_watching));
      data.delete(path);
      e.dataset.conditional_watching = JSON.stringify([...data]);
      if (data.size == 0) $(e).hide();
    }
  }

  const ref = { };
  propagateReferences(cond, "", ref);

  for (const question in ref) {
    const q = await custom_js("findQuestion", question, attendee);
    for (const e of q.get()) {
      e.dataset.conditional_watching = JSON.stringify([...ref[question]]);
    }
  }
  await conditional(attendee, cond, true, { }, "");
}
