console.log('14269 Booking wrapper if Brennholz in name or Forst attribute');

var name = $('.event-info__title').text()

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
    // if event name contains Brennholz or has attribute Forst
    if(v.name == 'Forst' || name.indexOf("Brennholz")>=0){
      
      // edit line-heigt of title
      $('.event-info__title').css('line-height','2.87rem')
      $('.event-info__date-container__day').css('line-height','2.87rem')
      
      //hide end day and month, replace '-' with '' and add 'Ab ' before the text
      $('.customization-event-info-date-end').hide()
      $('.customization-booking-area-wrapper-page1').hide();
      $('div.event-info__date-container__month.customization-event-info-date-month > span:nth-child(2)').hide();
  
      
      var startDay = $('.customization-event-info-date-start')
      var startMonth = $('div.event-info__date-container__month.customization-event-info-date-month > span:nth-child(1)')

      var day = startDay.text('Ab ' + startDay.text().replace(/^\s+|\s+$/g, ""))
      var newTextMonth = startMonth.text().replace(/^\s+|\s+$/g, "")
      var finalTextDay = day.text().replace('-','')
      
      var finalTextMonth = newTextMonth.replace('-','')


      $('.customization-event-info-date-start').empty().html(finalTextDay.replace(/^\s+|\s+$/g, ""));
      $('div.event-info__date-container__month.customization-event-info-date-month > span:nth-child(1)').empty().html(finalTextMonth);
  
       //hide date
      $('.customization-event-info-date-details').hide();
      $('div.m-box.event-info__details > div:nth-child(3)').hide();
    }
    
    return v.name
  });
  return true//attribute[0].data;
}

getEventAttributes(eventId);


