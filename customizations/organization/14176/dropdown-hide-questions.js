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
                    var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
                      if ( input == "") {
                          $('.customization2_attendee_edit-action_save').attr('disabled', true);
                            inputPosition.after('<span class="button-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
                            $('.button-error-message').remove();
                            $('.vv-optional-text .customization2_attendee_further-data_custom-question-4').css("display","none")

                      }
                      else {    
                          $('.customization2_attendee_edit-action_save').attr('disabled', false);
                          $('.button-error-message').remove();
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
                      inputPosition.after('<span class="button-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');

                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                      $('.button-error-message').remove();
                  }

           }
                            )
        
      }
  
  else{

  
     //Hide "Position im Unternehmen" and "Funktion im Unternehmen"
     
     $('.customization2_attendee_further-data_custom-question-5').css("display","none") //position
     $('.customization2_attendee_further-data_custom-question-7').css("display","none") //Funkton

    
     var ddPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_dropdown')
     var inputPosition = $('.customization2_attendee_further-data_custom-question-5 .customization2_attendee_further-data_custom-question_input')

     ddPosition.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-5').css("display","block");
            var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
                    if ( input == "") {
                        $('.customization2_attendee_edit-action_save').attr('disabled', true);
                    }
                    else {    
                        $('.customization2_attendee_edit-action_save').attr('disabled', false);
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
                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                  }

           }
                            )
         
                       
     var ddFunktion = $('.customization2_attendee_further-data_custom-question-6 .customization2_attendee_further-data_custom-question_dropdown')
     var inputFunktion = $('.customization2_attendee_further-data_custom-question-7 .customization2_attendee_further-data_custom-question_input')

                       
     ddFunktion.change(function(){
       	var state = ddFunktion.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-7').css("display","block")
                var input = inputFunktion.val().replace(/^\s+|\s+$/g, "")
                  if ( input == "") {
                    $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  }
                  else {    
                    $('.customization2_attendee_edit-action_save').attr('disabled', false);
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
                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                  }

           }
                            )
    
    
    }
      
 }

//    $('SOMECLASS').after('<span class="button-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
//    $('.button-error-message').remove();

  handler();
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 

  
