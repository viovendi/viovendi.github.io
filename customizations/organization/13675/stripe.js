// get localstorage
console.log('github-stripe-js');

var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - run request intercept');
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
  }
};

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
          // if not Stripe
          /*if(){
            return;
          }
          */
          
          var checkoutSessionParameters = {
            organizer_id: orders[0].event.organizer_id,
            name: orders[0].event.title,
            orderId: orders[0].id,
            amount: price,
            currency: 'gbp',
            quantity: 1,
            success_url: '<success_page>',
            cancel_url: '<fail_page>'
          }
          
          //sendRequest();
/*
          $.ajax({
            url: '<make scenario webhook link>',
            type: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            data: JSON.stringify(checkoutSessionParameters),
            dataType: 'json',
            success: function (res) {
              stripe.redirectToCheckout({
                sessionId: res.payload.session_id
              }).then(function (result) {
                console.log(result)
              });
            }
          });
          */
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
      stripe.redirectToCheckout({
        sessionId: res.payload.session_id
      }).then(function (result) {
        console.log(result)
      });
    }
  });
}
