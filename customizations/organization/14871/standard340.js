console.log('Tag - STANDARD-299');
  
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

var product0 = $$('.customization2_attendee_further-data_product').findField('Sonntag, 19.09.2021 : Networking Abendessen ab 19 Uhr');
  
$(product0).addClass('show');
// Workshopblock1
var workshopblock1 = ["Keynote: Stark durch Krisen"];
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
// Workshopblock5
var workshopblock5 = ["Messe Chemnitz - Anforderungen³ an eine Multifunktionshalle aus Sicht des Kunden","Alte Aktienspinnerei / Neue Universitätsbibliothek: See the C: Veranstaltung & Stadtentwicklung","Wirkbau - Zurück in die Zukunft - Wie Kommunikation uns einander wieder näher bringt", "Wasserschloss Klaffenbach - Vielfältiges Veranstaltungsprogramm in einer AG I-Location"];
var product5 = $$('.customization2_attendee_further-data_product').findField('Messe Chemnitz - Anforderungen³ an eine Multifunktionshalle aus Sicht des Kunden');
$(product5).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock5);">21.09.2021: Site Inspections 10:30 - 13:00 Uhr ▼</span>'); 
productChecked(workshopblock5);
// Workshopblock6
var workshopblock6 = ['Zukunft LIVE. Wie haben sich die Ansprüche der Kunden an die Locationbetreiber für die Zeit nach Corona verändert', "Wahrnehmung von", "Olympiastadion London – Corona-Pandemie und ihre Auswirkungen", "Treffpunkt women in congress & events"];
var product6 = $$('.customization2_attendee_further-data_product').findField('Zukunft LIVE. Wie haben sich die Ansprüche der Kunden an die Locationbetreiber für die Zeit nach Corona verändert');
$(product6).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock6);">21.09.2021: Parallele Sessions 15:15 - 16:15 Uhr ▼</span>');
productChecked(workshopblock6);
// Workshopblock7
var workshopblock7 = ["Kollegialer Austausch","Veranstaltungsverträge während und nach der Pandemie","Best practice Osnabrückhalle: Große Firmenevents - hybrid und emotional inszeniert"];
var product7 = $$('.customization2_attendee_further-data_product').findField('Kollegialer Austausch');
$(product7).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock7);">21.09.2021: Parallele Sessions 17:00 - 18:00 Uhr ▼</span>');
productChecked(workshopblock7);
// Workshopblock8
var workshopblock8 = ["- The Color of Together - im Galilei Bereich"];
var product8 = $$('.customization2_attendee_further-data_product').findField('- The Color of Together - im Galilei Bereich');
$(product8).before('<span class= "workshops" onclick = "showWorkshopblock(workshopblock8);">21.09.2021 Abendveranstaltung ab 19.30 Uhr ▼</span>');
productChecked(workshopblock8);
