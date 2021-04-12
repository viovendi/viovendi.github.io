console.log('Start working, Google Tag Manager (WHUG)');



// call handler whenever a checkbox is clicked/changed
function init(name) {
  $('.' + name + ' .customization2_attendee_further-data_product_checkbox').on('change', function () {
    handler();
  });
}

init('customization2_attendee');

handler();









function markAsChecked(name) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
    if (checkboxName.indexOf(name) >= 0) {
      checkbox.prop('checked', true);
    }
  });
}

function markAsUnChecked(name) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
    if (checkboxName.indexOf(name) >= 0) {
      console.log("markasunchecked" + checkboxName);
      checkbox.prop('checked', false);
    }
  });
}




// handler is called every time a checkbox is "changed" 
function handler() {


}

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    init('customization2_attendee');
   
 
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
