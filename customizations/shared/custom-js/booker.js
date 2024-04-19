const booker_info = { };

async function run(options, additional) {
  booker_info.global_observer?.disconnect();
  function execute() {
    if ($(".customization2_booker_title").length) {
      booker_info.global_observer?.disconnect();
      const booker = $(".customization2_booker").parent().parent();
      _run(booker, options, additional ?? true);
      return true;
    }
    return false;
  }
  const f = execute();
  if (!f) {
    booker_info.global_observer = new MutationObserver(execute);
    booker_info.global_observer.observe(document, {
      "childList": true,
      "subtree": true
    });
  }
}

async function _run(booker, options, additional) {
  const be = booker.get(0);

  options.create?.(be);
  booker_info.first = true;
  
  function execute() {
    const save = booker.find(".customization2_booker_edit-action_save").get(0);
    const body = booker.find(".customization3_collapsible-wrapper_body").get(0);

    let new_state;
    if (save && body) new_state = "open";
    else if (body && $(body).text().trim()) new_state = "close";
    else new_state = "title";

    console.log("DEBUG: new_state =", new_state);

    if (additional && new_state == "open" && !(booker.find("vv-additional-questions").find("form").length)) return;
    if (new_state == "open" && booker_info.state == "open" && save == booker_info.save_button) return;
    if (new_state == booker_info.state && !booker_info.first) return;

    booker_info.state = new_state;
    booker_info.save_button = save;
    booker_info.first = false;

    if (save) options.open?.(be);
    else if (body && $(body).text().trim()) options.close?.(be);
    else options.title?.(be);
  }
  execute();
  
  booker_info.observer = new MutationObserver(execute);
  booker_info.observer.observe(be, {
    "childList": true,
    "subtree": true
  });
}
