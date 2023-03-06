// get localstorage
console.log('github-stripe-js');

var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - run request intercept');
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
  }else if(event.animationName === 'nodeInsertedPage4'){
    console.log('page4 loaded');
    loader('on');
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari


var resCount = 0;

function getXMLHttpRequest(open) {
  console.log('getXMLHttpRequest(open)');
  XMLHttpRequest.prototype.open = function () {
    this.addEventListener("readystatechange", function () {

      if (this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders") {
        
        try {
          var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText) : undefined;
        } catch (err) {}

        if (res != undefined && res._embedded && resCount == 0) {
          resCount = 1;
          var orders = res._embedded.orders;

          if (orders[0].promotion_code) {
            var price = orders[0].total_coupon_discount;
          } else {
            var price = +orders[0].payment.amount;
          }
          
          console.log(orders[0]);
          
          var checkoutSessionParameters = {
            organizer_id: orders[0].event.organizer_id,
            order_id: orders[0].id,
            order_tx_number: orders[0].invoice_id
          }
          
          //sendRequest(checkoutSessionParameters);
        }

      }
    }, false);
    open.apply(this, arguments);
  };
};

function sendRequest(checkoutSessionParameters){
  console.log('sendRequest');
  $.ajax({
    url: 'https://hook.doo.integromat.celonis.com/vq4u7ulswcgth6j97cmqk057g6soy6xx',
    type: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(checkoutSessionParameters),
    dataType: 'json',
    success: function (res) {
      console.log(res);
      /*
      stripe.redirectToCheckout({
        sessionId: res.payload.session_id
      }).then(function (result) {
        console.log(result)
      });
      */
      console.log(res.payload.url);
      window.open(res.payload.url, "_parent");
    },
    error: function (err) {
      console.log(err);
    }
  });
}

function loader(param) {
  if (param == "on") {
    $(".ew-confirmation__block").append('<div class="loader"></div>');
    $(".ew-confirmation__block .loader").show();
  } else {
    $(".ew-confirmation__block .loader").hide();
  }
}
