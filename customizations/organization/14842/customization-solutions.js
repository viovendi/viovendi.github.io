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
    //console.log({"ticket_categories": result.ticket_categories, "attributes": result.event_attributes.attributes})
    return  {"ticket_categories": result.ticket_categories, "attributes": result.event_attributes.attributes};
  }


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
  const result = $.grep(ticketCategories, function (v) {
      return v.name === ticketTitle;
    });
    return result[0].event_attribute_ids[0];
  }


  function getEventAttributeName(attributeId, eventAttributes){
    const result = $.grep(eventAttributes, function (v) {
        return v.id === attributeId;
      });
      return result[0].name;
  }


  async function  customization(){
   const ticketTitle = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
   console.log(ticketTitle)
   const eventInfo = await getEventInfo(eventId);
   const attributeId = getTicketAttributeId(ticketTitle, eventInfo.ticket_categories)
   const attributeName = getEventAttributeName(attributeId, eventInfo.attributes);
   if(attributeName === 'Customization1'){
    console.log('Customization1');
    prodCheked()
   } else if(attributeName === 'Customization2'){
    console.log('Customization2');
    chekedAllProd()
   }

  }
  customization()



  


 