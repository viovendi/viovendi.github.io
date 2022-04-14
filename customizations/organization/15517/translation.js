const frenchArray = {
    "A) Commissions / Working Groups | 25 May 2022":"A) Commissions / Groupes de travail | 25 mai 2022",
    "B) Commissions / Working Groups | 26 May 2022 - morning":"B) Commissions / Groupes de travail | 26 mai 2022 - matinée",
    "C) Commissions / Working Groups | 26 May 2022 - afternoon":"C) Commissions / Groupes de travail | 26 mai 2022 - après-midi",
    "D) Social programme - Delegates":"D) Programme social - Participants",
    "E) Social programme - Accompanying persons":"E) Programme social - Accompagnateur",
    "mwstText":"TVA incluse (",
    "different address":"Proporcionar una dirección de facturación diferente",
    "ticket number":"Numéro de réservation: ",
    "please select":"Veuillez sélectionner",  
    "On-site participation - Steering Committee / General Council": "Participation en présentiel – Conseil de Direction / Conseil Général", 
    "Online participation - Steering Committee / General Council": "Participation en ligne – Conseil de Direction /Conseil Général", 
    "On-site participation - ONLY Commissions  /  Working Groups":"Participation en présentiel – UNIQUEMENT Commissions / Groupes de travail",
    "Accompanying person package":"Forfait accompagnateur",
    "A1) International Notarial Cooperation Commission (CCNI)": "A1) Commission Coopération Notariale Internationale (CCNI)", 
    "A2) Advisory Commission (CC)": "A2) Commission Consultative (CC)", 
    "A3) WG «Partnerships with International Organizations»":"A3) GT Partenariat avec les organisations internationales",
    "B1) Human Rights Commission (CDH)":"B1) Commission Droits Humains (CDH)",
    "B2) WG «Prevention of Money Laundering»": "B2) GT Prévention du blanchiment des capitaux", 
    "B3) WG «Authentic Act» + WG «New Technologies»": "B3) GT Acte Authentique + GT Nouvelles Technologies", 
    "C1) Notarial Deontology Commission (CDN)":"C1) Commission Déontologie Notariale (CDN)",
    "C2) Themes and Congresses Commission (CTC)":"C2) Commission Thèmes et Congrès (CTC)",
    "C3) Permanent Notarial Office for International Exchanges (ONPI)":"C3) Office Notarial Permanent d’Échange International (ONPI)",
    "D1) Welcome Reception | Thursday, 26 May 2022": "D1) Soirée de bienvenue | Jeudi 26 mai 2022", 
    "D2) Full-day trip Herrenchiemsee | Friday, 27 May 2022": "D2) Excursion journée complète - Herrenchiemsee | Vendredi 27 mai 2022", 
    "D3) Munich City Tour | Saturday, 28 May 2022":"D3) Visite guidée de la ville de Munich | Samedi 28 mai 2022",
    "D4) Gala Dinner - Delegate | 27 May 2022":"D4) Dîner de gala – délégué | 27 mai 2022",
    "D5) I will be accompanied to the Gala Dinner":"D5) Je viendrai accompagné au dîner de gala.",
    "E1) Welcome Reception | Thursday, 26 May 2022": "E1) Soirée de bienvenue | Jeudi 26 mai 2022", 
    "E2) Full-day trip Herrenchiemsee Delegates | Friday, 27 May 2022": "E2) Excursion journée complète - Herrenchiemsee | Vendredi 27 mai 2022", 
    "E4) Munich City Tour | Saturday, 28 May 2022":"E4) Visite guidée de la ville de Munich | Samedi 28 mai 2022",
    "F1) Steering Committee":"F1) Conseil de Direction",
    "F2) General Council":"F2) Conseil Général",
    "26 May 2022 | 09:30 to 18:00":"26 mai 2022 | 9:30 à 18:00",
    "27 May 2022 | 09:30 to 18:00 and 28 May 2022 | 09:30 to 13:00":"27 mai 2022 | 9:30 à 18:00 et 28 mai 2022 | 9:30 à 13:00",
    "25 May 2022 |14:30 to 18:00":"25 mai 2022 |14:30 à 18:00",
    "25 May 2022 |14:30 to 19:00":"25 mai 2022 |14:30 à 19:00",
    "26 May 2022 |9:30 to 13:00":"26 mai 2022 |9:30 à 13:00",
    "26 May 2022 |14:30 to 18:00":"26 mai 2022 |14:30 à 18:00",
    "from 19:30 Venue: BMW Welt München":"à partir de 19:30 Lieu : BMW Welt München",
    "Only for delegates who will not participate in the General Council on Friday!":"Seulement pour les délégués qui ne participeront pas au Conseil Général le vendredi!",
    "after lunch, bus tour and Hofbräuhaus brewery":"Après le déjeuner : excursion en autocar et Brasserie « Hofbräuhaus »",
    "19:30 p.m. Venue: Schloss Nymphenburg":"19h30. Lieu : Château de Nymphenburg"
};
const spanishArray = {
    "A) Commissions / Working Groups | 25 May 2022":"A) Comisiones / grupos de trabajo | 25 de mayo de 2022",
    "B) Commissions / Working Groups | 26 May 2022 - morning":"B) Comisiones / grupos de trabajo | 26 de mayo de 2022 – por la mañana",
    "C) Commissions / Working Groups | 26 May 2022 - afternoon":"C) Commissions / grupos de trabajo | 26 de mayo de 2022 – por la tarde",
    "D) Social programme - Delegates":"D) Programa social - participantes",
    "E) Social programme - Accompanying persons":"E) Programa social - Acompañantes",
    "mwstText":"IVA incluido ",
    "different address":"Proporcionar una dirección de facturación diferente",
    "ticket number":"Número de reserva: ",
    "please select":"Por favor, seleccione",  
    "On-site participation - Steering Committee / General Council": "Participación presencial – Consejo de Dirección / Consejo General", 
    "Online participation - Steering Committee / General Council": "Participación en línea – Consejo de Dirección/Consejo General", 
    "On-site participation - ONLY Commissions  /  Working Groups":"Participación presencial – SÓLO Comisiones / Grupos de trabajo",
    "Accompanying person package":"Paquete para acompañantes",
    "A1) International Notarial Cooperation Commission (CCNI)": "A1) Comisión de Cooperación Notarial Internacional (CCNI)", 
    "A2) Advisory Commission (CC)": "A2) Comisión Consultiva (CC)", 
    "A3) WG «Partnerships with International Organizations»":"A3) GT Participación con los Organismos Internacionales",
    "B1) Human Rights Commission (CDH)":"B1) Comisión Derechos Humanos (CDH)",
    "B2) WG «Prevention of Money Laundering»": "B2) GT Prevención del Blanqueo de Capitales", 
    "B3) WG «Authentic Act» + WG «New Technologies»": "B3) GT Acto Auténtico + GT Nuevas Tecnologías", 
    "C1) Notarial Deontology Commission (CDN)":"C1) Comisión Deontología Notarial (CDN)",
    "C2) Themes and Congresses Commission (CTC)":"C2) Comisión Temas y Congresos (CTC)",
    "C3) Permanent Notarial Office for International Exchanges (ONPI)":"C3) Oficina Notarial Permanente de Intercambio Internacional  (ONPI)",
    "D1) Welcome Reception | Thursday, 26 May 2022": "D1) Recepción de bienvenida | Jueves, 26 de mayo de 2022", 
    "D2) Full-day trip Herrenchiemsee | Friday, 27 May 2022": "D2) Excursión de día completo - Herrenchiemsee | Viernes, 27 de mayo 2022", 
    "D3) Munich City Tour | Saturday, 28 May 2022":"D3) Visita guiada de Múnich | Sábado, 28 de mayo de 2022",
    "D4) Gala Dinner - Delegate | 27 May 2022":"D4) Cena de gala – participante | 27 de mayo de 2022",
    "D5) I will be accompanied to the Gala Dinner":"D5) Estaré acompañado en la cena de gala",
    "E1) Welcome Reception | Thursday, 26 May 2022": "E1) Recepción de bienvenida | Jueves, 26 de mayo de 2022", 
    "E2) Full-day trip Herrenchiemsee Delegates | Friday, 27 May 2022": "E2) Excursión de día completo - Herrenchiemsee | Viernes, 27 de mayo 2022", 
    "E4) Munich City Tour | Saturday, 28 May 2022":"E4) Visita guiada de Múnich | Sábado, 28 de mayo de 2022",
    "F1) Steering Committee":"F1) Consejo de Dirección ",
    "F2) General Council":"F2) Consejo General",
    "26 May 2022 | 09:30 to 18:00":"26 de mayo de 2022 | 9:30 a 18:00",
    "27 May 2022 | 09:30 to 18:00 and 28 May 2022 | 09:30 to 13:00":"27 de mayo de 2022 | 09:30 a 18:00 y 28 de mayo de 2022 | 09:30 a 13:00",
    "25 May 2022 |14:30 to 18:00":"25 de mayo de 2022 |14:30 a 18:00",
    "25 May 2022 |14:30 to 19:00":"25 de mayo de 2022 |14:30 a 19:00",
    "26 May 2022 |9:30 to 13:00":"26 de mayo de 2022 |9:30 a 13:00",
    "26 May 2022 |14:30 to 18:00":"26 de mayo de 2022 |14:30 a 18:00",
    "from 19:30 Venue: BMW Welt München":"A partir de las 19:30 Ubicación: BMW Welt München",
    "Only for delegates who will not participate in the General Council on Friday!":"Sólo para los delegados que no participarán en el Consejo General el viernes.",
    "after lunch, bus tour and Hofbräuhaus brewery":"Después del almuerzo: Visita en autobús y a la cervecería Hofbräuhaus",
    "19:30 p.m. Venue: Schloss Nymphenburg":"A partir de las 19:30 Ubicación: Castillo de Nymphenburg"
};
var nameArray;
var ticketNumber;
var pleaseSelect;
var mwstText;

