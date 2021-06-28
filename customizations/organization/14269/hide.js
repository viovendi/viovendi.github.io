console.log('14269 hide stuff');

var name = $('.event-info__title').text()

if(name.indexOf("Brennholz")){
console.log("hide")
  $('.customization-booking-area-wrapper-page1').hide();
}


var eventAttribute = $('.viovendi_iframe').attr('src');
console.log(eventAttribute);
if(eventAttribute.indexOf("attribute_names=Forst")){
console.log("forst");
}
//attribute_names=Forst

