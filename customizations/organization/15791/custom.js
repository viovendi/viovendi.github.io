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
            
            // hardcoded, depends on OID for the staging account its 91117021 @olexiy
            var artikelnummer = 91117021;
            
            var isFreeORder = false;
            //var body = "order_id="+orderId+"&ticket_category_id="+ticketCategoryId+"&price="+price+"&artikelnummer="+artikelnummer+"";
            
            var body = {
              "order_id": orderId,
              "ticket_category_id": ticketCategoryId,
              price,
              artikelnummer
            };
            
            if(price == 0){
              // body = "order_id="+orderId+"";
              body = {
                "order_id": orderId
              };
            }
            
            // send redirect request
            //testRedirect(body);
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
  
  console.log(window.location.href);
  console.log(window.parent.location.href);
  console.log(window.top.location.href);
  
  return false;
  
  
  if(isFuncUsed) return;
  
  $.ajax({
    url: redirectUrl,
    type: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    crossDomain: true,
    data: JSON.stringify(bodyData),
    dataType: 'json',
    success: function (res) {
      console.log(res);
    },
    error: function (jqXHR, exception) {
      console.log(jqXHR);
    }
  });
  
  isFuncUsed = true;
  console.log(isFuncUsed);
}


/********************/
function testRedirect(data){
  
  //var reqUrl = 'https://doo.ovas2-branch.w14.westermann.de/doo/anmeldung/return?id=8edadc8f-f8d6-447f-ae60-388ef22c5838';
  
  /*
  var order_id = 123456;
  var ticket_category_id = 456789;
  var price = 6655;
  var artikelnummer = 91117021;
  */
  
  console.log(data);
  console.log(data.price);
  console.log('before form submit');
  
var form = $('<form action="' + redirectUrl + '" method="post">' +
  '<input type="text" name="order_id" value="' + data.order_id + '" />' +
  '<input type="text" name="ticket_category_id" value="' + data.ticket_category_id + '" />' +
  '<input type="text" name="price" value="' + data.price + '" />' +
  '<input type="text" name="artikelnummer" value="' + data.artikelnummer + '" />' +
  '</form>');
$('body').append(form);
form.submit();
  
}
/********************/


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
      
        //testRedirect();
      
        // send redirect when request received 
      
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

