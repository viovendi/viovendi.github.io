console.log("git sommerakademie");



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

function enableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) >= 0){
                checkbox.prop( "disabled", false )
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
 
    const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
    console.log(name);

  if (name == "Teilnehmeranmeldung" ) {
    // hide other day when 1 day is selected
   if (ischecked("Zweitägig: Mo / Di 13:30 – 17:00 Uhr 10:00 – 17:00 Uhr: Das Neue aus dem Alten, die Schönheit verbirgt sich im Unerwarteten – Schmuckgestaltung aus Abfallmaterial")) {
      console.log("checked");
      disableProd("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
      uncheckProd("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
      disableProd("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
      uncheckProd("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
    } 
    else if (!ischecked("Zweitägig: Mo / Di 13:30 – 17:00 Uhr 10:00 – 17:00 Uhr: Das Neue aus dem Alten, die Schönheit verbirgt sich im Unerwarteten – Schmuckgestaltung aus Abfallmaterial")) {
      console.log("notchecked");
      enableProd("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");

     // uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1");
      
    }

    if (ischecked("P2")) {
      uncheckProd("2Tage");
      
    } 
    else {
      
      hideProduct("Workshop 2");
      uncheckProduct2whenProduct1Isunchecked("Dienstag","Workshop 2");
      
    }

    

  }






}

// function pretty similar to handler(); is called when attendee is editing his data
function inEditMode(){
    const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
    console.log('edit mode');
    console.log(name);
  
  // name == "Erwachsenen Ticket" || name == "Tagesticket Kind (6-13 Jahre)" || name == "Tagesticket Kind unter 6 Jahre" || name == "Tagesticket ermäßigt" || name == "Gruppenticket (ab 10 P)" || name == "Tagesticket Erwachsene" || name == "Gruppenticket" || name == "Schwerbehinderten Ticket" || name == "Begleitperson"
    
  if (name == "Tagesticket Presse") {
          console.log("edit state");
         // you don't need checkbox.change() just check if the checkbox is selected and hide the correct field
          hideProd("P1", "2 tägiger WS Mo und Di")
          
          // maybe we need this so .onchange is triggered



        // show only the products/Workshop that happen on the selected day
        //e.g. Workshop1 is on Monday, so only show Workshop1 when Monday/Montag is selected
        // NOTE: markAsUnchecked does not trigger the deselection of the product, just the checkbox, we need workaround, maybe use .trigger("clicked")
        if (ischecked("Montag")) {

          showProduct("Workshop 1");
          showProduct("Workshop 1.1");
          showProduct("Workshop 1.2");

        } 
        else if (!ischecked("Montag")) {

          uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1");
          uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1.1");
          uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1.2");
          hideProduct("Workshop 1");
          hideProduct("Workshop 1.1");
          hideProduct("Workshop 1.2");

          console.log("uncheck ws1");

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

  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
