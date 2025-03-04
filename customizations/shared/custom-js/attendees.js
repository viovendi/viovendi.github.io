const custom_js_attendees_info = [];

async function run(options) {
  let info = null;
  for (const [opt, state] of custom_js_attendees_info) {
    if (opt == options) {
      info = state;
      break;
    }
  }
  if (info == null) {
    info = { };
    custom_js_attendees_info.push([options, info]);
  }
  const attendees = $(".customization3_booking-participant_attendee").parent().get();
  for (const a_id in info) {
    info[a_id].observer.disconnect();
    if (!attendees.some(a => a.id == a_id)) {
      options.remove?.(null, a_id);
      delete info[a_id];
    } else {
      info[a_id].first = true;
    }
  }
  attendees.forEach(attendee => {
    const id = attendee.id;
    if (!(id in info)) { info[id] = { }; }
    
    function execute() {
      const save = $(attendee).find(".customization2_attendee_edit-action_save").get(0);
      const body = $(attendee).find(".customization3_collapsible-wrapper_body").get(0);

      let new_state;
      if (save && body) new_state = "open";
      else if (body) new_state = "close";
      else new_state = "title";

      const additional = $(attendee).find("vv-additional-questions");
      if (additional.length && new_state == "open" && !(additional.find("form").length)) return;
      if (new_state == "open" && info[id].state == "open" && save == info[id].save_button) return;
      if (new_state == info[id].state && !info[id].first) return;

      info[id].state = new_state;
      info[id].save_button = save;
      info[id].first = false;

      if (save) options.open?.(attendee, id);
      else if (body) options.close?.(attendee, id);
      else options.title?.(attendee, id);
    }
    execute();
    
    info[id].observer = new MutationObserver(execute);
    info[id].observer.observe(attendee, {
      "childList": true,
      "subtree": true
    });
    
  });
}
