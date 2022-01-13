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
  changeTextTo('.vv-button-text-blue','Abweichende Rechnungsadresse angeben', 'Indiquer une adresse de facturation différente');  
   
}

const observer = new MutationObserver((mutations, obs) => {
    const page4 = document.getElementsByClassName('customization-booking-area-wrapper-page4');
    if ($(page4).is(':visible')) {
         console.log($('.notice__booking-id').text())
        console.log("page 4 visible");
        var ticketID=$('.notice__booking-id span').text()
        $('.notice__booking-id').text('newr: '+ticketID); 
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});



      
    
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
