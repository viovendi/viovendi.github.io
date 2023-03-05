console.log("git custom-test!");


// data attribute
const wrapper = document.querySelector('.customization-booking-area-wrapper');
// console.log(wrapper);

// wrapper.dataset.test = "test data set";
// console.log(wrapper.dataset.test);

// global var
var isFuncUsed = false;
var domain_url = "https://cs.doo.net";

var delivery_invoice_labels = [
  "Delivery of the invoice",
  "Zustellung der Rechnung",
];
var payment_methods_labels = [
  "Payment method",
  "Zahlungsmethode",
  "ZAHLUNGSART WÄHLEN",
];
var invoice_payment_method_arr_options = [
  "Invoice Payment",
  "Bank transfer / on account",
  "Bank transfer / via invoice",
  "Überweisung / auf Rechnung",
  "Überweisung / Kauf auf Rechnung",
  "Kauf auf Rechnung",
  "Payment via Invoice"
];
var hub_payment_method_arr_options = [
  "Direct Payment",
  "Sofortzahlung",
  "Sofortbezahlung",
  "Sofortzahlung via Kreditkarte",
  "Direct payment via credit card",
  "Zahlung per Kreditkarte (VISA oder Mastercard)",
  "Payment via Credit Card (VISA or Mastercard only!)"
];

// payment humethod names
var hub_payment_method = ["Sofortbezahlung", "Zahlung per Kreditkarte (VISA oder Mastercard)"];

function getInvoiceRadioGroup(arrayOfLabels) {
  var targetElem = null;
  $("vv-additional-question-radio").each(function () {
    var label = $(this).find(".customization2_booker_further-data_custom-question_label").text().trim();
    arrayOfLabels.forEach(function (item) {
      if (label.indexOf(item) != -1) {
        targetElem = $(this).find(".customization2_booker_further-data_custom-question_radio-group");
      }
    }, this);
  });
  return targetElem;
}

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
  //if (event.animationName === "nodeInserted" && !noPaymentHubEvent) {
    check_country();
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari

if (localStorage.payment_method) {
  localStorage.removeItem("payment_method");
}

// local storage workaround
wrapper.dataset.payment_method = '';

if (localStorage.free_order) {
  localStorage.removeItem("free_order");
  localStorage.setItem("free_order", false);
}

// local storage workaround
wrapper.dataset.free_order = false;

if (localStorage.allowed_countries) {
  localStorage.removeItem("allowed_countries");
}

// local storage workaround
wrapper.dataset.allowed_countries = '';

if (localStorage.payment_method_upd) {
  localStorage.removeItem("payment_method_upd");
}

// local storage workaround
wrapper.dataset.payment_method_upd = '';

