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
     
     

     

     



  var inputs = $(radioGroupGastorMitglied).find('input');
  inputs.each(function( i, element ) {
  $(element).change(function(input) {
    // this is somehow twisted (maybe because of "change" and currentTarget); if 'Gast', it's actual 'Mitglied'
    if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('Gast')){
    console.log('Mitglied');
      
    
    showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder");
    showQuestionExactWording(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer");

      
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
                    showQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie");
                    
                    
                  }
              });
          });
      


    }
    
    else{
      console.log('Gast');
      showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder");
      showQuestionExactWording(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer");


      }
   });
  });

   }
  
}
   

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
