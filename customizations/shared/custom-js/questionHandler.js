async function run(element, handler) {
  if (element.is("vv-additional-question-dropdown")) element.click(handle);
  else if (
    element.is("vv-additional-question-radio") ||
    element.is("vv-additional-question-checkboxes") ||
    element.is("vv-additional-question-text") ||
    element.is("vv-additional-question-paragraph")
  ) element.change(handle);
}
