//What runs on every new attendee form
function handler(){
  console.log("hide Quelle");
  $($$('.customization2_attendee_further-data_custom-question').findField('Quelle')).hide();
  $($$('.customization2_booker_further-data_custom-question').findField('Quelle')).hide();
  };

observer2.observe(document, {
    childList: true,
    subtree: true
});*/

handler();
//Insert here, what should run once
//
var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
    console.log("Node has been inserted: ", event.target);
    $($$('.customization2_attendee_further-data_custom-question').findField('Quelle')).hide();
    $($$('.customization2_booker_further-data_custom-question').findField('Quelle')).hide();
  }
}
document.addEventListener("animationstart", insertionListener, false); // standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
