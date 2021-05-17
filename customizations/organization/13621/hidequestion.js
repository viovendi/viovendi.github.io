console.log('hide wkz');

//funktion to hide Label of question
function hideQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).hide();    }
  });
}

hideQuestion(".customization2_booker_further-data_custom-question", "WKZ-Nummer");

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
  console.log("hide wkz");
hideQuestion(".customization2_booker_further-data_custom-question", "WKZ-Nummer");
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 


