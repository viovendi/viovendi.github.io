console.log('github-js other eid');
    hide('.customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');  
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception'); 
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');
  
const observer = new MutationObserver((mutations, obs) => {
  const page = document.getElementsByClassName('customization-booking-area-wrapper-page3');
  if ($(page).is(':visible')) {
    console.log('stop timer');
    stopTimer();
    obs.disconnect();
    return;
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});



var timeInterval;

function salutationCheck() {
  timeInterval = setInterval(checkFunction, 3000);
}

function checkFunction(){
  var salutation = '';
  salutation = $('.customization2_attendee_contact-data_salutation_input .vv-selection-input__value').text().trim();
  console.log(salutation);
  
  if(salutation && salutation !== 'Please select'){
    hideShowQuestion(salutation);
  }else{
    console.log('hiding all');
    hide('.customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');  
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception'); 
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');
  }
}

function hideShowQuestion(salutation){
    show('customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');
    show('.customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    show('.customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception');   
    if(salutation.includes('Ms')){
      console.log('woman event displayed')
      show('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');   
    }else{
      hide('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');   
    }
  }


function stopTimer() {
  clearInterval(timeInterval);
}

function hide(tag, name){
  $($$('.customization2_attendee_further-data_custom-question').findQuestionByLabel(name)).hide();           
}

function show(tag, name){
  $($$('.customization2_attendee_further-data_custom-question').findQuestionByLabel(name)).show();           
}
   
// hide("vv-question-text","EFN Eingabe");
// hide("vv-question-file","Bitte laden Sie einen Nachweis Ihrer medizinischen Tätigkeit hoch"); 

// salutationChecked();

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log('change');
    console.log($('.customization2_attendee_contact-data_salutation_input .vv-selection-input__value').text());
    salutationCheck();
    getTypeOfParticipation();
  }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
