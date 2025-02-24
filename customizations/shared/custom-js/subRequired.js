async function run(attendee, text, ...required) {
  const type = $(attendee).is("vv-attendee") ? "attendee" : "booker";
  const through = [];
  for (const question of required) {
    const el = await custom_js("findQuestion", question, attendee);
    // not found
    if (el.length == 0) continue;
    // already required
    if (el.find(".question-label-status--required").length) continue;

    el.find(".question-label-status")
      .removeClass(["question-label-status--optional", "customization-question-label-status-optional"])
      .addClass(["question-label-status--required", "customization-question-label-status-required"])
      .text("*");
    
    const div = document.createElement("div");
    div.classList.add("position-relative");
    div.style.display = "none";
    const divi = document.createElement("div");
    divi.classList.add("error-text", "customization2_" + type + "_further-data_custom-question_error", "error-text--left", "vv-text-wrap--no-wrap");
    divi.style["margin-top"] = "4px";
    divi.style["font-size"] = ".75rem";
    divi.style["line-height"] = ".875rem";
    divi.innerHTML = text;
    div.appendChild(divi);
    el.find("vv-show-errors").get(0).appendChild(div);    
    
    const selector = await custom_js("answersSelector", el);
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
    await custom_js("questionHandler", el, setter);
    through.push([el, setter]);
  }

  function click(event, att) {
    let anyWrong = false;
    for (const [el, setter] of through) {
      if (el.is(":visible")) {
        const wrong = setter();
        if (wrong) anyWrong = true;
      }
    }
    if (!anyWrong) return;
    const first = $(".ng-invalid:not(form)").get(0);
    for (const [el, setter] of through) {
      if (first == el.get(0)) {
        console.log("Cancel submit");
        event.preventDefault();
        el.get(0).scrollIntoView({ "behavior": "smooth" });
      }
    }
  }

  $(attendee).find(".customization2_" + type + "_edit-action_save").click(click);
  const save = $(".customization-button-next").get(0);
  if (save != null) { save.onclick = click; }
}
