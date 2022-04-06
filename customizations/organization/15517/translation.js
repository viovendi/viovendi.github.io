console.log('git')
console.log("translating")

function changeTextTo(selector, originalText, newText) {
    $(selector).each(function () {
        if ($(this).text().trim() == originalText) {
            $(this).text(newText);
        }
    })
}

function hideDefaultOption(selector, originalText) {
    $(selector).each(function () {
        if ($(this).text().trim() == originalText) {
            $(this).hide()
        } else {
            $(this).show()
        }
    })
}
var nameArray = {
    "On-site participation - Steering Committee / General Council": "new name 1", 
    "Online Participation - Steering Committee / General Council": "new name 2", 
    "On-site participation - ONLY Commissions / Working Groups":"new name 3",
    "Accompanying person package":"new name 4",
    "A1) International Notarial Cooperation Commission (CCNI)": "A1)", 
    "A2) Advisory Commission (CC)": "A2)", 
    "A3) WG «Partnerships with International Organizations»":"A3)",
    "B1) Human Rights Commission (CDH)":"B1)",
    "B2) WG «Prevention of Money Laundering»": "B2)", 
    "B3) WG «Authentic Act» + WG «New Technologies»": "B3)", 
    "C1) Notarial Deontology Commission (CDN)":"C1)",
    "C2) Themes and Congresses Commission (CTC)":"C2)",
    "C3) Permanent Notarial Office for International Exchanges (ONPI)":"C3)",
    "D1) Welcome Reception | Thursday, 26 May 2022": "D1)", 
    "D2) Full-day trip Herrenchiemsee | Friday, 27 May 2022": "D2)", 
    "D3) Munich City Tour | Saturday, 28 May 2022":"D3)",
    "D4) Gala Dinner - Delegate | 27 May 2022":"D4)",
    "D5) I will be accompanied to the Gala Dinner":"D5)",
    
};

function translateTicketNames() {
    $('.vv-text.vv-text__size--lg.vv-text__weight--regular.vv-color--text.customization2_summary_item_name').each(function () {
        var text = $(this).text().trim();
        for (var key in nameArray) {
            if (text.includes(key)) {
                $(this).text(nameArray[key])
            }
        }
    });
}


function handler2() {
    changeTextTo('.vv-button-text-blue', 'Abweichende Rechnungsadresse angeben', 'Indiquer une adresse de facturation différente');
    changeTextTo('.vv-single-select-option', 'Bitte auswählen', 'Veuillez sélectionner');

    document.querySelectorAll(".vv-selection-input__value").forEach(el => {
        if (el.innerText === 'Bitte auswählen') { el.innerText = 'Veuillez sélectionner' }
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
        var ticketID = $('.notice__booking-id span').text()
        $('.notice__booking-id').text('Numéro de réservation: ' + ticketID);
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

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
      translateTicketNames();

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

function startCustomizationPage1() {
    console.log('page 1 visible');
    //Text von Button auf Seite 1
    //     $('.customization-button-next').text('CONTINUER');

    const observerMwStText = new MutationObserver((mutations, obs) => {
        const mwstText = $('ew-selection__sum-title').next();
        var mwstTextValue = $('.customization-order-sum').find('span:not([class])')[0];
        if ($(mwstTextValue).is(':visible')) {
            // console.log('mwstText visible');
            $(mwstTextValue).contents().filter(function () {
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

function startCustomizationPage2() {
    console.log('page 2 visible')
    translateTicketNames()
    $('.vv-checkbox__label').click(function () {
        translateTicketNames()
    });
 $('.customization2_summary_box').on("DOMSubtreeModified", ".customization2_summary_item_name", function () { 
        translateTicketNames()
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