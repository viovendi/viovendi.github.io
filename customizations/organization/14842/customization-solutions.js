console.log('Start working, Google Tag Manager (Load different GTM-Container into the widget for each event)');

async function makeRequest(options) {
    let result = null;
    try {
      result = await $.ajax(options);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  var path = window.location.pathname;
  var eventId = path.split('/')[3]
   console.log(eventId)
  async function getEventInfo(eventId) {
    const result = await makeRequest({
      url: `https://api.doo.net/v1/events/${eventId}`,
      type: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      dataType: 'json',
    })
  console.log(result.ticket_categories, result.event_attributes.attributes)
    // const attribute = $.grep(result.event_attributes.attributes, function (v) {
    //   return v.name.includes('GTM-container')
    // });
    return  result;
  }

  getEventInfo(eventId);