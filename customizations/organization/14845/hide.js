console.log('Start working, GTM: Tag - STANDARD-374');

// it also applied to OID 14846 and 14847
  
function main(){
 var question1 = $$('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question').findField('Zugangslink');
 var question2 = $$('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question').findField('Participant auth key');
  
  $(question1).addClass('hidden');
  $(question2).addClass('hidden');
}
main();

  
var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    setTimeout(main, 20);
  }
};
  
document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
