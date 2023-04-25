console.log('lmu-shared-js');

// add styles for animation
var styleSheetStripe = document.createElement("style");
styleSheetStripe.innerHTML = `
@keyframes nodeInserted {
    from { opacity: 0.99; }
    to { opacity: 1; }
}
.event-booking-widget .customization-booking-area-wrapper-page3{
    animation-duration: 0.1s;
    animation-name: nodeInserted;
}
@keyframes nodeInsertedPage4 {
    from { opacity: 0.99; }
    to { opacity: 1; }
}
.event-booking-widget .customization-booking-area-wrapper-page4{
    animation-duration: 0.1s;
    animation-name: nodeInsertedPage4;
}
`;
head.appendChild(styleSheetStripe);

// remove local storage data
localStorage.removeItem('payment_method');

function isEpayPayment(){
  let paymentInput;
  let isEpay = false;
  
  if($('.payment-method-selection__payment-options--multiple').length > 0){
    paymentInput = $('.customization2_payment_options.payment-method-selection__payment-options--multiple input:checked');
  }else{
    paymentInput = $('.customization2_payment_options .payment-option__label');
  }
    
  if(paymentInput.closest('label').hasClass('customization_payment-option_ePayServiceBayern') || paymentInput.text().trim() === 'ePay Bayern'){
    isEpay = true;
  }
    
  return isEpay;
}

var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - run request intercept');

    // page3
    $('.customization-booking-area-wrapper-page3 .customization-button-next').on('click', function(){
      console.log('bttn clicked!');
      if(isEpayPayment()){
        console.log('isisEpayPayment - true');
        localStorage.setItem('payment_method', 'ePay');
        getXMLHttpRequest(XMLHttpRequest.prototype.open);
      }
    });
    
  }else if(event.animationName === 'nodeInsertedPage4'){
    console.log('page4 loaded');
    
    // page4
    if(localStorage.getItem('payment_method') === 'ePay'){
      console.log('page4 ePay!!!');
      loader("on");
    }
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari


function loader(param){
  if(param == 'on'){
    $('.ew-confirmation__block').append('<div class="loader"></div>');
    $('.ew-confirmation .ew-confirmation__header, .ew-confirmation .ew-confirmation__heading, .ew-confirmation .ew-confirmation__summary, .ew-confirmation .ew-confirmation__notice, .ew-confirmation .ew-confirmation__organizer-contact').hide();
    
    $('.ew-confirmation__block .loader').show();
  }else{
    $('.ew-confirmation__block .loader').hide();
        $('.ew-confirmation .ew-confirmation__header, .ew-confirmation .ew-confirmation__heading, .ew-confirmation .ew-confirmation__summary, .ew-confirmation .ew-confirmation__notice, .ew-confirmation .ew-confirmation__organizer-contact').show();
  }
}

function changeIcon(color) {
  $(".ew-confirmation__header vv-icon").hide();

  if($('.new-icon-logo').length){
    $(".new-icon-logo").text("X");
    $(".new-icon-logo").css("background", color);
  } else {
    $(".ew-confirmation__header").prepend('<p class="new-icon-logo" style="height: 68px;width: 68px;font-weight:bold;font-size: 32px;background: red;color: white;border-radius: 100%;text-align: center;line-height: 72px" >X</p>');
  }
}

function showErrorMessage() {
  const heading = "Unexpected error";
  const message = "Oops! Something went wrong. Please try again later.";
  const color = "red";

  changeIcon(color);
  $(".ew-confirmation__header .header__label").text(heading);
  
  if ($(".response-message-notice").length) {
    $(".response-message-notice").text(message);
  }else{
    $(".customization-confirmation-description").text(message);
  }
}


function sendRequestToGetRedirectUrl(object){
  console.log('sendRequestToGetRedirectUrl');
  $.ajax({
      url: "https://hook.doo.integromat.celonis.com/1bqimjodufy1bi4zxky2rm326pdc50nn",
      type: "post",
      headers: {},
      data: object,
      dataType: "json",
      success: function (res) {
        // redirect to payment page
        if(res.LinkToPayPage.indexOf('http') > 0){
           window.open(res.LinkToPayPage, "_parent");
        }else{
          loader("off");
          showErrorMessage();
          console.log('Error - Broken payment link');
        }
        //window.open(res.LinkToPayPage, "_parent");
        //window.open(res.LinkToPayPage, "_blank");
      },
      error: function (jqXHR, exception) {
        // show different error message depends on the status received from the scenario?
        loader("off");
        showErrorMessage();
        console.log('Error - no payment page URL');
      }
  });
}

let isSent = false;
const orderDataobj = {};
function getXMLHttpRequest (open) {
    isgetHttp = 1;
    XMLHttpRequest.prototype.open = function() {
      this.addEventListener("readystatechange", function() {
        if(this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders" ){
          try {
            var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText): undefined;
          } catch (err) {}
          
          if(res != undefined && res._embedded){

           // send the request to Make (to confirm the seats booking)
             const orders = res._embedded.orders;
            
             orderDataobj.orderId = orders[0].id;
             orderDataobj.organizationId = orders[0].event.organizer_id;
             orderDataobj.eventId = orders[0].event.id;
             orderDataobj.buyerEmail = orders[0].email
             orderDataobj.orderAmount = orders[0].payment.amount;
             orderDataobj.orderCurr = orders[0].event.currency.code;
            
            if(!isSent && $('.customization2_payment-description_manual-approval').length < 1){
              sendRequestToGetRedirectUrl(orderDataobj);
            }
            isSent = true;
          }
        }
      }, false);
      open.apply(this, arguments);
    };
};
