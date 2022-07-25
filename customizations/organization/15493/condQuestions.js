var ticketNumber;
var pleaseSelect;
var checkboxSelected;
var dropdownYes;
var dropdownNo;
var dropdownHerr;
var dropdownFrau;
var dropdownError;
var country;
var veggieMenu;
var meatMenu;
var myMealChoice;
var partnerMealChoice;
var phone;
var plantSite;
var arrivalDate;
var hotelRoomNeeded;
var allegries;
var hotelTransfer;

ticketNumber = "Registrierungsnummer: ";
dropdownError = "<div class='error-message'> Bitte ausfüllen </div>";

const url = window.location.href;

if (url.includes('booking-15493-33318') || url.includes('booking-15493-33313')) {
    console.log("FR");
    country = "France";
    ticketNumber = "Numéro d'enregistrement: ";
    pleaseSelect = "Veuillez sélectionner";
    dropdownYes = "Oui";
    dropdownNo = "Non";
    dropdownHerr = "Monsieur";
    dropdownFrau = "Madame";
    dropdownError = "<div class='error-message'> Veuillez sélectionner </div>";
    veggieMenu = "Menu végétarien";
    meatMenu = "Menu à base de viande";
    myMealChoice = "Pour le dîner intergalactique, je choisis :";
    partnerMealChoice = "Pour le dîner intergalactique, mon/ma partenaire choisit :";
    phone = "Téléphone (en option)";
    plantSite = "Usine/site";
    arrivalDate = "Je souhaite arriver à la date suivante";
    hotelRoomNeeded = "J'ai besoin d'une chambre d'hôtel";
    allegries = "Intolérances (en option)";
    hotelTransfer = "J'ai besoin d'un transport vers l'hôtel";
} else if (url.includes('booking-15493-33317') || url.includes('booking-15493-33312')) {
    console.log("IT");
    country = "Italy";
    ticketNumber = "Numero di registrazione: ";
    pleaseSelect = "Si prega di selezionare";
    dropdownYes = "Sì";
    dropdownNo = "No";
    dropdownHerr = "Signore";
    dropdownFrau = "Signora";
    dropdownError = "<div class='error-message'> Si prega di selezionare </div>";
    veggieMenu = "Menù vegetariano";
    meatMenu = "Menù di carne";
    myMealChoice = "Per la cena intergalattica scelgo:";
    partnerMealChoice = "Il mio accompagnatore per la cena intergalattica sceglie";
    phone = "Telefono (opzionale)";
    plantSite = "Stabilimento/Sito";
    arrivalDate = "Voglio arrivare il seguente giorno";
    hotelRoomNeeded = "Ho bisogno di una camera d'albergo";
    allegries = "Intolleranze (optional)";
    hotelTransfer = "Ho bisogno di un transfer all’albergo";
} else if (url.includes('booking-15493-33316') || url.includes('booking-15493-33311')) {
    console.log("PL");
    country = "Poland";
    ticketNumber = "Numer zgłoszeniowy: ";
    pleaseSelect = "Prosimy wybrać";
    dropdownYes = "Tak";
    dropdownNo = "Nr";
    dropdownHerr = "Pan";
    dropdownFrau = "Pani";
    dropdownError = "<div class='error-message'> Prosimy wybrać </div>";
    veggieMenu = "Zestaw wegetariański";
    meatMenu = "Zestaw mięsny";
    myMealChoice = "Na kolację międzygalaktyczną wybieram:";
    partnerMealChoice = "Moja osoba towarzysząca wybiera na kolację międzygalaktyczną:";
    phone = "Telefon (opcjonalnie)";
    plantSite = "Zakład/lokalizacja";
    arrivalDate = "Planuję przyjechać w dniu";
    hotelRoomNeeded = "Potrzebuję pokoju w hotelu";
    allegries = "Nietolerancja pokarmowa (opcjonalnie)";
    hotelTransfer = "Potrzebuję transfer z hotelu";
} else if (url.includes('booking-15493-33319') || url.includes('booking-15493-33314')) {
    console.log("CZ");
    country = "Czech";
    ticketNumber = "Registrační číslo: ";
    pleaseSelect = "Prosím zvolte";
    dropdownYes = "Tak";
    dropdownNo = "Nie";
    dropdownHerr = "Pan";
    dropdownFrau = "Paní";
    dropdownError = "<div class='error-message'> Prosím zvolte </div>";
    veggieMenu = "Vegetariánské menu";
    meatMenu = "Masové menu";
    myMealChoice = "Volím intergalaktickou večeři:";
    partnerMealChoice = "Můj doprovod vybírá pro intergalaktickou večeři";
    phone = "Telefon (volitelně)";
    plantSite = "Závod/Pobočka";
    arrivalDate = "Rád bych přijel k následujícímu datu";
    hotelRoomNeeded = "Potřebuji hotelový pokoj";
    allegries = "Intolerance (volitelně)";
    hotelTransfer = "Potřebuji hotelový transfer";
} else if (url.includes('booking-15493-33315') || url.includes('booking-15493-33310')) {
    console.log("EN");
    country = "United States";
    ticketNumber = "Registration number: ";
    pleaseSelect = "Please select";
    dropdownYes = "Yes";
    dropdownNo = "No";
    dropdownHerr = "Mr";
    dropdownFrau = "Ms/Mrs";
    dropdownError = "<div class='error-message'> Please select </div>";
    veggieMenu = "Vegetarian menu";
    meatMenu = "Meat menu";
    myMealChoice = "My choice for the intergalactic dinner:";
    partnerMealChoice = "My guest’s choice for the intergalactic dinner";
    phone = "Phone (optional)";
    plantSite = "Plant/site";
    arrivalDate = "I would like to arrive on the following date";
    hotelRoomNeeded = "I need a hotel room";
    allegries = "Food intolerances (optional)";
    hotelTransfer = "I require a hotel transfer";
} else {
    console.log("ERROR: Unknown widget id")
}
console.log("translating")

