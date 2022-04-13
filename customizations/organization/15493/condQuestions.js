var ticketNumber;
var pleaseSelect;
var checkboxSelected;

const url = window.location.href;

if (url.includes('booking-15493-33318') || url.includes('booking-15493-33313')) {
    console.log("FR");
    ticketNumber = "Numéro d'enregistrement: ";
    pleaseSelect = "Veuillez sélectionner";
} else if (url.includes('booking-15493-33317') || url.includes('booking-15493-33312')) {
    console.log("IT");
    ticketNumber = "Numero di registrazione: ";
    pleaseSelect = "Si prega di selezionare";
} else if (url.includes('booking-15493-33316') || url.includes('booking-15493-33311')) {
    console.log("PL");
    ticketNumber = "Numer zgłoszeniowy: ";
    pleaseSelect = "Prosimy wybrać";
} else if (url.includes('booking-15493-33319') || url.includes('booking-15493-33314')) {
    console.log("CZ");
    ticketNumber = "Registrační číslo: ";
    pleaseSelect = "Prosím zvolte";
} else if (url.includes('booking-15493-33315') || url.includes('booking-15493-33310')) {
    console.log("EN");
    ticketNumber = "Registration number: ";
    pleaseSelect = "Please select";
} else {
    console.log("ERROR: Unknown widget id")
}
console.log("translating")

checkboxSelected=true;
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
    changeTextTo('.vv-single-select-option', 'Bitte auswählen', pleaseSelect);

    document.querySelectorAll(".vv-selection-input__value").forEach(el => {
        if (el.innerText === 'Bitte auswählen') { el.innerText = pleaseSelect }
    });

    addEventListener('click', e => {
        if (e.target.classList.contains('vv-single-select-option')) {
            let selectContainer = e.target.closest('.vv-selection');
            let valueElement = selectContainer.getElementsByClassName('vv-selection-input__value')[0];
            valueElement.innerText = e.target.textContent.trim().replace('<br>', '');
        }
    });

};

function disableWhenEmpty(field) {
    var inputOfField = $(field).find('.vv-selection-input__value.m-ellipsis').get(0);

    if (inputOfField != undefined) {
        $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
        if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').next().hasClass("error-message")) {
            $("<div class='error-message'> Please complete </div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
        }

        $(field).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {

            if ($(this).text().trim() == "Please select" || $(this).text().trim() == "Bitte auswählen"|| $(this).text().trim() == pleaseSelect) {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
                $(field).find('.error-message').show();
                $('.customization2_attendee_edit-action_save').prop("disabled", true);

            } else {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').removeClass('error-state');
                $(field).find('.error-message').hide();
                //   $(".error-state").each(function(){console.log($(this))});
                if ($(".error-state").length == 0)
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
            $("<div class='error-message'> Please complete </div>").insertAfter($(inputOfField));
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
            if ($(".error-state").length == 0)
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    });
};

function customTerms() {
    console.log(checkboxSelected)
    if (!$('.custom_terms_checkbox').length) {
        console.log("Terms added");
        console.log(checkboxSelected)
        var customBookingTerms = $(".customization2_booking-terms .vv-mb-xxs vv-checkbox").clone();
        $('.customization2_booking-terms').prepend('<div class="custom_terms_checkbox" style="margin-bottom:10px"></div>');
        $('.custom_terms_checkbox').append(customBookingTerms);
        $('.custom_terms_checkbox p.customization2_booking-terms_text').text('Ich habe zur Kenntnis genommen, dass die Veranstaltung nach den zum Zeitpunkt der Veranstaltung gültigen Corona-Verordnungen des Landes Sachsen durchgeführt wird. Ich trage dafür Sorge, alle notwendigen Zertifikate am Veranstaltungstag vorweisen zu können.');
        console.log($('.custom_terms_checkbox > p').length)
        $('.custom_terms_checkbox').on('click',function(e){
            console.log(e);
            checkboxSelected=!checkboxSelected;
            console.log(checkboxSelected)
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

function editBookingPortal() {
    $('.booking-status.booking-status--paid.customization3_edit-booking_main_booking-status').text('Anmeldung abgeschlossen');

    if ($('.customization3_edit-booking_main_booking-id_label').text().indexOf("Registrierung") == -1) {
        var ticketID = $('.customization3_edit-booking_main_booking-id_label strong').text();
        $('.customization3_edit-booking_main_booking-id_label').text('Registrierungsnummer: ' + ticketID);
    };
};

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

function handler() {

    var styles = `
         .error-state{
             border-color: #ea674d!important;
             background-color: #fff1ef!important;
            
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

handler();
addHotelDescription();
customTerms();
addWeitereAngabenTeilnehmerHeader();
editBookingPortal();
translatePleaseSelect();

const observerThisPage = new MutationObserver((mutations, obs) => {
    const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');

    if ($(page2).is(':visible')) {
        console.log('page 2 visible')
        editBookingPortal();
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

observerOtherPage.observe(document, {
    childList: true,
    subtree: true
});

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        handler();
        addHotelDescription();
        customTerms();
        addWeitereAngabenTeilnehmerHeader();
        editBookingPortal();
        translatePleaseSelect();
    }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
