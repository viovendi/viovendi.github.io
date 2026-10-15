const custom_js_save_onclick = {};

async function run(attendee, text, ...required) {
  const type = $(attendee).is("vv-attendee") ? "attendee" : "booker";
  const through = [];
  for (const question of required) {
    const els = await custom_js.findQuestion(question, attendee);
    for (let i = 0; i < els.length; i++) {
      const el = els.eq(i);
      const isProductGroup = el.is(".question-group");

      if (isProductGroup) {
        el.append(`
          <p class="question-group__error" style="display: flex; align-items: center; font-size: .75rem; line-height: 1rem; color: #c13c26;">${text}</p>
        `);
      } else {
        // already required
        if (el.find(".customization-question-label-status-required").length) continue;
  
        el.find(".question-label-status")
          .removeClass(["question-label-status--optional", "customization-question-label-status-optional"])
          .addClass(["question-label-status--required", "customization-question-label-status-required"])
          .text(" * ");
        
        el.find("vv-show-errors").append(`
          <div class="position-relative" style="display: none;">
            <div class="error-text customization2_${type}_further-data_custom-question_error error-text--left vv-text-wrap--no-wrap" style="margin-top: 4px; font-size: .75rem; line-height: .875rem;">
              ${text}
            </div>
          </div>
        `);
      }
      
      const selector = await custom_js.answersSelector(el);
      const custom = isProductGroup ? false : el.find(".customization2_" + type + "_further-data_custom-question").length;
      function setter() {
        const answers = selector();
        if (answers.join("")) {
          el.removeClass("ng-invalid ng-dirty");
          el.addClass("ng-valid");

          if (isProductGroup) {
            el.find(".question-product").removeClass("question-product--invalid");
            el.find(".question-group__error").hide();
          } else {
            if (custom) {
              el.find(".customization2_" + type + "_further-data_custom-question").children().eq(0).removeClass("ng-invalid ng-dirty").addClass("ng-valid");
            } else {
              el.children().eq(0).removeClass("ng-invalid ng-dirty").addClass("ng-valid");
            }
            el.find("vv-show-errors").children("div").hide();
          }
          return false;

        } else {
          el.addClass("ng-invalid ng-dirty");
          el.removeClass("ng-valid");

          if (isProductGroup) {
            el.find(".question-product").addClass("question-product--invalid");
            el.find(".question-group__error").show();
          } else {
            if (custom) {
              el.find(".customization2_" + type + "_further-data_custom-question").children().eq(0).addClass("ng-invalid ng-dirty").removeClass("ng-valid");
            } else {
              el.children().eq(0).removeClass("ng-valid").addClass("ng-invalid ng-dirty");
            }
            el.find("vv-show-errors").children("div").show();
          }
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
    const first = $(attendee).find(".ng-invalid:not(form):visible").get(0);
    for (const [el, setter] of through) {
      if (first == el.get(0)) {
        event.preventDefault();
        el.get(0).scrollIntoView({ "behavior": "smooth" });
        break;
      }
    }
  }
  $(attendee).find(".customization2_" + type + "_edit-action_save").click(click);

  const save = $(".customization-button-next").get(0);
  const id = [text, ...required].join(",");
  if (save != null) {
    if (custom_js_save_onclick[id]) save.removeEventListener("click", custom_js_save_onclick[id]);
    custom_js_save_onclick[id] = click;
    save.addEventListener("click", click);
  }
}
