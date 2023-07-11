console.log('git-code');

// get iFrameUrlParam from frame URL
console.log(redirectUrl);

function processData(eventId, orderId, price, ticketCategoryId){

  console.log('processData');
  console.log(eventId);
  console.log(orderId);
  console.log(price);
  console.log(ticketCategoryId);

  let bodyString = '';

  if(price == 0){
    bodyString = "&order_id="+orderId+"";
    sendRedirectRequest(bodyString);
    return;
  }

  $.ajax({
    url: 'https://hook.doo.integromat.celonis.com/9blbh06jpsfmslydphupwhmjeymhuu1l?eventId='+eventId+'',
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    dataType: 'json',
    success: function (res) {
      console.log(res);

      // bodyString = "&order_id="+orderId+"&ticket_category_id="+ticketCategoryId+"&price="+price+"&artikelnummer="+artikelnummer+"";
      // sendRedirectRequest(bodyString);
    },
    error: function (err) {
      console.log(err);
    }
  });
}


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
            var eventId = orders[0].event.id;
            var orderId = orders[0].id;
            var price = orders[0].payment.amount;
            var ticketCategoryId = orders[0].attendees[0].ticket.event_ticket_id;

            processData(eventId, orderId, price, ticketCategoryId);
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