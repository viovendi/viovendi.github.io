console.log('git works Wella 14912');
/*
1. hide question mit dem namen (z)
wenn kunde auf ja bei frage xy drückt -> show question mit dem namen ("z")
wenn auf nein, mach gar nicht/ hide question mit namen (z)
*/


//funktion to hide question
function hideQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).hide();    }
  });
}

function showQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).show();    }
  });
}




     hideQuestion(".customization2_attendee_further-data_custom-question", "If you answered yes to the above question");









//var insertionListener = function(event) {
//   if (event.animationName === "nodeInserted") {
     
     
      console.log("noteInserted");
     
     var ifAnswerYes = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Do you have any dietary requirements');
     
     
   
// show questions if 'Yes' is clicked
        var inputs = $(ifAnswerYes).find('input');
        inputs.each(function( i, element ) {
        $(element).change(function(input) {
            //on change show the question
           if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('Yes')){
             hideQuestion(".customization2_attendee_further-data_custom-question", "If you answered yes to the above question");
            }
            else{
               showQuestion(".customization2_attendee_further-data_custom-question", "If you answered yes to the above question");
            }
           });
        });

  // }
  
//}
   

 // document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  //document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  //document.addEventListener("webkitAnimationStart", insertionListener, false); // 
