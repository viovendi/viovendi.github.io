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
    }

    $('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmation);

    // Hide Email Confirmation
    //$('.customization2_booker_contact-data_email-confirmation').attr('style', 'display: none');

    
    // Replace DOI & Terms
    $(".customization2_booking-terms .vv-mb-xxs").appendTo(".customization2_booker_contact-data");
    $(".customization2_booking-terms .vv-pl-lg").appendTo(".customization2_booker_contact-data");
    $("vv-advanced-questions .customization2_opt-out-and-opt-in").appendTo(".customization2_booking-terms");

    // click Terms checkbox
    console.log("checkbox clicked")
    $('#isTermsAccepted').click()

    // Remove Terms checkbox
    console.log("Checkbox removed")
    $("vv-checkbox[name='isTermsAccepted']").attr('style', 'padding-top: 30px');
    $("vv-checkbox[name='isTermsAccepted'] .vv-checkbox .vv-checkbox__label.vv-checkbox__label--center.vv-checkbox__label--md .vv-checkbox__indicator").attr('style', 'display: none');
});



