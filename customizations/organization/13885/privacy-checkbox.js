console.log("triggered privacy-checkbox.js")
function checkAndHidePrivacy(){
  console.log('checkAndHidePrivacy');
  if ($('.customization2_booking-terms').length > 0 ){
    $('.customization2_booking-terms .customization2_booking-terms_checkbox').trigger('click');
  //  $('.customization2_booking-terms .vv-checkbox__indicator').css('display', 'none');
    $('.customization2_booking-terms .vv-checkbox').on('click', function(e){
      e.preventDefault();
    });
  }
}
checkAndHidePrivacy();

    var styles = `
  .customization2_booking-terms .vv-checkbox__indicator{
    display:none;
  }
`
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;

    document.head.appendChild(styleSheet);

