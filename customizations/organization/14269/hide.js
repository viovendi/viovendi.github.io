console.log('14269 hide stuff');

var name = $('.event-info__title').text()

if(name.indexOf("Brennholz")){
console.log("hide")
  $('.customization-booking-area-wrapper-page1').hide();
}


var eventAttribute = $('.viovendi_iframe').contents().get(0).location.href ;
var ea = $('viovendi_iframe').src//.attr('src');
console.log(eventAttribute);
console.log(ea);

if(eventAttribute.indexOf("attribute_names=Forst")){
console.log("forst");
}
//attribute_names=Forst

