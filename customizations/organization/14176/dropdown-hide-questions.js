// Funktion to show and hide custom question
function handler(){
  //get Ticket name:
  var ticketname = $('.customization2_attendee_title')
  var name = ticketname.text().replace(/^\s+|\s+$/g, "")
  if (name == "Ich bin Veranstaltungspartner / Speaker" )
      {
           $('.customization2_attendee_further-data_custom-question-4').css("display","none") //Funkton

           var ddPosition = $('.customization2_attendee_further-data_custom-question-3 .customization2_attendee_further-data_custom-question_dropdown')
           var inputPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_input')
           ddPosition.change(function(){
                var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
                if ( state == "andere") {
                    $('.customization2_attendee_further-data_custom-question-4').css("display","block");
                    $('.customization2_attendee_further-data_custom-question-4').find('vv-optional-text').css("display","none");
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

  
     //Hide "Position im Unternehmen" and "Funktion im Unternehmen"
     
     // $('.customization2_attendee_further-data_custom-question-5').css("display","none") //position
     $('.customization2_attendee_further-data_custom-question-7').css("display","none") //Funkton

    
     var ddPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_dropdown')
     var inputPosition = $('.customization2_attendee_further-data_custom-question-5 .customization2_attendee_further-data_custom-question_input')

     ddPosition.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-5').css("display","block");
            $('.customization2_attendee_further-data_custom-question-5').find('vv-optional-text').css("display","none");
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
            $('.customization2_attendee_further-data_custom-question-5').css("display","none");
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
         
                       
     var ddFunktion = $('.customization2_attendee_further-data_custom-question-6 .customization2_attendee_further-data_custom-question_dropdown')
     var inputFunktion = $('.customization2_attendee_further-data_custom-question-7 .customization2_attendee_further-data_custom-question_input')

                       
     ddFunktion.change(function(){
       	var state = ddFunktion.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-7').css("display","block")
            $('.customization2_attendee_further-data_custom-question-7').find('vv-optional-text').css("display","none");
            inputFunktion.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

                var input = inputFunktion.val().replace(/^\s+|\s+$/g, "")
                  if ( input == "") {
                    $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  }
                  else {    
                    $('.customization2_attendee_edit-action_save').attr('disabled', false);
                    $('.input-error-message').remove();
                  }

        }
        else {  
            $('.customization2_attendee_further-data_custom-question-7').css("display","none")
        }
     }
                      )
    
    inputFunktion.change(function(){
                var input = inputFunktion.val().replace(/^\s+|\s+$/g, "")
                  if ( input == "") {
                     $('.customization2_attendee_edit-action_save').attr('disabled', true);
                     inputFunktion.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                      $('.input-error-message').remove();
                  }

           }    
                        )
    
    
    } else{

  
      //Hide "Position im Unternehmen" and "Funktion im Unternehmen"
      
      $('.customization2_attendee_further-data_custom-question-5').css("display","none") //position
      $('.customization2_attendee_further-data_custom-question-7').css("display","none") //Funkton
 
     
      var ddPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_dropdown')
      var inputPosition = $('.customization2_attendee_further-data_custom-question-5 .customization2_attendee_further-data_custom-question_input')
 
      ddPosition.change(function(){
          var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
         if ( state == "andere") {
             $('.customization2_attendee_further-data_custom-question-5').css("display","block");
             $('.customization2_attendee_further-data_custom-question-5').find('vv-optional-text').css("display","none");
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
             $('.customization2_attendee_further-data_custom-question-5').css("display","none");
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
          
                        
      var ddFunktion = $('.customization2_attendee_further-data_custom-question-6 .customization2_attendee_further-data_custom-question_dropdown')
      var inputFunktion = $('.customization2_attendee_further-data_custom-question-7 .customization2_attendee_further-data_custom-question_input')
 
                        
      ddFunktion.change(function(){
          var state = ddFunktion.val().replace(/^\s+|\s+$/g, "")
         if ( state == "andere") {
             $('.customization2_attendee_further-data_custom-question-7').css("display","block")
             $('.customization2_attendee_further-data_custom-question-7').find('vv-optional-text').css("display","none");
             inputFunktion.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
 
                 var input = inputFunktion.val().replace(/^\s+|\s+$/g, "")
                   if ( input == "") {
                     $('.customization2_attendee_edit-action_save').attr('disabled', true);
                   }
                   else {    
                     $('.customization2_attendee_edit-action_save').attr('disabled', false);
                     $('.input-error-message').remove();
                   }
 
         }
         else {  
             $('.customization2_attendee_further-data_custom-question-7').css("display","none")
         }
      }
                       )
     
     inputFunktion.change(function(){
                 var input = inputFunktion.val().replace(/^\s+|\s+$/g, "")
                   if ( input == "") {
                      $('.customization2_attendee_edit-action_save').attr('disabled', true);
                      inputFunktion.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
 
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

  
