console.log('GTM Works Complex-600');

var answer1 = 'Das vollständige Programm finden Sie auf <a href="https://nachhaltige-beschaffung.org/" target="_blank">www.nachhaltige-beschaffung.org</a>. Weitere organisatorische Informationen bekommen Sie rechtzeitig zugeschickt.'
$(".customization2_attendee_further-data_product-11").before(answer1);
$(".customization2_attendee_further-data_product-11:before").css({"font-weight": "600","font-size": "16px","text-align": "justify","color": "#343a3f","padding-bottom": "20px"});

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
    console.log("noteInserted");
   
   // code here
  $(".customization2_attendee_further-data_product-11").before(answer1);
  $(".customization2_attendee_further-data_product-11:before").css({"font-weight": "600","font-size": "16px","text-align": "justify","color": "#343a3f","padding-bottom": "20px"});
   
     }
   }
 

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
