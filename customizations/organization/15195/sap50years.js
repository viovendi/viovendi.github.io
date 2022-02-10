console.log("github customization loaded");

var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("nodeInserted");
      changesForAttendeeForm();
   }
}
function setRadioGroup(radioGroup){
   //$(radioGroup).find('input[type=radio]').first().val(['1']);
   //$(radioGroup).find('input[type=radio]').first().get(0).dispatchEvent(new Event('change'));
  // console.log('set value of first ') 
}

function isFirstRadioButton(radioGroup){
   return false;
}

function changesForAttendeeForm(){
   $('.customization2_attendee_contact-data_copy-link').hide(); 
   console.log('hidden copy link');
   
   var firstRadioQuestion = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-1');
   
   $(firstRadioQuestion).each(function(){
        disableAndSet($(this));
   });
  
   $('.vv-radio__input.customization2_attendee_further-data_custom-question_radio-line_button').click(function(){ radioButtonClicked($(this)); });
   
}
function disableAndSet(radioGroup){
   if(!isFirstRadioButton(radioGroup)){
         $(radioGroup).find('input[type=radio]').each(function(){
          //  $(this).attr('disabled', 'disabled');
            var nearestText = $(this).closest('.vv-radio__label-text')
            console.log($(this));
            $(this).val(['1']);
            $(this).attr('checked', 'checked');
            $(this).get(0).dispatchEvent(new Event('change'));
         })
      setRadioGroup();
   }
}
function radioButtonClicked(radioButton){
   console.log('clicked on radioButton')
}

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
