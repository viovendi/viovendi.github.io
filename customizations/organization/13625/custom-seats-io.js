
console.log('github seats.io code');

var insertionListener = function (event) {
    if (event.animationName === 'nodeInsertedSeats') {
        hendler();
    }else if(event.animationName === 'ticketCatsLoaded'){
        if($('.event-categories>li').length > 0){
            clearTicketsInManager();
            if($('#chart').length === 0){
                addSeatScript();
            }
        }
        /*
        clearTicketsInManager();
        if($('#chart').length === 0){
            addSeatScript();
        }
        */
    }else if(event.animationName === 'chartScriptAdded'){
        //console.log('chartScriptAdded');
    }else if(event.animationName === 'attendeeEdited'){
        //fillTicketId();  Function to fill in the Ticket-ID custom attendee question. It's not relevant for OID#13625
    }
};
hendler();

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari


async function hendler() {
  if (document.readyState !== 'loading') {

    await getPage('page1');
    console.log("page1!");
    saveSeatsObj();

      
    await getPage('page2');
    console.log("page2!");
    localStorage.setItem('isEditMode', 1);
      
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
  }
}

function bookSeats(dooOrderId, dooOrganizationId){
    const seatHoldToken = localStorage.getItem('holdToken') ? localStorage.getItem('holdToken') : 'none'
    const body = {
        seats: JSON.parse(localStorage.getItem('seatsObject')),
        oid: dooOrganizationId,
        orderId: dooOrderId,
        token: seatHoldToken
    };
    
    $.post( 'https://hook.doo.integromat.celonis.com/rtensm428nebgnsh0p4prkxcgivg5e49', body)
      .done(function() {
        localStorage.removeItem('seatsObject');
        localStorage.removeItem('isEditMode');
        localStorage.removeItem('holdToken');
      });
}

var isSent = false;
function getXMLHttpRequest (open) {
    XMLHttpRequest.prototype.open = function() {
      this.addEventListener("readystatechange", function() {
        if(this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders" ){
          try {
            var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText): undefined;
          } catch (err) {}
          if(res != undefined && res._embedded){

           // send the request to Make (to confirm the seats booking)
              
             const orders = res._embedded.orders;
             const order_id = orders[0].id;
             const organizer_id = orders[0].event.organizer_id;
             if(!isSent){
                bookSeats(order_id, organizer_id);
                isSent = true;
             }
          }
        }
      }, false);
      open.apply(this, arguments);
    };
};


function fillTicketId(){
    console.log('fillTicketId');
    
    const expandedAttendee = $('.customization2_attendee.customization2_attendee-state_edit');
    const classList = expandedAttendee.attr('class').split(/\s+/);
    const attendeeIndex = parseInt(classList[3].match(/[^-]*$/))-1;
    const seatsArray = JSON.parse(localStorage.getItem('seatsObject'));
    const labels = expandedAttendee.find('.customization2_attendee_further-data_custom-question_label');
    
    $.each(labels, function(index, item) {
        if (item.outerText.indexOf('Ticket-ID') >= 0) {
            const inputField = $(this).closest('label').find('.customization2_attendee_further-data_custom-question_input');
            if(!inputField.val() || inputField.val()===''){
                
              inputField.click();
                
              inputField.val(seatsArray[attendeeIndex]);
                
              let event;
              if (typeof (Event) === 'function') {
                event = new Event('input'); // for Chrome
              } else {
                event = document.createEvent('Event');
                event.initEvent('input', true, true); // for IE
              }
              inputField[0].dispatchEvent(event);           
            }
            inputField.attr('disabled', true);
        }       
    });
}


