console.log('Start working, Google Tag Manager (Load different GTM-Container into the widget for each event)');


/*
Code from https://github.com/viovendi/viovendi.github.io/blob/master/customizations/organization/14176/checkboxes.js
Preview Link: https://doo.net/de-de/preview/widget.html?isPreview=true&configName=booking-14842-23230&eventId=71456&locale=de-de&organizerId=14842&widgetType=booking
OID 14842
*/
function init(name) {
  enabledDisabledButton(name)
  $('.' + name + ' .customization2_attendee_further-data_product_checkbox').on('change', function () {
    enabledDisabledButton(name)
  });
}

init('customization2_attendee');

function calcCheckboxes(name){
  var checked = 0;
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
  
    if ( checkbox.is(':checked') ) {
      checked = checked + 1;
      console.log("+1");
    }
  }
                                                          )
  return checked;
}

function enabledDisabledButton(name){
 if(calcCheckboxes(name) < 1 ){
   $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', true);
   if( $('.'+name+' .customization2_attendee_edit-action .button-error-message').length < 1 ){     
    $('.'+name+' .customization2_attendee_edit-action_save').before('<span class="button-error-message error-text error-text--multiple">Bitte wählen Sie einen Termin an dem Sie die Messe besuchen möchten aus.</span>');
   }
 }else{
   $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', false);
   $('.'+name+' .button-error-message').remove();
 }
}
   
/* --------- Olegs Code begins -------- */
                                                          

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
    return {
        "ticket_categories": result.ticket_categories,
        "attributes": result.event_attributes.attributes
    };
}


function disableProd(disabled) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        checkbox.prop("disabled", disabled)
    });
}

function enableProd(disable) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if (checkboxName.includes(disable)) {
            checkbox.prop("disabled", false)
        }
    });
}

function chekedAllProd() {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        checkbox.prop('checked', true).prop("disabled", true)
    })
}

function isCheked(){
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        if (checkbox.is(':checked')) {
            var shortName = $(this).parent().find('p').text().trim();
            if (shortName) {
                disableProd(true)
                enableProd(shortName)
            }
        }
    });
}

function prodCheked() {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')

        checkbox.change(function () {
            if (checkbox.is(':checked')) {
                var shortName = $(this).parent().find('p').text().trim();
                if (shortName) {
                    disableProd(true)
                    enableProd(shortName)
                }
            } else if (!checkbox.is(':checked')) {
                disableProd(false)
            }
        })
    })
}

function getTicketAttributeId(ticketTitle, ticketCategories) {
    const result = $.grep(ticketCategories, function (v) {
        return v.name === ticketTitle;
    });
    return result[0].event_attribute_ids[0];
}


function getEventAttributeName(attributeId, eventAttributes) {
    const result = $.grep(eventAttributes, function (v) {
        return v.id === attributeId;
    });
    return result[0].name;
}


async function customization() {
    const ticketTitle = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
    console.log(ticketTitle)
    const eventInfo = await getEventInfo(eventId);
    const attributeId = getTicketAttributeId(ticketTitle, eventInfo.ticket_categories)
    const attributeName = getEventAttributeName(attributeId, eventInfo.attributes);
    if (attributeName === 'Customization1') {
        console.log('Customization1');
        isCheked()
        prodCheked()
    } else if (attributeName === 'Customization2') {
        console.log('Customization2');
        chekedAllProd()
    }
}

customization()

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log('bookerNodeInserted')
        customization()
      
      // Added this so that this works for every attendee
        init('customization2_attendee');
    }
}


document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);
