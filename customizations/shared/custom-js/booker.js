const custom_js_booker_info = { };

async function run(options) {
  const stack = (new Error()).stack;
  if (!(stack in custom_js_booker_info)) {
    custom_js_booker_info[stack] = { };
  }

  async function _run(booker) {
    const be = booker.get(0);

    options.create?.(be);
    custom_js_booker_info[stack].first = true;
    
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
      if (new_state == "open" && custom_js_booker_info[stack].state == "open" && save == custom_js_booker_info[stack].save_button) return;
      if (new_state == custom_js_booker_info[stack].state && !custom_js_booker_info[stack].first) return;

      custom_js_booker_info[stack].state = new_state;
      custom_js_booker_info[stack].save_button = save;
      custom_js_booker_info[stack].first = false;

      if (save) options.open?.(be);
      else if (body && $(body).text().trim()) options.close?.(be);
      else options.title?.(be);
    }
    execute();

    custom_js_booker_info[stack].observer?.disconnect();
    custom_js_booker_info[stack].observer = new MutationObserver(execute);
    custom_js_booker_info[stack].observer.observe(be, {
      "childList": true,
      "subtree": true
    });
  }
  
  custom_js_booker_info[stack].global_observer?.disconnect();
  function execute() {
    if ($(".customization2_booker_contact-data_headline").length) {
      custom_js_booker_info[stack].global_observer?.disconnect();
      const booker = $(".customization2_booker").parent().parent();
      _run(booker);
      return true;
    }
    return false;
  }
  const f = execute();
  if (!f) {
    custom_js_booker_info[stack].global_observer = new MutationObserver(execute);
    custom_js_booker_info[stack].global_observer.observe(document, {
      "childList": true,
      "subtree": true
    });
  }
}
