console.log('14269 Booking wrapper if Brennholz in name or Forst attribute');

var name = $('.event-info__title').text()

if(name.indexOf("Brennholz")){
  console.log(name);
console.log("hide")
  $('.customization-booking-area-wrapper-page1').hide();
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
    }
    
    return v.name
  });
  return  attribute[0].data;
}

getEventAttributes(eventId);


