
console.log('github code');


var insertionListener = function (event) {
    if (event.animationName === 'nodeInsertedSeats') {
        hendler();
    }else if(event.animationName === 'ticketCatsLoaded'){
        console.log('ticket cat loaded!!!');
        clearTicketsInManager();
        
        if($('#chart').length === 0){
            console.log('ticketCatsLoaded');
            addSeatScript();
        }
    }else if(event.animationName === 'chartScriptAdded'){
        //console.log('chartScriptAdded');
        //createSeats();
    }else if(event.animationName === 'attendeeEdited'){
        console.log('attendeeEdited');
        fillTicketId();
        // get classnames todetect the attendee number
        // fill in the ticket id + disable the field
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
    setSeatsIdToTicket();
    localStorage.setItem('isEditMode', 1);
    // page 2 function
    // autifill the seats io ID
    // console.log();
    
  }
}


function fillTicketId(){
    console.log('fillTicketId');
    const seatsArray = localStorage.getItem('seatsObject');
    
    const expandedAttendee = $('.customization2_attendee.collapsible-wrapper--expanded');
    console.log(expandedAttendee);
    
    const classList = expandedAttendee.attr('class').split(/\s+/);
    console.log(classList);
    console.log(classList[3]);
    

    const attendeeIndex = parseInt(classList[3].match(/[^-]*$/));
    console.log(attendeeIndex);
    
    const ticketArray = localStorage.getItem('seatsObject');
    
    console.log(ticketArray);
    console.log(ticketArray[attendeeIndex]);
    
    const labels = expandedAttendee.find('.customization2_attendee_further-data_custom-question_label');
    
    
    
    $.each(labels, function(index, item) {
        console.log(item.outerText.indexOf('Ticket-ID'));
        if (item.outerText.indexOf('Ticket-ID') >= 0) {
            //do something
            const inputField = $(this).clsest('label').find('.customization2_attendee_further-data_custom-question_input');
            console.log(inputField);
            inputField.attr('value', ticketArray[attendeeIndex]);
            inputField.attr('disabled', true);
        }
        
    });
    
}



function setSeatsIdToTicket(){
    const seatsObj = localStorage.getItem('seatsObject');
    console.log(seatsObj);
    console.log('setSeatsIdToTicket');
}


function clearTicketsInManager(){
    $('.event-categories li').each(function(){
        var zeroOption = $(this).find('.vv-single-select-option')[0];
        
        zeroOption.dispatchEvent(new Event("change"));
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

function saveSeatsObj(){
 $('.customization-booking-area-wrapper-page1 .customization-button-next').on('click', function(){
    if(localStorage.getItem('seatsObject')){
        localStorage.removeItem('seatsObject');
    }
    localStorage.setItem('seatsObject', JSON.stringify(selectedSeats));
 });
}

function testLoadFunc(){
    console.log('testLoadFunc!');
}

/**********.check if seatsio loaded ***********/

function checkIfSeatsioLoaded(){
    setInterval(checkTimer, 1000);
}

function checkTimer() {
    console.log($('#chart .seatsio-loading-screen').length);
    
    if($('#chart .seatsio-loading-screen').length > 0){
        console.log('stop interval');
        clearInterval(checkTimer);
    }else{
        console.log('create seats again');
        if($('#chart').length === 0){
            addSeatScript();
        }
        createSeats();
    }
}

/*********************/

function addSeatScript(){
    var scriptSeats = document.createElement('script');
    scriptSeats.type = 'text/javascript';
    scriptSeats.src = "https://cdn-eu.seatsio.net/chart.js";
    
    var div = document.createElement('div');
    div.id = 'chart';
    
    var wraper = $('.customization-booking-area-wrapper > div');
    
    wraper.prepend(div);
    wraper.append(scriptSeats);
    
    scriptSeats.onload = function() {testLoadFunc()};
    
    // TODO replace with onReady function
    
    setTimeout(function(){
        // wait for categories loaded
        // set all tickets to 0
        // run seats io script
        
        createSeats();
        
        //checkIfSeatsioLoaded();
    },500);

}


// object for ticket cat mapping
var mapObject = {
    T: 'Cat 1',
    A: 'Cat 2',
    B: 'Cat 3'
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


function setTicketCategoryChosen(ticketLabel, action){
    
    $('.event-categories li').each(function(){
        const categoryName = $(this).find('.customization-category-name').text().trim();
        
        if(categoryName === mapObject[ticketLabel]){
            
            console.log(categoryName);
            
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
}

/*************
Seats.io
*************/

// array for chosen tickets
var selectedSeats = [];

function createSeats(){
    
    new seatsio.SeatingChart({
        divId: 'chart',
        workspaceKey: 'ef77668e-17cb-4bc3-b018-710cbb7d7469',
        event: 'f31042b2-4ac3-4c96-a1e5-43c1291fa709',
        session: 'continue',
        pricing: [
           {'category': 'A', 'price': 30}, 
           {'category': 'B', 'price': 40}, 
           {'category': 'T', 'price': 50}
        ],
        priceFormatter: function(price) {
            return '$' + price;
        },
        onObjectSelected: function (object) {
            // add the selected seat id to the array
            console.log('onObjectSelected');
            console.log(object);
            
            console.log('isEditMode:');
            console.log(localStorage.getItem('isEditMode'));
            if(!localStorage.getItem('isEditMode')){
                console.log('isEditMode-off');
                selectedSeats.push(object.label);
            }
            
            setTicketCategoryChosen(object.category.label, 'add');

        },
        onObjectDeselected: function (object) {
            // remove the deselected seat id from the array
            console.log('onObjectDeselected');
            console.log(object);
            
            
            console.log('selectedSeats: '+selectedSeats);
            var index = selectedSeats.indexOf(object.label);
            console.log(index);
            if (index !== -1) selectedSeats.splice(index, 1);
            
            console.log('selectedSeats-new: '+selectedSeats);
            
            setTicketCategoryChosen(object.category.label, 'remove');
        },
        onChartRendered: function(chart) {
            console.log('chart is loaded');
            // run the 
            const ticketArray = localStorage.getItem('seatsObject');
            if(ticketArray){
                console.log('set from the array page2');
                setTicketsFromPreviousChose(JSON.parse(ticketArray));
                //clear array
                //localStorage.removeItem('seatsObject');
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
