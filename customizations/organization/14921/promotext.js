console.log('Professional GelColor');

var name = $('.event-info__title').text()

if(name.indexOf("Professional GelColor")>=0){
  var text = $( "<div class='promotextbefore'>If you have a voucher for half price GelColor education please leave out the % sign from the code</div>" )
  $('.ew-selection__promocode-block').before(text)
  $('.promotextbefore').css("padding-left", "12px");  
}
