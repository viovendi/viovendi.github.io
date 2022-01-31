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
        $('.customization2_booker_contact-data_email-confirmation').css({
            "opacity": "0",
            "height": "0px"
        });
    };

    var doi = $("vv-advanced-questions .customization2_opt-out-and-opt-in").clone();
    var termsLabel = $(".customization2_booking-terms .vv-mb-xxs").clone();
    var termsLink = $(".customization2_booking-terms .vv-pl-lg").clone();
    var rechtlicherHinweis = $("<p></p>").text("Rechtlicher Hinweis");
    var newsletterLabel = $("<p></p>").text("Newsletter");

    function moveTerms() {

        // Click Terms checkbox
        console.log("checkbox clicked");
        $('.customization2_booking-terms_checkbox').click()

        // Add Terms after Booker data
        $(rechtlicherHinweis).appendTo(".customization2_booker_contact-data");
        $(termsLabel).appendTo(".customization2_booker_contact-data");
        $(termsLink).appendTo(".customization2_booker_contact-data");
        
        $('.customization2_booker_contact-data > p').css({
            "padding-bottom": "16px",
            "padding-top": "20px",
        });

        // Remove Terms in Terms sections
        $('.customization2_booking-terms').css({
            "display": "none",
        });

        // Remove Terms checkbox
        console.log("Checkbox removed");
        $("vv-checkbox[name='isTermsAccepted'] .vv-checkbox .vv-checkbox__label.vv-checkbox__label--center.vv-checkbox__label--md .vv-checkbox__indicator").attr('style', 'display: none');
        
        // Add Heading to DOI
        $(newsletterLabel).prependTo("vv-advanced-questions .customization2_opt-out-and-opt-in");
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
    
    $('button.customization2_booker_edit-action_save').on('click', saveToBook);
    
    moveBookingButtons();
    hideEmail();
    moveTerms();

    var insertionListener = function (event) {
        if (event.animationName === "nodeInserted") {

            console.log("event listener");
            hideEmail();
            moveTerms();
            $('button.customization2_booker_edit-action_save').on('click', saveToBook);
            moveBookingButtons();
        }
    };

    document.addEventListener("animationstart", insertionListener, false); // standard + firefox
    document.addEventListener("MSAnimationStart", insertionListener, false); // IE
    document.addEventListener("webkitAnimationStart", insertionListener, false); //

});
