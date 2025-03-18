const custom_js_save_onclick = {};

async function run(attendee, text, ...required) {
  const type = $(attendee).is("vv-attendee") ? "attendee" : "booker";
  const through = [];
  for (const question of required) {
    const els = await custom_js.findQuestion(question, attendee);
    for (let i = 0; i < els.length; i++) {
      const el = els.eq(i);
      // already required
      if (el.find(".customization-question-label-status-required").length) continue;

      el.find(".question-label-status")
        .removeClass(["question-label-status--optional", "customization-question-label-status-optional"])
        .addClass(["question-label-status--required", "customization-question-label-status-required"])
        .text("*");
      
      el.find("vv-show-errors").append(`
        <div class="position-relative" style="display: none;">
          <div class="error-text customization2_${type}_further-data_custom-question_error error-text--left vv-text-wrap--no-wrap" style="margin-top: 4px; font-size: .75rem; line-height: .875rem;">
            ${text}
          </div>
        </div>
      `);
      
      const selector = await custom_js.answersSelector(el);
      function setter() {
        const answers = selector();
        if (answers.join("")) {
          el.removeClass("ng-invalid ng-dirty");
          el.addClass("ng-valid");
          el.find(".customization2_" + type + "_further-data_custom-question").children().eq(0).removeClass("ng-invalid ng-dirty");
          el.find(".customization2_" + type + "_further-data_custom-question").children().eq(0).addClass("ng-valid");
          el.find(".customization2_" + type + "_further-data_custom-question").find("vv-show-errors").children("div").hide();
          return false;
        } else {
          el.addClass("ng-invalid ng-dirty");
          el.removeClass("ng-valid");
          el.find(".customization2_" + type + "_further-data_custom-question").children().eq(0).addClass("ng-invalid ng-dirty");
          el.find(".customization2_" + type + "_further-data_custom-question").children().eq(0).removeClass("ng-valid");
          el.find(".customization2_" + type + "_further-data_custom-question").find("vv-show-errors").children("div").show();
          return true;
        }
      }
      await custom_js.questionHandler(el, setter);
      through.push([el, setter]);
    }
  }

  function click(event) {
    let anyWrong = false;
    for (const [el, setter] of through) {
      if (el.is(":visible")) {
        const wrong = setter();
        if (wrong) anyWrong = true;
      }
    }
    if (!anyWrong) return;
    const first = $(attendee).find(".ng-invalid:not(form)").get(0);
    for (const [el, setter] of through) {
      if (first == el.get(0)) {
        event.preventDefault();
        el.get(0).scrollIntoView({ "behavior": "smooth" });
      }
    }
  }
  $(attendee).find(".customization2_" + type + "_edit-action_save").click(click);

  const save = $(".customization-button-next").get(0);
  const id = [text, ...required].join(",");
  if (save != null) {
    if (custom_js_save_onclick[id]) save.removeEventListener(custom_js_save_onclick[id]);
    custom_js_save_onclick[id] = click;
    save.addEventListener("click", click);
  }
}
