// Ü, ü     \u00dc, \u00fc
// Ä, ä     \u00c4, \u00e4
// Ö, ö     \u00d6, \u00f6
// ß        \u00df
console.log("GTM Git loaded");

// replace placeholder on first page:
var placeholder = $("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(1) > vv-input > label > div > input");
placeholder.attr("placeholder", "S\u00f6k efter nyckelord");

var placeholderStartDate = $("vv-input-calendar[formcontrolname='fromDate'] input");
placeholderStartDate.attr("placeholder", "Startdatum");

var placeholderEndDate = $("vv-input-calendar[formcontrolname='toDate'] input");
placeholderEndDate.attr("placeholder", "Slutdatum");

$('vv-custom-filters p.vv-selection-input__placeholder').text('Välj');

$('.link-text:contains(View event)').text('Se event');

$('.event-article__ticket-info p:contains(Booked up)').text('Fullbokat')

//
function translateDates() {
    $("table > thead > tr > th:nth-child(1) > span").text('Sö');
    $("table > thead > tr > th:nth-child(2) > span").text('Må');
    $("table > thead > tr > th:nth-child(3) > span").text('Ti');
    $("table > thead > tr > th:nth-child(4) > span").text('On');
    $("table > thead > tr > th:nth-child(5) > span").text('To');
    $("table > thead > tr > th:nth-child(6) > span").text('Fr');
    $("table > thead > tr > th:nth-child(7) > span").text('Lö');
    //div.p-datepicker-calendar-container.ng-tns-c47-0.ng-star-inserted >
    //$("div.p-datepicker-calendar-container.ng-tns-c47-1.ng-star-inserted > table > thead > tr > th:nth-child(2) > span")

    var month = $(".p-datepicker-select-month").text();
    var enMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var swMonths = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']

    //get index of english month
    var indexEN = enMonths.indexOf(month);

    //replace english month by swedish month by using the same index
    $(".p-datepicker-select-month").text(swMonths[indexEN]);

}

//back (on top)
//$('.button-back').text()

//Dropdown
$("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__value-container > vv-selection-input > div > div > p").text('Välj varuhus');
//Dropdown opened
$('.vv-selection-input__control').click(function () {
    setTimeout(function () {
        $("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__dropdown-container.vv-selection__dropdown-container--bottom > vv-single-select-dropdown > div > vv-single-select-option:nth-child(1) > div").text('Välj varuhus');
    }, 50);
})

$('.vv-input__control-container').click(function () {
    translateDates();
});
$('.p-datepicker-next-button').click(function () {
    translateDates();
});
$('.p-datepicker-prev-button').click(function () {
    translateDates();
});


$(document.head).append(`
    <style>
        .gtm-search-filter {
            visibility: hidden;
        }
        .gtm-search-filter::before {
            content: "Alla varuhus";
            visibility: visible;
        }
    </style>
`);

