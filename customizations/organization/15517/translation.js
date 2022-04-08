const frenchArray = {
    "On-site participation - Steering Committee / General Council": "Participation sur place - Comité directeur / Conseil général", 
    "Online Participation - Steering Committee / General Council": "Participation en ligne - Comité directeur / Conseil général", 
    "On-site participation - ONLY Commissions  /  Working Groups":"Participation sur place - UNIQUEMENT Commissions / Groupes de travail",
    "Accompanying person package":"Forfait pour la personne accompagnante",
    "A1) International Notarial Cooperation Commission (CCNI)": "A1) Commission de coopération notariale internationale (CCNI)", 
    "A2) Advisory Commission (CC)": "A2) Commission consultative (CC)", 
    "A3) WG «Partnerships with International Organizations»":"A3) Groupe de travail 'Partenariats avec les organisations internationales'",
    "B1) Human Rights Commission (CDH)":"B1) Commission des droits de l'homme (CDH)",
    "B2) WG «Prevention of Money Laundering»": "B2) GT ' Prévention du blanchiment d'argent'", 
    "B3) WG «Authentic Act» + WG «New Technologies»": "B3) WG «Authentic Act» + WG «New Technologies»", 
    "C1) Notarial Deontology Commission (CDN)":"C1) Commission de déontologie notariale (CDN)",
    "C2) Themes and Congresses Commission (CTC)":"C2) Commission Thèmes et Congrès (CTC)",
    "C3) Permanent Notarial Office for International Exchanges (ONPI)":"C3) Office notarial permanent pour les échanges internationaux (ONPI)",
    "D1) Welcome Reception | Thursday, 26 May 2022": "D1) Réception de bienvenue | Jeudi, 26 mai 2022", 
    "D2) Full-day trip Herrenchiemsee | Friday, 27 May 2022": "D2) Excursion d'une journée à Herrenchiemsee | Vendredi, 27 mai 2022", 
    "D3) Munich City Tour | Saturday, 28 May 2022":"D3) Visite de la ville de Munich | Samedi, 28 mai 2022",
    "D4) Gala Dinner - Delegate | 27 May 2022":"D4) Dîner de gala - Délégué | 27 mai 2022",
    "D5) I will be accompanied to the Gala Dinner":"D5) Je serai accompagné(e) au Dîner de Gala",
    "E1) Welcome Reception | Thursday, 26 May 2022": "E1) Réception de bienvenue | Jeudi, 26 mai 2022", 
    "E2) Full-day trip Herrenchiemsee Delegates | Friday,": "E2) Excursion d'une journée à Herrenchiemsee Délégués ", 
    "E3) Munich City Tour | Saturday, 28 May 2022":"E3) Visite de la ville de Munich | Samedi, 28 mai 2022"
};
const frenchTicketNumber = 'Numéro de réservation: ';
const frenchPleaseSelect = 'Veuillez sélectionner';

const spanishArray = {
    "On-site participation - Steering Committee / General Council": "Participación in situ - Comité Directivo / Consejo General", 
    "Online Participation - Steering Committee / General Council": "Participación en línea - Comité Directivo / Consejo General", 
    "On-site participation - ONLY Commissions  /  Working Groups":"Participación in situ - SOLO Comisiones / Grupos de Trabajo",
    "Accompanying person package":"Paquete para acompañantes",
    "A1) International Notarial Cooperation Commission (CCNI)": "A1) Comisión de Cooperación Notarial Internacional (CCNI)", 
    "A2) Advisory Commission (CC)": "A2) Comisión Consultiva (CC)", 
    "A3) WG «Partnerships with International Organizations»":"A3) GT 'Asociaciones con organizaciones internacionales'",
    "B1) Human Rights Commission (CDH)":"B1) Comisión de Derechos Humanos (CDH)",
    "B2) WG «Prevention of Money Laundering»": "B2) GT 'Prevención del blanqueo de capitales'", 
    "B3) WG «Authentic Act» + WG «New Technologies»": "B3) GT 'Auténtico' + GT 'Nuevas Tecnologías'", 
    "C1) Notarial Deontology Commission (CDN)":"C1) Comisión de Deontología Notarial (CDN)",
    "C2) Themes and Congresses Commission (CTC)":"C2) Comisión de Temas y Congresos (CTC)",
    "C3) Permanent Notarial Office for International Exchanges (ONPI)":"C3) Oficina Notarial Permanente para Intercambios Internacionales (ONPI)",
    "D1) Welcome Reception | Thursday, 26 May 2022": "D1) Réception de bienvenue | Jeudi, 26 mai 2022", 
    "D2) Full-day trip Herrenchiemsee | Friday, 27 May 2022": "D2) Excursión de un día a Herrenchiemsee | Viernes, 27 de mayo de 2022", 
    "D3) Munich City Tour | Saturday, 28 May 2022":"D3) Visita a la ciudad de Múnich | Sábado, 28 de mayo de 2022",
    "D4) Gala Dinner - Delegate | 27 May 2022":"D4) Cena de Gala - Delegado | 27 de mayo de 2022",
    "D5) I will be accompanied to the Gala Dinner":"D5) Me acompañarán a la Cena de Gala",
    "E1) Welcome Reception | Thursday, 26 May 2022": "E1) Recepción de bienvenida | Jueves, 26 de mayo de 2022", 
    "E2) Full-day trip Herrenchiemsee Delegates | Friday,": "E2) Excursión de día completo Herrenchiemsee Delegados | Viernes, 27 de mayo de 2022", 
    "E3) Munich City Tour | Saturday, 28 May 2022":"E3) Visita a la ciudad de Múnich | Sábado, 28 de mayo de 2022"
};
const spanishTicketNumber= "Número de reserva: ";
const spanishPleaseSelect="Por favor, seleccione";
var nameArray;
var ticketNumber;
var pleaseSelect;

const url=window.location.href;

console.log(url);
console.log(url.includes('booking-15517-33051'));
if(url.includes('booking-15517-33051')){
    console.log("french");
     nameArray= frenchArray;
     ticketNumber = frenchTicketNumber;
     pleaseSelect = frenchPleaseSelect;
    console.log("french");
} else if(url.includes('booking-15517-32622')){
    console.log("spanish");
     nameArray= spanishArray;
     ticketNumber = spanishTicketNumber;
     pleaseSelect = spanishPleaseSelect;
} else{
console.log("ERROR: Unknown widget id")
}
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

function translateTicketNamesPage3(){
$('.customization2_attendee_title').each(function () {
        console.log("hhghhhhh")
        var text = $(this).text().trim();
        console.log(text)
        for (var key in nameArray) {
            if (text.includes(key)) {
                $(this).text(nameArray[key])
            }
        }
    });
}

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
    changeTextTo('.vv-single-select-option', 'Please select', pleaseSelect);

    document.querySelectorAll(".vv-selection-input__value").forEach(el => {
        if (el.innerText === 'Please select') { el.innerText = pleaseSelect }
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
        $('.notice__booking-id').text(ticketNumber + ticketID);
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
    translateTicketNamesPage3()
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
