console.log('works');
//$('.customization-booking-area-wrapper-page1 .event-info__event-description .customization-event-info-description').css({"display":"none"});
//$('.event-info__event-description.customization-event-info-description').hide();
var page1 = $('.customization-booking-area-wrapper-page1');
var page2 = $('.customization-booking-area-wrapper-page2');

//if booker is on first page(page1, Tickets) hide event info
if( page1.length )         // use this if you are using id to check
{
  $('.event-info__event-description.customization-event-info-description').hide();
     // it exists
}
//if booker is on secondpage(page2, Products) show event info
else{
 $('.event-info__event-description.customization-event-info-description').show();
}
