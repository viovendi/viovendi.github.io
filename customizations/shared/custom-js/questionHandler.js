async function run(element, handler) {
  if (element.is("vv-additional-question-dropdown")) {
    element.click(handler);
  } else if (
    element.is("vv-additional-question-radio") ||
    element.is("vv-additional-question-checkboxes")
  ) {
    element.change(handler);
  } else if (
    element.is("vv-additional-question-text") ||
    element.is("vv-additional-question-paragraph") ||
    element.is("vv-additional-question-phone")    
  ) {
    element.change(handler);
    element.focusout(handler);
  } else if (element.is(".question-group")) {
    element.find(".customization2_attendee_further-data_product_checkbox, .customization2_booker_further-data_product_checkbox").change(handler);
  } else {
    if (element.find("input")) {
      element.find("input").change(handler);
      element.find("input").focusout(handler);
    } else {
      element.click(handler);
    }
  }
}
