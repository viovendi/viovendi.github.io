console.log('works');

var field = $$('.customization2_booker_further-data_custom-question').findField('Abstract submission (optional)');
   
var radioGroup = $$('.customization2_booker_further-data_custom-question').findRadioGroup('Abstract submission (deadline: 30th June 2021)');
   
   $(field).hide()
  var inputs = $(radioGroup).find('input');
  inputs.each(function( i, element ) {
  $(element).change(function(input) {
    if($(input.currentTarget).siblings('.customization2_booker_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('Yes')){
       console.log('show');
      $('.customization2_booker_further-data_custom-question').findField('Abstract submission (optional)').show();
       }
    else{
    $('.customization2_booker_further-data_custom-question').findField('Abstract submission (optional)').hide();
      console.log('hide');
    }
                    
       
    console.log($(input.currentTarget).siblings('.customization2_booker_further-data_custom-question_radio-line_label').text())
   });
  });
