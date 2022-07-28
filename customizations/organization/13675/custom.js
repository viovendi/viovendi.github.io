// get localstorage
console.log(111);

function showError(){
  console.log('ERROR');
}

function hideError(){
  console.log('HIDE ERROR');
}

function getAttendeeData(){
  $('.customization2_attendee_edit-action_save').on('click', function(e){
    var firstName = $(this).closest('.customization2_attendee-state_edit').find('.customization2_attendee_contact-data_first-name_input').val();
    var lastName = $(this).closest('.customization2_attendee-state_edit').find('.customization2_attendee_contact-data_last-name_input').val();
    console.log(firstName);
    console.log(lastName);

    attendeeProcess(e, firstName, lastName);
  });
}
getAttendeeData();

$('.customization2_attendee_contact-data_first-name_input').on('change', function(){
  hideError();
});

$('.customization2_attendee_contact-data_last-name_input').on('change', function(){
  hideError();
});

function attendeeProcess(e, firstName, lastName){
  if(firstName === '' || lastName === ''){
    return;
  }
  
  var attArray = [];
  console.log(localStorage.getItem('attArray'));
  
  if (localStorage.getItem('attArray')){
    attArray = localStorage.getItem('attArray');
  }
  var attendyNameString = firstName+'&'+lastName;
  console.log(attendyNameString);
  
  if(attArray.indexOf(attendyNameString)!=-1){
    console.log(e);
    e.preventDefault();
    showError();
  }else{
    attArray.push(attendyNameString);
    localStorage.setItem('attArray', JSON.stringify(attArray));
  }
  
}

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        
        $('.customization2_attendee_edit-action_save').on('click', function(e){
          console.log('SAVE!');
          getAttendeeData();
        });

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


