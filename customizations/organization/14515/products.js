console.log("git sommerakademie");



// call handler whenever a checkbox is clicked/changed
function init(name) {
  $('.' + name + ' .customization2_attendee_further-data_product_checkbox').on('change', function () {
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(8)").hide();
    handler();
  });
}

init('customization2_attendee');

handler();

//hide product group



function showProductGroup(shortName){
$('.customization2_attendee_further-data_product').each(function(i, element) {
     var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
     var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

     if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
           //todo show product group
           document.querySelector("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(8)").show();
           console.log(checkboxName + "clicked / unchecked");
         }
       }
 }
                                                      )};

function disableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) >= 0){
                checkbox.prop( "disabled", true )
             }
    });
   }

function enableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) >= 0){
                checkbox.prop( "disabled", false )
             }
    });
   }



function uncheckProd(shortName){
$('.customization2_attendee_further-data_product').each(function(i, element) {
     var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
     var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

     if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
            checkbox.trigger('click');
           console.log(checkboxName + "clicked / unchecked");
         }
       }
 }
                                                      )};

function disablenaduncheck(shortName){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          
          //disable
             if(checkboxName.indexOf(shortName) >= 0){
                checkbox.prop( "disabled", true )
             }
      //uncheck:
      if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
            checkbox.trigger('click');
           console.log(checkboxName + "clicked / unchecked");
         }
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
  showProductGroup("13:30 – 17:30 Uhr: LET´S TALK - Service & Beratung ganz individuell zum Unterrichtshilfeportal (UHP) MV");
    const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
    // hide other day when 1 day is selected
    console.log("1");
   if (ischecked("Zweitägig: Mo / Di 13:30 – 17:00 Uhr 10:00 – 17:00 Uhr: Das Neue aus dem Alten, die Schönheit verbirgt sich im Unerwarteten – Schmuckgestaltung aus Abfallmaterial")) {
     console.log("2");
      disablenaduncheck("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
      //uncheckProd("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
      disablenaduncheck("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
     // uncheckProd("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
      disablenaduncheck("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst");
     // uncheckProd("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst");
     
     
    } 
    else if (!ischecked("Zweitägig: Mo / Di 13:30 – 17:00 Uhr 10:00 – 17:00 Uhr: Das Neue aus dem Alten, die Schönheit verbirgt sich im Unerwarteten – Schmuckgestaltung aus Abfallmaterial")) {
      console.log("notchecked");
      enableProd("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
      enableProd("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
      enableProd("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst");


     // uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1");
      
    }

    if (ischecked("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen")) {
      disablenaduncheck("Zweitägig: Mo / Di 13:30 – 17:00 Uhr 10:00 – 17:00 Uhr: Das Neue aus dem Alten, die Schönheit verbirgt sich im Unerwarteten – Schmuckgestaltung aus Abfallmaterial");
      
    } 
    else {
      
      
    }
  
}

// function pretty similar to handler(); is called when attendee is editing his data
function inEditMode(){
    const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
    
  
  // name == "Erwachsenen Ticket" || name == "Tagesticket Kind (6-13 Jahre)" || name == "Tagesticket Kind unter 6 Jahre" || name == "Tagesticket ermäßigt" || name == "Gruppenticket (ab 10 P)" || name == "Tagesticket Erwachsene" || name == "Gruppenticket" || name == "Schwerbehinderten Ticket" || name == "Begleitperson"
    
  if (name == "Fortbildungsanmeldung") {
        //TODO
        if (ischecked("Montag")) {
        //TODO (copy from above)

        } 
        else if (!ischecked("Montag")) {
          //TODO (copy from above)
        }
      }
}

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    init('customization2_attendee');
    handler();
    inEditMode();
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(8)").hide();

  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 


//hides Products
/*function hideProduct(shortName) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
    if (checkboxName.includes(shortName)) {
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
}*/


/*function markAsChecked(name) {
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
}*/



// this hides or shows another product when checked or unchecked
/*function hideProdWhenChecked(shortName, hide) {
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

    //checkbox.change(function () {
      if (!checkbox.is(':checked')) {
        if (checkboxName.includes(product1)) {
          console.log("uncheck" + product2 +" if " +product1 +" is unchecked");
          uncheckProd(product2)
        }
      } 
    //})
  })
}
*/


/*function hideProd(shortName, hide) {
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

    if (checkbox.is(':checked')) {
      if (checkboxName.includes(shortName)) {
        hideProduct(hide)
      }
    } 
  })
}*/


/*function showProdWhenChecked(shortName, show) {
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
}*/


