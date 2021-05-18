console.log('GTM Works');

//funktion to hide Label of question
function addText(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var controllabel = item.find("vv-control-label");
    var label = item.find(".customization2_attendee_further-data_custom-question_label");


    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).after('<span class="textandlink">You can change your preferences at any time by unsubscribing from these communications. For further information on how we use and protect your personal data, please click here to view our <a href="https://www.wellacompany.com/privacy-policy" target="_blank">Privacy Notice</a>.</span>');
      $('.textandlink').css({"font-family": "inherit",
"font-size": ".9rem",
"line-height": "1.37rem",
"font-family": "Open Sans,sans-serif",
"color": "#343a3f",
"margin-top": "10px",
"margin-bottom": "4px",
"font-weight": "400"}); 
    }
              else {    
                  $('.textandlink').remove();
              }
  });
}
addText(".customization2_attendee_further-data_custom-question", "Wella Company would also like to keep");
      //$('.customization2_attendee_further-data_custom-question-3').after('<span class="textandlink">You can change your preferences at any time by unsubscribing from these communications. For further information on how we use and protect your personal data, please click here to view our <a href="https://www.wellacompany.com/privacy-policy" target="_blank">Privacy Notice</a>.</span>');

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
  console.log("noteInserted");
    addText(".customization2_attendee_further-data_custom-question", "Wella Company would also like to keep");
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
