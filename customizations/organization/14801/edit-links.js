console.log('GTM Works');


var answer1 ='text123 <a href="https://www.wellacompany.com/privacy-policy" target="_blank">Privacy Notice</a>'

//funktion to hide Label of question
function changeText(tag, name, newtext) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");
//.customization2_attendee_further-data_custom-question_label

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      label.text(newtext);
      
      
  });
}
changeText(".customization2_attendee_further-data_custom-question", "Wella Company would also like to keep", answer1);

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
  console.log("noteInserted");
    changeText(".customization2_attendee_further-data_custom-question", "Wella Company would also like to keep", answer1);
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
