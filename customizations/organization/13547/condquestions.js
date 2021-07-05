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









var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("noteInserted");
     
     var radioGroupGastorMitglied = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Sind Sie ein Gast oder ein Stimmberechtigtes Mitglied?');

     
     //First hide all questions:
     hideQuestion(".customization2_attendee_further-data_custom-question", "Organisation - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Upload der unterschriebenen Vollmacht - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Upload der unterschriebenen Vollmacht - Vertretung");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder");
     hideQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie");

     

     



  var inputs = $(radioGroupGastorMitglied).find('input');
  inputs.each(function( i, element ) {
  $(element).change(function(input) {
    if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('Gast')){
       console.log('Gast');
       showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder");
       showQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie");
    }
    
    else{
      console.log('Mitglied');
      }
                    
       
   });
  });
}
   

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
