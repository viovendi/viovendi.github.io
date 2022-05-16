//What runs on every new attendee form
function handler(){
  
  $( ".event-categories li:contains('Tagesticket Erwachsene')" ).prepend( '<div style=" width: auto; display: block; margin: 0px 0px 0px; padding: 20px 20px 15px; border-top: 1px solid #c7c9d1; border-bottom: 1px solid #c7c9d1; background-color: #f7f7f7;"><p style="font-weight: bolder; font-size: 18px; ">Tickets JAGD & HUND</p> </div>');
  $( ".event-categories li:contains('Streetfood-Gerichte (Mittwoch, 11.00 – 12.30 Uhr)')" ).prepend( '<div style=" width: auto; display: block; margin: 0px 0px 0px; padding: 20px 20px 15px; border-top: 1px solid #c7c9d1; border-bottom: 1px solid #c7c9d1; background-color: #f7f7f7;"><p style="font-weight: bolder; font-size: 18px; ">WORKSHOPS | WILD FOOD FESTIVAL | Mittwoch</p> </div>');
  $( ".event-categories li:contains('Rustikale Pizza mit Wild vom Grill (Donnerstag, 11.00 - 12.30 Uhr)')" ).prepend( '<div style=" width: auto; display: block; margin: 0px 0px 0px; padding: 20px 20px 15px; border-top: 1px solid #c7c9d1; border-bottom: 1px solid #c7c9d1; background-color: #f7f7f7;"><p style="font-weight: bolder; font-size: 18px; ">WORKSHOPS | WILD FOOD FESTIVAL | Donnerstag</p> </div>');
  $( ".event-categories li:contains('Rustikale Pizza mit Wild vom Grill (Freitag, 11.00 - 12.30 Uhr)')" ).prepend( '<div style=" width: auto; display: block; margin: 0px 0px 0px; padding: 20px 20px 15px; border-top: 1px solid #c7c9d1; border-bottom: 1px solid #c7c9d1; background-color: #f7f7f7;"><p style="font-weight: bolder; font-size: 18px; ">WORKSHOPS | WILD FOOD FESTIVAL | Freitag</p> </div>');
  $( ".event-categories li:contains('(Samstag, 11.00 - 12.30 Uhr)')" ).prepend( '<div style=" width: auto; display: block; margin: 0px 0px 0px; padding: 20px 20px 15px; border-top: 1px solid #c7c9d1; border-bottom: 1px solid #c7c9d1; background-color: #f7f7f7;"><p style="font-weight: bolder; font-size: 18px; ">WORKSHOPS | WILD FOOD FESTIVAL | Samstag</p> </div>');
  $( ".event-categories li:contains('(Sonntag, 11.00 - 12.30 Uhr)')" ).prepend( '<div style=" width: auto; display: block; margin: 0px 0px 0px; padding: 20px 20px 15px; border-top: 1px solid #c7c9d1; border-bottom: 1px solid #c7c9d1; background-color: #f7f7f7;"><p style="font-weight: bolder; font-size: 18px; ">WORKSHOPS | WILD FOOD FESTIVAL | Sonntag</p> </div>');

  
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
