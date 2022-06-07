console.log("git sommerakademie");



// call handler whenever a checkbox is clicked/changed
function init(name) {
  $('.' + name + ' .customization2_attendee_further-data_product_checkbox').on('change', function () {
   // $("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(7)").hide();
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > vv-additional-question-radio > div").hide();
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(7)").hide();
    handler();
  });
}

function handlernew(){
  var pathname = window.location.pathname;
  var eventId = pathname.split('/')[3];
  if (eventId == 105260) {
  init('customization2_attendee');

  handler();
  console.log("start");
  }
  else{
  console.log("do nothing");
  }
}
handlernew();



//hide product group



function showProductGroup2(shortName){
$('.customization2_attendee_further-data_product').each(function(i, element) {
     var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
     var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

     if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
           //todo show product group
            $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > vv-additional-question-radio > div").show();
           console.log(checkboxName + "clicked / unchecked");
         }
       }
 }
                                                      )};
function showProductGroup(shortName){
$('.customization2_attendee_further-data_product').each(function(i, element) {
     var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
     var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

     if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
           //todo show product group
        $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(7)").show();
           console.log(checkboxName + "clicked / unchecked");
         }
       }
 }
                                                      )};


function disableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) >= 0){
                checkbox.prop( "disabled", true )
             }
    });
   }

function enableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) >= 0){
                checkbox.prop( "disabled", false )
             }
    });
   }



function uncheckProd(shortName){
$('.customization2_attendee_further-data_product').each(function(i, element) {
     var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
     var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

     if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
            checkbox.trigger('click');
           console.log(checkboxName + "clicked / unchecked");
         }
       }
 }
                                                      )};

function disablenaduncheck(shortName){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
          var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          //uncheck:
      if(checkbox.is(':checked')){
         if(checkboxName.indexOf(shortName) >= 0){
            checkbox.trigger('click');
           console.log(checkboxName + "clicked / unchecked");
         }
       }
          //disable
             if(checkboxName.indexOf(shortName) >= 0){
                checkbox.prop( "disabled", true )
             }
      
    });
   }





// return true if checkbox is checked, returns false is checkbox is NOT checked
// checks all checkboxes, filter by shortName
function ischecked(shortName) {
  var bool = false;
  $('.customization2_attendee_further-data_product').each(function (i, element) {
    var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
    var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()


    if (checkbox.is(':checked')) {
      if (checkboxName.indexOf(shortName) >= 0) {
        bool = true;
      }
    }
  })
  return bool;
}

