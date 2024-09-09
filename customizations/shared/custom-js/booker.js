const booker_info = { };

async function run(options) {
  const stack = (new Error()).stack;
  if (!(stack in booker_info)) {
    booker_info[stack] = { };
  }
  
  booker_info[stack].global_observer?.disconnect();
  function execute() {
    if ($(".customization2_booker_contact-data_headline").length) {
      booker_info[stack].global_observer?.disconnect();
      const booker = $(".customization2_booker").parent().parent();
      _run(booker, options, stack);
      return true;
    }
    return false;
  }
  const f = execute();
  if (!f) {
    booker_info[stack].global_observer = new MutationObserver(execute);
    booker_info[stack].global_observer.observe(document, {
      "childList": true,
      "subtree": true
    });
  }
}

async function _run(booker, options) {
  const be = booker.get(0);

  options.create?.(be);
  booker_info[stack].first = true;
  
  function execute() {
    const save = booker.find(".customization2_booker_edit-action_save").get(0);
    const body = booker.find(".customization3_collapsible-wrapper_body").get(0);

    let new_state;
    if (save && body) new_state = "open";
    else if (body && $(body).text().trim()) new_state = "close";
    else new_state = "title";

    if (new_state == "open") {
      const defq = booker.find("vv-default-questions");
      if (defq.length) {
        if(!defq.children().length) return;
      }
    }

    const additional = booker.find("vv-additional-questions");
    if (additional.length && new_state == "open" && !(additional.find("form").length)) return;
    if (new_state == "open" && booker_info[stack].state == "open" && save == booker_info[stack].save_button) return;
    if (new_state == booker_info[stack].state && !booker_info[stack].first) return;

    booker_info[stack].state = new_state;
    booker_info[stack].save_button = save;
    booker_info[stack].first = false;

    if (save) options.open?.(be);
    else if (body && $(body).text().trim()) options.close?.(be);
    else options.title?.(be);
  }
  execute();

  booker_info[stack].observer?.disconnect();
  booker_info[stack].observer = new MutationObserver(execute);
  booker_info[stack].observer.observe(be, {
    "childList": true,
    "subtree": true
  });
}
