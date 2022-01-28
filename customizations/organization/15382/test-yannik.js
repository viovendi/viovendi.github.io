// Email Confirmation 
function copyEmail() {
    var box1 = $('.customization2_booker_contact-data_email_input');
    var box2 = $('.customization2_booker_contact-data_email-confirmation_input');
    box2.val(box1.val());
};

function emailConfirmation() {
    copyEmail();
    $('.customization2_booker_contact-data_email-confirmation_input').focus();
};

var doi = $("vv-advanced-questions .customization2_opt-out-and-opt-in").clone();
var termsLabel = $(".customization2_booking-terms .vv-mb-xxs").clone();
var termsLink = $(".customization2_booking-terms .vv-pl-lg").clone();

function replaceDOI() {
    // Rearrange DOI & Terms
    console.log("DOI moved");
    $('.customization2_booking-terms').empty();
    $(doi).appendTo(".customization2_booking-terms");

    console.log("Terms moved");
    $("vv-advanced-questions .customization2_opt-out-and-opt-in").remove();
    $(termsLabel).appendTo(".customization2_booker_contact-data");
    $(termsLink).appendTo(".customization2_booker_contact-data");

    // click Terms checkbox
    console.log("checkbox clicked");
    $('#isTermsAccepted').click();

    // Remove Terms checkbox
    console.log("Checkbox removed");
    $("vv-checkbox[name='isTermsAccepted']").attr('style', 'padding-top: 30px');
    $("vv-checkbox[name='isTermsAccepted'] .vv-checkbox .vv-checkbox__label.vv-checkbox__label--center.vv-checkbox__label--md .vv-checkbox__indicator").attr('style', 'display: none');
};


$('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmation);

// Hide Email Confirmation
$('.customization2_booker_contact-data_email-confirmation').css({"visibility":"hidden"});

replaceDOI();
                                                                 
var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        //Insert your code here
        console.log("event listener");
        replaceDOI();
    }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