function clearTicketsInManager(){
    $('.event-categories .event-category:not(.event-category--fade)').each(function(){
        var zeroOption = $(this).find('.vv-single-select-option')[0];
            zeroOption.dispatchEvent(new Event('change'));
            zeroOption.click();
    });
}
  
  
async function getPage(page) {
  var pages = {
    page1: "customization-booking-area-wrapper-page1",
    page2: "customization-booking-area-wrapper-page2",
  };
  return new Promise(function (resolve, reject) {
    try {
      const element = document.querySelector("body");

      var observer = new MutationObserver(pageLoaded);

      function pageLoaded(mutations) {
        mutations.forEach((mutation) => {
          var classList = mutation.target.classList
            ? [...mutation.target.classList]
            : [];
          if (
            mutation.type === "childList" &&
            classList.indexOf(pages[page]) != -1
          ) {
            resolve({
              selector: document.querySelector("." + pages[page]),
              dataLayer: dataLayer,
            });
          }
        });
      }

      observer.observe(element, {
        characterData: true,
        subtree: true,
        childList: true,
      });
    } catch (error) {
      reject(new Error(error));
    }
  });
}

function showError(){
    console.log('showError');
    const first_page_bttn = $('.customization-booking-area-wrapper-page1 .customization-button-next');
    first_page_bttn.attr('disabled', true);
    
    console.log($('.error-message').length);
    
    first_page_bttn.closest('div').append('<span class="error-message" style="color: red; position: absolute; right: 40px; bottom: 100px;">Please choose the seat.</span>');
    
    if($('.error-message').length < 0){
        first_page_bttn.after('<span class="error-message">Please choose the seat.</span>');
    }
}

function hideError(){
    console.log('hideError');
    const first_page_bttn = $('.customization-booking-area-wrapper-page1 .customization-button-next');
    first_page_bttn.attr('disabled', false);
    $('.error-message').remove();
}

function saveSeatsObj(){
 $('.customization-booking-area-wrapper-page1 .customization-button-next').on('click', function(){
     
     console.log(selectedSeats);
     
     if(selectedSeats.length < 1){
        console.log('empty seats arr');
         showError();
     }
     
    if(localStorage.getItem('seatsObject')){
        localStorage.removeItem('seatsObject');
    }
    localStorage.setItem('seatsObject', JSON.stringify(selectedSeats));
 });
}

function validateToken(){
    let holdToken = localStorage.getItem('holdToken');
    
    $.post( 'https://hook.doo.integromat.celonis.com/pirid122b2617uut25d9rfppipf08jnw', { token: holdToken })
      .done(function(res) {
        
        if(res === 'invalid'){
            // set ticket categories to 0
            clearTicketsInManager();
            // clear the seatsAray from localstorage
            localStorage.removeItem('seatsObject');
            
            $.post( 'https://hook.doo.integromat.celonis.com/1n36mejk0v8t313x5epfidrw0w32mskl')
              .done(function(res) {
                createSeats(JSON.parse(res).holdToken);
                localStorage.setItem('holdToken', JSON.parse(res).holdToken);
              });
        }else{
            createSeats(holdToken);
        }
        
    });
}

/*********************/

function addSeatScript(){
    // move adding script to custom.js ??
    var scriptSeats = document.createElement('script');
    scriptSeats.type = 'text/javascript';
    scriptSeats.src = "https://cdn-eu.seatsio.net/chart.js";
    
    var div = document.createElement('div');
    div.id = 'chart';
    
    var wraper = $('.customization-booking-area-wrapper > div');
    
    wraper.prepend(div);
    wraper.append(scriptSeats);
    
    setTimeout(function(){
        // get the holdToken
        validateToken();
    }, 500);

}


// object for ticket cat mapping
var mapObject = {
    Normal: 'DAT 2023 – Ausstellerticket',
    Premium: 'DAT 2023 Ausstellerticket (Premium)'
};


function setTicketsFromPreviousChose(arr){
    $.each(mapObject, function( key, value ) {        
        let keyNum = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].indexOf(key) >= 0){
                keyNum++;
            }
        }
        // set the data
        $('.event-categories li').each(function(){
            const categoryName = $(this).find('.customization-category-name').text().trim();
            if(categoryName === value){
                const selectedInputNum = keyNum;
                var allOptions = $(this).find('.vv-single-select-option');
                selectOptions(allOptions, selectedInputNum);
            }
        });
    });
    console.log('removeItem');
    localStorage.removeItem('isEditMode');
}

