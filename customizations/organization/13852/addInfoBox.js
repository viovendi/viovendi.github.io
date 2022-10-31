//What runs on every new attendee form
function handler(){
    if (!$('#CustomInfoBox').length) {
        $(".customization2_summary_box").before( '<div id="CustomInfoBox" style=" width: auto; display: block; margin-bottom: 15px; padding: 32px; border-radius: 6px; background-color: #f7f7f7;"><p style="font-weight: 600; font-size: 16px; margin-bottom: 16px;"> Leistungen Messepaket: </p> <ul style="list-style-position: outside; list-style-type: disc; padding-left: 20px"> <li style="margin-bottom:5px">Standard Messestand (Reihenstand inkl. 1 Barhocker , 1 Stehtisch)</li> <li style="margin-bottom:5px">Licht/Strom, WLAN, Teppich</li> <li style="margin-bottom:5px">Abdruck des Logos Ihrer Organisation</li> <li style="margin-bottom:5px">Messemagazin/Messe website: Profil (1/4 Seite) / Logo/Link</li> <li style="margin-bottom:5px">Präsentation Imagefilm während der Messe</li> </ul> </div>');
    }
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
