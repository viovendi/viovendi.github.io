$(document).ready(function () {
    console.log("Start termsAndDoi");


    // Email Confirmation Attendee

    function emailConfirmationAttendee() {
        var attendeeEmail1 = $('.customization2_attendee_contact-data_email_input');
        var attendeeEmail2 = $('.customization2_attendee_contact-data_email-confirmation_input');
        attendeeEmail2.val(attendeeEmail1.val());
        $('.customization2_attendee_contact-data_email-confirmation_input').focus();
        $('.customization2_attendee_edit-action_save').focus();
    };

    // Email Confirmation Booker
    function emailConfirmationBooker() {
        var box1 = $('.customization2_booker_contact-data_email_input');
        var box2 = $('.customization2_booker_contact-data_email-confirmation_input');
        box2.val(box1.val());
        $('.customization2_booker_contact-data_email-confirmation_input').focus();
        $('.customization2_booker_edit-action_save').focus();
    };

    function hideEmail() {
        console.log("hideEmail");
        $('.customization2_attendee_contact-data_email-confirmation *').css({
            "opacity": "0",
            "height": "0px"
        });
        $('.customization2_booker_contact-data_email-confirmation *').css({
            "opacity": "0",
            "height": "0px"
        });
    };


    function moveTerms() {
        /*
        var terms = `<p id='45408464531'>Als vertraglich geschuldete Gegenleistung für die Teilnahme am Event erkläre ich mich damit einverstanden, dass die o.a. Daten für an mich gerichtete Werbung von der SZ GmbH genutzt werden (z.B. für Informationen über eigene und fremde Produkte und Dienstleistungen, Rabattaktionen, Zufriedenheitsumfragen). Meine Einwilligung kann ich jederzeit durch einen Klick auf den Abmelde-Link am Ende der Mail widerrufen.<br><br>
    Die Daten verarbeitet die SZ GmbH zur Vertragserfüllung, sie verarbeitet die Anrede aufgrund ihres berechtigten Interesses an einer persönlichen Kundenansprache und die Kontaktdaten aufgrund ihres berechtigten Interesses an Direktwerbung. Weitere Informationen zum Datenschutz unter <a href="https://www.sz.de/datenschutz" target="_blank" rel="noopener noreferrer" style="color: #3b9f9a !important;">www.sz.de/datenschutz</a>.<br><br>
    Im Rahmen der Veranstaltung erstellen und verwenden wir Foto- und Filmaufnahmen aufgrund unserer überwiegenden berechtigten Interessen an Dokumentation, Berichterstattung sowie der Bewerbung von weiteren Veranstaltungen auf unserer Website, in Print- und Digitalprodukten der SZ und in den gedruckten Programmen von weiteren Veranstaltungen sowie in sozialen Netzwerken.<br><br>
    Die AGBs (<a href="https://www.sueddeutsche.de/advertorial/event-finanzloge/agb" target="_blank" rel="noopener noreferrer" style="color: #3b9f9a !important;">https://www.sueddeutsche.de/advertorial/event-finanzloge/agb</a>) und Datenschutzhinweise (<a href="https://www.sz.de/datenschutz" target="_blank" rel="noopener noreferrer" style="color: #3b9f9a !important;">www.sz.de/datenschutz</a>) habe ich zur Kenntnis genommen.
</p>`;
        */

        const terms = `<p id='45408464531'>Ihre o.a. Daten werden zur persönlichen Ansprache und Abwicklung der Veranstaltung verwendet und gelöscht, sobald diese Zwecke weggefallen sind. Die AGB ( <a href="https://agb.swmh.de/sz_veranstaltungen" target="_blank" rel="noopener noreferrer" style="color: #3b9f9a !important;">https://agb.swmh.de/sz_veranstaltungen</a>) und Datenschutzhinweise ( <a href="https://www.swmh-datenschutz.de/sz-erleben" target="_blank" rel="noopener noreferrer" style="color: #3b9f9a !important;">https://www.swmh-datenschutz.de/sz-erleben</a>) habe ich zur Kenntnis genommen.</p>`;


        // Add Terms after Booker data
        if(!$('#45408464531').length){
            
            if($(".customization2_booker_further-data").length){
                console.log("Adding terms after booker further data");
                $(".customization2_booker_further-data").after(terms);
            
            } else if ($(".customization2_booker_contact-data").length){
                console.log("Adding terms after booker contact data");
                $(".customization2_booker_contact-data").after(terms);
            
            } else if ($(".customization2_attendee_further-data").length && !$(".customization2_booker").length){
                console.log("Adding terms after attendee further data");
                $(".customization2_attendee_further-data").after(terms);
            
            } else if ($(".customization2_attendee_contact-data").length && !$(".customization2_booker").length){
                console.log("Adding terms after attendee contact data");
                $(".customization2_attendee_contact-data").after(terms);
            }
        };
        
        $('#45408464531').css({
            "padding-top": "20px",
            "font-size": "14px",
        });
        
        
        // Style DOI 
        $('.vv-checkbox__label--center').css({
            "align-items": "start",
        });
        
        $('.vv-checkbox__indicator').css({
            "margin-top": "4px",
        });
        
    };
    
    function checkAndHideTerms () {
        if(!$('.customization2_booking-terms_checkbox').is(":checked")){
            
            // Click Terms checkbox
            console.log("checkbox clicked");
            $('.customization2_booking-terms_checkbox').click()

        }
        
        // Remove Terms in Terms sections
        $('.customization2_booking-terms').css({
             "display": "none",
        });
    }



    $('body').on('change', '.customization2_attendee_contact-data_email_input', emailConfirmationAttendee);
    $('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmationBooker);


    
    
    hideEmail();
    moveTerms();
    checkAndHideTerms();

    var insertionListener = function (event) {
        if (event.animationName === "nodeInserted") {

            console.log("event listener");
            hideEmail();
            moveTerms();
            checkAndHideTerms();
        }
    };

    document.addEventListener("animationstart", insertionListener, false); // standard + firefox
    document.addEventListener("MSAnimationStart", insertionListener, false); // IE
    document.addEventListener("webkitAnimationStart", insertionListener, false); //

    const observerThisPage = new MutationObserver((mutations, obs) => {
        const page3 = document.getElementsByClassName('customization-booking-area-wrapper-page3');
    
        if ($(page3).is(':visible')) {
            console.log('on page 3')
            checkAndHideTerms();
            obs.disconnect();
            return;
        }
    });
    const observerOtherPage = new MutationObserver((mutations, obs) => {
        const page3 = document.getElementsByClassName('customization-booking-area-wrapper-page3');
    
        if (!$(page3).is(':visible')) {
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
});
