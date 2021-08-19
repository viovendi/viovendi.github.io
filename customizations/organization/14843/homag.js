console.log('Tag - Homag');

$('.customization2_attendee_further-data_custom-question-1').show()
$('.customization2_attendee_further-data_custom-question-2').show()
$('.customization2_attendee_further-data_custom-question-3').show()

  
  
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





var workshopblock1 = ["Teilnahme | Montag, 25. Oktober 2021","Geplanter Besuchsbeginn | 25. Oktober 2021","Geplantes Besuchende | 25. Oktober 2021"]; 
var product1 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Montag, 25. Oktober 2021');
$(product1).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock1);">Montag, 25. Oktober 2021 ▼</span>');


// Workshopblock2
var workshopblock2 = ["Teilnahme | Dienstag, 26. Oktober 2021","Geplanter Besuchsbeginn | 26. Oktober 2021","Geplantes Besuchsende | 26. Oktober 2021","26.10.21 | 13:00 Uhr - 14:00 Uhr | Software materialManager Advanced Workshop live"];
var product2 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Dienstag, 26. Oktober 2021');
$(product2).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock2);">Dienstag, 26 Oktober 2021▼</span>');

//Mittwoch
var workshopblock3 = ["Teilnahme | Mittwoch, 27. Oktober 2021","27.10.21 | 10:00 Uhr - 12:00 Uhr | Digital Factory Workshop live – face to face","27.10.21 | 14:00 Uhr - 15:00 Uhr | Sichere Schnittqualität in der automatischen Produktion – SAWTEQ B-300 flexTec live","27.10.21 | 17:00 Uhr - 19:00 Uhr | Get together","Geplanter Besuchsbeginn | 27. Oktober 2021","Geplantes Besuchsende | 27. Oktober 2021"]; 
var product3 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Mittwoch, 27. Oktober 2021');
$(product3).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock3);">Mittwoch, 27. Oktober 2021 ▼</span>');

//donnerstag
var workshopblock4 = ["Teilnahme | Donnerstag, 28. Oktober 2021","Geplanter Besuchsbeginn | 28. Oktober 2021","Geplantes Besuchsende | 28. Oktober 2021","28.10.21 | 10:00 Uhr - 11:00 Uhr | Woodwop Workshop live – face to face","28.10.21 | 13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion","28.10.21 | 17:00 Uhr - 19:00 Uhr | Get together"]; 
var product4 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Donnerstag, 28. Oktober 2021');
$(product4).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock4);">Donnerstag, 28. Oktober 2021 ▼</span>');

//Freitag
var workshopblock5 = ["Teilnahme | Freitag, 29. Oktober 2021","Geplanter Besuchsbeginn | 29. Oktober 2021","Geplantes Besuchsende | 29. Oktober 2021","29.10.21 |10:00 Uhr - 11:00 Uhr | Software materialManager Advanced Workshop live","28.10.21 | 13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion","28.10.21 | 17:00 Uhr - 19:00 Uhr | Get together"]; 
var product5 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Donnerstag, 28. Oktober 2021');
$(product5).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock5);">Freitag, 29. Oktober 2021 ▼</span>');


function editFunc(){
  
$('.customization2_attendee_further-data_custom-question').show()
$('.customization2_attendee_further-data_product').show()
 // var product11 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Montag, 25. Oktober 2021');
  //var product12 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Dienstag I 26 Oktober 2021');
  
 // $(product11).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock1);">Teilnahme | Montag, 25. Oktober 2021▼</span>');
 // $(product12).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock2);">Dienstag, 26 Oktober 2021▼</span>');

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
