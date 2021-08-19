console.log('Tag - Homag');

$('.customization2_attendee_further-data_custom-question-1').show()
$('.customization2_attendee_further-data_custom-question-2').show()
  
  
function showWorkshopblock(workshopblock){
  $(workshopblock).each( function(i, element) {
    var product = $$('.customization2_attendee_further-data_product').findField(element);
    var question = $$('.customization2_attendee_further-data_custom-question').findField(element);
    console.log(element);
    if($(product).hasClass('show')){
      $(product).removeClass('show');
    } else {
     $(product).addClass('show');   
    }
    if($(question).hasClass('show')){
      $(question).removeClass('show');
    } else {
     $(question).addClass('show');
    }
    
  });                                   
};





var workshopblock1 = ["Teilnahme | Montag, 25. Oktober 2021","Rahmenprogramm | Montag, 25. Oktober 2021","Maschinenvorführung A | Montag, 25. Oktober 2021","Geplanter Besuchsbeginn | 25. Oktober 2021","Geplantes Besuchende | 25. Oktober 2021"]; 
var product1 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Montag, 25. Oktober 2021');
$(product1).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock1);">Montag, 25. Oktober 2021 ▼</span>');
// productChecked(workshopblock1); 


// Workshopblock2
var workshopblock2 = ["Dienstag I 26 Oktober 2021","Geplantes Besuchsende 26 Oktober 2021","Geplanter Besuchsbeginn 26 Oktober 2021"];
var product2 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Dienstag I 26 Oktober 2021');
$(product2).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock2);">Dienstag, 26 Oktober 2021▼</span>');
// productChecked(workshopblock2);



function editFunc(){
  
$('.customization2_attendee_further-data_custom-question').show()
$('.customization2_attendee_further-data_product').show()
  var product11 = $$('.customization2_attendee_further-data_product').findField('Teilnahme | Montag, 25. Oktober 2021');
  var product12 = $$('.customization2_attendee_further-data_product').findField('Dienstag I 26 Oktober 2021');

  
  $(product11).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock1);">Teilnahme | Montag, 25. Oktober 2021▼</span>');
  $(product12).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock2);">Dienstag, 26 Oktober 2021▼</span>');

}
      


var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    editFunc();
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
