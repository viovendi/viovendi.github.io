console.log('GTM Works');

//funktion to hide Label of question
function addText(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      console.log("after:");
      $(item).after('<span class="textandlink">You can change your preferences at any time by unsubscribing from these communications. For further information on how we use and protect your personal data, please click here to view our <a href="https://www.wellacompany.com/privacy-policy" target="_blank">Privacy Notice</a>.</span>');
   

              }
              else {    
                  $('.customization2_attendee_edit-action_save').attr('disabled', false);
                  $('.input-error-message').remove();
    }
  });
}
addText(".customization2_attendee_further-data_custom-question", "Wella Company would also like to keep you informed by email, text messages and other digital communications (including via targeted adverts online and via social media), with exclusive updates on our offers, trends and products. If you would like to hear ");
      $('.customization2_attendee_further-data_custom-question-3').after('<span class="textandlink">You can change your preferences at any time by unsubscribing from these communications. For further information on how we use and protect your personal data, please click here to view our <a href="https://www.wellacompany.com/privacy-policy" target="_blank">Privacy Notice</a>.</span>');

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
  console.log("noteInserted");
    addText(".customization2_attendee_further-data_custom-question", "Wella Company would also like to keep you informed by email, text messages and other digital communications (including via targeted adverts online and via social media), with exclusive updates on our offers, trends and products. If you would like to hear ");
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
