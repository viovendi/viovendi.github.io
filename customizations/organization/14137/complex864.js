console.log("COMPLEX-864")
 console.log('GTM file connected');

// Hide questions
$('.customization2_attendee_further-data_custom-question-2').hide();
$('.customization2_attendee_further-data_custom-question-4').hide();
$('.customization2_attendee_further-data_custom-question-5').hide();
$('.customization2_attendee_further-data_custom-question-6').hide();

var radioGroupYesNo = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Betreiben Sie einen eBay Shop');

// show question if 'Ja' is clicked
var inputs = $(radioGroupYesNo).find('input');
console.log('inputs');
console.log(inputs);
inputs.each(function( i, element ) {
  $(element).change(function(input) {
    //on change show these 2 questions
   console.log($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, ""));
    if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('Nein')){
      console.log('show!');
      $('.customization2_attendee_further-data_custom-question-2').show();
    }else{
      console.log('hide!');
      $('.customization2_attendee_further-data_custom-question-2').hide();
    }
   });
});

//show 3 questions if product is checked, else hide
function productChecked(products){
 $(products).each( function(i, element) {
  var product = $$('.customization2_attendee_further-data_product').findField(element);
  var input = $(product).find('input');
   input.change(function(){
     if(input.is(':checked')){
       $('.customization2_attendee_further-data_custom-question-4').show();
       $('.customization2_attendee_further-data_custom-question-5').show();
       $('.customization2_attendee_further-data_custom-question-6').show();
     }
     if(!input.is(':checked')){
      $('.customization2_attendee_further-data_custom-question-4').hide();
      $('.customization2_attendee_further-data_custom-question-5').hide();
      $('.customization2_attendee_further-data_custom-question-6').hide();
     }
   });
 });
}

var workshopblockValue = ["Goodie Paket"] ;
productChecked(workshopblockValue);


$('.customization2_attendee_edit-action_save').on('click', (e)=>{
  console.log('click')
})