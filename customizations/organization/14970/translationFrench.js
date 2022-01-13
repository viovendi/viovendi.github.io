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
        $('.notice__booking-id').text('Numéro de réservation: '+ticketID); 
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

const observer2 = new MutationObserver((mutations, obs) => {
    const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');

    if ($(page2).is(':visible')) {
        startCustomizationPage2();
        obs.disconnect();
        return;
    }
});

observer2.observe(document, {
    childList: true,
    subtree: true
});

function startCustomizationPage2(){
   
      $('.customization-button-next').text('Réserver maintenant');

    const observerThisPage = new MutationObserver((mutations, obs) => {
        const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');
    
        if ($(page2).is(':visible')) {
            startCustomizationPage2();
            obs.disconnect();
            return;
        }
    });
    const observerOtherPage = new MutationObserver((mutations, obs) => {
        const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');
    
        if (!$(page2).is(':visible')) {
          $('.customization-button-next').text('Contineur');
            observerThisPage.observe(document, {
                childList: true,
                subtree: true
            });
            obs.disconnect();
            return;
        }
    });
    observerOtherPage.observe(document, {
        childList: true,
        subtree: true
    });
}
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
