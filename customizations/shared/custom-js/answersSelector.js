async function run(element) {
  if (element.length > 1) throw new Error("custom_js.answersSelector used with multiple questions");

  const type = element.find(".customization2_attendee_further-data_custom-question, customization2_attendee_further-data_product").get(0) ? "attendee" : "booker";
  if (element.is("vv-additional-question-radio"))
    return () => [element.find("input:checked").next(".customization2_" + type + "_further-data_custom-question_radio-line_label").find(".vv-radio__label-text").text().trim()];
  else if (element.is("vv-additional-question-dropdown"))
    return () => [element.find(".customization2_" + type + "_further-data_custom-question_dropdown .vv-selection-input__value:not(.p-placeholder)").text().trim()];
  else if (element.is("vv-additional-question-checkboxes"))
    return () => element.find("input:checked").next(".vv-checkbox__label").find(".vv-checkbox__label-text").map((i, t) => $(t).text().trim()).get();
  else if (element.is("vv-additional-question-text") || element.is("vv-additional-question-paragraph"))
    return () => [element.find(".customization2_" + type + "_further-data_custom-question_input").val()];
  else if (element.is("vv-additional-question-phone"))
    return () => [element.find(".customization2_attendee_further-data_custom-question_phone input").val()];
  else if (element.is(".question-group") || element.is("vv-additional-question-product"))
    return () => element.find("input:checked").next(".vv-checkbox__label").find(".vv-checkbox__label-text").map((i, t) => $(t).text().trim()).get();
  else {
    // first check for closed questions
    if (element.find(".customization2_" + type + "_further-data_custom-question").length) return () => [element.find(".customization2_" + type + "_further-data_custom-question_value").text().trim()];

    // then check for default questions
    const cls = [...element.prop("classList")].filter(c => c.includes("_contact-data_"))[0];
    if (!cls) return () => [];
    if (cls.endsWith("_value")) return () => [element.text().trim()];
    else return () => [element.find(".vv-selection-input__value:not(.p-placeholder)").text().trim()];
  }
}