checkboxSelected = false;
console.log(checkboxSelected)

function findDropDownByLabel(label) {
    var found = null;
    $(".vv-selection-input").each(function () {
        const labelText = $(this).find(".vv-control-label").text().replace(/\s+/g, ' ');

        if (labelText.trim() == label.trim()) {
            console.log('found label: ' + label.trim());
            found = this;
        }
    });
    return found;
};

function changeTextTo(selector, originalText, newText) {
    $(selector).each(function () {
        if ($(this).text().trim() == originalText) {
            $(this).text(newText);
        }
    })
};

function translatePleaseSelect() {
    changeTextTo('.vv-single-select-option', 'Please select', pleaseSelect);
    changeTextTo('.vv-single-select-option', 'Ja', dropdownYes);
    changeTextTo('.vv-single-select-option', 'Nein', dropdownNo);
    changeTextTo('.vv-single-select-option', 'Mr.', dropdownHerr);
    changeTextTo('.vv-single-select-option', 'Ms.', dropdownFrau);

    document.querySelectorAll(".vv-selection-input__value").forEach(el => {
        if (el.innerText === 'Please select') { el.innerText = pleaseSelect }
        if (el.innerText === 'Ja') { el.innerText = dropdownYes }
        if (el.innerText === 'Nein') { el.innerText = dropdownNo }
        if (el.innerText === 'Mr.') { el.innerText = dropdownHerr }
        if (el.innerText === 'Ms.') { el.innerText = dropdownFrau }
    });

    addEventListener('click', e => {
        if (e.target.classList.contains('vv-single-select-option')) {
            let selectContainer = e.target.closest('.vv-selection');
            let valueElement = selectContainer.getElementsByClassName('vv-selection-input__value')[0];
            valueElement.innerText = e.target.textContent.trim().replace('<br>', '');
        }
    });

};

