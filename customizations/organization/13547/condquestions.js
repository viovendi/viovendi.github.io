console.log("git");


//funktion to hide question
function hideQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).hide();    }
  });
}


hideQuestion(".customization2_attendee_further-data_custom-question", "Organisation - Vertretung 1");







var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("noteInserted");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Organisation - Vertretung 1");

   }
}
   

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
