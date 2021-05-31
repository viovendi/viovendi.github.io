console.log('GTM Works Complex-600');


var answer1 = 'Das vollständige Programm finden Sie auf <a href="https://nachhaltige-beschaffung.org/">www.nachhaltige-beschaffung.org</a> Weitere organisatorische Informationen bekommen Sie rechtzeitig zugeschickt.'
//funktion to hide Label of question
function changeText(tag, name, newtext) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");
    //item.find(".customization2_attendee_further-data_custom-question_label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).find('.customization2_attendee_further-data_custom-question_checkbox-line_label').empty().html(newtext);

  
      
      
  }});
}
changeText(".customization2_attendee_further-data_custom-question", "Das vollständige Programm finden Sie auf www.nachhaltige-beschaffung.org Weitere organisatorische Informationen bekommen Sie rechtzeitig zugeschickt.", answer1);

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
    console.log("noteInserted");
   
   // code here
    changeText(".customization2_attendee_further-data_custom-question", "Das vollständige Programm finden Sie auf www.nachhaltige-beschaffung.org Weitere organisatorische Informationen bekommen Sie rechtzeitig zugeschickt.", answer1);
   
   
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
