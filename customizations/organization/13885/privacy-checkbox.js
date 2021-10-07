function checkAndHidePrivacy(){
  console.log('checkAndHidePrivacy');
  if ($('.customization2_booking-terms').length > 0 ){
    $('.customization2_booking-terms .customization2_booking-terms_checkbox').trigger('click');
    $('.customization2_booking-terms .vv-checkbox__indicator').css('opacity', '0');
    $('.customization2_booking-terms .vv-checkbox').on('click', function(e){
      e.preventDefault();
    });
    
    
    
    // $('.customization2_booking-terms').hide();
  }
}
checkAndHidePrivacy();