setInterval(function () {


    $('.p-datepicker-next').click(function () { });


    //replace available
    // var ava = $("#event-list-widget > vv-events-search > vv-list-view > section > ul > li > vv-list-view-standard-item > article > div > div.col-12.event-article__event-info > div.event-article__footer > div > div.event-article__ticket-info.col-sm-7.col-md-8.green > span").text();
    // var replace = ava.replace("available", "tillg\u00e4ngliga platser");
    // $("#event-list-widget > vv-events-search > vv-list-view > section > ul > li > vv-list-view-standard-item > article > div > div.col-12.event-article__event-info > div.event-article__footer > div > div.event-article__ticket-info.col-sm-7.col-md-8.green > span").text(replace);

    //page 1
    //contact person
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(3) > span:nth-child(1)").text('Kontaktperson: ');
    //Phone Number
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(4) > span:nth-child(1)").text('Telefon: ');
    //Email
    $("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(5) > span:nth-child(1)").text('E-postadress: ');


    $('.event-info__details').hide();
    $('.customization-event-info-address-label').hide();
    $('.customization-event-info-contact').hide();


    // Search Placholder
    $('.vv-multiple-select-dropdown__search-input').attr("placeholder", "Sök");


    $('.error-text:contains(Please complete)').text('Obligatorisk')

    //Organizer contact
    $('.customization-event-info-contact-label').text('Kontakta arrangör');


    // Booking Portal Link
    $('vv-booking-editing-prompt vv-text span').text('Har du redan bokat?');
    $('vv-booking-editing-prompt vv-button button').text('Klicka här för att komma till din bokning.');



    $('.event-category span:contains(Registration will start on)').text('Bokning öppnar snart');
    $('.event-category vv-dates-interval .dates-interval__label').hide()

    $('.event-category__amount--sold:contains(Booked up)').text('Fullbokat');

    $('.event-category__error').text('has ended');

    //Next
    $('.customization-button-next').text('Nästa');


    //Encrypted connection
    $('.customization-encrypted-connection').text('Krypterad anslutning');

    //		Selection
    //$('.progress-point__label').text('');



    $('.ew-header__progress-container .progress-meter .selection span').text('Urval');
    $('.ew-header__progress-container .progress-meter .information span').text('Deltagarinformation');
    $('.ew-header__progress-container .progress-meter .confirmation span').text('Bekräftelse');


    //Please select a ticket category
    $('.ew-selection__error').text('Välj antal biljetter du vill boka');


    //ATTENDEE DETAILS
    $('.customization2_attendees_title').text('Deltagarinformation');


    //CONTACT
    $('.customization2_attendee_contact-data_headline').text('Kontaktuppgifter');

    //ATTENDEE COUNT
    $('p.customization2_attendee_count').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('Attendee', 'Deltagare'));
    });

    $('p.customization2_attendee_count').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('of', 'av'));
    });


    //FIRST NAME
    $('.customization2_attendee_contact-data_first-name_label').text('Förnamn');
    $('.customization2_attendee_contact-data_first-name_error').text('Obligatorisk');

    //LAST NAME
    $('.customization2_attendee_contact-data_last-name_label').text('Efternamn');
    $('.customization2_attendee_contact-data_last-name_error').text('Obligatorisk');

    //Accept
    $('.customization2_attendee_edit-action_save').text('Jag har fyllt i mina uppgifter');

    //Copy details from attendee 1
    $('.customization2_attendee_contact-data_copy-link').each(function () {
        var text = $(this).text();
        $(this).text(text.replace("Copy details from attendee 1", "Kopiera information från deltagare 1"));
    });
    
    

    //Cancel
    var canceltext = $(".customization2_attendee_edit-action_cancel .vv-button-text-blue").text();
    var replacecancel = canceltext.replace("Cancel", "X Avbryt");
    $(".customization2_attendee_edit-action_cancel .vv-button-text-blue").text(replacecancel);
    //   if(!typeof canceltext === "undefined"){}

    // BOOKING DETAILS
    $('.customization2_booker_title').text('BOKNINGSINFORMATION');


    //SUMMARY
    $('.customization2_summary_headline').text('SAMMANFATTNING');

    //Contact Person
    $('.customization2_booker_contact-data_headline').text('Kontaktperson');


    //Contact details
    $('.customization2_booker_contact-data_headline').text('Kontaktperson: ');

    //Dropdown
    $('.customization2_booker_contact-data_booker-attendee-relation_attendee .vv-single-select-option').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('Use details from attendee', 'Samma uppgifter som deltagare'));
    });
    
    document.querySelectorAll(".vv-selection-input__value").forEach(el => {
        if (el.innerText === 'Use details from attendee 1') {
            el.innerText = 'Samma uppgifter som deltagare 1'}
        });
    
    addEventListener('click', e => {
    if (e.target.classList.contains('vv-single-select-option')) {
        let selectContainer = e.target.closest('.vv-selection');
        let valueElement = selectContainer.getElementsByClassName('vv-selection-input__value')[0];
        valueElement.innerText = e.target.textContent.trim().replace('<br>', '');
    }
    });

    $(".customization2_booker_contact-data_booker-attendee-relation_different-attendee .vv-single-select-option").text('Fyll i alternativa uppgifter');

    //First name
    $('.customization2_booker_contact-data_first-name_label').text('Förnamn');


    //First name Required
    $('.customization2_booker_contact-data_first-name_error').text('Obligatorisk');

    //Last name
    $('.customization2_booker_contact-data_last-name_label').text('Efternamn');

    //Last name Required
    $('.customization2_booker_contact-data_last-name_error').text('Obligatorisk');

    //Organisation
    $('.customization2_booker_contact-data_company_label').text('Organisation/Företag');

    //Organisation Required
    $('.customization2_booker_contact-data_company_error').text('Obligatorisk');


    //Email address
    $('.customization2_booker_contact-data_email_label').text('E-postadress (för bokningsbekräftelse och biljett)');
    $('.customization2_attendee_contact-data_email_label').text('E-postadress (för bokningsbekräftelse och biljett)');

    // confirm email address
    $('.customization2_booker_contact-data_email-confirmation_label').text('Bekräfta e-postadress');
    $('.customization2_attendee_contact-data_email-confirmation_label').text('Bekräfta e-postadress');


    //already registed
    $('.customization2_booker_contact-data_email_error').text('Du är redan inbokad på detta event');

    //Confirm email address
    $('.customization2_booker_contact-data_email-confirmation_label').text('Bekräfta e-postadress');

    //Please enter valid email address
    $('.customization2_booker_contact-data_email-confirmation_error').text('Vänligen fyll i giltig e-postadress');

    //Accept
    $('.customization2_booker_edit-action_save').text('Jag har fyllt i mina uppgifter');

    //Cancel Attendee
    $('button.customization2_attendee_edit-action_cancel').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('Cancel', 'Avbryt'));
    });


    //Cancel Booker
    $('button.customization2_booker_edit-action_cancel').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('Cancel', 'Avbryt'));
    });


    //Email addresses not matching
    $('.customization2_booker_contact-data_email-confirmation_error').text('E-postadresserna överensstämmer inte med varandra');

    //Change selection
    $('.customization-button-previous').text('Tillbaka till urval');

    //Back button (Back to Overview)
    $('.button-back').text('Tillbaka till översikt');


    //Book now
    $('.customization-button-next').text('Boka nu');


    $('.customization2_booking-terms_text').each(function () {
        var text = $(this).text('Jag har läst integritets- & personuppgiftspolicyn och godkänner att mina uppgifter registreras.');
        var editedtext = text.text();
        $(this).html(editedtext.replace('integritets- & personuppgiftspolicyn', '<a href="https://www.hornbach.se/service/integritets-och-personuppgiftspolicy/" target="_blank">integritets- & personuppgiftspolicyn</a>'));
    });



    $(".customization2_booking-terms_custom-term-1").hide();
    
    $('.customization2_attendee_further-data_product_capacity').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('left', 'kvar'));
    });
    
    $('.customization2_attendee_further-data_headline').text('Mer information');
    
    $('.question-group__hint').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('Please select at least', 'Välj minst'));
    });
    
    $('vv-optional-text').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('optional', 'valfritt'));
    });
    
    $('.customization2_attendee_further-data_product_value').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('Booked', 'Bokat'));
    });

    //page 3 Confirmation

    //Booking confirmation
    $('.ew-confirmation__header p').text('Bokningsbekräftelse');

    //Thank you for your booking. You will shortly receive your confirmation by email.
    $('.customization-confirmation-description').text('Tack för din bokning! Inom kort skickar vi en bekräftelse med din eventbiljett till den e-postadress du uppgivit.');

    //Details and documents are available in the booking portal:
    $('.customization-client-portal-description').text('Information om eventet hittar du även i bokningsportalen:');

    //
    $('p.ew-confirmation__text-paragraph').text('Du kan se och hantera din bokning när som helst i bokningsportalen. För att komma åt din bokning behöver du ditt boknings-ID och den e-postadress du använt vid bokningen.');

    //Your Booking Portal
    $('.customization-client-portal-link').text('Klicka här för att komma till din bokning i bokningsportalen.');
    $('.customization-client-portal-link').css('color', '#F99D27');

    //
    $('.ew-confirmation__organizer-contact span.text--grey').text('Om du har några frågor, vänligen kontakta');

    //
    if ($('.notice__booking-id').text().indexOf("Boknings") == -1) {
        var ticketID = $('.notice__booking-id span').text();
        $('.notice__booking-id').text('Boknings-ID: ' + ticketID);
    };


    // Booking Portal

    // Please enter your booking credentials
    $('.booking-editing-auth h3.vv-heading').text('Ange dina bokningsuppgifter');

    // Booking-ID
    $('form[name="bookingEditingAuthForm"] vv-input[name="bookingId"] label p').text('Boknings-ID');

    // Booking_ID required
    $('.booking-editing-auth vv-input[name="bookingId"] + vv-show-errors .error-text').text('Ange ett giltigt boknings-ID.');

    // Email address
    $('form[name="bookingEditingAuthForm"] vv-input[name="email"] label p').text('E-postadress');

    // Email address required
    $('.booking-editing-auth vv-input[type="email"] + vv-show-errors .error-text').text('Obligatorisk');

    // Go to selection
    $('form[name="bookingEditingAuthForm"] button[type="button"]').text('Gå till urval');

    // Next
    $('form[name="bookingEditingAuthForm"] button[type="submit"]').text('Nästa');

    // My self-service space
    $('.customization3_edit-booking_header_title').text('Mitt självbetjäningsutrymme');


    //DAYS TO GO
    $('.customization3_edit-booking_header_days-to-go p').text('DAGAR TILL BORTFORSLING');

    //Log out
    $('.customization3_edit-booking_header_logout span').text('Logga ut');

    // Booked on
    $('.customization3_edit-booking_main_booking-date_label').text('Bokad på');

    function replaceMonth(selector) {
        var months = {
            'January': 'Januari',
            'February': 'Februari',
            'March': 'Mars',
            'April': 'April',
            'May': 'Mai',
            'June': 'Juni',
            'July': 'Juli',
            'August': 'Augusti',
            'September': 'September',
            'October': 'Oktober',
            'November': 'November',
            'December': 'December',
        };

        $(selector).text($(selector).text().replace(/January|February|March|April|May|June|July|August|September|October|November|December/g, function (match) { return months[match]; }))
    };

    function replaceDay(selector) {
        var days = {
            'Monday': 'Måndag',
            'Tuesday': 'Tisdag',
            'Wednesday': 'Onsdag',
            'Thursday': 'Torsdag',
            'Friday': 'Fredag',
            'Saturday': 'Lördag',
            'Sunday': 'Söndag',
        };

        $(selector).text($(selector).text().replace(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/g, function (match) { return days[match]; }))

    };


    // Date (booked on)
    replaceMonth('.customization3_edit-booking_main_booked-on_value');
    $('.customization3_edit-booking_main_booked-on_value').text($('.customization3_edit-booking_main_booked-on_value').text().replace('at', 'kl.'))


    //Booking ID
    if ($('.customization3_edit-booking_main_booking-id_label').text().indexOf("Boknings") == -1) {
        var ticketID = $('.customization3_edit-booking_main_booking-id_label strong').text();
        $('.customization3_edit-booking_main_booking-id_label').text('Boknings-ID: ' + ticketID);
    };


    //Booking Status
    $('.booking-status.booking-status--paid.customization3_edit-booking_main_booking-status').text('Bokning slutförd');
    $('.booking-status.booking-status--cancelled.customization3_edit-booking_main_booking-status').text('Bokning avbokad');


    // Event Date
    replaceMonth('.customization3_edit-booking_main_event_dates');
    replaceDay('.customization3_edit-booking_main_event_dates');
    $('.customization3_edit-booking_main_event_dates').text($('.customization3_edit-booking_main_event_dates').text().replace('from', 'klockan'))


    //Download ticket
    $('.customization3_edit-booking_main_actions_download-ticket').text('Hämta biljett');

    // Cancel booking
    $('.customization3_edit-booking_main_actions_cancel-booking').text('Avbryt bokning');


    // ATTENDEES
    $('.customization3_tab-group_tabs button:first-of-type span').text('DELTAGARE');


    // Edit tooltip
    $('vv-button[customization="customization2_attendee_view-action_edit"] + div.vv-tooltip__content').text('Redigera');
    $('vv-button[customization="customization2_booker_view-action_edit"] + div.vv-tooltip__content').text('Redigera');

    // Further actions tooltip
    $('vv-dropdown.booking-participant__actions-dropdown + div.vv-tooltip__content').text('Ytterligare åtgärder');
    
    // Download PDF ticket
    if ($('.dropdown-item__text a').text().trim() == 'Download PDF ticket') { $('.dropdown-item__text a').text('Ladda ner PDF-biljett') }


    // BOOKING
    $('.customization3_tab-group_tabs button:nth-of-type(3) span').text('BOKNING');


    // Summary
    $('.customization3_invoice-box_header_title').text('Sammanfattning');

    // Description
    $('.customization3_invoice-box_category_label').text('BESKRIVNING');


    // Quantity
    $('.customization3_invoice-box_quantity_label').text('KVANTITET');


    // EVENT
    $('.customization3_tab-group_tabs button:nth-of-type(4) span').text('EVENEMANG');


    // Event Date
    replaceMonth('.customization3_edit-booking_event_dates');
    replaceDay('.customization3_edit-booking_event_dates');
    $('.customization3_edit-booking_event_dates').text($('.customization3_edit-booking_event_dates').text().replace('from', 'klockan'))


    // Event Address
    $('.location-pointer_address').text($('.location-pointer_address').text().replace('Schweden', 'Sverige'))

    // Event Organizer
    $('.customization3_edit-booking_event_organizer > div > div:first-child > .data-item__label').text('Arrangör av evenemang');


    // Contact
    $('.customization3_edit-booking_event_organizer > div > div:nth-child(2) > .data-item__label').text('Kontakta');


    // Booking terms and conditions
    $('.customization3_edit-booking_event_organizer .terms__label').text('Villkor för bokning');

    // This Booking has been canceled
    if ($('.guidance-title').text().trim() == 'This booking has been canceled.') { $('.guidance-title').text('Den här bokningen har avbokats.') };
    
    
    // Cancel Popup
    if ($('.confirmation-dialog__title').text().trim() == 'Cancel booking') { $('.confirmation-dialog__title').text('Avbryt bokningen') };
    if ($('.confirmation-dialog__message').text().trim() == 'Are you sure that you will not attend the event? You can only cancel the entire booking. The cancellation cannot be undone.') { $('.confirmation-dialog__message').text('Är du säker på att du inte kommer att delta i evenemanget? Du kan bara avboka hela bokningen. Det går inte att ångra avbokningen.') };
    
    $('vv-cancel-button-content').each(function () {
        var text = $(this).text();
        $(this).text(text.replace('Cancel', 'Avbryt'));
    });
    
    if ($('.confirmation-dialog__content > div > button').text().trim() == 'Cancel booking') { $('.confirmation-dialog__content > div > button').text('Avbryt bokningen') }


    // CP-10102
    // Next (tickets)
    $(".ew-selection__further .customization-button-next").text("Nästa");
    // Book (booking)
    $(".customization-button-next:not(.ew-selection__further .customization-button-next)").text("Boka");

    // CP-10239
    // Search
    $("vv-input-search input").attr("placeholder", "Sök");
    // Filter
    const f = $(".vv-selection-input__value");
    if (f.is(":contains('All event locations')")) {
        f.addClass("gtm-search-filter");
    } else {
        f.removeClass("gtm-search-filter");
    }
    $(".vv-selection-option.p-placeholder:contains('All event locations')").text("Alla varuhus");

    $(".vv-button:contains('Search')").text("Sök");

    $("vv-custom-filters").hide();
    
}, 3000);
//99 available Replace the word
//var available = $('.event-category__amount').text();
//var res = available.replace("available", "tillgängliga platser");
//$('.event-category__amount').text(res);
