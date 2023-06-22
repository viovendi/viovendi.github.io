// get localstorage
console.log('github-js');

// add styles for animation
var styleSheetStripe = document.createElement("style");
styleSheetStripe.innerHTML = `
@keyframes nodeInserted {
    from { opacity: 0.99; }
    to { opacity: 1; }
}
.event-booking-widget .customization-booking-area-wrapper-page3{
    animation-duration: 0.1s;
    animation-name: nodeInserted;
}
@keyframes nodeInsertedPage4 {
    from { opacity: 0.99; }
    to { opacity: 1; }
}
.event-booking-widget .customization-booking-area-wrapper-page4{
    animation-duration: 0.1s;
    animation-name: nodeInsertedPage4;
}
`;
head.appendChild(styleSheetStripe);


var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - page3');

    console.log(window.location.href);
    if(url.includes("133894")){
      console.log('1111222333444');
    }
    // page3
    /*
    $('.customization-booking-area-wrapper-page3 .customization-button-next').on('click', function(){
      console.log('bttn clicked!');
      if(isEpayPayment()){
        console.log('isisEpayPayment - true');
        localStorage.setItem('payment_method', 'ePay');
        getXMLHttpRequest(XMLHttpRequest.prototype.open);
      }
    });
    */
    
  }else if(event.animationName === 'nodeInsertedPage4'){
    console.log('page4 loaded');
    
    // page4
    /*
    if(localStorage.getItem('payment_method') === 'ePay'){
      console.log('page4 ePay!!!');
      loader("on");
    }
    */
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari




function showError(){
  $('.customization2_attendee_edit-action_save').attr('disabled', true);
  $('.customization2_attendee_edit-action').append('<span class="error-message">ERROR MESSAGE</span>');
}

function hideError(){
  $('.customization2_attendee_edit-action_save').attr('disabled', false);
  $('.customization2_attendee_edit-action').find('.error-message').remove();
}

function getAttendeeData(that){
    var firstName = $(that).closest('.customization2_attendee-state_edit').find('.customization2_attendee_contact-data_first-name_input').val();
    var lastName = $(that).closest('.customization2_attendee-state_edit').find('.customization2_attendee_contact-data_last-name_input').val();
    if(firstName !== '' && lastName !== ''){
      attendeeProcess(firstName, lastName);
    }
}

function saveToArray(arr, string){
  $('.customization2_attendee_edit-action_save').on('click', function(e){    
    arr.push(string);
    localStorage.setItem('attArray', JSON.stringify(arr));
    
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
  });
}

function attendeeProcess(firstName, lastName){
  
  var attArray = [];
  
  if (localStorage.getItem('attArray')){
    attArray = localStorage.getItem('attArray');
    attArray = JSON.parse(attArray);
  }
  var attendyNameString = firstName+'&'+lastName;
  
  if(attArray.indexOf(attendyNameString)!=-1){
    showError();
  }else{
    hideError();
    saveToArray(attArray, attendyNameString);
  }  
}


// onChange
function checkAttendeeName(){
  $('.customization2_attendee_contact-data_first-name_input, .customization2_attendee_contact-data_last-name_input').on('change', function(e){
    var that = this;
    getAttendeeData(that);
  });
}
checkAttendeeName();


var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
      
        checkAttendeeName();

        $('customization2_attendee_view-action_edit').on("click", function (e) {
            console.log("EDITED");
        });
    }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 



function getXMLHttpRequest(open) {
  XMLHttpRequest.prototype.open = function () {
    this.addEventListener(
      "readystatechange",
      function () {
        if (this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders") {
          try {
            var res =
              typeof JSON.parse(this.responseText) != "undefined"
                ? JSON.parse(this.responseText)
                : undefined;
          } catch (err) {}

          if (res != undefined && res._embedded) {
            console.log('order completed');
            localStorage.removeItem('attArray');
          }
        }
      },
      false
    );
    open.apply(this, arguments);
  };
}



