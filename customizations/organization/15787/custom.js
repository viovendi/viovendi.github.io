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
function getTypeOfPartecipation(){
  var field = $$('customization2_attendee_further-data_custom-question').findRadioGroup('Type of participation');
  var checkboxes = field.find('input');
  console.log(checkboxes);
  var input = checkboxes[0];
  const option = $(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().trim();
  console.log("selected: "+option)
  return option;
}
function checkFunction(){
  var salutation = '';
  salutation = $('.customization2_attendee_contact-data_salutation_input .vv-selection-input__value').text().trim();
  console.log(salutation);

  if(salutation && salutation !== 'Please select'){
    var typeOfParticipation = getTypeOfPartecipation();
    console.log("Type of participation: "+typeOfParticipation);
    hideShowQuestion(salutation,typeOfParticipation);
  }else{
    hide('Type of participation','Will you participate in the ICMA European Repo Collateral Council General Meeting');
    hide('customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');  
    hide('customization2_attendee_further-data_custom-question','Will you also be attending the GFF Summit');   
    hide('customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    hide('customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception 14 September'); 
    hide('customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');
  }
}

function hideShowQuestion(salutation,typeOfParticipation){
  show('Type of participation','Will you participate in the ICMA European Repo Collateral Council General Meeting');
  show('customization2_attendee_further-data_custom-question','Will you participate in the ICMA European Repo Collateral Council General Meeting');

  if(typeOfParticipation.contains("Onsite")){
    show('customization2_attendee_further-data_custom-question','Will you also be attending the GFF Summit');   
    show('customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    show('customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception 14 September');   
    if(salutation.indexOf('Ms')>0){
      show('customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');   
    }else{
      hide('customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');   
    }
  }else{
    hide('customization2_attendee_further-data_custom-question','Will you also be attending the GFF Summit');   
    hide('customization2_attendee_further-data_custom-question','Will you be attending the GFF Bar on 13 September');   
    hide('customization2_attendee_further-data_custom-question','Will you be attending the GFF evening reception 14 September'); 
    hide('customization2_attendee_further-data_custom-question','Will you be attending the Women Networking Event on 14 September');   
  }

}

function stopTimer() {
  clearInterval(timeInterval);
}





function hide(tag, name){
 $(tag).each(function (i, element) {
   var item = $(this);
   var label = item.find("label");

   if(label[0].innerText.replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
     $(item[0]).css("display", "none");
   }
 });             
}

function show(tag, name){
 $(tag).each(function (i, element) {
   var item = $(this);
   var label = item.find("label");

   if(label[0].innerText.replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
     $(item[0]).css("display", "block");
   }
 });             
}
   
// hide("vv-question-text","EFN Eingabe");
// hide("vv-question-file","Bitte laden Sie einen Nachweis Ihrer medizinischen Tätigkeit hoch"); 

// salutationChecked();

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log('change');
    console.log($('.customization2_attendee_contact-data_salutation_input .vv-selection-input__value').text());
    salutationCheck();
  }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
