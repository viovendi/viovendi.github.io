async function run(exactLabel, attendee) {
  if (exactLabel.startsWith(".")) {
    // default questions
    const search = exactLabel.slice(1);
    const p = $(attendee ?? document).find("vv-default-questions, vv-default-answers");
    if (p.is("vv-default-questions")) {
      const q = p.find("div[class*='customization2_attendee_contact-data_" + search + "'], div[class*='customization2_booker_contact-data_" + search + "']").not("[class*='_input'], [class*='_error']");
      return q;
    } else {
      const q = p.find("div[class*='customization2_attendee_contact-data_" + search + "_value'], div[class*='customization2_booker_contact-data_" + search + "_value']");
      return q;
    }
  } else if (exactLabel.startsWith("$")) {
    // products
    const search = exactLabel.slice(1);
    const qu = $(attendee ?? document).find(".question-group");
    const results = await Promise.all(qu.map(async (i, q) => {
      const allText = $(q).find(">span").text().trim();
      return await custom_js.match(search, allText);
    }));
    return qu.filter((i, q) => results[i]);

  } else {
    // additional questions
    const qu = $(attendee ?? document).find(".customization2_attendee_further-data_custom-question, .customization2_booker_further-data_custom-question, .customization2_attendee_further-data_product, customization2_booker_further-data_product");
    const results = await Promise.all(qu.map(async (i, q) => {
      let labelSelector;
      if ($(q).is(".customization2_attendee_further-data_custom-question")) {
        labelSelector = ".customization2_attendee_further-data_custom-question_label";

      } else if ($(q).is(".customization2_booker_further-data_custom-question")) {
        labelSelector = ".customization2_booker_further-data_custom-question_label";

      } else if ($(q).is(".customization2_attendee_further-data_product")) {
        labelSelector = ".customization2_attendee_further-data_product_name";

      } else if ($(q).is(".customization2_booker_further-data_product")) {
        labelSelector = ".customization2_booker_further-data_product_name";

      } else {
        return false;
      }

      const label = $(q).find(labelSelector).clone();
      label.find("vv-tooltip").text("");
      label.find("vv-field-label-status").text("");
      label.find("vv-tooltip-standalone").text("");
      const allText = [...label.get(0).childNodes].map(c => $(c).text().trim()).join("");
      return await custom_js.match(exactLabel, allText);
    }));
    let p = qu.filter((i, q) => results[i]).parent();

    while (true) {
      const el = p.get(0);
      if (!el || p.parent().parent().is("vv-additional-questions") || p.parent().is("vv-additional-answers")) return p;
      p = p.parent();
    }
  }
}
