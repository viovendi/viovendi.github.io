// get localstorage
console.log('github-js');

function showError(){
  $('.customization2_attendee_edit-action_save').attr('disabled', true);
  if($('.error-message').length < 1){
    $('.customization2_attendee_edit-action').append('<span class="error-message">Jeder Teilnehmer benötigt eine eigene Einlasskarte. Bitte geben Sie für jeden Teilnehmer eigene Daten an.</span>');
  }
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

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
