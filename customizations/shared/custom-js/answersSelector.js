async function run(element) {
  const type = element.find(".customization2_attendee_further-data_custom-question").get(0) ? "attendee" : "booker";
  if (element.is("vv-additional-question-radio"))
    return () => [element.find("input:checked").next(".customization2_" + type + "_further-data_custom-question_radio-line_label").find(".vv-radio__label-text").text().trim()];
  else if (element.is("vv-additional-question-dropdown"))
    return () => [element.find(".customization2_" + type + "_further-data_custom-question_dropdown .vv-selection-input__value").text().trim()];
  else if (element.is("vv-additional-question-checkboxes"))
    return () => element.find("input:checked").next(".vv-checkbox__label").find(".vv-checkbox__label-text").map((i, t) => $(t).text().trim()).get();
  else if (element.is("vv-additional-question-text") || element.is("vv-additional-question-paragraph"))
    return () => [element.find(".customization2_" + type + "_further-data_custom-question_input").val()];
}