function editBookingPortalAttendee() {
    
    console.log("editBookingPortalAttendee");

    //Questions
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Telefon', phone);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Werk / Standort', plantSite);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Ich benötige ein Hotelzimmer', hotelRoomNeeded);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Ich möchte zu folgendem Datum anreisen', arrivalDate);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Ich wähle zum intergalaktischen Dinner:', myMealChoice);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Ich wähle zum intergalaktischen Dinner', myMealChoice);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Meine Begleitung wählt zum intergalaktischen Dinner', partnerMealChoice);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Unverträglichkeiten', allegries);
    changeTextTo('.customization2_attendee_further-data_custom-question_label', 'Ich benötige einen Hoteltransfer', hotelTransfer);


    //Answers
    changeTextTo('.customization2_attendee_further-data_custom-question_value', 'Fleischmenü', meatMenu);
    changeTextTo('.customization2_attendee_further-data_custom-question_value', 'Vegetarisches Menü', veggieMenu);
    changeTextTo('.customization2_attendee_further-data_custom-question_value', 'Ja', dropdownYes);
    changeTextTo('.customization2_attendee_further-data_custom-question_value', 'Nein', dropdownNo);

    // Salutation
    changeTextTo('.customization2_attendee_contact-data_salutation_value', 'Mr.', dropdownHerr);
    changeTextTo('.customization2_attendee_contact-data_salutation_value', 'Mrs.', dropdownFrau);
    changeTextTo('.customization2_attendee_contact-data_salutation_value', 'Ms.', dropdownFrau);
    
};

function editBookingPortal() {
    
    console.log("editBookingPortal");
    
    $('.booking-status.booking-status--paid.customization3_edit-booking_main_booking-status').text('Anmeldung abgeschlossen');

    if ($('.customization3_edit-booking_main_booking-id_label').text().indexOf("Registrierung") == -1) {
        var ticketID = $('.customization3_edit-booking_main_booking-id_label strong').text();
        $('.customization3_edit-booking_main_booking-id_label').text(ticketNumber + ticketID);
    };
};

function changePhoneCountryLabel() {
    console.log("changePhoneCountryLabel");
    $(".customization2_attendee_further-data_custom-question_phone .iti__selected-flag").click();
    $("li.iti__country:contains(" + country + ")").click();
};

