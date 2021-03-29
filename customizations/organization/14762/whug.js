console.log('Start working, Google Tag Manager (WHUG)');


/*
/------- Code from Oleg ------ 


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

function disableProdByName(shortName) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if (checkboxName.includes(shortName)) {
            checkbox.prop("disabled", true)
        }
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

function hideProduct(shortName){
      $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
              if(checkboxName.indexOf(shortName) >= 0){
                 $(this).css(display = "none");
              }
     });
 }

function showProduct(shortName){
      $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
              if(checkboxName.indexOf(shortName) >= 0){
                 $(this).css(display = "block");
              }
     });
 }

 


async function customization() {
    const ticketTitle = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
    console.log("ticketTitle: " +ticketTitle)
    const eventInfo = await getEventInfo(eventId);
    console.log("eventInfo: " +eventInfo);
    const attributeId = getTicketAttributeId(ticketTitle, eventInfo.ticket_categories)
    const attributeName = getEventAttributeName(attributeId, eventInfo.attributes);
    console.log("attributeName: " +attributeName)
    if (attributeName === 'Montag') {
        console.log('Montag');
        prodCheked()
    } else if (attributeName === 'Dienstag') {
    console.log(attributeName)
        console.log('Customization2Dinestag');
        chekedAllProd()
    }

    
    
}
    

customization()

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log('bookerNodeInserted')
        customization()
    }
}


document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);

//----------- End Code from Oleg ------
*/

// call handler whenever a checkbox is clicked/changed
function init(name){
 $('.'+name+' .customization2_attendee_further-data_product_checkbox').on('change', function(){
      handler();
 });
}

init('customization2_attendee');

handler();



    // retuen 1 id checkbox is checked , return 0 when not checked                                                      
          
                                                          
  //hides Products
  function hideProduct(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(shortName) >= 0){
              console.log("hide");
             $(this).hide();
          }
 });
  }

// show Products
 function showProduct(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(shortName) >= 0){
             $(this).show();
          }
 });
  }
   

   // this hides or shows another product when checkbox is checked or unchecked
  function hideProdWhenChecked(shortName, hide){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             hideProduct(hide)
          }
        }else if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             showProduct(hide);
          }
          }
      })
    })
  }

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
  }
        
function showProdWhenChecked(shortName, show){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             showProduct(show)
          }
        }else if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             hideProduct(show)
          }
          }
      })
    })
  }



 
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
  
  function recheckProd(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      
      if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             checkbox.trigger('click');
             checkbox.trigger('click');
          }
        }
  }
                                                        )};

  function markAsChecked(name){
       $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
       if(checkboxName.indexOf(name) >= 0){
             checkbox.prop('checked', true);
          }
   });
  }
async function ischecked(shortName){
   $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      
        if(checkbox.is(':checked')){
            console.log("checkbox is checked + name:" + checkboxName)
          if(checkboxName.indexOf(shortName) >= 0){
             console.log("checked");
             return true;
          }
        }if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             console.log("unchecked");
             return false;
          }
          }
    })
  }
    /*hideProduct("Workshop 1");
    hideProduct("Workshop 2");
    hideProduct("Workshop 3");
    hideProduct("Workshop 4");*/
  
  
async function handler(){
 

    //get Ticket name:
  
  const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()

  
  //pseudo code
  /*
   if any day ticket is selected:
   by clicking one day (eg. Monday), hide all other day
   show only the workshops that are on the selected day
   */
  console.log(name);
   
 
    
  
  if (name == "Erwachsenen Ticket" ){

    hideProdWhenChecked("Montag", "Dienstag" )
    hideProdWhenChecked("Montag", "Mittwoch" )
    hideProdWhenChecked("Montag", "Donnerstag" )
    
    hideProdWhenChecked("Dienstag", "Montag" )
    hideProdWhenChecked("Dienstag", "Mittwoch" )
    hideProdWhenChecked("Dienstag", "Donnerstag" )
      
    hideProdWhenChecked("Mittwoch", "Montag" )
    hideProdWhenChecked("Mittwoch", "Dienstag" )
    hideProdWhenChecked("Mittwoch", "Donnerstag" )
      
    hideProdWhenChecked("Donnerstag", "Montag" )
    hideProdWhenChecked("Donnerstag", "Dienstag" )
    hideProdWhenChecked("Donnerstag", "Mittwoch" )
      
   console.log("ischecked montag:  "+ischecked("Montag"))
    if(ischecked("Montag")){
      console.log("showws1");
      showProduct("Workshop 1");
      
    }
    if( !ischecked("Montag")){
     hideProduct("Workshop 1");
     console.log("hide");
    }
   
    if( ischecked("Dienstag")){
      showProduct("Workshop 2");
    }
    else{
      hideProduct("Workshop 2");
    }
   
   if(ischecked("Mittwoch")){
      showProduct("Workshop 3");
    }
    else{
      hideProduct("Workshop 3");
    }
   
   if(await ischecked("Donnerstag") == 1){
      showProduct("Workshop 4");
    }
    else{
      hideProduct("Workshop 4");
    }
    //showProdWhenChecked("Montag", "Workshop 1");
    //showProdWhenChecked("Dienstag", "Workshop 2");
    //showProdWhenChecked("Mittwoch", "Workshop 3"); 
    //showProdWhenChecked("Donnerstag", "Workshop 4"); 
      
    
   }
    // if no day is selected, hide all Workshops
    if (ischecked("Montag") == 0 && ischecked("Dienstag") == 0 && ischecked("Mittwoch") == 0 && ischecked("Donnerstag") == 0 ){
       /* hideProduct("Workshop 1");
        hideProduct("Workshop 2");
        hideProduct("Workshop 3");
        hideProduct("Workshop 4");
        */
       
   }
    
    if (name == "Erwachsene Dauerkarte" ){
        //preselect all days
       markAsChecked("Montag");
       markAsChecked("Dienstag");
       markAsChecked("Mittwoch");
       markAsChecked("Donnerstag");
        // disable all days
       /*disableProd("Montag");
       disableProd("Dienstag");
       disableProd("Mittwoch");
       disableProd("Donnerstag");
       */
    }
    

    
    

}
  
  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      console.log("Node has been inserted: ", event.target);
      //Insert your code here
      init('customization2_attendee');
    
    }};
  
document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 

 
