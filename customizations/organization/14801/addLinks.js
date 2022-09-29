//What runs on every new attendee form
console.log("Start Git");
function handler(){
    $( ".customization2_attendee_further-data_custom-question_label:contains('Datenschutz-, bzw. Einwilligungserklärung *für Speaker* (Moderatoren, Vortragende und Teilnehmende der Podiumsdiskussion) im Hinblick auf das Vortraghalten in Präsenz, bzw. auf die zusätzliche Online-Teilnahme, z.B. Diskussions-Chat (Teil 1)')" ).append( '<a href="http://www.destatis.de/DE/Ueber-uns/Kolloquien-Tagungen/Kolloquien/2022/einverstaendnis-ds-speaker-vortrag.html" target="_blank"> - Öffnen</a>');

    $( ".customization2_attendee_further-data_custom-question_label:contains('Datenschutz-, bzw. Einwilligungserklärung *für Speaker* im Hinblick auf Anfertigung, Speicherung und Veröffentlichung von Videoaufnahmen (Teil 2)')" ).append( '<a href="http://www.destatis.de/DE/Ueber-uns/Kolloquien-Tagungen/Kolloquien/2022/einverstaendnis-ds-speaker-video.html" target="_blank"> - Öffnen</a>');
    
    if ($(".customization2_attendee_title").text().trim() == 'Präsenz Teilnahme (Speaker)') {
        $("vv-booking-terms").hide();
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
document.addEventListener("animationstart", insertionListener, false); // standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
