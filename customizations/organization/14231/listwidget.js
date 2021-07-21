console.log('14231 Git listwidget');

//$('.event-info__event-description.customization-event-info-description').hide();
var page1 = $('.customization-booking-area-wrapper-page1');
var page2 = $('.customization-booking-area-wrapper-page2');

//if booker is on first page(page1, Tickets) -> hide event info
if( page1.length )  // it exists (page1)
{
  $('.event-info__event-description.customization-event-info-description').hide();
    
}
//if booker is on secondpage(page2, Products) or any other page -> show event info
else{
 $('.event-info__event-description.customization-event-info-description').show();
}


if( page2.length )  // it exists (page1)
{
  console.log('page2');
    
}
