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

PAGE 1

*/
const observer1 = new MutationObserver((mutations, obs) => {
    const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');

    if ($(page1).is(':visible')) {
        startCustomizationPage1();
        obs.disconnect();
        return;
    }
});

observer1.observe(document, {
    childList: true,
    subtree: true
});

function startCustomizationPage1(){
      console.log('page 1 visible');
  //Text von Button auf Seite 1
      $('.customization-button-next').text('Contineur');
  const observerMwStText = new MutationObserver((mutations, obs) => {
        const mwstText = $('ew-selection__sum-title').next();
    
        if (!$(mwstText).is(':visible')) {
          console.log('mwstText visible');
          var mwstTexts = $('.customization-order-sum').find('span:not([class])');
          mwstTexts.each(function(){
          console.log('Text : '+$(this).text())
          $(this).on()
         });
            obs.disconnect();
            return;
        }
    });
    observerMwStText.observe(document, {
        childList: true,
        subtree: true
    });
  var mwstTexts = $('.customization-order-sum').find('span:not([class])');
  mwstTexts.each(function(){
    console.log('Text : '+$(this).text())
    $(this).on()
  });
  
  

    const observerThisPage = new MutationObserver((mutations, obs) => {
        const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');
    
        if ($(page1).is(':visible')) {
            startCustomizationPage1();
            obs.disconnect();
            return;
        }
    });
    const observerOtherPage = new MutationObserver((mutations, obs) => {
        const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');
    
        if (!$(page1).is(':visible')) {
          console.log('page 1 not visible')
          $('.customization-button-next').text('Réserver maintenant');
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
   console.log('page 2 visible')
      $('.customization-button-next').text('Réserver maintenant');
     
  console.log($('.ew-selection__sum-title').next().html());
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
          console.log('page 2 not visible')
         // $('.customization-button-next').text('Contineur');
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
          console.log('page 3 not visible')
          $('.customization-button-next').text('Réserver maintenant');
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
