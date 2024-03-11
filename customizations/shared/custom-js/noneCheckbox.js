async function run(attendee, question, none) {
  const q = await custom_js("findQuestion", question, attendee ?? document);

  function disable() {
    const t = q.find("input:checked").next(".vv-checkbox__label").find(".vv-checkbox__label-text").map((i, t) => $(t).text().trim()).get();
    const d = t.includes(none);
    q.find("input").forEach(function () {
      const text = $(this).next(".vv-checkbox__label").find(".vv-checkbox__label-text").text().trim();
      if ((d && text != none) || (!d && t.length && text == none)) {
        this.checked = false;
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    });
  }
  q.change(disable);  

}
