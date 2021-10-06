function checkAndHidePrivacy(){
  console.log('checkAndHidePrivacy');
  if ($('.customization2_booking-terms').length > 0 ){
    console.log('.customization2_booking-terms exists');
    $('.customization2_booking-terms .customization2_booking-terms_checkbox').trigger('click');
    $('.customization2_booking-terms').hide();
  }
}
checkAndHidePrivacy();
