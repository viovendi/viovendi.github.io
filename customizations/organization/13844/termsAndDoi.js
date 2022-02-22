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


        // Remove Terms in Terms sections
        $('.customization2_booking-terms').css({
            "display": "none",
        });

        // Add Terms after Booker data
        if(!$('#45408464531').length){
            
            if($(".customization2_booker_further-data").length){
                console.log("Adding terms after booker further data");
                $(".customization2_booker_further-data").after("<p id='45408464531'>Die <a style='color: #3b9f9a !important' href='https://sz-erleben.sueddeutsche.de/agb'>AGBs</a> und <a style='color: #3b9f9a !important' href='https://www.swmh-datenschutz.de/sz-erleben'>Datenschutzerklärung</a> habe ich zur Kenntnis genommen.</p>");
            
            } else if ($(".customization2_booker_contact-data").length){
                console.log("Adding terms after booker contact data");
                $(".customization2_booker_contact-data").after("<p id='45408464531' >Die <a style='color: #3b9f9a !important' href='https://sz-erleben.sueddeutsche.de/agb'>AGBs</a> und <a style='color: #3b9f9a !important' href='https://www.swmh-datenschutz.de/sz-erleben'>Datenschutzerklärung</a> habe ich zur Kenntnis genommen.</p>");
            
            } else if ($(".customization2_attendee_further-data").length){
                console.log("Adding terms after attendee further data");
                $(".customization2_attendee_further-data").after("<p id='45408464531' >Die <a style='color: #3b9f9a !important' href='https://sz-erleben.sueddeutsche.de/agb'>AGBs</a> und <a style='color: #3b9f9a !important' href='https://www.swmh-datenschutz.de/sz-erleben'>Datenschutzerklärung</a> habe ich zur Kenntnis genommen.</p>");
            
            } else if ($(".customization2_attendee_contact-data").length){
                console.log("Adding terms after attendee contact data");
                $(".customization2_attendee_contact-data").after("<p id='45408464531' >Die <a style='color: #3b9f9a !important' href='https://sz-erleben.sueddeutsche.de/agb'>AGBs</a> und <a style='color: #3b9f9a !important' href='https://www.swmh-datenschutz.de/sz-erleben'>Datenschutzerklärung</a> habe ich zur Kenntnis genommen.</p>");
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



    $('body').on('change', '.customization2_attendee_contact-data_email_input', emailConfirmationAttendee);
    $('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmationBooker);


    // Click Terms checkbox
    console.log("checkbox clicked");
    $('.customization2_booking-terms_checkbox').click()
    
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
