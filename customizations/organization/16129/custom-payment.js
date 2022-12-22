console.log('github-js');

async function handler() {
  console.log('handler-'+document.readyState);
  if (document.readyState !== 'loading') {

    await getPage('page1');
    console.log("page1!");

    await getPage('page2');
    console.log("page2!");
    getXMLHttpRequest(XMLHttpRequest.prototype.open);
    
    await getPage('page3');
    console.log("page3!");

    await getPage('page4');
    console.log("page4!");
    
  }
}
handler();


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
  }
}


function sendRequest(object){
  console.log('sendRequest - start');
  $.ajax({
      url: "https://hook.doo.integromat.celonis.com/1bqimjodufy1bi4zxky2rm326pdc50nn",
      type: "post",
      headers: {
        // "Content-Type": "application/json",
        // Accept: "application/json",
      },
      data: JSON.stringify(object),
      dataType: "json",
      success: function (res) {
        // redirect to payment page
        console.log(res);
        // const paymentUrl = 
        // window.location();
      },
      error: function (jqXHR, exception) {
        // show the error message?
        showErrorMessage();
        console.log('Error - no payment page URL');
      }
  });
}

var isSent = false;
function getXMLHttpRequest (open) {
    XMLHttpRequest.prototype.open = function() {
      this.addEventListener("readystatechange", function() {
        if(this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders" ){
          try {
            var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText): undefined;
          } catch (err) {}
          if(res != undefined && res._embedded){

           // send the request to Make (to confirm the seats booking)
             const orders = res._embedded.orders;
              console.log(orders[0]);
            
            if(!isSent){
              sendRequest({
               orderId: orders[0].id,
               orderAmount: orders[0].payment.amount,
               orderCurr: orders[0].event.currency.code,
             });
            }
            
            isSent = true;
            
            // snd the request to get the payment page URL
          }
        }
      }, false);
      open.apply(this, arguments);
    };
};
  
  
async function getPage(page) {
  var pages = {
    page1: "customization-booking-area-wrapper-page1",
    page2: "customization-booking-area-wrapper-page2",
    page3: "customization-booking-area-wrapper-page3",
    page4: "customization-booking-area-wrapper-page4",
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
