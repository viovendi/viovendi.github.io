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
/*

PAGE 4

*/
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
/*

PAGE 2

*/
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
    const page3 = document.getElementsByClassName('customization-booking-area-wrapper-page3');

  
        if (!$(page2).is(':visible')&&!$(page3).is(':visible')) {
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
/*

PAGE 3

*/
const observer3 = new MutationObserver((mutations, obs) => {
    const page3 = document.getElementsByClassName('customization-booking-area-wrapper-page3');

    if ($(page3).is(':visible')) {
        startCustomizationPage3();
        obs.disconnect();
        return;
    }
});

observer3.observe(document, {
    childList: true,
    subtree: true
});

function startCustomizationPage3(){
      console.log('page 3 visible');
  //Text von Button auf Seite 3
      $('.customization-button-next').text('ZAHLUNGSPFLICHTIG_BESTELLEN');

    const observerThisPage = new MutationObserver((mutations, obs) => {
        const page3 = document.getElementsByClassName('customization-booking-area-wrapper-page3');
    
        if ($(page3).is(':visible')) {
            startCustomizationPage3();
            obs.disconnect();
            return;
        }
    });
    const observerOtherPage = new MutationObserver((mutations, obs) => {
        const page3 = document.getElementsByClassName('customization-booking-area-wrapper-page3');
    
        if (!$(page3).is(':visible')) {
          
         // $('.customization-button-next').text('Réserver maintenant');
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
