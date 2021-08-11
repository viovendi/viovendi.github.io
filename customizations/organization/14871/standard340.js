console.log('Tag - STANDARD-340');
  
function showWorkshopblock(workshopblock){
  $(workshopblock).each( function(i, element) {
    var product = $$('.customization2_attendee_further-data_product').findField(element);
    if($(product).hasClass('show')){
      $(product).removeClass('show');
    } else {
     $(product).addClass('show');   
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
       $('.customization2_attendee_further-data_product').removeClass('show', 2000);
     }
     if(!input.is(':checked')){
       enableProducts(products);
     }
   });
   
 });
}

var product0 = $$('.customization2_attendee_further-data_product').findField('Software Implementation Efficiency (16:15 - 16:35)');
  
$(product0).addClass('show');
// Workshopblock1
var workshopblock1 = ["Workshopslot 1 (16:15-16:35) "];

var product1 = $$('.customization2_attendee_further-data_product').findField('Keynote: Stark durch Krisen – von der Kunst, nicht den Kopf zu verlieren');
$(product1).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock1);">20.09.2021: Keynote: 13.00 - 14.00 Uhr ▼</span>');
 
// Workshopblock2
var workshopblock2 = ["Round Table: Sport in unseren Locations","Landkarte der Veranstaltungswirtschaft - Studienergebnisse Zähl Dazu", "Neue Pflichten und Datenströme bei hybriden Veranstaltungen für Veranstaltungshäuser", "Digitalisierung ist die Antwort – was war die Frage?"];
var product2 = $$('.customization2_attendee_further-data_product').findField('Round Table: Sport in unseren Locations');
 
$(product2).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock2);" >20.09.2021: Parallele Sessions: 14.15 - 15.15 Uhr ▼</span>');
 productChecked(workshopblock2);
// Workshopblock3
var workshopblock3 = ["Grill the Expert: Sie fragen - unsere Kooperationsanwälte antworten","Die Relevanz von Hygiene- und Sicherheitskonzepten","Digital Leadership: Einblicke in digitale Arbeitsweisen & Führungskulturen","Nachhaltigkeit in der Veranstaltungsbranche"];
var product3 = $$('.customization2_attendee_further-data_product').findField('Grill the Expert: Sie fragen - unsere Kooperationsanwälte antworten');
$(product3).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock3);">20.09.2021: Parallele Sessions 16.00 - 17.00 Uhr ▼</span>');
productChecked(workshopblock3);
// Workshopblock4
var workshopblock4 = ["Keynote: Tatort WWW - Live Hack"];
var product4 = $$('.customization2_attendee_further-data_product').findField('Keynote: Tatort WWW - Live Hack');
$(product4).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock4);">21.09.2021: Keynote 09.15 - 10.30 Uhr ▼</span>');
productChecked(workshopblock4);
var workshopblock4a = ["Stadtrundgang und Kollegenabend - See the C - im Weltecho"];
var product4a = $$('.customization2_attendee_further-data_product').findField('Stadtrundgang und Kollegenabend - See the C - im Weltecho');
$(product4a).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock4a);">20.09.2021 Abendveranstaltung ab 17.45 Uhr ▼</span>');
productChecked(workshopblock4a);

