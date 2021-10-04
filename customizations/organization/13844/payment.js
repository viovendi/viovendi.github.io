
console.log('Start - 13844+');

// global var
var isFuncUsed = false;
var domain_url = 'https://cs.doo.net';

var delivery_invoice_labels = ['Delivery of the invoice', 'Delivery of invoice', 'Zustellung der Rechnung'];
var payment_methods_labels = ['Payment method','Zahlungsmethode','ZAHLUNGSART WÄHLEN'];
var invoice_payment_method_arr_options = ['Invoice Payment', 'Bank transfer / on account', 'Überweisung / auf Rechnung', 'Überweisung / Kauf auf Rechnung'];
var hub_payment_method_arr_options = ['Direct Payment', 'Sofortzahlung', 'Sofortbezahlung', 'Sofortzahlung via Kreditkarte' ,'Direct payment via credit card'];

function getInvoiceRadioGroup(arrayOfLabels){
  var targetElem = null;
  $('vv-additional-question-radio').each(function(){
    var label = $(this).find('.customization2_booker_further-data_custom-question_label').text().trim();      
    arrayOfLabels.forEach(function(item){
      if( label.indexOf(item) != -1 ){
        targetElem = $(this).find('.customization2_booker_further-data_custom-question_radio-group');
      }  
    }, this);
    });
  return targetElem;
}

var insertionListener = function(event) {
  if (event.animationName === "nodeInserted") {
    check_country();
  }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari



if( localStorage.delivery_of_invoice){
  localStorage.removeItem('delivery_of_invoice');
}

if( localStorage.payment_method ){
  localStorage.removeItem('payment_method');
}

if( localStorage.free_order){
  localStorage.removeItem('free_order');
}

function check_country(){
  var invoice_radio_group = getInvoiceRadioGroup(payment_methods_labels);
  // var invoice_radio_group = $('.customization2_booker_further-data_custom-question-3 .customization2_booker_further-data_custom-question_radio-group');
  var countries = ['AT', 'DE', 'CH'];
  var curr_country = $('.customization2_booker_contact-data_country select').children("option:selected").val();

  if(countries.indexOf(curr_country) != -1 ){
    invoice_radio_group.find('.vv-nl-mb-xxs:first-child').show();
  }

  $('.customization2_booker_contact-data_country select').on('change', function(e){
    var country = $(this).children("option:selected").val();

    if(countries.indexOf(country) != -1){
      invoice_radio_group.find('.vv-nl-mb-xxs:first-child').show();
    }else{
      // var click_event = new Event("click");
      invoice_radio_group.find('.vv-nl-mb-xxs:last-child input').trigger('click');
      invoice_radio_group.find('.vv-nl-mb-xxs:first-child').hide();
    }

  });
}

function getWidgetLang(){
  var lang = $('html').attr('lang');
  return lang;
}

$('.vv-button.customization-button-next').on('click', function(){
  var payment_method = '';
  var delivery_of_invoice = '';
  $('.customization2_booker_further-data .customization2_booker_further-data_custom-question').each(function(){
    var label = $(this).find('.customization2_booker_further-data_custom-question_label').text().trim();

    if(payment_methods_labels.indexOf(label) != -1 ){
      payment_method = $(this).find('.customization2_booker_further-data_custom-question_value').text().trim();
    }

    if( delivery_invoice_labels.indexOf(label) != -1 ){
      delivery_of_invoice = $(this).find('.customization2_booker_further-data_custom-question_value').text().trim();
    }
  });

  localStorage.setItem('payment_method', payment_method);
  localStorage.setItem('delivery_of_invoice', delivery_of_invoice);
});


var id_page2, id_page3, id_page4 = null;

function stop_checking_page2() {
  cancelAnimationFrame(id_page2);
}

function stop_checking_page3() {
  cancelAnimationFrame(id_page3);
}

function stop_checking_page4() {
  cancelAnimationFrame(id_page4);
}

function checking_page2() {
  id_page2 = requestAnimationFrame(checking_page2);
  if($('.customization-booking-area-wrapper-page2').length > 0){
    if( $('.customization2_summary_total_price').text().trim() == '0,00 EUR' || $('.customization2_summary_total_price').length < 1){
      getXMLHttpRequest(XMLHttpRequest.prototype.open);
      localStorage.setItem('free_order', true);
      stop_checking_page2(); 
    }
  }
}
checking_page2();

function checking_page3() {
  id_page3 = requestAnimationFrame(checking_page3);
  if($('.customization-booking-area-wrapper-page3').length > 0){
    rebuildPage();
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
    stop_checking_page3();
  }
}
checking_page3();

function checking_page4() {
  id_page4 = requestAnimationFrame(checking_page4);
  if ($('.customization-booking-area-wrapper-page4').length > 0){    
    var payment_method = localStorage.getItem('payment_method');
    var free_order = localStorage.getItem('free_order');

    console.log('payment_method');
    console.log(payment_method);
    console.log(invoice_payment_method_arr_options.indexOf(payment_method));
    console.log(hub_payment_method_arr_options.indexOf(payment_method));

    if(free_order){
      console.log('free order');
      responseMessage('free-ticket');
    }else{
      console.log('NOT free order');
      if( !payment_method || payment_method =='' || invoice_payment_method_arr_options.indexOf(payment_method) != -1 ){
        console.log('rebuildPageInvoiceConfirm');
        // rebuildPageInvoiceConfirm();
        responseMessage('free-ticket');
      }else if( !isFuncUsed && (hub_payment_method_arr_options.indexOf(payment_method) != -1)){
        console.log('send request to payment hub');
        loaderOn('on');
        sendRequest(obj, organizer_id, free_order);
      }
    }

  stop_checking_page4();
  }
}
checking_page4();

function rebuildPageInvoiceConfirm(){
  responseMessage('success');
}

function addFrameListener(){
  if ( window.addEventListener ) {
    window.addEventListener('message', receiveMessage, false);
  } else if ( window.attachEvent ) {
    window.attachEvent('onmessage', receiveMessage);
  }
}

function receiveMessage(event) {
  if (event.origin !== 'https://securepay.swmh.de'){
    return;
  }
  if(event.data.status === 'Success'){
    responseMessage('success');
  }else{
    responseMessage('error');
  }
}


function responseMessage(status){
  if( $('#payment_Frame').length ){
    $('#payment_Frame').remove();
  }

  var heading, message, message2, color;

  console.log(status);

  if(status === 'success'){
    heading = 'Buchungsbestätigung';
    message = 'Vielen Dank für Ihre Buchung. In Kürze erhalten Sie Ihre Bestätigung per E-Mail.';
    message2 = '';
    color = 'black';
  }else if(status === 'free-ticket'){
    var pathname = window.location.pathname;
    if (pathname.indexOf('71481') >=1){
      message = 'Herzlichen Dank für Ihre Anmeldung. Die Anmeldebestätigung wird Ihnen in Kürze per E-Mail zugestellt. Sollten Sie die Anmeldebestätigung nicht erhalten, kontrollieren Sie bitte Ihren Spam Ordner und prüfen Sie, ob die Absenderadresse @doo.net oder @sz-erleben.de von Ihnen oder Ihrer Firewall geblockt wird oder wenden Sie sich gerne an uns unter veranstaltungen@sz-erleben.de.';
    }else{
      message = 'Herzlichen Dank für Ihre Anmeldung. Die Anmeldebestätigung wird Ihnen in Kürze per E-Mail zugestellt.';
    }
  
  //  heading = 'Buchungsbestätigung';
    heading = '';
//message = 'Herzlichen Dank für Ihre Anmeldung. Die Anmeldebestätigung mit dem Link zum Livestream wird Ihnen in Kürze per E-Mail zugestellt.';
   // message2 = 'Sollten Sie die Anmeldebestätigung nicht erhalten, kontrollieren Sie bitte Ihren Spam Ordner und prüfen Sie, ob die Absenderadresse @doo.net oder @sz-erleben.de von Ihnen oder Ihrer Firewall geblockt wird oder wenden Sie sich gerne an uns unter veranstaltungen@sz-erleben.de.';
    message2 = '';
    color = 'black';
  }else{
    heading = 'Hoppla! Da ist was schiefgelaufen. Bitte versuchen Sie es später erneut.';
    message = '';
    message2 = '';
    color = 'red';
  }
  $('.ew-confirmation__block').append('<div style="color:'+color+' !important;"><h3>'+heading+'</h3><p>'+message+'</p><p>&nbsp;</p><p>'+message2+'</p></div>');
}

function rebuildPage(){
  var payment_method = localStorage.getItem('payment_method');

  if( invoice_payment_method_arr_options.indexOf(payment_method) != -1 ){
    $('.customization2_payment .vv-control-label.vv-radio__label-text').text('Hiermit bestätige ich die Richtigkeit meiner Angaben.');
  }else if(hub_payment_method_arr_options.indexOf(payment_method) != -1){
    $('.customization2_payment .customization2_organizer-bank-transfer_button').attr('checked', 'checked').click();
    $('.customization2_payment').hide();
    $('.customization2_booking-terms').css('margin-top', '43px');
  }
}

var obj, organizer_id;

function getXMLHttpRequest (open) {
  XMLHttpRequest.prototype.open = function() {
    this.addEventListener("readystatechange", function() {
      if(this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders" ){
        try {
          var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText): undefined;
        } catch (err) {}

        if(res != undefined && res._embedded){
          var orders = res._embedded.orders;
          var order_id = orders[0].id;
          organizer_id = orders[0].event.organizer_id;

          obj = {
            "order_id": order_id,
            "callback_url": domain_url+"/v1/integrations/swmh/payment/callback/"+organizer_id+"",
            "language": getWidgetLang(),
          }
        }
      }
    }, false);
    open.apply(this, arguments);
  };
};


