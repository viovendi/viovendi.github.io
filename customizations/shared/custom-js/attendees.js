const attendees_info = { };

async function run(options) {
  const attendees = $(".customization3_booking-participant_attendee").parent().get();
  for (const a_id in attendees_info) {
    attendees_info[a_id].observer.disconnect();
    if (!attendees.some(a => a.id == a_id)) {
      options.remove?.(null, a_id);
      delete attendees_info[a_id];
    } else {
      attendees_info[a_id].first = true;
    }
  }
  attendees.forEach(attendee => {
    const id = attendee.id;
    if (!(id in attendees_info)) {
      attendees_info[id] = { };
    }
    const info = attendees_info[id];
    
    function execute() {
      const save = $(attendee).find(".customization2_attendee_edit-action_save").get(0);
      const body = $(attendee).find(".customization3_collapsible-wrapper_body").get(0);

      let new_state;
      if (save && body) new_state = "open";
      else if (body) new_state = "close";
      else new_state = "title";

      if (new_state == "open" && !($(attendee).find("vv-additional-questions").find("form").length)) return;
      if (new_state == "open" && info.state == "open" && save == info.save_button) return;
      if (new_state == info.state && !info.first) return;

      info.state = new_state;
      info.save_button = save;
      info.first = false;

      if (save) options.open?.(attendee, id);
      else if (body) options.close?.(attendee, id);
      else options.title?.(attendee, id);
    }
    execute();
    
    info.observer = new MutationObserver(execute);
    info.observer.observe(attendee, {
      "childList": true,
      "subtree": true
    });
    
  });
}
