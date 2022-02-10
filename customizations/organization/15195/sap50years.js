console.log("github customization loaded");

var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("nodeInserted");
      changesForAttendeeForm();
   }
}
function changesForAttendeeForm(){
 $('.customization2_attendee_contact-data_copy-link').hide();  
   console.log('hidden copy link')
}

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
