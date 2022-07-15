/*
function getXMLHttpRequest(open) {
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
            var price =
              (orders[0].payment.amount - orders[0].total_coupon_discount) /
              100;
            localStorage.setItem(
              "order",
              JSON.stringify({
                price: price,
                orderId: orders[0].id,
                attendees: orders[0].attendees,
              })
            );
          }
        }
      },
      false
    );
    open.apply(this, arguments);
  };
}

function prefillPaymentMethod(selector) {
  const paymentMethod = document.querySelector(`.${selector}`);
  paymentMethod.checked = true;
  paymentMethod.dispatchEvent(new Event("change"));
  paymentMethod.click();
}

function createButtons() {
  const tickets = document.getElementsByClassName(
    "event-category__ticket-count-wrap"
  );
  var arr = Array.from(tickets);

  arr.forEach((ticket) => {
    const minus = document.createElement("div");
    minus.classList.add("minus");
    minus.innerHTML = "&#8722;";
    ticket.appendChild(minus);

    const plus = document.createElement("div");
    plus.classList.add("plus");
    plus.innerHTML = "&#43;";
    ticket.prepend(plus);
  });
}

function selectOptions(options, selectedInput) {
  for (var y = 0; y < options.length; y++) {
    var optionsNumber = +options[y].textContent.trim();
    var inputNumber = +selectedInput.textContent;

    if (optionsNumber === inputNumber) {
      options[y].dispatchEvent(new Event("change"));
      options[y].click();
    }
  }
}

function addTicket() {
  const plus = document.getElementsByClassName("plus");
  for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      const nodes = this.parentNode.childNodes;
      for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].nodeName.toLowerCase() === "vv-selection") {
          var selectedInput = nodes[j].querySelector(
            ".vv-selection-input__value"
          );
          var allOptions = nodes[j].querySelectorAll(
            ".vv-single-select-option"
          );
          selectedInput.textContent = `${+selectedInput.textContent + 1}`;
          selectOptions(allOptions, selectedInput);
        }
      }
    });
  }
}

function subtractTicket() {
  const minus = document.getElementsByClassName("minus");
  for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      const nodes = this.parentNode.childNodes;
      for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].nodeName.toLowerCase() === "vv-selection") {
          var selectedInput = nodes[j].querySelector(
            ".vv-selection-input__value"
          );
          var allOptions = nodes[j].querySelectorAll(
            ".vv-single-select-option"
          );
          selectedInput.textContent = `${+selectedInput.textContent - 1}`;
          selectOptions(allOptions, selectedInput);
        }
      }
    });
  }
}

function setCSSstyles() {
  var style = document.createElement("style");
  style.innerHTML = `
  vv-booking-editing-prompt{
    display: none;
  }
  .customization-booking-area-wrapper-page1 .event-category {
    padding: 30px 30px 0;
  }
  .background-arrow, select:not(.vv-simple-select__control){
    background: none;
 }

 .customization-booking-area-wrapper .event-category__ticket-count-wrap select{
     border-color: #e6edf8 !important;
     font-size: 1rem;
     text-indent: 13px;
 }

  .customization-booking-area-wrapper-page1 vv-selection .vv-selection-input__control{
  border-left: 0 !important;
  border-right: 0 !important;
  border-radius: 0 !important;
  border: 1px solid #e6edf8 !important;
  min-height: 40px !important;
  padding: 5px !important;
  padding-top: 9px !important;
  width: 50px !important;
  }

  .customization-booking-area-wrapper-page1 vv-selection{
  width: 50px !important;
  }

  .customization-booking-area-wrapper-page1 vv-selection vv-icon{
      display: none;
  }

  .customization-booking-area-wrapper-page1 .vv-selection-input__value{
  text-align: center;
  }

 .plus, .minus{
   background: whitesmoke;
   border: 1px solid #e6edf8;
   display: block;
   width: 50px;
   height: 40px;
   line-height: 39px;
   text-align: center;
   font-size: 1.6rem;
   cursor: pointer;
   color: #0069b6;
 }
 .plus{
   border-right: none;
   border-radius: 5px 0px 0px 5px;
 }
 .minus{
   border-left: none;
     border-radius: 0px 5px 5px 0px;
 }
 .event-category__ticket-count-wrap{
  order: 1;
  margin-right: 40px;
  display: flex;

}
.customization-category-price{
  order: 2
}
 .event-category .col-4{
  display: flex;
  justify-content: end;
}
.customization-booking-area-wrapper .customization-button-next {
  padding: 10px 20px;
}
.customization-booking-area-wrapper input, .customization-booking-area-wrapper select{
  height: 38px;
}
.customization-booking-area-wrapper-page2 .vv-nl-mb-xxs:not(:last-child) {
  margin-bottom: 20px;
}
  `;
  document.head.appendChild(style);
}

function outputResult(result) {
  var pre = document.createElement("pre");
  pre.innerHTML = result;
  var widgetContainer = document.getElementById("widgetContainer");
  widgetContainer.appendChild(pre);
}

function getOrderInformation(dataLayer) {
  var confirmed = dataLayer.find(function (o) {
    return o.event == "RegistrationConfirmed";
  });
  var { purchase } = confirmed.ecommerce;
  return JSON.stringify({
    eventId: confirmed.doo.eventId,
    organizationId: confirmed.doo.organizationId,
    bookingId: purchase.actionField.id,
    tickets: purchase.products.filter(function (o) {
      return o.category == "Ticket";
    }),
  });
}

async function getPage(page) {
  var pages = {
    page1: "customization-booking-area-wrapper-page1",
    page2: "customization-booking-area-wrapper-page2",
    page3: "customization2_payment_title",
    page4: "customization-confirmation-label",
  };
  return new Promise(function (resolve, reject) {
    try {
      const element = document.querySelector("body");

      var observer = new MutationObserver(pageLoaded);

      function pageLoaded(mutations) {
        mutations.forEach((mutation) => {
          var classList = mutation.target.classList
            ? [...mutation.target.classList]
            : [];
          if (
            mutation.type === "childList" &&
            classList.indexOf(pages[page]) != -1
          ) {
            resolve({
              selector: document.querySelector("." + pages[page]),
              dataLayer: dataLayer,
            });
          }
        });
      }

      observer.observe(element, {
        characterData: true,
        subtree: true,
        childList: true,
      });
    } catch (error) {
      reject(new Error(error));
    }
  });
}

async function hendler() {
  if (document.readyState !== "loading") {
    console.log("document is already ready");

    await getPage("page1");
    createButtons();
    addTicket();
    subtractTicket();

    await getPage("page3");
    prefillPaymentMethod("customization2_organizer-bank-transfer_button");
    getXMLHttpRequest(XMLHttpRequest.prototype.open);

    var result = await getPage("page4");
    var dooOrder = getOrderInformation(result.dataLayer);
    var order = localStorage.getItem("order");

    parent.postMessage({ dooOrder, order }, "*");
  }
}

hendler();
setCSSstyles();
*/
