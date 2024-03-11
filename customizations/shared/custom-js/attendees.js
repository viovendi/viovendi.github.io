const attendee_states = { };

async function run(options) {
  const attendees = $(".customization3_booking-participant_attendee").parent().get();
  for (const a_id in attendee_states) {
    attendee_states[a_id].observer.disconnect();
    if (!attendees.some(a => a.id == a_id)) {
      options.remove?.(attendee, a_id, console.log("remove"));
      delete attendee_states[a_id];
    }
  }
  attendees.forEach(attendee => {
    const id = attendee.id;
    if (!(id in attendee_states)) {
      attendee_states[id] = { };
    }
    const state = attendee_states[id];
    
    function execute() {
      const save = $(attendee).find(".customization2_attendee_edit-action_save").get(0);
      const body = $(attendee).find(".customization3_collapsible-wrapper_body");
      if (save != state.save_button) {
        if (save) options.title_open?.(attendee, id, console.log("title_open"));
        else options.title_close?.(attendee, id, console.log("title_close"));

        if (save) options.open?.(attendee, id, console.log("open"));
        else if (body.length) options.close?.(attendee, id, console.log("close"));
        else return;
        state.save_button = save;
      }
    }
    execute();
    
    state.observer = new MutationObserver(execute);
    state.observer.observe(attendee, {
      "childList": true,
      "subtree": true
    });
    
  });
}
