// Funktion to show and hide custom question

function handler(){
  //get Ticket name:
  var ticketname = $('.customization2_attendee_title')
  var name = ticketname.text().replace(/^\s+|\s+$/g, "")
  if (name == "Ich bin Veranstaltungspartner / Speaker" )
      {
        console.log('Ich bin Veranstaltungspartner / Speaker')
        var funkton = $$('.customization2_attendee_further-data_custom-question').findField('Welche Position hast Du?');
        var select = $$('.customization2_attendee_further-data_custom-question').findField('Position im Unternehmen*');
           $(funkton).css("display","none") //Funkton

           var ddPosition = $(select).find('.customization2_attendee_further-data_custom-question_dropdown')
           
           var inputPosition = $(funkton).find('.customization2_attendee_further-data_custom-question_input')
           ddPosition.change(function(){
                var state = ddPosition.val().trim()
                if (state.includes("andere")) {
                  $(funkton).css("display","block");
                  $(funkton).find('vv-optional-text').css("display","none");
                  inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

                    var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
                      if ( input == "") {
                            $('.customization2_attendee_edit-action_save').attr('disabled', true);
                      }
                      else {    
                          $('.customization2_attendee_edit-action_save').attr('disabled', false);
                          $('.input-error-message').remove();
                      }
                }
                else {    
                    $('.customization2_attendee_further-data_custom-question-4').css("display","none");
                }
             

           }
                             
                            )
        
              inputPosition.change(function(){
                var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
                  if ( input == "") {
                      $('.customization2_attendee_edit-action_save').attr('disabled', true);
                      inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                      $('.input-error-message').remove();
                  }

           }
                            )
        
      }
  
  else if(name == "Ich bin ein Student / Trainee im IT-Umfeld" ) {
    console.log('Ich bin ein Student / Trainee im IT-Umfeld')
    var funkton = $$('.customization2_attendee_further-data_custom-question').findField('Welche Position hast Du?');
    var select = $$('.customization2_attendee_further-data_custom-question').findField('Position im Unternehmen*');
       $(funkton).css("display","none") //Funkton

       var ddPosition = $(select).find('.customization2_attendee_further-data_custom-question_dropdown')
       
       var inputPosition = $(funkton).find('.customization2_attendee_further-data_custom-question_input')
       ddPosition.change(function(){
            var state = ddPosition.val().trim()
            if (state.includes("andere")) {
              $(funkton).css("display","block");
              $(funkton).find('vv-optional-text').css("display","none");
              inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

                var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
                  if ( input == "") {
                        $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                      $('.input-error-message').remove();
                  }
            }
            else {    
                $('.customization2_attendee_further-data_custom-question-4').css("display","none");
            }
         

       }
                         
                        )
    
          inputPosition.change(function(){
            var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
              if ( input == "") {
                  $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

              }
              else {    
                  $('.customization2_attendee_edit-action_save').attr('disabled', false);
                  $('.input-error-message').remove();
              }

       }
                        )
  } else {
    var funkton = $$('.customization2_attendee_further-data_custom-question').findField('Welche Position hast Du?');
    var select = $$('.customization2_attendee_further-data_custom-question').findField('Position im Unternehmen*');
       $(funkton).css("display","none") //Funkton

       var ddPosition = $(select).find('.customization2_attendee_further-data_custom-question_dropdown')
       
       var inputPosition = $(funkton).find('.customization2_attendee_further-data_custom-question_input')
       ddPosition.change(function(){
            var state = ddPosition.val().trim()
            if (state.includes("andere")) {
              $(funkton).css("display","block");
              $(funkton).find('vv-optional-text').css("display","none");
              inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

                var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
                  if ( input == "") {
                        $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                      $('.input-error-message').remove();
                  }
            }
            else {    
                $('.customization2_attendee_further-data_custom-question-4').css("display","none");
            }
         

       }
                         
                        )
    
          inputPosition.change(function(){
            var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
              if ( input == "") {
                  $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

              }
              else {    
                  $('.customization2_attendee_edit-action_save').attr('disabled', false);
                  $('.input-error-message').remove();
              }

       }
                        )
  }
      $('customization2_attendee_view-action_edit').on( "click", function() {
  console.log( "clicked" );
});

/*
 Google Tag Manager JS Helpers used
*/
var field = $$('.customization2_attendee_further-data_custom-question').findField('Branche (optional)');
$(field).hide()

var dropdown =  $$('.customization2_attendee_further-data_custom-question').findField('Welcher Branche');

   $(dropdown).change(function() {
if($(this).find('option').filter(':selected').text().trim() == 'andere'){
  $(field).show()
}else{$(field).hide()}

});

 }
handler();

var insertionListener = function(event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted: ", event.target);
    //Inser your code here.
    handler();

    $('customization2_attendee_view-action_edit').on( "click", function() {
        console.log( "clicked" );
    });
  }
}

  
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 

  

