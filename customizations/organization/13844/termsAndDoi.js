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

    //var doi = $("vv-advanced-questions .customization2_opt-out-and-opt-in").clone();
    //var termsLabel = $(".customization2_booking-terms .vv-mb-xxs").clone();
    //var termsLink = $(".customization2_booking-terms .vv-pl-lg").clone();


    function moveTerms() {

        // Click Terms checkbox
        console.log("checkbox clicked");
        $('.customization2_booking-terms_checkbox').click()

        // Remove Terms in Terms sections
        $('.customization2_booking-terms').css({
            "display": "none",
        });

        // Add Terms after Booker data
        $(".customization2_booker_contact-data").after("<p>Die <a href='https://sz-erleben.sueddeutsche.de/agb'>AGBs</a> und <a href='https://www.swmh-datenschutz.de/sz-erleben'>Datenschutzerklärung</a> habe ich zur Kenntnis genommen.</p>");

        $('.customization2_booker_contact-data ~ p').css({
            "padding-top": "20px",
            "font-size": "14px",
        });
        
        $('.customization2_booker_contact-data ~ p a').css({
            "color": "#3b9f9a",
        });
        
        // Style DOI 
        $('.vv-checkbox__label--center').css({
            "align-items": "start",
        });

        $('.vv-checkbox__indicator').css({
            "margin-top": "4px",
        });

    };



    $('body').on('change', '.customization2_attendee_contact-data_email_input', emailConfirmationAttendee);
    $('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmationBooker);


    hideEmail();
    moveTerms();

    var insertionListener = function (event) {
        if (event.animationName === "nodeInserted") {

            console.log("event listener");
            hideEmail();
            moveTerms();
        }
    };

    document.addEventListener("animationstart", insertionListener, false); // standard + firefox
    document.addEventListener("MSAnimationStart", insertionListener, false); // IE
    document.addEventListener("webkitAnimationStart", insertionListener, false); //

});
