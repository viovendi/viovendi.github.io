console.log('git-code');

// get iFrameUrlParam from frame URL
console.log(redirectUrl);

function getXMLHttpRequest (open) {
  
  console.log('getXMLHttpRequest');
  
    XMLHttpRequest.prototype.open = function() {
      this.addEventListener("readystatechange", function() {
        if(this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders" ){
          try {
            var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText): undefined;
          } catch (err) {}
          if(res != undefined && res._embedded){
            
            console.log('res:');
            console.log(res._embedded.orders);
            
            //var orders = res._embedded.orders;
            //var order_id = orders[0].id;
            
            // get data from request
            
            // send redirect
            
          }
        }
      }, false);
      open.apply(this, arguments);
    };
  };


// add listener to the post request on 2nd page
getXMLHttpRequest(XMLHttpRequest.prototype.open);

const observer = new MutationObserver((mutations, obs) => {
    const page = document.getElementsByClassName(
    'customization-booking-area-wrapper-page3'
    );

    if ($(page).is(':visible')) {
        console.log('page 3 visible');
        // run function of the page3  
        console.log('run page 3 func!');
        // add listener to the post request
      
        // send redirect when request received 
      
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

