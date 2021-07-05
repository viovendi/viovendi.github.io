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

function hideQuestionExactWording(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "") == name) {
      $(item).hide();    }
  });
}

function showQuestionExactWording(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "") == name) {
      $(item).show();    }
  });
}


function hideAll(){
//First hide all questions:
     hideQuestion(".customization2_attendee_further-data_custom-question", "Organisation - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Upload der unterschriebenen Vollmacht - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Upload der unterschriebenen Vollmacht - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie");
     $('.vv-mt-md').hide(); // grey text  "erlaubte Formate: PNG, JPG, PDF"
}








var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("noteInserted");
     
     var radioGroupGastorMitglied = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Sind Sie ein Gast oder ein Stimmberechtigtes Mitglied?');
     hideAll();
     
    

// show 2 questions when 'Gast' or 'Stimmberechtigtes Mitglied' is checked
  var inputs = $(radioGroupGastorMitglied).find('input');
  inputs.each(function( i, element ) {
  $(element).change(function(input) {
      //on change show these 2 questions
    showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder");
    showQuestionExactWording(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer");

      // show question 'Wie viele Mitglieder vertreten Sie?' if 'Ja' is selected; Hide everything if 'Nein' is selected
          var radioGroupVertreter = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Kommen Sie zusätzlich als Vertreter für andere Mitglieder?');
          var inputsVertreter =  $(radioGroupVertreter).find('input');
          inputsVertreter.each(function( i, element ) {
              $(element).change(function(input) {
                  if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('Ja')){
                    console.log('Nein');
                    //hide everything TODO
                  }
                  else{
                      console.log('Ja');
                      showQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie?");

                      // show 1-5 question depending on the selected number:
                      var question = $$('.customization2_attendee_further-data_custom-question').findField('Wie viele Mitglieder vertreten Sie?');
                      var dropDownQuestion = $(question).find('.customization2_attendee_further-data_custom-question_dropdown')
                      var inputDropDown = $(question).find('.customization2_attendee_further-data_custom-question_input')
                          dropDownQuestion.change(function(){
                              var state = dropDownQuestion.val().trim()
                              if (state.includes("1")) {
                                 console.log('1');
                                 showQuestion(".customization2_attendee_further-data_custom-question", " 1 ");

                                 //showQuestion(".customization2_attendee_further-data_custom-question", "Organisation - Vertretung 1");
                                 //showQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer - Vertretung 1");
                                 //showQuestion(".customization2_attendee_further-data_custom-question", "Upload der unterschriebenen Vollmacht - Vertretung 1");
                                 $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
                              }
                              if (state.includes("2")) {
                                console.log('2');
                                showQuestion(".customization2_attendee_further-data_custom-question", " 1 ");
                                showQuestion(".customization2_attendee_further-data_custom-question", " 2 ");
                              }
                              if (state.includes("3")) {
                                  console.log('3');
                                  showQuestion(".customization2_attendee_further-data_custom-question", " 1 ");
                                  showQuestion(".customization2_attendee_further-data_custom-question", " 2 ");
                                  showQuestion(".customization2_attendee_further-data_custom-question", " 3 ");
                              }
                              if (state.includes("4")) {
                                  console.log('4');
                              }
                              if (state.includes("5")) {
                                  console.log('5');
                              }

                         })
                  }
              });
          });
      


    
    
   
   });
  });

   }
  
}
   

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
