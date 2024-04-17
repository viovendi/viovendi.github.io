
console.log('github seats.io code!');

// hide the category after the widget has been rendered
checkSelectedCategory();

var insertionListener = function (event) {
    if (event.animationName === 'nodeInsertedSeats') {
        // handler();
    }else if(event.animationName === 'ticketCatsLoaded'){
        checkSelectedCategory();
        getXMLHttpRequest(XMLHttpRequest.prototype.open);
    }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari


function checkSelectedCategory(){
    console.log('checkSelectedCategory:');
    $('.event-categories li').each(function(){
        const ticketNumber = $(this).find('.vv-selection-input__value').text().trim();
        const catName = $(this).find('.customization-category-name').text().trim();
        /*
        if(catName.indexOf('DAT 2023 Ausstellerticket (Premium)') >= 0 || catName.indexOf('DAT 2023 – Ausstellerticket') >= 0){
            $(this).find('.vv-selection-input__control.p-dropdown').addClass('p-disabled');
        }
        */
        if(ticketNumber > 0){
            if(catName.indexOf('Ausstellerticket (Premium), 07.05.2025') >= 0){
                hideCategoryByName('Ausstellerticket, 07.05.2025');
            }else if(catName.indexOf('Ausstellerticket, 07.05.2025') >= 0){
                hideCategoryByName('Ausstellerticket (Premium), 07.05.2025');
            }
        }
    })
}

function hideCategoryByName(name){
    $('.event-categories li').each(function(){
        const categoryName = $(this).find('.customization-category-name').text().trim();
        $(this).removeClass('hidden');
        if(categoryName.indexOf(name) > -1){
            $(this).addClass('hidden');
        }
    });
}

function bookSeats(dooOrderId, dooOrganizationId){
    
    // const seatHoldToken = sessionStorage.getItem('holdToken') ? sessionStorage.getItem('holdToken') : 'none';
    const message = JSON.stringify({
        order_id: dooOrderId,
        oid: dooOrganizationId,
        channel: 'DOO_WIDGET',
    });
    window.parent.postMessage(message, '*');
}


var isSent = false;
function getXMLHttpRequest (open) {
    console.log('getXMLHttpRequest - open');
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

            console.log(order_id);
            console.log(organizer_id);

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