function sendRequest(object, oid){
  isFuncUsed = true;
  if(!free_order){
    $.ajax({
      url: domain_url+'/v1/integrations/swmh/payment/checkout/'+oid+'',
      type: 'post',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(object),
    dataType: 'json',
    success: function (res) {
      loaderOn('off');
      console.log(res);
      $('.ew-confirmation__block').append('<iframe id="payment_Frame" width="560" height="420" src="'+res.payload+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      addFrameListener();
    },
    error: function (jqXHR, exception) {
      var msg = '';
      if (jqXHR.status === 0) {
          msg = 'Server is not responding.';
      } else if (jqXHR.status == 404) {
          msg = 'Requested page not found. [404]';
      } else if (jqXHR.status == 500) {
          msg = 'Internal Server Error [500].';
      } else if (exception === 'parsererror') {
          msg = 'Requested JSON parse failed.';
      } else if (exception === 'timeout') {
          msg = 'Time out error.';
      } else if (exception === 'abort') {
          msg = 'Ajax request aborted.';
      } else {
          msg = 'Uncaught Error.\n' + jqXHR.responseText;
      }        
      console.log('Error: '+msg);
      loaderOn('off');
      responseMessage('error');
    }
  });
  }else{
    loaderOn('off');
    responseMessage('success');
  }
}

function loaderOn(param){
  if(param == 'on'){
    $('.ew-confirmation__block').append('<div class="loader"></div>');
    $('.ew-confirmation__block .loader').show();
  }else{
    $('.ew-confirmation__block .loader').hide();
  }
}
