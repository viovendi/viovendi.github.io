console.log('14269 hide stuff');

var name = $('.event-info__title').text()

if(name.indexOf("Brennholz")){
console.log("hide")
  $('.customization-booking-area-wrapper-page1').hide();
}

var iframe = $('viovendi_iframe');
var content = $('viovendi_iframe').contents();
console.log(content);

console.log(iframe);
var src = iframe.getAttribute('src');
console.log(src);

/*if(eventAttribute.indexOf("attribute_names=Forst")){
console.log("forst");
}

*/
//attribute_names=Forst

