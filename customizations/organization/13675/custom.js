// get localstorage
console.log(123456798);
var attendeesData = [];

function showError(){
  console.log('ERROR');
}

function hideError(){
  console.log('HIDE ERROR');
}

$('.customization2_attendee-state_edit .customization2_attendee_edit-action_save').on('click', function(e){
  
  console.log('save clicked');
  
  /*
  console.log($('.customization2_attendee-state_edit .customization2_attendee_contact-data_first-name_input').val());
  console.log($('.customization2_attendee-state_edit .customization2_attendee_contact-data_last-name_input').val());
  */
  
  var firstName = $('.customization2_attendee-state_edit .customization2_attendee_contact-data_first-name_input').val();
  var lastName = $('.customization2_attendee-state_edit .customization2_attendee_contact-data_last-name_input').val();
  console.log(firstName);
  console.log(lastName);
  
  attendeeProcess(e, firstName, lastName);
});

$('.customization2_attendee_contact-data_first-name_input').on('change', function(){
  hideError();
});

$('.customization2_attendee_contact-data_last-name_input').on('change', function(){
  hideError();
});


function attendeeProcess(e, firstName, lastName){
  console.log(firstName);
  console.log(lastName);
  
  var attArray = [];
  console.log(localStorage.getItem('attArray'));
  
  if (localStorage.getItem('attArray')){
    attArray = localStorage.getItem('attArray');
    console.log(attArray);
  }
  var attendyNameString = firstName+'&'+lastName;
  console.log(attendyNameString);
  
  if(attArray.indexOf(attendyNameString)!=-1){
    // attendyNameString exists in array
    // set error state
    e.preventDefault();
    // disable button
    showError();
  }else{
    // add string to the array
    attArray.push(attendyNameString);
    localStorage.setItem('attArray', JSON.stringify(attArray));
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
          }
        }
      },
      false
    );
    open.apply(this, arguments);
  };
}


