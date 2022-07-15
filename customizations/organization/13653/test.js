// function getEl(){
//     return new Promise(function (resolve, reject) {
//       var timerId = setInterval(function() {
//         var el  = document.getElementsByClassName("customization-booking-area-wrapper-page4");
//         if(el.length > 0){
//           clearInterval(timerId);
//           resolve(el)
//         }
//       }, 1000);
//     }
//                       )
//   };

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

// function prefillPaymentMethod(selector) {
//   const paymentMethod = document.querySelector(`.${selector}`);
//   paymentMethod.checked = true;
//   paymentMethod.dispatchEvent(new Event("change"));
//   paymentMethod.click();
// }

// function outputResult(result) {
//   var pre = document.createElement("pre");
//   pre.innerHTML = result;
//   var widgetContainer = document.getElementById("widgetContainer");
//   widgetContainer.appendChild(pre);
// }

function getOrderInformation(dataLayer) {
  console.log(dataLayer);
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
    page3: "customization-booking-area-wrapper-page3",
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
  console.log("hendler");
  console.log(document.readyState);
  if (document.readyState !== "loading") {
    console.log("document is already ready");

    await getPage("page2");
    getXMLHttpRequest(XMLHttpRequest.prototype.open);

    var result = await getPage("page4");
    var dooOrder = getOrderInformation(result.dataLayer);

    var order = localStorage.getItem("order");
    var img0 = document.createElement("img");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    var img5 = document.createElement("img");
    
    
    if (JSON.parse(order).attendees[0]?.ticket.checkin_link.length){
    var img0 = document.createElement("img");
    img0.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+JSON.parse(order).attendees[0].ticket.checkin_link);
    img0.setAttribute('style','display: block;')
    var style = document.createElement("style");
    style.innerHTML = `@media img {.pagebreak { page-break-before: always; }}`;
     document.head.appendChild(style);
    if (JSON.parse(order).attendees[1]?.ticket.checkin_link.length){
    var img1 = document.createElement("img");
    img1.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+JSON.parse(order).attendees[1].ticket.checkin_link);
    img1.setAttribute('style','display: block;')
    }
    if (JSON.parse(order).attendees[2]?.ticket.checkin_link.length){
    var img2 = document.createElement("img");
    img2.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+JSON.parse(order).attendees[2].ticket.checkin_link);
    img2.setAttribute('style','display: block;')
    }
    if (JSON.parse(order).attendees[3]?.ticket.checkin_link.length){
    var img3 = document.createElement("img");
    img3.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+JSON.parse(order).attendees[3].ticket.checkin_link);
    img3.setAttribute('style','display: block;')
    }
    if (JSON.parse(order).attendees[4]?.ticket.checkin_link.length){
    var img4 = document.createElement("img");
    img4.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+JSON.parse(order).attendees[4].ticket.checkin_link);
    img4.setAttribute('style','display: block;')
    }
    if (JSON.parse(order).attendees[5]?.ticket.checkin_link.length){
    var img5 = document.createElement("img");
    img5.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+JSON.parse(order).attendees[5].ticket.checkin_link);
    img5.setAttribute('style','display: block;')
    }
    
    
    widgetContainer.appendChild(img0);
    widgetContainer.appendChild(img1);
    widgetContainer.appendChild(img2);
    widgetContainer.appendChild(img3);
    widgetContainer.appendChild(img4);
    widgetContainer.appendChild(img5);
    /*
    var img2 = document.createElement("img");
    img.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+JSON.parse(order).attendees[1].ticket.checkin_link);
    img.setAttribute('style','display: block;')
    widgetContainer.appendChild(img2);
    */

    

  }
}

hendler();
  function setCSSstyles() {
  var style = document.createElement("style");
  style.innerHTML = `
  @media img {
    .pagebreak { page-break-before: always; } /* page-break-after works, as well */
}
  `;
  document.head.appendChild(style);
}

