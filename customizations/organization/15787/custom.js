console.log('github-js');

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
let isOnsite = false;
function getTypeOfParticipation(){
  hide('.customization2_attendee_further-data_custom-question','Type of participation');
    hide('.customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');  
    hide('.customization2_attendee_further-data_custom-question','Will you also be attending the GFF Summit');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception'); 
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');
  
  var field = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Type of participation*');
  var checkboxes = $(field).find('input');
  checkboxes.each(function (i, element) {
    $(element).change(function (input) {
      const option = $(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().trim();
      isOnsite = option.includes("Onsite")?true:false;
      console.log(option);
    })
  })
}
function checkFunction(){
  var salutation = '';
  salutation = $('.customization2_attendee_contact-data_salutation_input .vv-selection-input__value').text().trim();
  console.log(salutation);
  
  if(salutation && salutation !== 'Please select'){
    console.log("Type of participation: "+isOnsite);
    hideShowQuestion(salutation);
  }else{
    console.log('hiding all');
    hide('.customization2_attendee_further-data_custom-question','Type of participation');
    hide('.customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');  
    hide('.customization2_attendee_further-data_custom-question','Will you also be attending the GFF Summit');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception'); 
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');
  }
}

function hideShowQuestion(salutation){
  show('.customization2_attendee_further-data_custom-question','Type of participation');
  show('customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');

  if(isOnsite){
    show('.customization2_attendee_further-data_custom-question','Will you also be attending the GFF Summit');   
    show('.customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    show('.customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception');   
    if(salutation.includes('Ms')){
      console.log('woman event displayed')
      show('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');   
    }else{
      hide('.customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');   
    }
  }else{
    hide('.customization2_attendee_further-data_custom-question','Will you also be attending the GFF Summit');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    hide('.customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception'); 
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
