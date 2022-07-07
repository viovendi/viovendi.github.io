console.log("git")
function handler(){

//What runs on every new attendee form

}
handler();
//Insert here, what should run once
//
var insertionListener = function(event) {
           if (event.animationName === "nodeInserted") {
           console.log("Node has been inserted: ", event.target);
           handler();
      }
}
document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false); 
document.addEventListener("webkitAnimationStart", insertionListener, false);
