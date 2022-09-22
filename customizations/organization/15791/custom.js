console.log('git-code');

// get iFrameUrlParam from frame URL
console.log(redirectUrl);

function getXMLHttpRequest (open) {
  
  console.log('getXMLHttpRequest');
  
    XMLHttpRequest.prototype.open = function() {
      this.addEventListener("readystatechange", function() {
        if(this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders" ){
          try {
            var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText): undefined;
          } catch (err) {}
          if(res != undefined && res._embedded){
            
            var orders = res._embedded.orders;
                       
            var orderId = orders[0].id;
            var price = orders[0].payment.amount;
            
            var ticketCategoryId = orders[0].attendees[0].ticket.event_ticket_id;
            
            // hardcoded, depends on OID
            var artikelnummer = 1111;
            
            console.log(orderId);
            console.log(price);
            console.log(ticketCategoryId);
            console.log(artikelnummer);
            
            
            var body = {
            };
            
            sendRedirectRequest();
            // send redirect
            
          }
        }
      }, false);
      open.apply(this, arguments);
    };
  };


// add listener to the post request on 2nd page
getXMLHttpRequest(XMLHttpRequest.prototype.open);

const observer = new MutationObserver((mutations, obs) => {
    const page = document.getElementsByClassName(
    'customization-booking-area-wrapper-page3'
    );

    if ($(page).is(':visible')) {
        console.log('page 3 visible');
        // run function of the page3  
        console.log('run page 3 func!');
        // add listener to the post request
      
        // send redirect when request received 
      
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

