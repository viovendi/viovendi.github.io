const custom_js_booker_info = [];

async function run(options) {
  let info = null;
  for (const [opt, state] of custom_js_booker_info) {
    if (opt == options) {
      info = state;
      break;
    }
  }
  if (info == null) {
    info = { };
    custom_js_booker_info.push([options, info]);
  }

  async function _run(booker) {
    const be = booker.get(0);

    options.create?.(be);
    info.first = true;
    
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
      if (new_state == "open" && info.state == "open" && save == info.save_button) return;
      if (new_state == info.state && !info.first) return;

      info.state = new_state;
      info.save_button = save;
      info.first = false;

      if (save) options.open?.(be);
      else if (body && $(body).text().trim()) options.close?.(be);
      else options.title?.(be);
    }
    execute();

    info.observer?.disconnect();
    info.observer = new MutationObserver(execute);
    info.observer.observe(be, {
      "childList": true,
      "subtree": true
    });
  }
  
  info.global_observer?.disconnect();
  function already() {
    if ($(".customization2_booker_contact-data_headline").length) {
      info.global_observer?.disconnect();
      const booker = $(".customization2_booker").parent().parent();
      _run(booker);
      return true;
    }
    return false;
  }
  const f = already();
  if (!f) {
    info.global_observer = new MutationObserver(already);
    info.global_observer.observe(document, {
      "childList": true,
      "subtree": true
    });
  }
}
