async function run(attendee, text, ...required) {
  const through = [];
  for (const question of required) {
    const el = await custom_js("findQuestion", question, attendee);
    el.find("vv-optional-text").hide();

    const div = document.createElement("div");
    div.classList.add("position-relative");
    div.style.display = "none";
    const divi = document.createElement("div");
    divi.classList.add("error-text", "customization2_attendee_further-data_custom-question_error", "error-text--left", "vv-text-wrap--no-wrap");
    divi.innerHTML = text;
    div.appendChild(divi);
    el.find("vv-show-errors").get(0).appendChild(div);    
    
    const selector = await custom_js("answersSelector", el);
    function setter() {
      const answers = selector();
      if (asnwers.join("")) {
        el.removeClass("ng-invalid");
        el.find(".customization2_attendee_further-data_custom-question").children().eq(0).removeClass("ng-invalid");
        el.find(".customization2_attendee_further-data_custom-question").find("vv-show-errors").children("div").hide();
        return false;
      } else {
        el.addClass("ng-invalid");
        el.find(".customization2_attendee_further-data_custom-question").children().eq(0).addClass("ng-invalid");
        el.find(".customization2_attendee_further-data_custom-question").find("vv-show-errors").children("div").show();
        return true;
      }
    }
    await custom_js("questionHandler", el, setter);
    through.push([el, setter]);
  }

  $(attendee).find(".customization2_attendee_edit-action_save").click(event => {
    let anyCancel = false;
    for (const [el, setter] of through) {
      if (el.is(":visible")) {
        const cancel = setter();
        if (cancel) anyCancel = true;
      }
    }
    if (anyCancel) event.preventDefault();

    const first = $(attendee).find(".customization2_attendee_further-data").find(".ng-invalid").get(0);
    for (const [el, setter] of through) {
      if (el.is(".ng-invalid") && el.get(0) == first) {
        first.scrollIntoView();
        break;
      }
    }
  });
}
