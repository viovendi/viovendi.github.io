
console.log('github code');


var insertionListener = function (event) {
    if (event.animationName === "nodeInsertedSeats") {
        hendler();
    }
};
hendler();

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari


async function hendler() {
  if (document.readyState !== "loading") {

    await getPage("page1");
    console.log("page1!");
    addSeatScript();

    await getPage("page2");
    console.log("page2!");
    // page 2 function
    
  }
}

/*
function setCSSstyles() {
  var style = document.createElement("style");
  style.innerHTML = `
  @keyframes nodeInsertedSeats {
    from { opacity: 0.99; }
    to { opacity: 1; }
  }
  .event-booking-widget .customization-booking-area-wrapper-page1{
    animation-duration: 0.1s;
    animation-name: nodeInsertedSeats;
  }`;
};
setCSSstyles();
*/
  
  
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


function addSeatScript(){
    console.log('addSeatScript');
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdn-eu.seatsio.net/chart.js";
    
    var div = document.createElement('div');
    div.id = 'chart';
    
    var wraper = $('.customization-booking-area-wrapper > div');
    
    wraper.prepend(div);
    wraper.append(script);
    
    // TODO replace with onReady function
    
    setTimeout(function(){
        createSeats();
    },500);
    
}


// object for ticket cat mapping
var mapObject = {
    T: 'Cat 1',
    A: 'Cat 2',
    B: 'Cat 3'
};

function setTicketCategoryChosen(ticketLabel, action){
    
    $('.event-categories li').each(function(){
        const categoryName = $(this).find('.customization-category-name').text().trim();
        
        if(categoryName === mapObject[ticketLabel]){
            
            var selectedInputNum = parseInt($(this).find('.vv-selection-input__value').text().trim());
            console.log('selectedInputNum-in');
            console.log(selectedInputNum);
            
            var allOptions = $(this).find('.vv-single-select-option');
            var allOptionsJS = this.querySelectorAll('.vv-single-select-option');
            
            console.log('allOptions');
            console.log(allOptions);
            console.log('--------');
            console.log(allOptionsJS);
            
            if(action === 'add'){
              // add record to the state obj
              selectedInputNum++;
            }else{
              // add record to the state obj
              selectedInputNum--;
            }
            console.log('selectedInputNum-out');
            console.log(selectedInputNum);
            
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
      console.log(tergetElement);

      //options[y].addEventListener('click', e => {});
      //options[y].dispatchEvent(new Event('click'));
        
      tergetElement.dispatchEvent(new Event("change"));
      tergetElement.click();
        
      tergetElement.closest('vv-single-select-option').click();
        
      tergetElement.closest('event-category').find('.event-category__info').click();
    }
  }
}

/*************
Seats.io
*************/

// array for chosen tickets
var selectedSeats = [];

function createSeats(){
    console.log('createSeats');
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
            
            selectedSeats.push(object.label);
            setTicketCategoryChosen(object.category.label, 'add');
        },
        onObjectDeselected: function (object) {
            // remove the deselected seat id from the array
            console.log('onObjectDeselected');
            console.log(object);
            
            var index = selectedSeats.indexOf(object.label);
            if (index !== -1) selectedSeats.splice(index, 1);
            
            setTicketCategoryChosen(object.category.label, 'remove');
        }
    }).render();
}
