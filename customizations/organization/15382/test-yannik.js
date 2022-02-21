$(document).ready(function () {

    // Email Confirmation 
    function copyEmail() {
        var box1 = $('.customization2_booker_contact-data_email_input');
        var box2 = $('.customization2_booker_contact-data_email-confirmation_input');
        box2.val(box1.val());
    };

    function emailConfirmation() {
        copyEmail();
        $('.customization2_booker_contact-data_email-confirmation_input').focus();
        $('.customization2_booker_edit-action_save').focus();
    };

    function hideEmail() {
        console.log("hideEmail");
        $('.customization2_booker_contact-data_email-confirmation *').css({
            "opacity": "0",
            "height": "0px"
        });
    };

    var doi = $("vv-advanced-questions .customization2_opt-out-and-opt-in").clone();
    var termsLabel = $(".customization2_booking-terms .vv-mb-xxs").clone();
    var termsLink = $(".customization2_booking-terms .vv-pl-lg").clone();
    var rechtlicherHinweis = $("<p></p>").text("Die AGBs und Datenschutzerklärung habe ich zur Kenntnis genommen.");
 
    function moveTerms() {

        // Click Terms checkbox
        console.log("checkbox clicked");
        $('.customization2_booking-terms_checkbox').click()

        // Add Terms after Booker data
        $( ".customization2_booker_contact-data" ).after( "<p>Die <a href='https://sz-erleben.sueddeutsche.de/agb'>AGBs</a> und <a href='https://www.swmh-datenschutz.de/sz-erleben'>Datenschutzerklärung</a> habe ich zur Kenntnis genommen.</p>" );
        
        $('.customization2_booker_contact-data > p').css({
            "padding-bottom": "10px",
            "padding-top": "20px",
            "font-size": "14px",
        });

        // Remove Terms in Terms sections
        $('.customization2_booking-terms').css({
            "display": "none",
        });
        
        // Style DOI 
        $('.vv-checkbox__label--center').css({
            "align-items": "start",
        });
        
        $('.vv-checkbox__indicator').css({
            "margin-top": "4px",
        });

       
        
    };
    
    function saveToBook() {        
        console.log("Speichern");
        $('.customization-button-next').focus();
        $('.customization-button-next').click();
    };
    
    function moveBookingButtons() {
        $('vv-button[customization="customization-button-previous"] + div').css({"opacity": "0"});
        $(".customization2_booker_edit-action_save").html("Jetzt buchen");
        
        $('div .customization-button-previous').prependTo("div.customization2_booker_edit-action");
        $("div.customization2_booker_edit-action").addClass("justify-content-between");
    };
    

    $('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmation);
    
    //$('button.customization2_booker_edit-action_save').on('click', saveToBook);
    
    //moveBookingButtons();
    hideEmail();
    moveTerms();

    var insertionListener = function (event) {
        if (event.animationName === "nodeInserted") {

            console.log("event listener");
            hideEmail();
            moveTerms();
            $('button.customization2_booker_edit-action_save').on('click', saveToBook);
            //moveBookingButtons();
        }
    };

    document.addEventListener("animationstart", insertionListener, false); // standard + firefox
    document.addEventListener("MSAnimationStart", insertionListener, false); // IE
    document.addEventListener("webkitAnimationStart", insertionListener, false); //

});
