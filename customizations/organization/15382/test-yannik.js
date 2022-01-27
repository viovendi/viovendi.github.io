console.log("removeCheckbox ");
$('#isTermsAccepted').click();

$(document).ready(function () {
    function emailConfirmation() {
        var box1 = $('.customization2_attendee_contact-data_email_input');
        var box2 = $('.customization2_attendee_contact-data_email-confirmation_input');
        box2.val(box1.val());
    }
    $('.customization2_attendee_contact-data_email_input').on('keyup', emailConfirmation);
    $('.customization2_attendee_contact-data_email-confirmation_input').focus();
});
