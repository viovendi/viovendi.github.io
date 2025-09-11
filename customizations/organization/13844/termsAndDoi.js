$(document).ready(function () {
    console.log("Start termsAndDoi");


    // Email Confirmation Attendee

    function emailConfirmationAttendee() {
        var attendeeEmail1 = $('.customization2_attendee_contact-data_email_input');
        var attendeeEmail2 = $('.customization2_attendee_contact-data_email-confirmation_input');
        attendeeEmail2.val(attendeeEmail1.val());
        document.querySelector('.customization2_attendee_contact-data_email-confirmation_input').dispatchEvent(new Event('input', { bubbles: true }));
        //$('.customization2_attendee_contact-data_email-confirmation_input').focus();
        $('.customization2_attendee_edit-action_save').focus();
    };

    // Email Confirmation Booker
    function emailConfirmationBooker() {
        var box1 = $('.customization2_booker_contact-data_email_input');
        var box2 = $('.customization2_booker_contact-data_email-confirmation_input');
        box2.val(box1.val());
        document.querySelector('.customization2_booker_contact-data_email-confirmation_input').dispatchEvent(new Event('input', { bubbles: true }));
        //$('.customization2_booker_contact-data_email-confirmation_input').focus();
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


    // TODO: enable after bug fixed
    $('body').on('change', '.customization2_attendee_contact-data_email_input', emailConfirmationAttendee);
    $('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmationBooker);


    
    // TODO: enable after bug fixed
    //hideEmail();
    
    moveTerms();
    checkAndHideTerms();

    var insertionListener = function (event) {
        if (event.animationName === "nodeInserted") {

            console.log("event listener");
            // TODO: enable after bug fixed
            //hideEmail();
            
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
