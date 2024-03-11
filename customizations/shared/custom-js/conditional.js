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
        async function handle() {
          let selected;
          if (el.is("vv-additional-question-radio")) selected = [el.find("input:checked").next(".customization2_attendee_further-data_custom-question_radio-line_label").find(".vv-radio__label-text").text().trim()];
          else if (el.is("vv-additional-question-dropdown")) selected = [el.find(".customization2_attendee_further-data_custom-question_dropdown .vv-selection-input__value").text().trim()];
          else if (el.is("vv-additional-question-checkboxes")) selected = el.find("input:checked").next(".vv-checkbox__label").find(".vv-checkbox__label-text").map((i, t) => $(t).text().trim()).get();

          for (const possible in answers) {
            for (const selection of selected) {
              const match = await custom_js("match", possible, selected);
              await conditional(attendee, answers[possible], match, dict);
              break;
            }
          }
        }
        // whenever some action happens in that question
        if (el.is("vv-additional-question-radio")) el.change(handle);
        else if (el.is("vv-additional-question-dropdown")) el.click(handle);
        else if (el.is("vv-additional-question-checkboxes")) el.change(handle);
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
