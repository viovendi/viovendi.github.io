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

  async function getEventInfo(eventId) {
    const result = await makeRequest({
      url: `https://api.doo.net/v1/events/${eventId}`,
      type: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      dataType: 'json',
    })
  console.log({"ticket_categories": result.ticket_categories, "attributes": result.event_attributes.attributes})
    // const attribute = $.grep(result.event_attributes.attributes, function (v) {
    //   return v.name.includes('GTM-container')
    // });
    return  result;
  }

  getEventInfo(eventId);


  function disableProd(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
         //var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
                checkbox.prop( "disabled", true )
    });
   }
      
   function enableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
         var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.includes(disable)){
                checkbox.prop( "disabled", false )
             }
    });
   }


  function prodCheked(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
            var shortName = $(this).parent().find('p').text().trim();
          if(shortName){
             disableProd()
             enableProd(shortName)
          }
        }else if(!checkbox.is(':checked')){
             enableProd(checkboxName)
  }
      })
    })
  }



  prodCheked()