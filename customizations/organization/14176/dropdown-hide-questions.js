function handler(){
  //get Ticket name:
  var ticketname = $('.customization2_attendee_title')
  var name = ticketname.text().replace(/^\s+|\s+$/g, "")
  if (name == "Ich bin Veranstaltungspartner / Speaker" )
      {
           $('.customization2_attendee_further-data_custom-question-4').css("display","none") //Funkton

           var ddPosition = $('.customization2_attendee_further-data_custom-question-3 .customization2_attendee_further-data_custom-question_dropdown')

           ddPosition.change(function(){
                var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
                if ( state == "andere") {
                    $('.customization2_attendee_further-data_custom-question-4').css("display","block");
                }
                else {    
                    $('.customization2_attendee_further-data_custom-question-4').css("display","none");
                }

           }
                            )
      }
  
  else{

  
     //Hide Position im Unternehmen and Funktion im Unternehmen
     
     $('.customization2_attendee_further-data_custom-question-5').css("display","none") //position
     $('.customization2_attendee_further-data_custom-question-7').css("display","none") //Funkton

    
     var ddPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_dropdown')
    
     ddPosition.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-5').css("display","block");
        }
        else {    
            $('.customization2_attendee_further-data_custom-question-5').css("display","none");
        }
     }
                      )
         
                       
     var ddFunktion = $('.customization2_attendee_further-data_custom-question-6 .customization2_attendee_further-data_custom-question_dropdown')

                       
     ddFunktion.change(function(){
       	var state = ddFunktion.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-7').css("display","block")
        }
        else {  
            $('.customization2_attendee_further-data_custom-question-7').css("display","none")
        }
     }
                      )
    }
      
 }

function getValue(shortName, wrapperClass){
  var value;
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
    
   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     value = $(this).closest('.vv-nl-mb-lg').find('.customization2_attendee_further-data_custom-question_input').val();
     console.log("in_getValue");
     if (value != ''){
              console.log(value);
              console.log("disable  == false");
            $('.customization2_attendee_edit-action_save').attr('disabled', false);

           }
           else {
              console.log(value);
              console.log("disable == true");
              $('.customization2_attendee_edit-action_save').attr('disabled', true);
           }
   }
 });
    
}

function getStatePosition(shortName, wrapperClass){
  var state;
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");

   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     state = $(this).closest('.vv-nl-mb-lg').find('.customization2_attendee_further-data_custom-question_dropdown').val();
     console.log("Current state:" +state);
           if (state == 'andere'){
             console.log("State Position: "+state)
             getValue('Welche Position haben Sie?', 'customization2_attendee-1');  
           }
           else {
             console.log("State Position: "+state)
              console.log("disable == false");
              $('.customization2_attendee_edit-action_save').attr('disabled', false);
           }
     }

   
 });
}

function getStateFunktion(shortName, wrapperClass){
  var state;
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");

   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     state = $(this).closest('.vv-nl-mb-lg').find('.customization2_attendee_further-data_custom-question_dropdown').val();
     console.log("getStateFunktion" +state);
           if (state == 'andere'){
             console.log("State Funktion: "+state)
             getValue('Welche Funktion haben Sie?', 'customization2_attendee-1');  
           }
           else {
              console.log("State Funktion: "+state)
              console.log("disable == false");
              $('.customization2_attendee_edit-action_save').attr('disabled', false);
           }
     }

   
 });
}



function init2(name){
  
  $('.'+name+' .customization2_attendee_further-data_custom-question').on('change', function(){
    getStatePosition('Position im Unternehmen', name);
    getStateFunktion('Funktion im Unternehmen', name);

   
  });
  
}
init2('customization2_attendee-1');
  

  handler();
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 

  
