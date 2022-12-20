console.log('git-code');

// get iFrameUrlParam from frame URL
console.log(redirectUrl);

var isFuncUsed = false;

function getXMLHttpRequest (open) {
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
            // hardcoded, depends on OID for the staging account its 91117021 @olexiy
            //91117021 = Artikelnumber for 15443
            var artikelnummer = 91117021;
            
            var isFreeORder = false;
            var bodyString = "&order_id="+orderId+"&ticket_category_id="+ticketCategoryId+"&price="+price+"&organisation=15443&artikelnummer="+artikelnummer+"";
            
            if(price == 0){
              bodyString = "&organisation=15443&order_id="+orderId+"";
            }
            
            // send redirect request
            sendRedirectRequest(bodyString);
          }
        }
      }, false);
      open.apply(this, arguments);
    };
};

getXMLHttpRequest(XMLHttpRequest.prototype.open);

function sendRedirectRequest(bodyData){
  var windowRedirectUrl = redirectUrl + bodyData;
  window.top.location.href=windowRedirectUrl;
}