function check_country() {
  console.log("function check_country()");
  var invoice_radio_group = getInvoiceRadioGroup(payment_methods_labels);
  var countries = [
    "Österreich",
    "Austria",
    "Deutschland",
    "Germany",
    "Schweiz",
    "Switzerland",
  ];
  var curr_country = $(".customization2_booker_contact-data_country_input").text().trim();

  if (countries.indexOf(curr_country) != -1 && invoice_radio_group) {
    invoice_radio_group.find(".vv-nl-mb-xxs:first-child").show();
  }

  const observer = new MutationObserver((mutations) => {
    var country = $(".customization2_booker_contact-data_country_input").text().trim();
    localStorage.removeItem("allowed_countries");
    // local storage workaround
    wrapper.dataset.allowed_countries = '';
    if (countries.indexOf(country) != -1) {
      if (invoice_radio_group) {
        invoice_radio_group.find(".vv-nl-mb-xxs:first-child").show();
      } else {
        localStorage.setItem("allowed_countries", "allowed");
	// local storage workaround
	wrapper.dataset.allowed_countries = "allowed";
	console.log('wrapper.dataset.allowed_countries');
      }
    } else {
      if (invoice_radio_group) {
        invoice_radio_group.find(".vv-nl-mb-xxs:last-child input").trigger("click");
        invoice_radio_group.find(".vv-nl-mb-xxs:first-child").hide();
      } else {
        localStorage.setItem("allowed_countries", "forbidden");
	// local storage workaround
	wrapper.dataset.allowed_countries = 'forbidden';
      }
    }
  });

  const bookerCountryInput = document.querySelector(".customization2_booker_contact-data_country_input");

  observer.observe(bookerCountryInput, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

function getWidgetLang() {
  var lang = $("html").attr("lang");
  return lang;
}

function showConfirmationMessage(){
   $('.customization-booking-area-wrapper-page4 .ew-confirmation__header').addClass('visible');
   $('.customization-booking-area-wrapper-page4 .ew-confirmation__header .header__label').addClass('visible');
   $('.customization-booking-area-wrapper-page4 .ew-confirmation__block').addClass('visible');
}

function getDataFromPage2() {
  $(".customization-booking-area-wrapper-page2 .customization-button-next").on(
    "click",
    function () {
      var payment_method = "";
      $(".customization2_booker_further-data .customization2_booker_further-data_custom-question"
      ).each(function () {
        var label = $(this).find(".customization2_booker_further-data_custom-question_label").text().trim();

        if (payment_methods_labels.indexOf(label) != -1) {
          payment_method = $(this).find(".customization2_booker_further-data_custom-question_value").text().trim();
        }
      });
      localStorage.setItem("payment_method", payment_method);
      // local storage workaround
       wrapper.dataset.payment_method = payment_method;
    }
  );
}
getDataFromPage2();

var id_page2,
  id_page3,
  id_page4 = null;

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

  if ($(".customization-booking-area-wrapper-page2").length > 0) {
	  
    console.log("checking_page2");
	  
    getDataFromPage2();

    var orderPriceText = $(".customization2_summary_total_price").text().trim();
	  
    if (
	    (orderPriceText === "0,00 EUR" || orderPriceText.indexOf("0,0") === 0) || 
	    ($('.customization2_summary_item').length > 0 && $(".customization2_summary_total_price").length < 1 ) 
    ) {
	    console.log('free order detected');
	    
      getXMLHttpRequest(XMLHttpRequest.prototype.open);
      localStorage.setItem("free_order", true);
	// local storage workaround
       wrapper.dataset.free_order = true;
    }
    stop_checking_page2();
  }
}
checking_page2();

function checking_page3() {
  id_page3 = requestAnimationFrame(checking_page3);
  if ($(".customization-booking-area-wrapper-page3").length > 0) {
	  
    rebuildPage();
    getPaymentMethod();
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
    //
    //stop_checking_page3();
  }
}
checking_page3();

function checking_page4() {

  id_page4 = requestAnimationFrame(checking_page4);
  if ($(".customization-booking-area-wrapper-page4").length > 0) {
	console.log("checking_page4");
    stop_checking_page3();

	  /*
    var payment_method_upd = localStorage.getItem("payment_method_upd");
    var payment_method = localStorage.getItem("payment_method");
    var free_order = localStorage.getItem("free_order");
	  */
    var payment_method_upd, payment_method, free_order;
	  
    /////
    if(	localStorage.getItem("payment_method_upd") ){
	payment_method_upd = localStorage.getItem("payment_method_upd");
    }else{
        payment_method_upd = wrapper.dataset.payment_method_upd;
    }
	  
    if(	localStorage.getItem("payment_method")){
	payment_method = localStorage.getItem("payment_method");
    }else{
        payment_method = wrapper.dataset.payment_method;
    }
	  
    if(	localStorage.getItem("free_order")){
	free_order = localStorage.getItem("free_order");
    }else{
        free_order = wrapper.dataset.free_order;
    }
    //////
	  
    console.log('free_order data:');
    console.log(payment_method_upd);
    console.log(payment_method);
    console.log(free_order);

	  
    if (free_order && free_order === "true") {
      console.log("checking_page4 FREE ORDER");
      responseMessage("success");
    } else {
      if (invoice_payment_method_arr_options.indexOf(payment_method) != -1) {
        console.log("checking_page4 - invoice payment!");
        rebuildPageInvoiceConfirm();
      } else if (
        (!isFuncUsed && hub_payment_method_arr_options.indexOf(payment_method) != -1) ||
        (!isFuncUsed && hub_payment_method.indexOf(payment_method_upd) != -1)
      ) {
        console.log("checking_page4 - payment hub!");
        loaderOn("on");
        sendRequest(obj, organizer_id, free_order);
      }
    }
    // if event w/o customization (payment system)
    if (!payment_method || payment_method == "") {
      $(".ew-confirmation__label.customization-confirmation-label").css("display","block");
      $(".ew-confirmation__text-paragraph").css("display", "block");
      $(".customization2_payment-description_organizer-bank-transfer").css("display","block");
      $(".customization2_payment-description_none-selected").css("display","block");
    }

    stop_checking_page4();
  }
}
checking_page4();

function rebuildPageInvoiceConfirm() {
  responseMessage("success");
}

function addFrameListener() {
  if (window.addEventListener) {
    window.addEventListener("message", receiveMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent("onmessage", receiveMessage);
  }
}

function receiveMessage(event) {
  if (event.origin !== "https://securepay.swmh.de") {
    return;
  }
	console.log('event.data');
	console.log(event);
  if (event.data.status === "Success") {
    responseMessage("success");
  } else {
    responseMessage("error");
  }
}

function getPaymentMethod() {
  var payment_method_updated = "";
  $(".customization-button-next").on("click", function (e) {
    e.preventDefault();
    $(".customization2_organizer-bank-transfer_button").each(function () {
      if ($(this).is(":checked")) {
        payment_method_updated = $(this).closest(".customization2_organizer-bank-transfer").find(".payment-option__label").text().trim();
      }
    });
    localStorage.setItem("payment_method_upd", payment_method_updated);
    wrapper.dataset.payment_method_upd = payment_method_upd;
  });
}

function responseMessage(status) {
		console.log('responseMessage');
			console.log(status);
  if ($("#payment_Frame").length) {
    $("#payment_Frame").remove();
  }

  var heading, message, color;
  if (status === "success" && getWidgetLang() === "de") {
    heading = "Buchungsbestätigung";
    message = "Vielen Dank für Ihre Buchung. In Kürze erhalten Sie Ihre Bestätigung per E-Mail.";
    color = "green";
  } else if (status === "success" && getWidgetLang() === "en") {
    heading = "Booking confirmation";
    message = "Thank you for your booking. Shortly you will receive your booking confirmation by e-mail.";
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

function rebuildPage() {
	/*
  var payment_method = localStorage.getItem("payment_method");
  var allowed_countries = localStorage.getItem("allowed_countries");
	*/
	
  var payment_method, allowed_countries;
	
    if(localStorage.getItem("payment_method")){
	payment_method = localStorage.getItem("payment_method");
    }else{
	payment_method = wrapper.dataset.payment_method;
    }
	
    if(localStorage.getItem("allowed_countries")){
	allowed_countries = localStorage.getItem("allowed_countries");
    }else{
	allowed_countries = wrapper.dataset.allowed_countries;
    }
	

  if (!allowed_countries) {
    //old integration logic

    if (invoice_payment_method_arr_options.indexOf(payment_method) != -1) {
      $(".customization2_payment .vv-control-label.vv-radio__label-text").text("Hiermit bestätige ich die Richtigkeit meiner Angaben.");
    } else if (hub_payment_method_arr_options.indexOf(payment_method) != -1) {
      $(".customization2_payment .customization2_organizer-bank-transfer_button").attr("checked", "checked").click();
      $(".customization2_payment").hide();
      $(".customization2_booking-terms").css("margin-top", "43px");
    }
  } else {
    //NEW integration logic
    if (!payment_method || payment_method.length === 0) {
      if (allowed_countries === "forbidden") {
        
        $(".customization2_payment .payment-option").each(function () {
          var label = $(this).find(".payment-option__label").text().trim();
                                                             
          if (hub_payment_method.indexOf(label) === -1) {
            
            $(this).addClass("hidden");
            //$(this).find(".customization2_organizer-bank-transfer").attr("checked", "checked").click();
          }else{
            $(this).find(".customization2_organizer-bank-transfer").attr("checked", "checked").click();
          }
        });
        
      } else {
        $(".customization2_payment .payment-option").each(function () {
          if ($(this).hasClass("hidden-test")) {
            $(this).removeClass("hidden-test");
          }
        });
      }
    }
  }
}

var obj, organizer_id;

function getXMLHttpRequest(open) {
  console.log('getXMLHttpRequest');
  XMLHttpRequest.prototype.open = function () {
    this.addEventListener(
      "readystatechange",
      function () {
        if (this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders") {
          try {
            var res =
              typeof JSON.parse(this.responseText) != "undefined"
                ? JSON.parse(this.responseText)
                : undefined;
          } catch (err) {}
          if (res != undefined && res._embedded) {
            var orders = res._embedded.orders;
            var order_id = orders[0].id;
            organizer_id = orders[0].event.organizer_id;

            if (!organizer_id) {
              organizer_id = 13692;
            }

            obj = {
              order_id: order_id,
              callback_url:
                domain_url +
                "/v1/integrations/swmh/payment/callback/" +
                organizer_id +
                "",
              language: getWidgetLang(),
            };
          }
        }
      },
      false
    );
    open.apply(this, arguments);
  };
}

function sendRequest(object, oid, free_order) {
    console.log('sendRequest');
  responseMessage("attention");
  isFuncUsed = true;
  if (!free_order || free_order === "false") {
    $.ajax({
      url: domain_url + "/v1/integrations/swmh/payment/checkout/" + oid + "",
      type: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify(object),
      dataType: "json",
      success: function (res) {
        loaderOn("off");
        
        console.log('object');
	      console.log(object);
	      console.log('res');
	      console.log(res);

        $(".ew-confirmation__block").append(
          '<iframe id="payment_Frame" style="display:block; margin: 0 auto;" height="420" width="330" src="' + res.payload + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );

        addFrameListener();
      },
      error: function (jqXHR, exception) {
        var msg = "";
        if (jqXHR.status === 0) {
          msg = "Server is not responding.";
        } else if (jqXHR.status == 404) {
          msg = "Requested page not found. [404]";
        } else if (jqXHR.status == 500) {
          msg = "Internal Server Error [500].";
        } else if (exception === "parsererror") {
          msg = "Requested JSON parse failed.";
        } else if (exception === "timeout") {
          msg = "Time out error.";
        } else if (exception === "abort") {
          msg = "Ajax request aborted.";
        } else {
          msg = "Uncaught Error.\n" + jqXHR.responseText;
        }
        console.log("Error: " + msg);
        loaderOn("off");
        responseMessage("error");
      },
    });
  } else {
    loaderOn("off");
    responseMessage("success");
  }
}

function loaderOn(param) {
  if (param == "on") {
    $(".ew-confirmation__block").append('<div class="loader"></div>');
    $(".ew-confirmation__block .loader").show();
  } else {
    $(".ew-confirmation__block .loader").hide();
  }
}