function disableWhenEmpty(field) {
    var inputOfField = $(field).find('.vv-selection-input__value.m-ellipsis').get(0);

    if (inputOfField != undefined) {
        $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
        if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').next().hasClass("error-message")) {
            $(dropdownError).insertAfter($(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
        }

        $(field).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {

            if ($(this).text().trim() == "Please select" || $(this).text().trim() == "Bitte auswählen" || $(this).text().trim() == pleaseSelect) {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
                $(field).find('.error-message').show();
                $('.customization2_attendee_edit-action_save').prop("disabled", true);
                
            } else {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').removeClass('error-state');
                $(field).find('.error-message').hide();
                //   $(".error-state").each(function(){console.log($(this))});
                if ($(".error-state").length == 0&&$(".error-text").length == 0)
                    $('.customization2_attendee_edit-action_save').prop("disabled", false);
            }
        });

        return;
    }

    inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_input');

    if (typeof $(inputOfField).get(0) === 'undefined') {
        //         console.log('is date')
        inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_date');
    } else {
        if (!$(inputOfField).next().hasClass("error-message")) {
            $(dropdownError).insertAfter($(inputOfField));
        }
    }
    $(inputOfField).addClass('error-state');

    $(inputOfField).on("focusout blur", function () {
        myTimeout = setTimeout(function () {
            $(inputOfField).get(0).dispatchEvent(new Event('change'));
            $(inputOfField).get(0).click();
            //     console.log('fired click and change')
        }, 50);
    });

    $(inputOfField).on("click change input", function (event) {

        if ($(this).val().trim().length == 0) {
            $(this).addClass('error-state');
            $(field).find('.error-message').show();
            $('.customization2_attendee_edit-action_save').prop("disabled", true);

        } else {
            $(this).removeClass('error-state');
            $(field).find('.error-message').hide();
            //   $(".error-state").each(function(){console.log($(this))});
            if ($(".error-state").length == 0 && $(".error-text").length == 0)
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    });
};

function customTerms() {
    if($(".error-message-next-button").length==0){
        $("<div class='error-message-next-button'> Wrong or missing data </div>").insertAfter($('.customization-button-next'));
        $(".error-message-next-button").hide();
    }
    if (!$('.custom_terms_checkbox').length) {
        console.log("Terms added");
        console.log("Checkbox selected: " + checkboxSelected)
        var customBookingTerms = $(".customization2_booking-terms .vv-mb-xxs vv-checkbox").clone();
        $('.customization2_booking-terms').prepend('<div class="custom_terms_checkbox" style="margin-bottom:10px"></div>');
        $('.custom_terms_checkbox').append(customBookingTerms);
        $('.custom_terms_checkbox p.customization2_booking-terms_text').text('Ich habe zur Kenntnis genommen, dass die Veranstaltung nach den zum Zeitpunkt der Veranstaltung gültigen Corona-Verordnungen des Landes Sachsen durchgeführt wird. Ich trage dafür Sorge, alle notwendigen Zertifikate am Veranstaltungstag vorweisen zu können.');
        if (checkboxSelected) {
            console.log($('div.custom_terms_checkbox > vv-checkbox > label'))
            $('div.custom_terms_checkbox > vv-checkbox > label').click();
        } else {
            $('.customization-button-next').prop("disabled", true);
        //    $(".error-message-next-button").show();       
     }
        $('.customization2_attendee_edit-action_save').on('click', function (e) {
            if (!checkboxSelected) {
                $('.customization-button-next').prop("disabled", true);
                $(".error-message-next-button").show();
            }
        });
        $('.custom_terms_checkbox').on('click', function (e) {
            if (e.target.name != undefined && e.target.name == 'isTermsAccepted') {
                checkboxSelected = !checkboxSelected;
                if (!checkboxSelected||$(".error-state").length != 0||$(".error-text").length != 0) {
                    $('.customization-button-next').prop("disabled", true);
                    $(".error-message-next-button").show();
                } else {
                    console.log("enabling the next button");
                    $('.customization-button-next').prop("disabled", false);
                    $(".error-message-next-button").hide();
                }
                console.log(checkboxSelected);
            }
        })
    }
};

function addHotelDescription() {
    if (!$('.hotelText').length) {
        console.log("Hotel description added");
        $(findDropDownByLabel('Ich benötige einen Hoteltransfer Bitte beachten Sie, dass wir einen Hoteltransfer nur von unseren Partnerhotels anbieten können.')).prepend('<div class="hotelText" style="margin-bottom:10px"><p style="font-size:1.2rem; font-weight: 600; color: #343a3f;">Weitere Informationen</p><br><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Hotel</p><p style="font-size:.875rem; line-height: 1.37rem; font-weight: 400; color: #343a3f;">Wir haben für Sie Zimmerkontingente in Hotels der Region optioniert, die bis XX.XX.XX abrufbar sind. Von diesen Partnerhotels werden auch Bustransfers zur Veranstaltungslocation angeboten. Bitte beachten Sie, dass die Hotelkosten und Extras von Ihnen getragen werden. In Ihrer Anmeldebestätigung senden wir Ihnen den Link zu den Partnerhotels.</p><br><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Hoteltransfer</p><p style="font-size:.875rem; line-height: 1.37rem; font-weight: 400; color: #343a3f;">Bitte beachten Sie, dass wir einen Hoteltransfer nur von unseren Partnerhotels anbieten können.</p> </div>');
    }
};

function addEssenswahl() {
    if (!$('.headerEssenswahl').length) {
        console.log("Essenswahl added");
        $(findDropDownByLabel('Ich wähle zum intergalaktischen Dinner')).prepend('<div class="headerEssenwahl" style="margin-bottom:10px"><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Hotel</p><p style="font-size:.875rem; line-height: 1.37rem; font-weight: 400; color: #343a3f;">Wir haben für Sie Zimmerkontingente in Hotels der Region optioniert, die bis XX.XX.XX abrufbar sind. Von diesen Partnerhotels werden auch Bustransfers zur Veranstaltungslocation angeboten. Bitte beachten Sie, dass die Hotelkosten und Extras von Ihnen getragen werden. In Ihrer Anmeldebestätigung senden wir Ihnen den Link zu den Partnerhotels.</p><br><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Hoteltransfer</p><p style="font-size:.875rem; line-height: 1.37rem; font-weight: 400; color: #343a3f;">Bitte beachten Sie, dass wir einen Hoteltransfer nur von unseren Partnerhotels anbieten können.</p> </div>');
    }
};

function addWeitereAngabenTeilnehmerHeader() {
    if (!$('.weitereAngabenTeilnehmer').length) {
        console.log("Weitere Angaben added");
        $(findDropDownByLabel('Werk / Standort')).prepend('<div class="weitereAngabenTeilnehmer" style="margin-bottom:10px; margin-top: 14px"><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Weitere Angaben</p></div>');
    }
};

function handler() {

    var styles = `
         .error-state{
             border-color: #ea674d!important;
             background-color: #fff1ef!important;
            
         }
         .error-message-next-button{
            display: block;
            color: #ea674d;
            font-size: 12px;
            line-height: 1;
            margin-bottom: 10px;
            left: 0;
            top: 3px;
        }
         .error-message{
             display: block;
             color: #ea674d;
             font-size: 12px;
             line-height: 1;
             margin-bottom: 10px;
             left: 0;
             top: 3px;
         }
     `
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;

    styleSheet.onreadystatechange = handlerS;
    styleSheet.onload = handlerS;

    document.head.appendChild(styleSheet);

    function handlerS() {
        console.log('style added');
    }


    // Translation
    editBookingPortal();
    translatePleaseSelect();
    changePhoneCountryLabel();
    



    // Conditional Questions
    addHotelDescription();
    customTerms();
    addWeitereAngabenTeilnehmerHeader();


    
    var field1 = findDropDownByLabel('Ich benötige ein Hotelzimmer (optional)');
    $(field1).hide()

    var field2 = findDropDownByLabel('Ich möchte zu folgendem Datum anreisen (optional)');
    $(field2).hide()

    var dropdown1 = findDropDownByLabel('Werk / Standort');

    $(dropdown1).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
        if ($(this).text().trim() == 'PM3') {
            $(field1).show();
            $(field2).hide();
            $(field1).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field1);
        } else if ($(this).text().trim() == 'PW06 / Group Office') {
            $(field1).hide()
            $(field2).show()
            $(field2).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field2);
        } else {
            $(field1).hide();
            $(field1).find('.customization2_attendee_further-data_custom-question_dropdown').val('');
            $(field2).hide();
            $(field2).find('.customization2_attendee_further-data_custom-question_dropdown').val('');
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    });


}


// Trigger & Observer


handler();
editBookingPortalAttendee();


const observerThisPage = new MutationObserver((mutations, obs) => {
    const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');

    if ($(page2).is(':visible')) {
        console.log('page 2 visible')
        //editBookingPortal();
        //changePhoneCountryLabel();
        //customTerms();
        handler();
        observerOtherPage.observe(document, {
            childList: true,
            subtree: true
        });
        obs.disconnect();
        return;
    }
});

const observerOtherPage = new MutationObserver((mutations, obs) => {
    const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');


    if (!$(page2).is(':visible')) {
        console.log('page 2 not visible')
        observerThisPage.observe(document, {
            childList: true,
            subtree: true
        });
        obs.disconnect();
        return;
    }
});

const observer = new MutationObserver((mutations, obs) => {
    const page4 = document.getElementsByClassName('customization-booking-area-wrapper-page4');
    if ($(page4).is(':visible')) {
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

observerOtherPage.observe(document, {
    childList: true,
    subtree: true
});

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        handler();
    }
    
    if (event.animationName === "nodeInserted2") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        editBookingPortalAttendee();

    }
    
     if (event.animationName === "nodeInserted3") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        editBookingPortalAttendee();

    }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
