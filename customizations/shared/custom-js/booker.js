const booker_info = { };

async function run(options) {
  const booker = $(".customization2_booker").parent();
  
  function execute() {
    const save = booker.find(".customization2_booker_edit-action_save").get(0);
    const body = booker.find(".customization3_collapsible-wrapper_body").get(0);

    let new_state;
    if (save && body) new_state = "open";
    else if (body) new_state = "close";
    else new_state = "title";

    if (new_state == "open" && !(booker.find("vv-additional-questions").find("form").length)) return;

    if (new_state == booker_info.state && save == booker_info.save_button) return;
    booker_info.state = new_state;
    booker_info.save_button = save;

    if (save) options.open?.(booker);
    else if (body) options.close?.(booker);
    else options.title?.(booker);
  }
  execute();
  
  booker_info.observer = new MutationObserver(execute);
  booker_info.observer.observe(booker.get(0), {
    "childList": true,
    "subtree": true
  });
}
