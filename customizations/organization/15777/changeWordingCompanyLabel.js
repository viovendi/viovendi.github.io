console.log("git");

function handler() {
  $(".customization2_attendee_contact-data_company_label").text("Verband");
  $(".customization2_booker_contact-data_company_label").text("Verband");
}

handler();

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted: ", event.target);
    handler();
  }
};

document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);
