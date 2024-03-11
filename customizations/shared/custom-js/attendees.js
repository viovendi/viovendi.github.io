const attendees_info = { };

async function run(options) {
  console.log(attendees_info);
  
  const attendees = $(".customization3_booking-participant_attendee").parent().get();
  for (const a_id in attendees_info) {
    attendees_info[a_id].observer.disconnect();
    if (!attendees.some(a => a.id == a_id)) {
      options.remove?.(attendee, a_id, console.log("remove"));
      delete attendees_info[a_id];
    }
  }
  attendees.forEach(attendee => {
    const id = attendee.id;
    if (!(id in attendees_info)) {
      console.log("new attendee, wohoo!");
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

      if (new_state == info.state && save == info.save_button) return;
      info.state = new_state;
      info.save_button = save_button;

      if (save) options.title_open?.(attendee, id, console.log("title_open"));
      else options.title_close?.(attendee, id, console.log("title_close"));

      if (save) options.open?.(attendee, id, console.log("open"));
      else if (body) options.close?.(attendee, id, console.log("close"));
    }
    execute();
    
    info.observer = new MutationObserver(execute);
    info.observer.observe(attendee, {
      "childList": true,
      "subtree": true
    });
    
  });
}