const url=window.location.href;

console.log(url);
console.log(url.includes('booking-15517-33051'));
if(url.includes('booking-15517-33051')){
    console.log("french");
     nameArray= frenchArray;
    /*
     ticketNumber = frenchTicketNumber;
     pleaseSelect = frenchPleaseSelect;
    mwstText = "TVA incluse ("
    */
} else if(url.includes('booking-15517-32622')){
    console.log("spanish");
     nameArray= spanishArray;
    /*
     ticketNumber = spanishTicketNumber;
     pleaseSelect = spanishPleaseSelect;
    mwstText = "IVA incluido ("
    */
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

function translateTicketNamesPage2(){
$('.customization2_attendee_title').each(function () {
        var text = $(this).text().trim();
        console.log(text)
        for (var key in nameArray) {
            if (text.includes(key)) {
                try{
                    $(this).text(nameArray[key])
                }catch(error) {
                    console.error('.');
                }            
            }
        }
    });
}

function translateTicketNames() {
    $('.vv-text.vv-text__size--lg.vv-text__weight--regular.vv-color--text.customization2_summary_item_name').each(function () {
        var text = $(this).text().trim();
        for (var key in nameArray) {
            if (text.includes(key)) {
                try{
                    $(this).text(nameArray[key])
                }catch(error) {
                    console.error('.');
                }
            }
        }
    });
}


function handler2() {
    changeTextTo('.vv-button-text-blue', 'Abweichende Rechnungsadresse angeben', nameArray["different address"]);
    changeTextTo('.vv-single-select-option', 'Please select', nameArray["please select"]);

    document.querySelectorAll(".vv-selection-input__value").forEach(el => {
        if (el.innerText === 'Please select') { el.innerText = nameArray["please select"] }
    });
    //TODO: refactore into own function
    $('.customization2_attendee_further-data_product_name').each(function () {
        var text = $(this).text().trim();
        for (var key in nameArray) {
            if (text.includes(key)) {
                try{
                    $(this).text(nameArray[key])
                }catch(error) {
                    console.log('.');
                }
            }
        }
    });
    $('.question-group__title').each(function () {
        var text = $(this).text().trim();
        for (var key in nameArray) {
            if (text.includes(key)) {
                try{
                    $(this).text(nameArray[key])
                }catch(error) {
                    console.log('.');
                }
            }
        }
    });
    $('.customization2_attendee_further-data_product_description').each(function () {
        var text = $(this).text().trim();
        for (var key in nameArray) {
            if (text.includes(key)) {
                try{
                    $(this).text(nameArray[key])
                }catch(error) {
                    console.log('.');
                }
            }
        }
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
        $('.notice__booking-id').text(nameArray["ticket number"] + ticketID);
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

    const observerMwStText = new MutationObserver((mutations, obs) => {
        const mwstText = $('ew-selection__sum-title').next();
        var mwstTextValue = $('.customization-order-sum').find('span:not([class])')[0];
        if ($(mwstTextValue).is(':visible')) {
            // console.log('mwstText visible');
            $(mwstTextValue).contents().filter(function () {
                return this.nodeType == 3;
            })[0].nodeValue = nameArray["mwstText"];
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
    translateTicketNamesPage2()
    /*
    $('.vv-checkbox__label').click(function () {
        translateTicketNames()
    });
    */
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
           // console.log('page 2 not visible')
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
