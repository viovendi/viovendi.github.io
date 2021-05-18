console.log('GTM Works Standard-203');


var answer1 ='<a href="https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Destatis/20210518_Einvera%CC%88ndniserkl_Speaker_Teil-1_Vortrag_14-WissTag_B21+(1).pdf" target="_blank">datenschutzrechtlichen Hinweise</a>'
var answer2 = '<a href="https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Destatis/20210518_Einvera%CC%88ndniserkl_Speaker_Teil-2_Video_14-WissTag_B21.pdf" target="_blank">datenschutzrechtlichen Hinweise</a>'
//funktion to hide Label of question
function changeText(tag, name, newtext) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");
//.customization2_attendee_further-data_custom-question_label

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      
      //do something
      label.html(function () {
        console.log($(this).html())
        var newrr = $(this).html().replace('datenschutzrechtlichen Hinweise', newtext);
        console.log(newrr)
        return $(this).html().replace('datenschutzrechtlichen Hinweise', newtext);
      //var newtest = htmlold.replace('datenschutzrechtlichen Hinweise', newtext);
      //label.html(newtest)
        });
      
      
  }});
}
changeText(".customization2_attendee_further-data_custom-question", "Die datenschutzrechtlichen Hinweise und Informationen nach Art. 13 DS-GVO zur Anmeldung und bei Teilnahme an der Veranstaltung für Moderatoren, ", answer1);
changeText(".customization2_attendee_further-data_custom-question", "Die datenschutzrechtlichen Hinweise und Informationen nach Art. 13 DS-GVO, hier ergänzend zur Anfertigung, Speicherung und Veröffentlichung", answer2);

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
    console.log("noteInserted");
   
   // code here
    changeText(".customization2_attendee_further-data_custom-question", "Die datenschutzrechtlichen Hinweise und Informationen nach Art. 13 DS-GVO zur Anmeldung und bei Teilnahme an der Veranstaltung für Moderatoren, ", answer1);
    changeText(".customization2_attendee_further-data_custom-question", "Die datenschutzrechtlichen Hinweise und Informationen nach Art. 13 DS-GVO, hier ergänzend zur Anfertigung, Speicherung und Veröffentlichung", answer2);
   
   
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
