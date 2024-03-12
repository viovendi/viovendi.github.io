async function run(attendee, question, none) {
  const q = await custom_js("findQuestion", question, attendee ?? document);

  async function disable() {
    const t = q.find("input:checked").next(".vv-checkbox__label").find(".vv-checkbox__label-text").map((i, t) => $(t).text().trim()).get();
    let d = false;
    for (const x of t) {
      if (await custom_js("match", none, x)) {
        d = true;
        break;
      }
    }
    q.find("input").each(async function () {
      const text = $(this).next(".vv-checkbox__label").find(".vv-checkbox__label-text").text().trim();
      const same = await custom_js("match", none, text);
      if ((d && !same) || (!d && t.length && same)) {
        this.checked = false;
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    });
  }
  q.change(disable);
  disable();
}
