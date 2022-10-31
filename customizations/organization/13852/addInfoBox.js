//What runs on every new attendee form
function handler(){
  $(".event-categories li:nth-of-type(1)").prepend( '<div style=" width: auto; display: block; margin: 0px 0px 0px; padding: 20px 20px 15px; border-radius: 6px 6px 0 0; border-bottom: 1px solid #c7c9d1; background-color: #f7f7f7;"><p style="font-weight: bolder; font-size: 18px; ">MESSESTÄNDE IM MESSEZELT</p> <br> <p> Informationen zu den Messestand-Paketen erhalten Sie <a href="https://elasticbeanstalk-eu-central-1-production.s3.eu-central-1.amazonaws.com/public/uploaded/attributes/14002/kDLNwo4r0I014zm.pdf" target="_blank">hier</a> </p> </div>');
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
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
