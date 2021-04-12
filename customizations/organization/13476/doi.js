console.log('Start working, Google Tag Manager (DOI)');



// call handler whenever a checkbox is clicked/changed
function init(name) {
  $('.customization2_double-opt-in_checkbox').trigger('clicked');
}

init('customization2_attendee');

handler();








function markAsChecked(name) {
  $('.customization2_opt-out-and-opt-in').each(function (i, element) {
    var checkbox = $(this).find('.customization2_double-opt-in_checkbox')
    var checkboxName = $(this).find('.customization2_double-opt-in_checkbox-text').text().trim()
    if (checkboxName.indexOf(name) >= 0) {
      checkbox.prop('checked', true);
    }
  });
}






// handler is called every time a checkbox is "changed" 
function handler() {
 console.log('clicked');

$('.customization2_double-opt-in_checkbox').click();
  markAsChecked("Double Opt in Text");

}

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    init('customization2_attendee');
    handler();
   
 
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
