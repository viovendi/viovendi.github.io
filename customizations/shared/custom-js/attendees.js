async function run(callback) {
  $(".customization3_booking-participant_attendee").get().forEach((attendee, i) => {
    callback(attendee, i);
  });
}
