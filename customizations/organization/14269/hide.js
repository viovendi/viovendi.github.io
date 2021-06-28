console.log('14269 Booking wrapper if Brennholz in name or Forst attribute');

var name = $('.event-info__title').text()

if(name.indexOf("Brennholz")>=0){
  $('.customization-booking-area-wrapper-page1').hide();
  $('.event-info__header').css("margin-left:", "-130px");
  $('.event-info__date-container').hide();
  $('.event-info .event-info__details').css("margin-left", "0px");
/*.event-info__header {
    margin-left: -130px;
}
  .event-info .event-info__details {
    margin-left: 0px;
}*/

  
}

async function makeRequest(options) {
  let result = null;
  try {
    result = await $.ajax(options);
    return result;
  } catch (error) {
    console.error(error);
  }
}

var pathname = window.location.pathname;
var eventId = pathname.split('/')[3]

async function getEventAttributes(eventId) {
  const result = await makeRequest({
    url: `https://api.doo.net/v1/events/${eventId}`,
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    dataType: 'json',
  })

  const attribute = $.grep(result.event_attributes.attributes, function (v) {
    if(v.name == 'Forst'){
      $('.customization-booking-area-wrapper-page1').hide();
      $('.event-info__date-container').hide();
      $('.event-info__date-container').css("margin-left:", "-130px");
      $('.event-info .event-info__details').css("margin-left", "0px");
    }
    
    return v.name
  });
  return  attribute[0].data;
}

getEventAttributes(eventId);


