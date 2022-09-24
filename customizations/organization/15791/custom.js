console.log('git-code');

// get iFrameUrlParam from frame URL
console.log(redirectUrl);

var isFuncUsed = false;

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
            
            var isFreeORder = false;
            //var body = "order_id="+orderId+"&ticket_category_id="+ticketCategoryId+"&price="+price+"&artikelnummer="+artikelnummer+"";
            
            var body = JSON.stringify({
              "order_id": orderId,
              "ticket_category_id": ticketCategoryId,
              price,
              artikelnummer
            });
            
            if(price == 0){
              // body = "order_id="+orderId+"";
              body = JSON.stringify({
                "order_id": orderId
              });
            }
            
            // send redirect request
            sendRedirectRequest(body);
          }
        }
      }, false);
      open.apply(this, arguments);
    };
};

function sendRedirectRequest(bodyData){
  console.log(redirectUrl);
  console.log(bodyData);
  console.log(isFuncUsed);
  
  if(isFuncUsed) return;
  
    var xhr = new XMLHttpRequest();
  
    xhr.open('POST', redirectUrl, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');
    xhr.send(bodyData);
  
  /*
  $.ajax({
    url: redirectUrl,
    type: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(bodyData),
    dataType: 'jsonp',
    success: function (res) {
      console.log(res);
    },
    error: function (jqXHR, exception) {
      console.log(jqXHR);
    }
  });
  */
  
  isFuncUsed = true;
  console.log(isFuncUsed);
}


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

