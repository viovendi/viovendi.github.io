// Funktion to show and hide custom question

function handler(){
    var funkton = $$('.customization2_attendee_further-data_custom-question').findField('Welche Position hast Du? (optional)');
    var select = $$('.customization2_attendee_further-data_custom-question').findField('Position im Unternehmen*');
    var select2 = $$('.customization2_attendee_further-data_custom-question').findField('Funktion im Unternehmen?*');
    var funkton2 = $$('.customization2_attendee_further-data_custom-question').findField('Welche Funktion hast Du?');
    $(funkton).css("display","none")   
    $(funkton2).css("display","none") //Funkton

       var ddPosition = $(select).find('.customization2_attendee_further-data_custom-question_dropdown')
       var inputPosition = $(funkton).find('.customization2_attendee_further-data_custom-question_input')

       var ddPosition2 = $(select2).find('.customization2_attendee_further-data_custom-question_dropdown')
       var inputPosition2 = $(funkton2).find('.customization2_attendee_further-data_custom-question_input')

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
              funkton.css("display","none");
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
    // Funktion im Unternehmen?*

    ddPosition2.change(function(){
      var state = ddPosition2.val().trim()
      if (state.includes("andere")) {
        $(funkton2).css("display","block");
        $(funkton2).find('vv-optional-text').css("display","none");
        inputPosition2.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

          var input = inputPosition2.val().replace(/^\s+|\s+$/g, "")
            if ( input == "") {
                  $('.customization2_attendee_edit-action_save').attr('disabled', true);
            }
            else {    
                $('.customization2_attendee_edit-action_save').attr('disabled', false);
                $('.input-error-message').remove();
            }
      }
      else {    
        funkton2.css("display","none");
      }
   

 }
                   
                  )

    inputPosition2.change(function(){
      var input = inputPosition2.val().replace(/^\s+|\s+$/g, "")
        if ( input == "") {
            $('.customization2_attendee_edit-action_save').attr('disabled', true);
            inputPosition2.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

        }
        else {    
            $('.customization2_attendee_edit-action_save').attr('disabled', false);
            $('.input-error-message').remove();
        }

 }
                  )
  
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

  

