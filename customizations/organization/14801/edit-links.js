console.log('GTM Works Standard-203');


var answer1 ='text123 <a href="https://www.wellacompany.com/privacy-policy" target="_blank">Privacy Notice</a>'

//funktion to hide Label of question
function changeText(tag, name, newtext) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");
//.customization2_attendee_further-data_custom-question_label

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      
      //do something
      label.text(newtext);
      
      
  }});
}
changeText(".customization2_attendee_further-data_custom-question", "Die datenschutzrechtlichen Hinweise und Informationen nach Art. 13 DS-GVO zur Anmeldung und bei Teilnahme an der Veranstaltung für Moderatoren, ", answer1);

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
    console.log("noteInserted");
   
   // code here
    changeText(".customization2_attendee_further-data_custom-question", "Die datenschutzrechtlichen Hinweise und Informationen nach Art. 13 DS-GVO zur Anmeldung und bei Teilnahme an der Veranstaltung für Moderatoren, ", answer1);
   
   
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
