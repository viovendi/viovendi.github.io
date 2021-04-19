console.log('Start working, Google Tag Manager (WHUG)');

/*

// call handler whenever a checkbox is clicked/changed
function init(name) {
  $('.' + name + ' .customization2_attendee_further-data_product_checkbox').on('change', function () {
    handler();
  });
}

init('customization2_attendee');

handler();





//hides Products
function hideProduct(shortName) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
    if (checkboxName.includes(shortName)) {
      console.log($(this), shortName)
      $(this).hide();
    }
  });
}

// show Products
function showProduct(shortName) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
    if (checkboxName.indexOf(shortName) >= 0) {
      $(this).show();
    }
  });
}

function disableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) >= 0){
                checkbox.prop( "disabled", true )
             }
    });
   }


// this hides or shows another product when checked or unchecked
function hideProdWhenChecked(shortName, hide) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

    checkbox.change(function () {
      if (checkbox.is(':checked')) {
        if (checkboxName.includes(shortName)) {
          hideProduct(hide)
        }
      } else if (!checkbox.is(':checked')) {
        if (checkboxName.includes(shortName)) {
          showProduct(hide);
        }
      }
    })
  })
}

function uncheckProduct2whenProduct1Isunchecked(product1, product2){
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

    checkbox.change(function () {
      if (!checkbox.is(':checked')) {
        if (checkboxName.includes(product1)) {
          
          uncheckProd(product2)
        }
      } 
    })
  })
}

function hideProd(shortName, hide) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

    if (checkbox.is(':checked')) {
      if (checkboxName.includes(shortName)) {
        hideProduct(hide)
      }
    } 
  })
}
/*
   // this hides another product when checkbox is unchecked
function hideProdWhenUnChecked(shortName, hide){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
         if(!checkbox.is(':checked')){
              if(checkboxName.indexOf(shortName) >= 0){
                 hideProduct(hide);
              }
         }
      })
    })
  

function showProdWhenChecked(shortName, show) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

    checkbox.change(function () {
      if (checkbox.is(':checked')) {
        if (checkboxName.indexOf(shortName) >= 0) {
          showProduct(show)
        }
      } else if (!checkbox.is(':checked')) {
        if (checkboxName.indexOf(shortName) >= 0) {
          hideProduct(show)
        }
      }
    })
  })
}



/*
   function prodcheck(shortName, disable){
   $('.customization2_attendee_further-data_product').each(function(i, element) {
     var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
     var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

     checkbox.change(function(){
       if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
            uncheckProd(disable)
         }
       }
     })
   })
 }
 



function uncheckProd(shortName){
$('.customization2_attendee_further-data_product').each(function(i, element) {
     var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
     var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

     if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
            checkbox.trigger('click');
         }
       }
 }
                                                      )};




function markAsChecked(name) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
    if (checkboxName.indexOf(name) >= 0) {
      checkbox.prop('checked', true);
    }
  });
}

function markAsUnChecked(name) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
    if (checkboxName.indexOf(name) >= 0) {
      checkbox.prop('checked', false);
    }
  });
}

// return true if checkbox is checked, returns false is checkbox is NOT checked
// checks all checkboxes, filter by shortName
function ischecked(shortName) {
  var bool = false;
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()


    if (checkbox.is(':checked')) {
      if (checkboxName.indexOf(shortName) >= 0) {
        bool = true;
      }
    }


  })
  return bool;
}




// handler is called every time a checkbox is "changed" 
function handler() {
  
    const name = $('.customization2_attendee-state_edit .customization2_attendee-1 .customization2_attendee_title').text().trim();
    console.log("moreattendes ticketname: " + name);
    if (!name.trim()) {
      const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
    console.log("one ticket ticketname: " +name);
  }
  //get Ticket name:
  //const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
  //const name = $('.customization2_attendee-state_edit .customization2_attendee-1 .customization2_attendee_title').text().trim()


  //pseudo code
  /*
   if any day ticket is selected:
   by clicking one day (eg. Monday), hide all other day
   show only the workshops that are on the selected day (on Monday its Workshop1)
  


  if (name == "Erwachsenen Ticket") {
    // hide other day when 1 day is selected
    hideProdWhenChecked("Montag", "Dienstag")
    hideProdWhenChecked("Montag", "Mittwoch")
    hideProdWhenChecked("Montag", "Donnerstag")

    hideProdWhenChecked("Dienstag", "Montag")
    hideProdWhenChecked("Dienstag", "Mittwoch")
    hideProdWhenChecked("Dienstag", "Donnerstag")

    hideProdWhenChecked("Mittwoch", "Montag")
    hideProdWhenChecked("Mittwoch", "Dienstag")
    hideProdWhenChecked("Mittwoch", "Donnerstag")

    hideProdWhenChecked("Donnerstag", "Montag")
    hideProdWhenChecked("Donnerstag", "Dienstag")
    hideProdWhenChecked("Donnerstag", "Mittwoch")

    // show only the products/Workshop that happen on the selected day
    //e.g. Workshop1 is on Monday, so only show Workshop1 when Monday/Montag is selected
    // NOTE: markAsUnchecked does not trigger the deselection of the product, just the checkbox, we need workaround, maybe use .trigger("clicked")
    if (ischecked("Montag")) {
      
      showProduct("Workshop 1");
      showProduct("Workshop 1.1");
      showProduct("Workshop 1.2");
      
    } 
    else if (!ischecked("Montag")) {
      
      hideProduct("Workshop 1");
      hideProduct("Workshop 1.1");
      hideProduct("Workshop 1.2");
      
      uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1");
      uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1.1");
      uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1.2");
    }

    if (ischecked("Dienstag")) {
      
      showProduct("Workshop 2");
      
    } 
    else {
      
      hideProduct("Workshop 2");
      uncheckProduct2whenProduct1Isunchecked("Dienstag","Workshop 2");
      
    }

    if (ischecked("Mittwoch")) {
      
      showProduct("Workshop 3");
    }
    else {
      
      hideProduct("Workshop 3");
      uncheckProduct2whenProduct1Isunchecked("Mittwoch","Workshop 3");
    }

    if (ischecked("Donnerstag")) {
      
      showProduct("Workshop 4");
    } 
    else {
      
      hideProduct("Workshop 4");
      uncheckProduct2whenProduct1Isunchecked("Donnerstag","Workshop 4");
    }

  }


  if (name == "Erwachsene Dauerkarte") {
    // Customization 2
    //preselect all days, 
    //NOTE this does not Trigger the actual product... we need a workaround here, maybe not use .prop( "checked", true) but .trigger("clicked)"
    markAsChecked("Montag");
    markAsChecked("Dienstag");
    markAsChecked("Mittwoch");
    markAsChecked("Donnerstag");
    // disable all days
    disableProd("Montag");
    disableProd("Dienstag");
    disableProd("Mittwoch");
    disableProd("Donnerstag");
    
  }





}

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    init('customization2_attendee');
    handler()
    /*
    const name = $('.customization2_attendee-state_edit .customization2_attendee-1 .customization2_attendee_title').text().trim()
    console.log("const name: "+name);

    if (name == "Erwachsenen Ticket") {
      console.log("edit state");
     // you don't need checkbox.change() just check if the checkbox is selected and hide the correct field
      hideProd("Montag", "Dienstag")
      hideProd("Montag", "Mittwoch")
      hideProd("Montag", "Donnerstag")
  
      hideProd("Dienstag", "Montag")
      hideProd("Dienstag", "Mittwoch")
      hideProd("Dienstag", "Donnerstag")
  
      hideProd("Mittwoch", "Montag")
      hideProd("Mittwoch", "Dienstag")
      hideProd("Mittwoch", "Donnerstag")
  
      hideProd("Donnerstag", "Montag")
      hideProd("Donnerstag", "Dienstag")
      hideProd("Donnerstag", "Mittwoch")
  

    // show only the products/Workshop that happen on the selected day
    //e.g. Workshop1 is on Monday, so only show Workshop1 when Monday/Montag is selected
    // NOTE: markAsUnchecked does not trigger the deselection of the product, just the checkbox, we need workaround, maybe use .trigger("clicked")
    if (ischecked("Montag")) {
      showProduct("Workshop 1");
      showProduct("Workshop 1.1");
      showProduct("Workshop 1.2");
    } else if (!ischecked("Montag")) {
      hideProduct("Workshop 1");
      hideProduct("Workshop 1.1");
      hideProduct("Workshop 1.2");
      uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1");
      uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1.1");
      uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1.2");
    }

    if (ischecked("Dienstag")) {
      showProduct("Workshop 2");
    } else {
      hideProduct("Workshop 2");
      uncheckProduct2whenProduct1Isunchecked("Dienstag","Workshop 2");
    }

    if (ischecked("Mittwoch")) {
      showProduct("Workshop 3");
    } else {
      hideProduct("Workshop 3");
      uncheckProduct2whenProduct1Isunchecked("Mittwoch","Workshop 3");
    }

    if (ischecked("Donnerstag")) {
      showProduct("Workshop 4");
    } else {
      hideProduct("Workshop 4");
      uncheckProduct2whenProduct1Isunchecked("Donnerstag","Workshop 4");
    }

  }


  if (name == "Erwachsene Dauerkarte") {
    // Customization 2
    //preselect all days, 
    //NOTE this does not Trigger the actual product... we need a workaround here, maybe not use .prop( "checked", true) but .trigger("clicked)"
    markAsChecked("Montag");
    markAsChecked("Dienstag");
    markAsChecked("Mittwoch");
    markAsChecked("Donnerstag");
    // disable all days
    disableProd("Montag");
    disableProd("Dienstag");
    disableProd("Mittwoch");
    disableProd("Donnerstag");
    
  }

  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
*/

