//What runs on every new attendee form
function handler(){
  console.log("hide Quelle");
  $($$('.customization2_attendee_further-data_custom-question').findField('Quelle')).hide();
  $($$('.customization2_booker_further-data_custom-question').findField('Quelle')).hide()
  }

const observer1 = new MutationObserver((mutations, obs) => {
    const page2attendee = document.getElementsByClassName('customization2_attendee-state_edit');

    if ($(page1attendee).is(':visible')) {
        handler();
        obs.disconnect();
        return;
    }
});

observer1.observe(document, {
    childList: true,
    subtree: true
});

const observer2 = new MutationObserver((mutations, obs) => {
    const page2booker = document.getElementsByClassName('customization2_booker-state_edit');

    if ($(page2booker).is(':visible')) {
        handler();
        obs.disconnect();
        return;
    }
});

observer2.observe(document, {
    childList: true,
    subtree: true
});

handler();
//Insert here, what should run once
//
var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
    console.log("Node has been inserted: ", event.target);    
    handler(); 
  }
}
document.addEventListener("animationstart", insertionListener, false); // standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
