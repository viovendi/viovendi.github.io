console.log('GTM Works Complex-600');

var answer1 = 'Das vollständige Programm finden Sie auf <a href="https://nachhaltige-beschaffung.org/">www.nachhaltige-beschaffung.org</a> Weitere organisatorische Informationen bekommen Sie rechtzeitig zugeschickt.'
$(".customization2_attendee_further-data_product-11").before(answer1)

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
    console.log("noteInserted");
   
   // code here
   // changeText(".customization2_attendee_further-data_product-11", "Das vollständige Programm finden Sie auf www.nachhaltige-beschaffung.org Weitere organisatorische Informationen bekommen Sie rechtzeitig zugeschickt.", answer1);
   
   
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
