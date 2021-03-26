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
    return  {"ticket_categories": result.ticket_categories, "attributes": result.event_attributes.attributes};
  }

  getEventInfo(eventId);


  function disableProd(disabled){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
                checkbox.prop( "disabled", disabled )
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

   function chekedAllProd(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        checkbox.prop('checked', true).prop( "disabled", true )
    })
   }

  function prodCheked(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
            var shortName = $(this).parent().find('p').text().trim();
          if(shortName){
             disableProd(true)
             enableProd(shortName)
          }
        }else if(!checkbox.is(':checked')){
            disableProd(false)
  }
      })
    })
  }

  function getTicketAttributeId(ticketTitle, ticketCategories){
      console.log(ticketCategories)
  const result = $.grep(ticketCategories, function (v) {
      return v.name === ticketTitle;
    });
    console.log(result)
    return result.event_attribute_ids[0];
  }


  async function  customization(){
   const ticketTitle = $('.customization2_attendee_title').text().trim()
   const eventInfo = await getEventInfo(eventId);
   const attributeId = getTicketAttributeId(ticketTitle, eventInfo.ticket_categories)
  console.log(attributeId)
  }
  
console.log($('.customization2_attendee_title').text().trim())

  //chekedAllProd()
  customization()

 // prodCheked()