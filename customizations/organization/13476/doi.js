console.log('Start working, Google Tag Manager (DOI)');

handler();

function markAsChecked(name) {
  $('.customization2_opt-out-and-opt-in').each(function (i, element) {
    var checkbox = $(this).find('.customization2_double-opt-in_checkbox')
    var checkboxName = $(this).find('.customization2_double-opt-in_checkbox-text').text().trim()
    if (checkboxName.indexOf(name) >= 0) {
      checkbox.trigger('click');
      console.log('clicked');
    }
  });
  $('.customization2_opt-out-and-opt-in').hide()
}






// handler is called every time a checkbox is "changed" 
function handler() {
markAsChecked("Double Opt in Text");
}

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    //handler();
    $('.customization2_opt-out-and-opt-in').hide()
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
