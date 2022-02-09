console.log("github customization loaded");

var insertionListener = function(event) {
   if (event.animationName === "nodeInserted") {
      console.log("nodeInserted");
   }
}
   

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
