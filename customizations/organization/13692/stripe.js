// get localstorage
console.log('github-stripe-js');

// remove local storage data
localStorage.removeItem('payment_method');

function getWidgetLang() {
  var lang = $("html").attr("lang");
  return lang;
}

function showConfirmationMessage(){
   $('.customization-booking-area-wrapper-page4 .ew-confirmation__header').addClass('visible');
   $('.customization-booking-area-wrapper-page4 .ew-confirmation__header .header__label').addClass('visible');
   $('.customization-booking-area-wrapper-page4 .ew-confirmation__block').addClass('visible');
}

function changeIcon(color) {
  console.log("Change icon: " + color);
  if (color === "orange") {
    $(".ew-confirmation__header vv-icon").hide();
    if($('.new-icon-logo').length){
      $(".new-icon-logo").text("!");
      $(".new-icon-logo").css("color", "orange");
    } else {
      $(".ew-confirmation__header").prepend('<p class="new-icon-logo" style="height: 68px;width: 68px;font-weight:bold;font-size: 32px;background: orange;color: white;border-radius: 100%;text-align: center;line-height: 72px" >!</p>');
    }
    
  } else if(color === "red") {

    $(".ew-confirmation__header vv-icon").hide();
    if($('.new-icon-logo').length){
      $(".new-icon-logo").text("X");
      $(".new-icon-logo").css("background", "red");
    } else {
      $(".ew-confirmation__header").prepend('<p class="new-icon-logo" style="height: 68px;width: 68px;font-weight:bold;font-size: 32px;background: red;color: white;border-radius: 100%;text-align: center;line-height: 72px" >X</p>');
    }
  } else if(color === "green") {

    $(".ew-confirmation__header vv-icon").show();

    if($('.new-icon-logo').length){
      $(".new-icon-logo").hide();
    }
  }
}


function responseMessage(status) {

  console.log('responseMessage');
  console.log(status);

  var heading, message, color;
  if (status === "success" && getWidgetLang() === "de") {
    heading = "Buchungsbestätigung";
    message = "Vielen Dank für Ihre Buchung. In Kürze erhalten Sie Ihre Bestätigung per E-Mail.";
    color = "green";
  } else if (status === "success" && getWidgetLang() === "en") {
    heading = "Complete your registration now to secure your spot at the conference!";
    message = "Nearly complete<br>In the next step you will be redirected to our credit card payment service Stripe.<br>Please make sure you have your VISA or Mastercard and your 3D Secure code ready, as well as your 2-factor identification devices!<br>Once you have completed the payment process, you will receive a confirmation email and your conference ticket.";
    color = "greeen";
  } else if (status === "error" && getWidgetLang() === "de") {
    heading = "Unerwarteter Fehler";
    message = "Hoppla! Da ist etwas schiefgelaufen. Bitte versuchen Sie es später erneut.";
    color = "red";
  } else if (status === "error" && getWidgetLang() === "en") {
    heading = "Unexpected error";
    message = "Oops! Something went wrong. Please try again later.";
    color = "red";
  } else if (status === "attention" && getWidgetLang() === "de") {
    heading = "Fast geschafft";
    message = "Geben Sie im nächsten Schritt noch Ihre Kreditkartendetails an. ACHTUNG: Halten Sie Ihre VISA oder Mastercard bereit, den 3 D Secure Code und Ihre Geräte für die 2 Faktor Identifizierung!";
    color = "orange";
  } else if (status === "attention" && getWidgetLang() === "en") {
    heading = "Almost completed";
    message = "Please enter your credit card details in the next step. NOTICE: We only accept VISA or Mastercard. Please have your credit card, the 3 D Secure Code, and your devices for the 2-factor identification at hand!";
    color = "orange";
  }

  changeIcon(color);

  $(".ew-confirmation__header .header__label").text(heading);
  if ($(".response-message-notice").length) {
    $(".response-message-notice").text(message);
  } else {
    $(".ew-confirmation__block").append('<div><h3></h3><p class="response-message-notice">' + message + "</p></div>");
  }
  
  // show the hiddem booking-confirmation message
  showConfirmationMessage();

}

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
    paymentInput = $('.customization2_payment_options .payment-option__label');
    
    console.log(paymentInput.text().trim().toLowerCase());
  }
  
  if(paymentInput.closest('label').hasClass('customization_payment-option_Stripe') || paymentInput.text().trim().toLowerCase() === 'stripe'){
    isStripe = true;
  }
  
  return isStripe;
}

var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - run request intercept');
    
    $('.customization-booking-area-wrapper-page3 .customization-button-next').on('click', function(){
      console.log('bttn clicked!');
      if(isStripePayment()){
        console.log('isStripe - true');
        //console.log($('.event-booking-widget'));
        //$('.event-booking-widget').data('payment_method', 'stripe');
        localStorage.setItem('payment_method', 'stripe');
        
        getXMLHttpRequest(XMLHttpRequest.prototype.open);
      }
    });
    
  }else if(event.animationName === 'nodeInsertedPage4'){
    console.log('page4 loaded');
    
    if(localStorage.getItem('payment_method') === 'stripe'){
      console.log('page4 Stripe!!!');
    
      const confirmText = $('.ew-confirmation__summary strong').text().trim();
      
      if(confirmText.includes('Freigabe geprüft') || confirmText.includes('checked for approval')){
         console.log('showTheDefaultText - confirmation required');
         showTheDefaultText();
      }else{
         console.log('showTheDefaultText - standard case');

         responseMessage("attention");
        
         // hideDefaultText();
         // $('.header__label').text("Please wait, you'll be redirected to the payment page...");
         // loader('on');
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
    url: 'https://hook.doo.integromat.celonis.com/0lroztui6dqdj3d5po16smkp8oxiywan',
    type: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(checkoutSessionParameters),
    dataType: 'json',
    success: function (res) {
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
