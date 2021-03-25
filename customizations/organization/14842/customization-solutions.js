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
  
  
  var pathname = window.location.pathname;
  var eventId = pathname.split('/')[3]
  
  async function getEventInfo(eventId) {
    const result = await makeRequest({
      url: `https://api.doo.net/v1/events/${eventId}`,
      type: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      dataType: 'json',
    })
  console.log(result)
    // const attribute = $.grep(result.event_attributes.attributes, function (v) {
    //   return v.name.includes('GTM-container')
    // });
    return  result;
  }

  getEventInfo();