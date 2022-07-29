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

function checkFunction(){
  var salutation = '';
  salutation = $('.customization2_attendee_contact-data_salutation_input .vv-selection-input__value').text().trim();
  console.log(salutation);

  if(salutation && salutation !== 'Please select'){
    hideShowQuestion(salutation);
  }
}

function hideShowQuestion(salutation){
  if(salutation.indexOf('Mr')>0){
    // mr case
    
  }else{
    // ms case
    
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
