console.log('git')
console.log("translating")

function changeTextTo(selector,originalText, newText){
  $(selector).each(function(){
    if($(this).text().trim()==originalText){
        $(this).text(newText);
    }
  }) 
}

function hideDefaultOption(selector, originalText){
  $(selector).each(function(){
    if($(this).text().trim()==originalText){
        $(this).hide()
    }else{
        $(this).show()
    }
  })
}



function handler2(){
  changeTextTo('.vv-button-text-blue','Abweichende Rechnungsadresse angeben', 'Indiquer une adresse de facturation différente');
  changeTextTo('.vv-single-select-option','Bitte auswählen', 'Veuillez sélectionner');
  
  document.querySelectorAll(".vv-selection-input__value").forEach(el => {
  if (el.innerText === 'Bitte auswählen') {el.innerText = 'Veuillez sélectionner'}
  });

  addEventListener('click', e => {
    if (e.target.classList.contains('vv-single-select-option')) {
        let selectContainer = e.target.closest('.vv-selection');
        let valueElement = selectContainer.getElementsByClassName('vv-selection-input__value')[0];
        valueElement.innerText = e.target.textContent.trim().replace('<br>', '');
    }
});
   
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
 //     $('.customization-button-next').text('CONTINUER');
  
  const observerMwStText = new MutationObserver((mutations, obs) => {
        const mwstText = $('ew-selection__sum-title').next();
    var mwstTextValue = $('.customization-order-sum').find('span:not([class])')[0];
        if ($(mwstTextValue).is(':visible')) {
         // console.log('mwstText visible');
          $(mwstTextValue).contents().filter(function(){ 
              return this.nodeType == 3; 
              })[0].nodeValue = "TVA incluse ("
          observerNoMwStText.observe(document, {
            childList: true,
            subtree: true
          });
            obs.disconnect();
            return;
        }
    });
    observerMwStText.observe(document, {
        childList: true,
        subtree: true
    });
 const observerNoMwStText = new MutationObserver((mutations, obs) => {
         var mwstTextValue = $('.customization-order-sum').find('span:not([class])')[0];
        if (!$(mwstTextValue).is(':visible')) {
      //    console.log('mwst not visible')
            observerMwStText.observe(document, {
                childList: true,
                subtree: true
            });
            obs.disconnect();
            return;
        }
    });
    observerNoMwStText.observe(document, {
        childList: true,
        subtree: true
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
  $('vv-checkbox__indicator').each(function(){
        console.log('count');
     });
        $('vv-checkbox__indicator').click(function(){
        console.log('clicked');
     });
        $('vv-checkbox__label').click(function(){
        console.log('clicked');
     });
      $('.vv-text.vv-text__size--lg.vv-text__weight--regular.vv-color--text.customization2_summary_item_name').each(function(){
        
        var text = $(this).text().trim();
        console.log(text)
        if(text.includes("On-site participation - Steering Committee / General Council")){
          $(this).text("NEW TICKETNAME")
        }
      });
     
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
         // $('.customization-button-next').text('CONTINUER');
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