function hideCategoryByName(name){
    let category = '';
    
    $('.event-categories li').each(function(){
        // const categoryName = $(this).find('div.event-category:not(.event-category--child) .customization-category-name').text().trim();
        // changed structure?
        const categoryName = $(this).find('.customization-category-name').text().trim();
        $(this).removeClass('hidden');
        if(categoryName.indexOf(name) > -1){
            $(this).addClass('hidden');
        }
    });
    return category;
}


function setTicketCategoryChosen(ticketLabel, action){
    
    $('.event-categories li').each(function(){
        // const categoryName = $(this).find('div.event-category .customization-category-name').text().trim();
        // changed structure?
        const categoryName = $(this).find('.customization-category-name').text().trim();
        console.log(categoryName);
        if(categoryName === mapObject[ticketLabel]){
            console.log('found');
            var selectedInputNum = parseInt($(this).find('.vv-selection-input__value').text().trim());
            var allOptions = $(this).find('.vv-single-select-option');
            
            if(action === 'add'){
              // add record to the state obj
              selectedInputNum++;
            }else{
              // add record to the state obj
              selectedInputNum--;
            }
            selectOptions(allOptions, selectedInputNum);
        }
    });
    
}

function selectOptions(options, selectedInput) {  
  var inputNumber = +selectedInput;
  for (var y = 0; y < options.length; y++) {
    var optionsNumber = +options[y].textContent.trim();
    
    if (optionsNumber === inputNumber) {        
      const tergetElement = options[y];
        
      tergetElement.dispatchEvent(new Event("change"));
      tergetElement.click();
    }
  }
    setTimeout(function(){
      $('.event-categories').click();
    }, 300);
}

/*************
Seats.io
*************/

// array for chosen tickets
let selectedSeats = [];

function createSeats(token){
    
    new seatsio.SeatingChart({
        divId: 'chart',
        workspaceKey: 'a54106b2-da28-482d-adcb-b2205f74fa72',
        event: '9acbae92-ab17-45d9-b934-1f1255cc3e86',
        session: 'manual',
        holdToken: token,
        maxSelectedObjects: 1,
        /*pricing: [
           {'category': 'A', 'price': 30},
           {'category': 'B', 'price': 40},
           {'category': 'C', 'price': 0},
           {'category': 'T', 'price': 50}
        ],
        priceFormatter: function(price) {
            return '$' + price;
        },*/
        onObjectSelected: function (object) {
            // add the selected seat id to the array
            console.log('onObjectSelected');
            console.log(object);
            
            hideError();
          
            if(!localStorage.getItem('isEditMode')){
                console.log('isEditMode-off');
                selectedSeats.push(object.label);
            }
            
            // hide ticket cat
            if(object.category.label === 'Normal'){
                console.log(`hide-${mapObject.Premium}`);
                hideCategoryByName(mapObject.Premium);
                //hideCategoryByName('DAT 2023 Ausstellerticket (Premium)');
            }
            
            if(object.category.label === 'Premium'){
                console.log(`hide-${mapObject.Normal}`);
                hideCategoryByName(mapObject.Normal);
                //hideCategoryByName('DAT 2023 – Ausstellerticket');
            }
            
            setTicketCategoryChosen(object.category.label, 'add');

        },
        onObjectDeselected: function (object) {
            // remove the deselected seat id from the array
            
            var index = selectedSeats.indexOf(object.label);
            console.log(index);
            if (index !== -1) selectedSeats.splice(index, 1);
            
            $('.event-categories li').removeClass('hidden');
            
            setTicketCategoryChosen(object.category.label, 'remove');
        },
        onChartRendered: function(chart) {
            console.log('chart is loaded');
            // run the 
            const ticketArray = JSON.parse(localStorage.getItem('seatsObject'));
            if(ticketArray){
                selectedSeats = ticketArray;
                //setTicketsFromPreviousChose(JSON.parse(ticketArray));
                setTicketsFromPreviousChose(ticketArray);
            }
        },
        onChartRenderingFailed: function(chart) {
          // does not work?!
          console.log('not loaded');
          chart.destroy();
          chart.render();
        }
    }).render();
}
