console.log("translating")

function changeTextTo(selector,originalText, newText){
  $(selector).each(function(){
    if($(this).text().trim()==originalText){
        $(this).text(newText);
    }
  }) 
}

function handler2(){
  changeTextTo('.customization2_attendee_further-data_custom-question_dropdown option','Bitte auswählen', 'Veuillez sélectionner');
  changeTextTo('span.center-block.vv-mh-auto.ew-selection__ssl--xs.customization-encrypted-connection','Verschlüsselte Verbindung','Connexion chiffrée SSL');
  changeTextTo('.ew-selection__error','Bitte geben Sie die gewünschte Ticketzahl an.','Veuillez indiquer le nombre de tickets souhaité.');
  changeTextTo('span.vv-text.vv-text__size--md.vv-text__weight--regular.vv-color--text','Bereits angemeldet?', 'Déjà inscrit ?');
  changeTextTo('button.vv-button.vv-button-text.vv-button-text-blue.vv-text__size--md','Hier geht es zu Ihrer Buchung','Accédez à votre enregistrement ici');
  changeTextTo('button.button.pull-right.float-right.col-xs-12.col-12.customization-button-next','Weiter','Suivant');
   
}


/*

INSERTION LISTENER

*/
var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        
        handler2();

        $('customization2_attendee_view-action_edit').on("click", function () {
            console.log("clicked");
        });
    }
}
handler2();

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
