
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

    await getPage("page3");
    getXMLHttpRequest(XMLHttpRequest.prototype.open);

    var result = await getPage("page4");
    var dooOrder = getOrderInformation(result.dataLayer);
    var order = localStorage.getItem("order");

    parent.postMessage({ dooOrder, order }, "*");
  }
}

hendler();

