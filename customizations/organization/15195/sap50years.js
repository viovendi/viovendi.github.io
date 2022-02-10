console.log("github customization loaded");
var chosenDay=0;

var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("nodeInserted");
      changesForAttendeeForm();
   }
}
function setRadioGroup(radioGroup){
   if(chosenDay == 0){
    return;  
   }
   if(chosenDay == 1){
      var buttonToSet = $(radioGroup).find('input[type=radio]').first()
   }
   if(chosenDay == 2){
      var buttonToSet = $(radioGroup).find('input[type=radio]').last()
   }
   $(buttonToSet).prop('checked',true).change();
   $(buttonToSet).get(0).dispatchEvent(new Event('change'));
   console.log('set value of first ') 
}

function isFirstRadioButton(radioGroup){
   var attendeeField = $(radioGroup).closest('.booking-participant.booking-participant--attendee.customization3_booking-participant_attendee.vv-border-xs.vv-rounded-lg.vv-border-grey-light')[0];
   var firstAttendeeField = $('.booking-participant.booking-participant--attendee.customization3_booking-participant_attendee.vv-border-xs.vv-rounded-lg.vv-border-grey-light').first()[0];
   
   console.log(attendeeField);
   console.log(firstAttendeeField);

   var isFirst = attendeeField==firstAttendeeField;
   console.log('isFirst: '+isFirst)
   return isFirst;
}

function changesForAttendeeForm(){
   $('.customization2_attendee_contact-data_copy-link').hide(); 
   console.log('hidden copy link');
   
   var firstRadioQuestion = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-1');
   
   $(firstRadioQuestion).each(function(){
        disableAndSet($(this));
   });
  
   $(firstRadioQuestion).find('.vv-radio__input.customization2_attendee_further-data_custom-question_radio-line_button').click(function(){ 
      radioButtonClicked($(this)); 
   });
   
}
function disableAndSet(radioGroup){
   if(!isFirstRadioButton(radioGroup)){
         $(radioGroup).find('input[type=radio]').each(function(){
            $(this).attr('disabled', 'disabled');
         })
      setRadioGroup(radioGroup);
   }
}
function radioButtonClicked(radioButton){
   console.log('clicked on radioButton');
   chosenDay=1;
}

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
