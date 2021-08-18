console.log('Tag - Homag');
  
function showWorkshopblock(workshopblock){
  $(workshopblock).each( function(i, element) {
    var product = $$('.customization2_attendee_further-data_product').findField(element);
    var question = $$('.customization2_attendee_further-data_custom-question_label').findField(element);
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

function disabelProducts(products){
  $(products).each( function(i, element) {
    var product = $$('.customization2_attendee_further-data_product').findField(element); 
    var input = $(product).find('input');
    if(input.is(':checked')){
      $(product).find('input').prop('disabled', false);
    } else {
      $(product).find('input').prop('disabled', true);
    }
  });
}

function enableProducts(products){
  $(products).each( function(i, element) {
    var product = $$('.customization2_attendee_further-data_product').findField(element); 
    var input = $(product).find('input');
      $(product).find('input').prop('disabled', false);
  });
}

function productChecked(products){  
 $(products).each( function(i, element) {
  var product = $$('.customization2_attendee_further-data_product').findField(element); 
  var input = $(product).find('input');
   input.change(function(){
     if(input.is(':checked')){
      disabelProducts(products);
       //$('.customization2_attendee_further-data_product').removeClass('show', 2000);
     }
     if(!input.is(':checked')){
       enableProducts(products);
     }
   }); 
 });
}




var workshopblock1 = ["Teilnahme | Montag, 25. Oktober 2021","Rahmenprogramm | Montag, 25. Oktober 2021","Maschinenvorführung A | Montag, 25. Oktober 2021","Geplanter Besuchsbeginn | 25. Oktober 2021"]; 
var product1 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Montag, 25. Oktober 2021');
$(product1).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock1);">Montag, 25. Oktober 2021 ▼</span>');
// productChecked(workshopblock1); 


// Workshopblock2
var workshopblock2 = ["Dienstag I 26 Oktober 2021","Geplantes Besuchende | 25. Oktober 2021 (optional)","GTM Excellence (17:05 - 17:25)"];
var product2 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Dienstag I 26 Oktober 2021');
$(product2).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock2);">Dienstag, 26 Oktober 2021▼</span>');
// productChecked(workshopblock2);

// Workshopblock3
var workshopblock3 = ["Value + (17:05 - 17:25)","GTM Excellence (17:05 - 17:25)","Software Implementation Efficiency (17:05 - 17:25)","Operations Excellence (17:05 - 17:25)","SaaS Acceleration (17:05 - 17:25)","36One – Establish ‘one version of the truth’ (17:05 - 17:25)"];
var product3 = $$('.customization2_attendee_further-data_product').findField('Value + (17:05 - 17:25)');
$(product3).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock3);">Workshopslot 3 (17:05-17:25)▼</span>');
//productChecked(workshopblock3);

// Workshopblock4
var workshopblock4 = ["Digital Roadmap/ New Growth Cases (9:25 - 9:50)","ERP 2025 (9:25 - 9:50)","The Aareon triad: This is what we stand for! Vision, Mission and Values (9:25 - 9:50)","Employee Engagement Program (9:25 - 9:50)","Innovation Management (9:25 - 9:50)","We support you….GAM, GAB, Group Application Landscape? (9:25 - 9:50)"];
var product4 = $$('.customization2_attendee_further-data_product').findField('Digital Roadmap/ New Growth Cases (9:25 - 9:50)');
$(product4).before('<span class= "title_before_text" >Flight Plan Adventure Part 2</span><br><br><span class= "workshops" onclick = "showWorkshopblock(workshopblock4);">Workshopslot 1 (09:25-09:50)▼</span>');
//productChecked(workshopblock4);

// Workshopblock5
var workshopblock5 = ["Digital Roadmap/ New Growth Cases (9:55 - 10:20)","ERP 2025 (9:55 - 10:20)","The Aareon triad: This is what we stand for! Vision, Mission and Values (9:55 - 10:20)","Employee Engagement Program (9:55 - 10:20)","Innovation Management (9:55 - 10:20)","We support you….GAM, GAB, Group Application Landscape? (9:55 - 10:20)"];
var product5 = $$('.customization2_attendee_further-data_product').findField('Digital Roadmap/ New Growth Cases (9:55 - 10:20)');
$(product5).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock5);">Workshopslot 2 (09:55-10:20)▼</span>');
//productChecked(workshopblock5);


var workshopblockDig = ["Digital Roadmap/ New Growth Cases (9:25 - 9:50)","Digital Roadmap/ New Growth Cases (9:55 - 10:20)"] 
 //productChecked(workshopblockDig); 

var workshopblockERP = ["ERP 2025 (9:25 - 9:50)","ERP 2025 (9:55 - 10:20)"] 
 //productChecked(workshopblockERP); 

var workshopblockThe = ["The Aareon triad: This is what we stand for! Vision, Mission and Values (9:25 - 9:50)","The Aareon triad: This is what we stand for! Vision, Mission and Values (9:55 - 10:20)"] 
 //productChecked(workshopblockThe); 

var workshopblockEmpl = ["Employee Engagement Program (9:25 - 9:50)","Employee Engagement Program (9:55 - 10:20)"] 
// productChecked(workshopblockEmpl); 

var workshopblockInno = ["Innovation Management (9:25 - 9:50)","Innovation Management (9:55 - 10:20)"] 
 //productChecked(workshopblockInno); 

var workshopblockWeKnow = ["We support you….GAM, GAB, Group Application Landscape? (9:25 - 9:50)","We support you….GAM, GAB, Group Application Landscape? (9:55 - 10:20)"] 
 //productChecked(workshopblockWeKnow);

function editFunc(){
  var product11 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Value + (16:15 - 16:35)');
  var product12 = $$('.customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Value + (16:40 - 17:00)');
  var product13 = $$('.customization2_attendee_further-data_product').findField('Value + (17:05 - 17:25)');
  var product14 = $$('.customization2_attendee_further-data_product').findField('Digital Roadmap/ New Growth Cases (9:25 - 9:50)');
  var product15 = $$('.customization2_attendee_further-data_product').findField('Digital Roadmap/ New Growth Cases (9:55 - 10:20)');
  
  $(product11).before('<span class= "title_before_text" >Flight Plan Adventure Part 1 - Focus: Value Creation Program</span><br><br><span class= "workshops" onclick = "showWorkshopblock(workshopblock1);">Workshopslot 1 (16:15-16:35) ▼</span>');
  $(product12).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock2);">Workshopslot 2 (16:40-17:00)▼</span>');
  $(product13).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock3);">Workshopslot 3 (17:05-17:25)▼</span>');
  $(product14).before('<span class= "title_before_text" >Flight Plan Adventure Part 2</span><br><br><span class= "workshops" onclick = "showWorkshopblock(workshopblock4);">Workshopslot 1 (09:25-09:50)▼</span>');
  $(product15).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock5);">Workshopslot 2 (09:55-10:20)▼</span>');
}
      

function handler(){

  
  productChecked(workshopblock5); 
  productChecked(workshopblock4); 
  productChecked(workshopblock3); 
  productChecked(workshopblock2); 
  productChecked(workshopblock1);
}
handler();

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    editFunc();
    handler();
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
