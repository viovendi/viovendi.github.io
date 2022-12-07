
console.log('github code-!');

/*
async function hendler() {
  if (document.readyState !== "loading") {
    console.log("document is already ready");

    await getPage("page1");
    createButtons();
    addTicket();
    subtractTicket();

    await getPage("page2");

    automaticaClicking();

    // check if free order
    if(isFreeOrder()){
      getXMLHttpRequest(XMLHttpRequest.prototype.open);
      prefillTermsCheckBox();
    }else{
      await getPage("page3");
      prefillPaymentMethod("customization2_organizer-bank-transfer_button");
      prefillTermsCheckBox();
      getXMLHttpRequest(XMLHttpRequest.prototype.open);
    }

    var result = await getPage("page4");
    var dooOrder = getOrderInformation(result.dataLayer);
    var order = localStorage.getItem("order");

    parent.postMessage(
      {
        dooOrder,
        order,
      },
      "*"
    );
    
  }
}

if (url.includes("booking-14426-34087")) {
  var insertionListener = function (event) {
    if (event.animationName === "nodeInsertedPOS") {
      hendler();
    }
  };
  hendler();
  setCSSstyles();
}

function setCSSstyles() {
  var style = document.createElement("style");
  style.innerHTML = `
  .customization-booking-area-wrapper-page1 form {
    display: flex;
    flex-direction: column-reverse;
  }
  @keyframes nodeInsertedPOS {
    from { opacity: 0.99; }
    to { opacity: 1; }
  }
  .event-booking-widget .customization-booking-area-wrapper-page1{
    animation-duration: 0.1s;
    animation-name: nodeInsertedPOS;
  }`;
};
  
  
async function getPage(page) {
  var pages = {
    page1: "customization-booking-area-wrapper-page1",
    page2: "customization-booking-area-wrapper-page2",
    page3: "customization2_payment_title",
    page4: "customization-confirmation-label",
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

*/




function startCustomization(){
  const observer = new MutationObserver((mutations, obs) => {
      const page = document.getElementsByClassName('customization-booking-area-wrapper-page1');

      if ($(page).is(':visible')) {
          console.log("page-1 visible");
          elementVisibleAction();
          obs.disconnect();
          return;
      }
  });

  observer.observe(document, {
      childList: true,
      subtree: true
  });
}
startCustomization();

function elementVisibleAction(){    
    addSeatScript();
}



/*
$(window).on('load', function() {
    console.log('ready window!');
    console.log($('.customization-booking-area-wrapper'));
    console.log(this.find('.customization-booking-area-wrapper'));
});

$(document).ready(function(){
    console.log('doc ready!');
    console.log($('.customization-booking-area-wrapper'));
    console.log(this.find('.customization-booking-area-wrapper'));
});
*/



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
            console.log('allOptions');
            console.log(allOptions);
            
            if(action === 'add'){
              selectedInputNum++;
            }else{
              selectedInputNum--;
            }
            console.log('selectedInputNum-out');
            console.log(selectedInputNum);
            
            selectOptions(allOptions, selectedInputNum);
        }
    });
}

function selectOptions(options, selectedInput) {
  console.log('func selectOptions');
  
  var inputNumber = +selectedInput;
  
  for (var y = 0; y < options.length; y++) {
    console.log('options[y]');
    console.log(options[y]);
    var optionsNumber = +options[y].textContent.trim();

    console.log('optionsNumber+inputNumber');
    console.log(optionsNumber);
    console.log(inputNumber);
    
    if (optionsNumber === inputNumber) {
      options[y].dispatchEvent(new Event("change"));
      options[y].click();
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