// handler is called every time a checkbox is "changed" 
function handler() {
  showProductGroup("04.07.22 13:30 – 17:30 Uhr: LET´S TALK - Service & Beratung ganz individuell zum Unterrichtshilfeportal (UHP) MV");
  showProductGroup2("06.07.22 09:00 – 16:00 Uhr: Stand up-Paddeln im außerschulischen Sport");
    const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
    // hide other day when 1 day is selected
    console.log("1");
     if (ischecked("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen")) {
      
    } 
    else if(!ischecked("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen")){
      
    }
  
   if (ischecked("Zweitägig: Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer") || ischecked("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen")) {
disablenaduncheck("09:00 - 16:00 Uhr: Gespräche erfolgreich führen");
disablenaduncheck("2-teilig: 10:00 - 12:00 Uhr und 13:30 – 16:00 Uhr: Gender* und Co – Geschlechtersensible Pädagogik und Diversity in meinem Unterricht umsetzen – Herausforderungen und praktische Anwendungen");
disablenaduncheck("09:00 - 16:00 Uhr: Verbraucherbildung ist Bildung für nachhaltige Entwicklung");
disablenaduncheck("09:00 – 16:00 Uhr: Diskriminierung im Schulalltag - erkennen und begegnen");
disablenaduncheck("09:00 - 16:00 Uhr: Stressabbau im Alltag");
disablenaduncheck("09:00 - 16:00 Uhr: Praktische Selbstbehauptung/Selbstverteidigung für Lehrer und Erzieher");
disablenaduncheck("09:00 – 14:00 Uhr: Aufsichts- und Haftungsrecht in der Schule");
disablenaduncheck("10:00 – 12:30 Uhr: Verschwörungserzählungen – eine Gefahr für die Demokratie?");
disablenaduncheck("09:00 – 15:00 Uhr: Gefährliche Projektion – Antisemitismus, eine Realität in der Mitte der Gesellschaft");
disablenaduncheck("10:00 - 15:00 Uhr: Transformative Wasserbildung");
disablenaduncheck("10:00 – 13:00 Uhr: Auf den Acker - fertig - los! Die GemüseAckerdemie: Das Bildungsprogramm für mehr Nachhaltigkeit und Ernährungskompetenz");
disablenaduncheck("09:00 – 16:00 Uhr: Naturprojekt Gänseblümchen - mit Kindern die Natur erleben");
disablenaduncheck("09:00 – 12:30 Uhr: Schnupperkurs Line Dance");
disablenaduncheck("09:00 – 16:00 Uhr: Stand up-Paddeln im außerschulischen Sport");
disablenaduncheck("09:00 – 15:00 Uhr: Outdoor-Aktivitäten mit Lerngruppen");
disablenaduncheck("10:00 – 15:00 Uhr: Chorleitung und chorische Stimmbildung");
disablenaduncheck("09:00 – 15:00 Uhr: Schüler*innen drehen eigene Videos im Unterricht");
disablenaduncheck("09:00 – 11:00 Uhr: Die Pflege der niederdeutschen Sprache als Bildungs- und Entwicklungsziel: Grundlagen und Perspektiven");
disablenaduncheck("09:00 – 12:30 Uhr: Erklärfilme für Grundschüler*innen");
     
    } 
    else if (!ischecked("Zweitägig: Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer") || !ischecked("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen")) {
      console.log("notchecked");
      enableProd("09:00 - 16:00 Uhr: Gespräche erfolgreich führen");
enableProd("2-teilig: 10:00 - 12:00 Uhr und 13:30 – 16:00 Uhr: Gender* und Co – Geschlechtersensible Pädagogik und Diversity in meinem Unterricht umsetzen – Herausforderungen und praktische Anwendungen");
enableProd("09:00 - 16:00 Uhr: Verbraucherbildung ist Bildung für nachhaltige Entwicklung");
enableProd("09:00 – 16:00 Uhr: Diskriminierung im Schulalltag - erkennen und begegnen");
enableProd("09:00 - 16:00 Uhr: Stressabbau im Alltag");
enableProd("09:00 - 16:00 Uhr: Praktische Selbstbehauptung/Selbstverteidigung für Lehrer und Erzieher");
enableProd("09:00 – 14:00 Uhr: Aufsichts- und Haftungsrecht in der Schule");
enableProd("10:00 – 12:30 Uhr: Verschwörungserzählungen – eine Gefahr für die Demokratie?");
enableProd("09:00 – 15:00 Uhr: Gefährliche Projektion – Antisemitismus, eine Realität in der Mitte der Gesellschaft");
enableProd("10:00 - 15:00 Uhr: Transformative Wasserbildung");
enableProd("10:00 – 13:00 Uhr: Auf den Acker - fertig - los! Die GemüseAckerdemie: Das Bildungsprogramm für mehr Nachhaltigkeit und Ernährungskompetenz");
enableProd("09:00 – 16:00 Uhr: Naturprojekt Gänseblümchen - mit Kindern die Natur erleben");
enableProd("09:00 – 12:30 Uhr: Schnupperkurs Line Dance");
enableProd("09:00 – 16:00 Uhr: Stand up-Paddeln im außerschulischen Sport");
enableProd("09:00 – 15:00 Uhr: Outdoor-Aktivitäten mit Lerngruppen");
enableProd("10:00 – 15:00 Uhr: Chorleitung und chorische Stimmbildung");
enableProd("09:00 – 15:00 Uhr: Schüler*innen drehen eigene Videos im Unterricht");
enableProd("09:00 – 11:00 Uhr: Die Pflege der niederdeutschen Sprache als Bildungs- und Entwicklungsziel: Grundlagen und Perspektiven");
enableProd("09:00 – 12:30 Uhr: Erklärfilme für Grundschüler*innen");

     // uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1");
      
    }

 
   if (ischecked("Zweitägig: Mo / Di 13:30 – 17:00 Uhr 10:00 – 17:00 Uhr: Das Neue aus dem Alten, die Schönheit verbirgt sich im Unerwarteten – Schmuckgestaltung aus Abfallmaterial")|| ischecked("Zweitägig: Mo / Di 14:00 - 17:00 Uhr 10:00 - 17:00 Uhr: Performatives Arbeiten im Unterricht - Darstellendes Spiel")) {
     console.log("2");
      disablenaduncheck("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
disablenaduncheck("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
disablenaduncheck("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst");
disablenaduncheck("Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer");
disablenaduncheck("10:00 – 17:00 Uhr: Qigong mit Kindern");
disablenaduncheck("10:00 – 16:00 Uhr: Datenschutzrecht in Schulen");
disablenaduncheck("10:00 – 16:00 Uhr: Eine jüdische Straße in Mecklenburg und Vorpommern");
disablenaduncheck("10:00 – 15:00 Uhr: Förderung von Kindern mit Schwierigkeiten beim Schriftspracherwerb");
disablenaduncheck("05.07.22 10:00 - 16:00 Uhr: Geschichte ist überall - Spuren lesen und pädagogische Ideen zur Einbindung in den Unterricht");
disablenaduncheck("10:00 – 13:00 Uhr: Wie kann ich Nachhaltigkeit an meiner Schule stärken? - Einführung in die BNE, globale Schulpartnerschaften und nachhaltige Klassenfahrten");
disablenaduncheck('05.07.22 14:00 – 17:00 Uhr: "Neues Lernen braucht das Land" - BNE-Werkstatt zur Unterrichtsentwicklung');
disablenaduncheck("10:00 – 17:00 Uhr: „So, das ist jetzt Ihr Schulgarten!“ Und nun? - Kickstarterkurs Gärtnern im Schulgarten");
disablenaduncheck("10:00 – 16:00 Uhr: Globales Lernen im Schulgarten");
disablenaduncheck("10:00 – 17:00: NATUR & KUNST - mit Hundertwasser Kunst und Natur verbinden");
disablenaduncheck("10:00 – 16:00: Von der Brennnessel zum T-Shirt");
disablenaduncheck("10:00 - 17:00 Uhr: Gerätturnen im Schulsport Klasse 1 bis 6 – Sicherheit und methodische Reihen");
disablenaduncheck("10:00 - 17:00 Uhr: Finde deinen Rhythmus - Konnakol, Rahmentrommel, Bodypercussion");
disablenaduncheck("10:00 – 17:00 Uhr: Naturwissenschaft beginnt mit dem Beobachten - Der Kreislauf der Gesteine");
disablenaduncheck("10:00 – 13:00 Uhr: Berufsorientierung - Strukturen für einen vielfältigen BO-Unterricht entwickeln");
disablenaduncheck("14:00 – 17:00 Uhr: Berufliche Orientierung gemeinsam gestalten – rechtliche Grundlagen, Konzept und Netzwerke");
disablenaduncheck("10:00 – 15:00 Uhr: Gewalt und Mobbing in der Schule vorbeugen");
     
    } 
    else if (!ischecked("Zweitägig: Mo / Di 13:30 – 17:00 Uhr 10:00 – 17:00 Uhr: Das Neue aus dem Alten, die Schönheit verbirgt sich im Unerwarteten – Schmuckgestaltung aus Abfallmaterial") || !ischecked("Zweitägig: Mo / Di 14:00 - 17:00 Uhr 10:00 - 17:00 Uhr: Performatives Arbeiten im Unterricht - Darstellendes Spiel")) {
      enableProd("10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
enableProd("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
enableProd("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst");
enableProd("Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer");
enableProd("10:00 – 17:00 Uhr: Qigong mit Kindern");
enableProd("10:00 – 16:00 Uhr: Datenschutzrecht in Schulen");
enableProd("10:00 – 16:00 Uhr: Eine jüdische Straße in Mecklenburg und Vorpommern");
enableProd("10:00 – 15:00 Uhr: Förderung von Kindern mit Schwierigkeiten beim Schriftspracherwerb");
enableProd("05.07.22 10:00 - 16:00 Uhr: Geschichte ist überall - Spuren lesen und pädagogische Ideen zur Einbindung in den Unterricht");
enableProd("10:00 – 13:00 Uhr: Wie kann ich Nachhaltigkeit an meiner Schule stärken? - Einführung in die BNE, globale Schulpartnerschaften und nachhaltige Klassenfahrten");
enableProd('05.07.22 14:00 – 17:00 Uhr: "Neues Lernen braucht das Land" - BNE-Werkstatt zur Unterrichtsentwicklung');
enableProd("10:00 – 17:00 Uhr: „So, das ist jetzt Ihr Schulgarten!“ Und nun? - Kickstarterkurs Gärtnern im Schulgarten");
enableProd("10:00 – 16:00 Uhr: Globales Lernen im Schulgarten");
enableProd("10:00 – 17:00: NATUR & KUNST - mit Hundertwasser Kunst und Natur verbinden");
enableProd("10:00 – 16:00: Von der Brennnessel zum T-Shirt");
enableProd("10:00 - 17:00 Uhr: Gerätturnen im Schulsport Klasse 1 bis 6 – Sicherheit und methodische Reihen");
enableProd("10:00 - 17:00 Uhr: Finde deinen Rhythmus - Konnakol, Rahmentrommel, Bodypercussion");
enableProd("10:00 – 17:00 Uhr: Naturwissenschaft beginnt mit dem Beobachten - Der Kreislauf der Gesteine");
enableProd("10:00 – 13:00 Uhr: Berufsorientierung - Strukturen für einen vielfältigen BO-Unterricht entwickeln");
enableProd("14:00 – 17:00 Uhr: Berufliche Orientierung gemeinsam gestalten – rechtliche Grundlagen, Konzept und Netzwerke");
enableProd("10:00 – 15:00 Uhr: Gewalt und Mobbing in der Schule vorbeugen");


     // uncheckProduct2whenProduct1Isunchecked("Montag","Workshop 1");
      
    }
  if (ischecked("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen")
|| ischecked("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst")
|| ischecked("Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer")
|| ischecked("10:00 – 17:00 Uhr: Qigong mit Kindern")
|| ischecked("10:00 – 16:00 Uhr: Datenschutzrecht in Schulen")
|| ischecked("10:00 – 16:00 Uhr: Eine jüdische Straße in Mecklenburg und Vorpommern")
|| ischecked("10:00 – 15:00 Uhr: Förderung von Kindern mit Schwierigkeiten beim Schriftspracherwerb")
|| ischecked("05.07.22 10:00 - 16:00  Uhr: Geschichte ist überall - Spuren lesen und pädagogische Ideen zur Einbindung in den Unterricht")
|| ischecked("10:00 – 17:00 Uhr: „So, das ist jetzt Ihr Schulgarten!“ Und nun? - Kickstarterkurs Gärtnern im Schulgarten")
|| ischecked("10:00 – 16:00 Uhr: Globales Lernen im Schulgarten")
|| ischecked("10:00 – 17:00: NATUR & KUNST - mit Hundertwasser Kunst und Natur verbinden")
|| ischecked("10:00 – 16:00: Von der Brennnessel zum T-Shirt")
|| ischecked("10:00 - 17:00 Uhr: Gerätturnen im Schulsport Klasse 1 bis 6 – Sicherheit und methodische Reihen")
|| ischecked("10:00 - 17:00 Uhr: Finde deinen Rhythmus - Konnakol, Rahmentrommel, Bodypercussion")
|| ischecked("10:00 – 17:00 Uhr: Naturwissenschaft beginnt mit dem Beobachten - Der Kreislauf der Gesteine")
|| ischecked("10:00 – 15:00 Uhr: Gewalt und Mobbing in der Schule vorbeugen")
     || ischecked("05.07.22 10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern")) {
  
  console.log("irgendeins ischecked");
if(!ischecked("05.07.22 10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern"))  
disablenaduncheck("05.07.22 10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");

if(!ischecked("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen"))
disablenaduncheck("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");

if(!ischecked("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst"))
disablenaduncheck("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst");

if(!ischecked("Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer"))
disablenaduncheck("Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer");

if(!ischecked("10:00 – 17:00 Uhr: Qigong mit Kindern"))
disablenaduncheck("10:00 – 17:00 Uhr: Qigong mit Kindern");

if(!ischecked("10:00 – 16:00 Uhr: Datenschutzrecht in Schulen"))
disablenaduncheck("10:00 – 16:00 Uhr: Datenschutzrecht in Schulen");

if(!ischecked("10:00 – 16:00 Uhr: Eine jüdische Straße in Mecklenburg und Vorpommern"))
disablenaduncheck("10:00 – 16:00 Uhr: Eine jüdische Straße in Mecklenburg und Vorpommern");

if(!ischecked("10:00 – 15:00 Uhr: Förderung von Kindern mit Schwierigkeiten beim Schriftspracherwerb"))
disablenaduncheck("10:00 – 15:00 Uhr: Förderung von Kindern mit Schwierigkeiten beim Schriftspracherwerb");

if(!ischecked("05.07.22 10:00 - 16:00  Uhr: Geschichte ist überall - Spuren lesen und pädagogische Ideen zur Einbindung in den Unterricht"))
disablenaduncheck("05.07.22 10:00 - 16:00  Uhr: Geschichte ist überall - Spuren lesen und pädagogische Ideen zur Einbindung in den Unterricht");

if(!ischecked("05.07.22 10:00 – 13:00 Uhr: Wie kann ich Nachhaltigkeit an meiner Schule stärken? - Einführung in die BNE, globale Schulpartnerschaften und nachhaltige Klassenfahrten"))
disablenaduncheck("05.07.22 10:00 – 13:00 Uhr: Wie kann ich Nachhaltigkeit an meiner Schule stärken? - Einführung in die BNE, globale Schulpartnerschaften und nachhaltige Klassenfahrten");

if(!ischecked('05.07.22 14:00 – 17:00 Uhr: "Neues Lernen braucht das Land" - BNE-Werkstatt zur Unterrichtsentwicklung'))
disablenaduncheck('05.07.22 14:00 – 17:00 Uhr: "Neues Lernen braucht das Land" - BNE-Werkstatt zur Unterrichtsentwicklung');

if(!ischecked("10:00 – 17:00 Uhr: „So, das ist jetzt Ihr Schulgarten!“ Und nun? - Kickstarterkurs Gärtnern im Schulgarten"))
disablenaduncheck("10:00 – 17:00 Uhr: „So, das ist jetzt Ihr Schulgarten!“ Und nun? - Kickstarterkurs Gärtnern im Schulgarten");

if(!ischecked("10:00 – 16:00 Uhr: Globales Lernen im Schulgarten"))
disablenaduncheck("10:00 – 16:00 Uhr: Globales Lernen im Schulgarten");

if(!ischecked("10:00 – 17:00: NATUR & KUNST - mit Hundertwasser Kunst und Natur verbinden"))
disablenaduncheck("10:00 – 17:00: NATUR & KUNST - mit Hundertwasser Kunst und Natur verbinden");

if(!ischecked("10:00 – 16:00: Von der Brennnessel zum T-Shirt"))
disablenaduncheck("10:00 – 16:00: Von der Brennnessel zum T-Shirt");

if(!ischecked("10:00 - 17:00 Uhr: Gerätturnen im Schulsport Klasse 1 bis 6 – Sicherheit und methodische Reihen"))
disablenaduncheck("10:00 - 17:00 Uhr: Gerätturnen im Schulsport Klasse 1 bis 6 – Sicherheit und methodische Reihen");

if(!ischecked("10:00 - 17:00 Uhr: Finde deinen Rhythmus - Konnakol, Rahmentrommel, Bodypercussion"))
disablenaduncheck("10:00 - 17:00 Uhr: Finde deinen Rhythmus - Konnakol, Rahmentrommel, Bodypercussion");

if(!ischecked("10:00 – 17:00 Uhr: Naturwissenschaft beginnt mit dem Beobachten - Der Kreislauf der Gesteine"))
disablenaduncheck("10:00 – 17:00 Uhr: Naturwissenschaft beginnt mit dem Beobachten - Der Kreislauf der Gesteine");

if(!ischecked("10:00 – 13:00 Uhr: Berufsorientierung - Strukturen für einen vielfältigen BO-Unterricht entwickeln"))
disablenaduncheck("10:00 – 13:00 Uhr: Berufsorientierung - Strukturen für einen vielfältigen BO-Unterricht entwickeln");

if(!ischecked("14:00 – 17:00 Uhr: Berufliche Orientierung gemeinsam gestalten – rechtliche Grundlagen, Konzept und Netzwerke"))
disablenaduncheck("14:00 – 17:00 Uhr: Berufliche Orientierung gemeinsam gestalten – rechtliche Grundlagen, Konzept und Netzwerke");

if(!ischecked("10:00 – 15:00 Uhr: Gewalt und Mobbing in der Schule vorbeugen"))
disablenaduncheck("10:00 – 15:00 Uhr: Gewalt und Mobbing in der Schule vorbeugen");
    
    
  }
  
  
  if (ischecked("10:00 – 13:00 Uhr: Berufsorientierung - Strukturen für einen vielfältigen BO-Unterricht entwickeln") ||
ischecked("14:00 – 17:00 Uhr: Berufliche Orientierung gemeinsam gestalten – rechtliche Grundlagen, Konzept und Netzwerke") || ischecked("10:00 – 13:00 Uhr: Wie kann ich Nachhaltigkeit an meiner Schule stärken? - Einführung in die BNE, globale Schulpartnerschaften und nachhaltige Klassenfahrten")
 || ischecked('05.07.22 14:00 – 17:00 Uhr: "Neues Lernen braucht das Land" - BNE-Werkstatt zur Unterrichtsentwicklung')) {
  
  console.log("halbtägiges ischecked");
disablenaduncheck("05.07.22 10:00 – 17:00 Uhr: Umgang mit Unterrichtsstörungen – Schwierige Situationen meistern");
disablenaduncheck("Zweitägig: Di/ Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: (Schwierige) Gespräche konstruktiv und erfolgreich führen");
disablenaduncheck("10:00 – 17:00 Uhr: Wandern - Der Weg zu sich selbst");
disablenaduncheck("Di / Mi 10:00 - 17:00 Uhr/ 09:00 - 16:00 Uhr: Kopfkino und Herzenswünsche -Mentales Training für Lehrerinnen und Lehrer");
disablenaduncheck("10:00 – 17:00 Uhr: Qigong mit Kindern");
disablenaduncheck("10:00 – 16:00 Uhr: Datenschutzrecht in Schulen");
disablenaduncheck("10:00 – 16:00 Uhr: Eine jüdische Straße in Mecklenburg und Vorpommern");
disablenaduncheck("10:00 – 15:00 Uhr: Förderung von Kindern mit Schwierigkeiten beim Schriftspracherwerb");
disablenaduncheck("05.07.22 10:00 - 16:00  Uhr: Geschichte ist überall - Spuren lesen und pädagogische Ideen zur Einbindung in den Unterricht");

if(ischecked("10:00 – 13:00 Uhr: Berufsorientierung - Strukturen für einen vielfältigen BO-Unterricht entwickeln"))
    disablenaduncheck("10:00 – 13:00 Uhr: Wie kann ich Nachhaltigkeit an meiner Schule stärken? - Einführung in die BNE, globale Schulpartnerschaften und nachhaltige Klassenfahrten");

if(ischecked("14:00 – 17:00 Uhr: Berufliche Orientierung gemeinsam gestalten – rechtliche Grundlagen, Konzept und Netzwerke"))
    disablenaduncheck('05.07.22 14:00 – 17:00 Uhr: "Neues Lernen braucht das Land" - BNE-Werkstatt zur Unterrichtsentwicklung');

disablenaduncheck("10:00 – 17:00 Uhr: „So, das ist jetzt Ihr Schulgarten!“ Und nun? - Kickstarterkurs Gärtnern im Schulgarten");
disablenaduncheck("10:00 – 16:00 Uhr: Globales Lernen im Schulgarten");
disablenaduncheck("10:00 – 17:00: NATUR & KUNST - mit Hundertwasser Kunst und Natur verbinden");
disablenaduncheck("10:00 – 16:00: Von der Brennnessel zum T-Shirt");
disablenaduncheck("10:00 - 17:00 Uhr: Gerätturnen im Schulsport Klasse 1 bis 6 – Sicherheit und methodische Reihen");
disablenaduncheck("10:00 - 17:00 Uhr: Finde deinen Rhythmus - Konnakol, Rahmentrommel, Bodypercussion");
disablenaduncheck("10:00 – 17:00 Uhr: Naturwissenschaft beginnt mit dem Beobachten - Der Kreislauf der Gesteine");

if(ischecked("10:00 – 13:00 Uhr: Wie kann ich Nachhaltigkeit an meiner Schule stärken? - Einführung in die BNE, globale Schulpartnerschaften und nachhaltige Klassenfahrten"))
    disablenaduncheck("10:00 – 13:00 Uhr: Berufsorientierung - Strukturen für einen vielfältigen BO-Unterricht entwickeln");

if(ischecked('05.07.22 14:00 – 17:00 Uhr: "Neues Lernen braucht das Land" - BNE-Werkstatt zur Unterrichtsentwicklung'))
    disablenaduncheck("14:00 – 17:00 Uhr: Berufliche Orientierung gemeinsam gestalten – rechtliche Grundlagen, Konzept und Netzwerke");

disablenaduncheck("10:00 – 15:00 Uhr: Gewalt und Mobbing in der Schule vorbeugen");
    
  }
  
}

// function pretty similar to handler(); is called when attendee is editing his data
function inEditMode(){
    const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
    
  
  // name == "Erwachsenen Ticket" || name == "Tagesticket Kind (6-13 Jahre)" || name == "Tagesticket Kind unter 6 Jahre" || name == "Tagesticket ermäßigt" || name == "Gruppenticket (ab 10 P)" || name == "Tagesticket Erwachsene" || name == "Gruppenticket" || name == "Schwerbehinderten Ticket" || name == "Begleitperson"
    
  if (name == "Fortbildungsanmeldung") {
        //TODO
        if (ischecked("Montag")) {
        //TODO (copy from above)

        } 
        else if (!ischecked("Montag")) {
          //TODO (copy from above)
        }
      }
}

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    handlernew();
   // init('customization2_attendee');
   // handler();
    inEditMode();
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(7)").hide();
     $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > vv-additional-question-radio > div").hide();
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_body.customization3_collapsible-wrapper_body.collapsible-wrapper_body--separated > div > vv-child-form > form > div.customization2_attendee_further-data.vv-mt-xxl > vv-additional-questions > div:nth-child(7)").hide();
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 


