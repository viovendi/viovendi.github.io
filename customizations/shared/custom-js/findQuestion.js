async function run(exactLabel, attendee) {
  const qu = $(attendee ?? document).find(".customization2_attendee_further-data_custom-question");
  const results = await Promise.all(qu.map(async (i, q) => {
    const label = $(q).find(".customization2_attendee_further-data_custom-question_label");
    const allText = [...label.get(0).childNodes].map(c => $(c).text().trim()).join("");
    let match = exactLabel;
    if(label.find("vv-optional-text").length) match += label.find("vv-optional-text").text().trim();
    return await custom_js("match", match, allText);
  }));
  let p = qu.filter((i, q) => results[i]).parent();
  while (true) {
    const el = p.get(0);
    if (!el || el.tagName.toLowerCase().startsWith("vv-additional-question-")) return p;
    p = p.parent();
  }
}
