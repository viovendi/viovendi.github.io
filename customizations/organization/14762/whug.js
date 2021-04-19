console.log('Start working, Google Tag Manager (WHUG)');



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
          console.log("uncheck" + product2 +" if " +product1 +" is checked");
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
  */

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
 
*/


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
    handler();

    const name1 = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
    console.log("const name1: "+name1);

     $('.customization2_attendee .customization2_attendee_further-data_product_checkbox').on('change', function () {
        console.log("checkbox change");
    
    if (name1 == "Erwachsenen Ticket") {
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

    if (ischecked("Dienstag")) {
      
      showProduct("Workshop 2");
      
    } 
    else {
            console.log("uncheck ws2");
      uncheckProduct2whenProduct1Isunchecked("Dienstag","Workshop 2");
      hideProduct("Workshop 2");
      
    }

    if (ischecked("Mittwoch")) {
      
      showProduct("Workshop 3");
    }
    else {
      console.log("uncheck ws3");
      uncheckProduct2whenProduct1Isunchecked("Mittwoch","Workshop 3");
      hideProduct("Workshop 3");
      
    }

    if (ischecked("Donnerstag")) {
      
      showProduct("Workshop 4");
    } 
    else {
      console.log("uncheck ws4");
      uncheckProduct2whenProduct1Isunchecked("Donnerstag","Workshop 4");
      hideProduct("Workshop 4");
      
    }

  }


  if (name1 == "Erwachsene Dauerkarte") {
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

    });
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 

