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
    $('.customization2_booker_contact-data_email-confirmation').css({"opacity":"0"});
};

$('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmation);

$('body').on('load', 'button.customization2_booker_view-action_edit', hideEmail);
console.log("hideEmail");

// Hide Email Confirmation
//hideEmail();
                                                                 
var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        //Insert your code here
        console.log("event listener");
        //hideEmail()
    }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
