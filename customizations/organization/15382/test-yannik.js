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
    //console.log("Checkbox removed");
    //$("vv-checkbox[name='isTermsAccepted'] .vv-checkbox .vv-checkbox__label.vv-checkbox__label--center.vv-checkbox__label--md .vv-checkbox__indicator").attr('style', 'display: none');
};

$(document).ready(function () {

    $('body').on('change', '.customization2_booker_contact-data_email_input', emailConfirmation);

    //$('body').on('click', 'button.customization2_booker_view-action_edit', hideEmail);

    hideEmail();
    replaceDOI();

    var insertionListener = function (event) {
        if (event.animationName === "nodeInserted") {

            console.log("event listener");
            hideEmail();
            replaceDOI();
        }
    };

    document.addEventListener("animationstart", insertionListener, false); // standard + firefox
    document.addEventListener("MSAnimationStart", insertionListener, false); // IE
    document.addEventListener("webkitAnimationStart", insertionListener, false); //

});
