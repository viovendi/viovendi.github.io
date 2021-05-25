
  console.log('Start working, Google Tag Manager,gj');
 function handler(){
     //Hide all questions except the one needed
    $('.customization2_attendee_further-data_custom-question-4').css("display","none")
    $('.customization2_attendee_further-data_custom-question-6').css("display","none")
     var ddIndustry = $('.customization2_attendee_further-data_custom-question-3 .customization2_attendee_further-data_custom-question_dropdown')
     var ddManufacturing = $('.customization2_attendee_further-data_custom-question-5 .customization2_attendee_further-data_custom-question_dropdown')
     var state2 = ddIndustry.val().replace(/^\s+|\s+$/g, "")
        	$('.customization2_booker_further-data_custom-question-4').css("display","none")
              
            if (state2 == "Others" ){
              $('.customization2_attendee_further-data_custom-question-4').css("display","block")
            }
           else{
           $('.customization2_attendee_further-data_custom-question-4').css("display","none");
            }
   
   var state1 = ddManufacturing.val().replace(/^\s+|\s+$/g, "")
        	$('.customization2_booker_further-data_custom-question-4').css("display","none")
              
            if (state1 == "Others" ){
              $('.customization2_attendee_further-data_custom-question-6').css("display","block")
            }
           else{
           $('.customization2_attendee_further-data_custom-question-6').css("display","none");
            }
     ddIndustry.change(function(){
       	var state = ddIndustry.val().replace(/^\s+|\s+$/g, "")
        	$('.customization2_booker_further-data_custom-question-4').css("display","none")
              
            if (state == "Others" ){
              $('.customization2_attendee_further-data_custom-question-4').css("display","block")
            }
           else{
           $('.customization2_attendee_further-data_custom-question-4').css("display","none");
            }
                       
     }
                      );
   
   ddManufacturing.change(function(){
       	var state = ddManufacturing.val().replace(/^\s+|\s+$/g, "")
        	$('.customization2_booker_further-data_custom-question-4').css("display","none")
              
            if (state == "Others" ){
              $('.customization2_attendee_further-data_custom-question-6').css("display","block")
            }
           else{
           $('.customization2_attendee_further-data_custom-question-6').css("display","none");
            }
                       
     }
                      );
          
 }
  handler();
var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    handler();

  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //

