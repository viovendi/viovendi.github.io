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

function showQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).show();    }
  });
}




function hideAll(){
//First hide all questions:
     $('.customization2_attendee_further-data_custom-question-2').hide();

    }


hideAll();
 console.log("noteInserted");
     
     var radioGroupGastorMitglied = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Mit welchem Verkehrsmittel sind sie heute angereist?');
     
     hideAll();
     
   
// show 2 questions if 'Gast' or 'Stimmberechtigtes Mitglied' is clicked
        var inputs = $(radioGroupGastorMitglied).find('input');
        inputs.each(function( i, element ) {
        $(element).change(function(input) {
          console.log("changed");
            //on change show these 2 questions
           if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('PKW/ Taxi')){
             $('.customization2_attendee_further-data_custom-question-2').hide();
              console.log('show');
            }
            else{
               $('.customization2_attendee_further-data_custom-question-2').show();
              console.log('hide');
            }
           });
        });






var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("noteInserted");
     
     var radioGroupGastorMitglied = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Mit welchem Verkehrsmittel sind sie heute angereist?');
     
     hideAll();
     
   
// show 2 questions if 'Gast' or 'Stimmberechtigtes Mitglied' is clicked
        var inputs = $(radioGroupGastorMitglied).find('input');
        inputs.each(function( i, element ) {
        $(element).change(function(input) {
          console.log("changed");
            //on change show these 2 questions
           if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('PKW/ Taxi')){
             $('.customization2_attendee_further-data_custom-question-2').hide();
              console.log('show');
            }
            else{
               $('.customization2_attendee_further-data_custom-question-2').show();
              console.log('hide');
            }
           });
        });



   }
  
}
   

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
