// get localstorage
console.log('github-stripe-js');

var insertionListener = function (event) {
  if (event.animationName === 'nodeInserted') {
    console.log('nodeInserted - run request intercept');
  }
  /*  
  if (event.animationName === 'nodeInsertedSeats') {
        hendler();
    }else if(event.animationName === 'ticketCatsLoaded'){
        clearTicketsInManager();
        
        if($('#chart').length === 0){
            addSeatScript();
        }
    }else if(event.animationName === 'chartScriptAdded'){
        //console.log('chartScriptAdded');
    }else if(event.animationName === 'attendeeEdited'){
        fillTicketId();
    }
  */
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari


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
            console.log('order completed');

          }
        }
      },
      false
    );
    open.apply(this, arguments);
  };
}
