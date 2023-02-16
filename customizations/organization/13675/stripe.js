// get localstorage
console.log('github-stripe-js');

var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - run request intercept');
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari

var stripe = Stripe(pk_live_51MYpwBG8B6ih8cHtuczvq2vKJhb3Jw3208nzg7GnX7TNx7s9HpatzIkYxjgTpudTfnMk1Zj3uVuMbigmJAwaYIYV00sCVgsT7K);
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
          
          var checkoutSessionParameters = {
            organizer_id: orders[0].event.organizer_id,
            name: orders[0].event.title,
            orderId: orders[0].id,
            amount: price,
            quantity: 1,
            success_url: 'https://webhook.site/d159ad8a-e4ab-4c90-9528-16ee6a4fda6f?success_url=1',
            cancel_url: 'https://webhook.site/d159ad8a-e4ab-4c90-9528-16ee6a4fda6f?cancel_url=0'
          }
          
          sendRequest(checkoutSessionParameters);
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
      stripe.redirectToCheckout({
        sessionId: res.payload.session_id
      }).then(function (result) {
        console.log(result)
      });
    }
  });
}
