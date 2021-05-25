
  console.log('Start working, Google Tag Manager,gj');
 function handler(){
     //Hide all questions except the one needed
    $('.customization2_attendee_further-data_custom-question-4').css("display","none")
    
     var ddIndustry = $('.customization2_attendee_further-data_custom-question-3 .customization2_attendee_further-data_custom-question_dropdown')
     
     ddIndustry.change(function(){
       	var state = ddIndustry.val().replace(/^\s+|\s+$/g, "")
        	$('.customization2_booker_further-data_custom-question-4').css("display","none")
              
        if (state == "Others" ){
        	$('.customization2_attendee_further-data_custom-question-4').css("display","block")
         
        }
       else{
       $('.customization2_attendee_further-data_custom-question-4').css("display","none")}
        })
     }
                   
   
  
 }
  handler();


