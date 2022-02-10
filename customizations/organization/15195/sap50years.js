console.log("github customization loaded");

var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("nodeInserted");
      changesForAttendeeForm();
   }
}
function setRadioGroup(radioGroup){
   var buttonToSet = $(radioGroup).find('input[type=radio]').first()
   $(buttonToSet).prop('checked',true).change();
   $(buttonToSet).get(0).dispatchEvent(new Event('change'));
   console.log('set value of first ') 
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
            $(this).attr('disabled', 'disabled');
            //var nearestText = $(this).closest('.vv-radio__label-text')
            
          //  console.log($(this));

         })
      
      setRadioGroup(radioGroup);
   }
}
function radioButtonClicked(radioButton){
   console.log('clicked on radioButton')
}

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
