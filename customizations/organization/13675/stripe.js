// get localstorage
console.log('github-stripe-js');

// remove local storage data
localStorage.removeItem('payment_method');


function showTheDefaultText(){
  console.log('showTheDefaultText');
  $('.ew-confirmation .ew-confirmation__summary, .ew-confirmation .ew-confirmation__notice, .ew-confirmation .ew-confirmation__organizer-contact').css({'display':'block'});
}

function hideDefaultText(){
  console.log('hideDefaultText');
  $('.ew-confirmation__block .customization-confirmation-label, .ew-confirmation__block .ew-confirmation__text-paragraph, .ew-confirmation .ew-confirmation__summary, .ew-confirmation .ew-confirmation__notice, .ew-confirmation .ew-confirmation__organizer-contact').css({'display': 'none'});
}

function isStripePayment(){
  let paymentInput;
  let isStripe = false;
  
  if($('.payment-method-selection__payment-options--multiple').lenght > 0){
    paymentInput = $('.customization2_payment_options.payment-method-selection__payment-options--multiple input:checked');
  }else{
    paymentInput = $('.customization2_payment_options.payment-method-selection__payment-options--multiple input:checked');
  }
  
  console.log(paymentInput);
  console.log(paymentInput.closest('label').hasClass('customization_payment-option_Stripe'));
  
  if(paymentInput.closest('label').hasClass('customization_payment-option_Stripe')){
    isStripe = true;
  }
  
  return isStripe;
}

var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - run request intercept');
    
    $('.customization-booking-area-wrapper-page3 .customization-button-next').on('click', function(){
      console.log('bttn clicked!');
      if(isStripePayment){
        console.log('isStripe - true');
        //console.log($('.event-booking-widget'));
        //$('.event-booking-widget').data('payment_method', 'stripe');
        localStorage.setItem('payment_method', 'stripe');
      }
    });
    
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
  }else if(event.animationName === 'nodeInsertedPage4'){
    console.log('page4 loaded');
    
    //console.log($('.event-booking-widget').data('payment_method'));
    /*
    if($('.event-booking-widget').data('payment_method') === 'stripe'){
      console.log('page4 Stripe!!!');
    }
    */
    
    if(localStorage.getItem('payment_method') === 'stripe'){
      console.log('page4 Stripe!!!');
    
      const confirmText = $('.ew-confirmation__summary strong').text().trim();

      if(confirmText.includes('Freigabe geprüft') || confirmText.includes('checked for approval')){
         console.log('showTheDefaultText - confirmation required');
         showTheDefaultText();
      }else{
         console.log('showTheDefaultText - standard case');
         hideDefaultText();
         $('.header__label').text("Please wait, you'll be redirected to the payment page...");
         loader('on');
      }
    }
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari


var resCount = 0;

function getXMLHttpRequest(open) {
  console.log('getXMLHttpRequest(open)');

  XMLHttpRequest.prototype.open = function () {
    
    //console.log($('.event-booking-widget'));
    //$('.event-booking-widget').data('payment_method', '');
    
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
          
          console.log('orders:');
          console.log(orders[0]);
          
          var checkoutSessionParameters = {
            organizer_id: orders[0].event.organizer_id,
            order_tx_number: orders[0].invoice_id
          }
          if(orders[0].status === 'active'){
            sendRequest(checkoutSessionParameters);
          }
        }

      }
    }, false);
    open.apply(this, arguments);
  };
};

function sendRequest(checkoutSessionParameters){
  console.log('sendRequest');
  $.ajax({
    url: 'https://hook.doo.integromat.celonis.com/iyn4bq5iw24r2lo1stvrurbbidi88yng',
    type: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(checkoutSessionParameters),
    dataType: 'json',
    success: function (res) {
      console.log(res);
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
