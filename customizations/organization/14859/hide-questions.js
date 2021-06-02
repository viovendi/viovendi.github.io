
  console.log('Start working, Google Tag Manager,gj');
// edit checkbox and add link to text





var answer1 = 'I want to have my contact details shared within the Oerlikon Group and with Oerlikon’s partners of the 2021 AMTC conference listed in the <a href="https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Oerlikon/2021/2021+AMTC+Conference+privacy+noticefor+website.pdf" target="_blank">Privacy Notice</a> in order to receive information about their services, products and invites to their events and conferences.'

//funktion to hide Label of question
function changeText(tag, name, newtext) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");
    //item.find(".customization2_attendee_further-data_custom-question_label");
    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).find('.customization2_attendee_further-data_product_description').empty().html(newtext);

  
      
      
  }});
}
changeText(".customization2_attendee_further-data_product", "Privacy Notice", answer1);






// % -----------------------------------%
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
changeText(".customization2_attendee_further-data_product", "Privacy Notice", answer1);

  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //

