// get localstorage
console.log(111);

function showError(){
  console.log('ERROR');
  $('.customization2_attendee_edit-action_save').attr('disabled', true);
  $('.customization2_attendee_edit-action').append('<span class="error-message">ERROR MESSAGE</span>');
}

function hideError(){
  console.log('HIDE ERROR');
  $('.customization2_attendee_edit-action_save').attr('disabled', false);
  $('.customization2_attendee_edit-action').find('.error-message').remove();
}

/*
$('.customization2_attendee_edit-action_save').on('click', function(e){
  var that = this;
  getAttendeeData(e, this);
});
*/

function getAttendeeData(e, that){
    console.log(getAttendeeData);
    console.log(e);
    var firstName = $(that).closest('.customization2_attendee-state_edit').find('.customization2_attendee_contact-data_first-name_input').val();
    var lastName = $(that).closest('.customization2_attendee-state_edit').find('.customization2_attendee_contact-data_last-name_input').val();
    if(firstName !== '' && lastName !== ''){
      console.log('PROCESS');
      attendeeProcess(e, firstName, lastName);
    }
}

/*
$('.customization2_attendee_contact-data_first-name_input').on('change', function(){
  hideError();
});

$('.customization2_attendee_contact-data_last-name_input').on('change', function(){
  hideError();
});
*/

function saveToArray(arr, string){
  $('.customization2_attendee_edit-action_save').on('click', function(e){
    arr.push(string);
    localStorage.setItem('attArray', JSON.stringify(arr));
  });
}

function attendeeProcess(e, firstName, lastName){
  /*
  if(firstName === '' || lastName === ''){
    return;
  }
  */
  
  var attArray = [];
  console.log(localStorage.getItem('attArray'));
  
  if (localStorage.getItem('attArray')){
    attArray = localStorage.getItem('attArray');
  }
  var attendyNameString = firstName+'&'+lastName;
  console.log(attendyNameString);
  
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
    console.log('chamge field!');
    console.log(this);
    var that = this;
    getAttendeeData(e, that);
  });
}
checkAttendeeName();





var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted");
        
      /*
        $('.customization2_attendee_edit-action_save').on('click', function(e){
          console.log('SAVE!');
          var that = this;
          getAttendeeData(e, that);
        });
      */
      
        checkAttendeeName();

        $('customization2_attendee_view-action_edit').on("click", function (e) {
            console.log("EDITED");
        });
    }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 


/*
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
*/


