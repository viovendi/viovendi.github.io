console.log("Hide BookingWindow");

var styles = `
@keyframes nodeInserted { 
    from { opacity: 0.99; }
    to { opacity: 1; } 
  }

  .customization-booking-area-wrapper-page1{
    animation-duration: 0.1s;
    animation-name: nodeInserted;
  }
`
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;

styleSheet.onreadystatechange = handlerS;
styleSheet.onload = handlerS;

document.head.appendChild(styleSheet);

function handlerS() {
    console.log('style added');
}

function handler() {
    if($('.event-categories li').length == 0){
        $('.customization-booking-area-wrapper-page1 ').hide();
      }
}
handler();

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        handler();
    }
}
document.addEventListener("animationstart", insertionListener, false);
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