console.log('Start working, Google Tag Manager (Load different GTM-Container into the widget for each event)');


/*
Code from https://github.com/viovendi/viovendi.github.io/blob/master/customizations/organization/14176/checkboxes.js
Preview Link: https://doo.net/de-de/preview/widget.html?isPreview=true&configName=booking-14842-23230&eventId=71456&locale=de-de&organizerId=14842&widgetType=booking
OID 14842


var windowpath = window.location.pathname;
var language = windowpath.split('/')[1]

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
    }
  }
                                                          )
  return checked;
}

function enabledDisabledButton(name){
  var ticketTitle = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
  if (!(ticketTitle == "Dauerkarte" || ticketTitle == "Tortenwettbewerb" || ticketTitle == "Multi-day ticket" || ticketTitle == "Cake contest") ) {
     if(calcCheckboxes(name) < 1 ){
       $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', true);
       if( $('.'+name+' .customization2_attendee_edit-action .button-error-message').length < 1 ){
        console.log(language)
         if (language == "en-us"){
        $('.'+name+' .customization2_attendee_further-data_product-1').before('<span class="button-error-message error-text error-text--multiple">Please select a date</span>');
        //$('.'+name+' .customization2_attendee_further-data_headline').after('<span class="button-error-message error-text error-text--multiple">Bitte wählen Sie einen Termin an dem Sie die Messe besuchen möchten aus.</span>');
         }
         else {
           $('.'+name+' .customization2_attendee_further-data_product-1').before('<span class="button-error-message error-text error-text--multiple">Bitte wählen Sie einen Termin an dem Sie die Messe besuchen möchten aus.</span>');
         }
         // this removes the error message in state_view
         $('.customization2_attendee-state_view .button-error-message').remove();

       }
     }else{
       $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', false);
       $('.'+name+' .button-error-message').remove();
     }
    }
}
*/

/* --------- Olegs Code begins -------- */

var path = window.location.pathname;
var eventId = path.split('/')[3];
var locale = path.split('/')[1];;
//console.log(locale);

async function makeRequest(options) {
    let result = null;
    try {
        result = await $.ajax(options);
        return result;
    } catch (error) {
        console.error(error);
    }
}




async function getEventInfo(eventId,locale) {
    const result = await makeRequest({
        url: `https://api.doo.net/v1/events/${eventId}?locale=${locale}`,
        type: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
        dataType: 'json',
    })
    console.log({result})
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
        return v.name.includes(ticketTitle);
    });
    console.log(result)
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
    const eventInfo = await getEventInfo(eventId, locale);
    const attributeId = getTicketAttributeId(ticketTitle, eventInfo.ticket_categories)
    const attributeName = getEventAttributeName(attributeId, eventInfo.attributes);
    if (attributeName === 'Montag') {
        console.log('Montag');
        isCheked()
        prodCheked()
    } else if (attributeName === 'Dienstag') {
        console.log('Dienstag');
        chekedAllProd()
    }
}

customization()

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log('bookerNodeInserted')
        customization()

      // Added this so that this works for every attendee
      //  init('customization2_attendee');
    }
}


document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);
