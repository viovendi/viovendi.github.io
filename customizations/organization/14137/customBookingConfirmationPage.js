//What runs on every new attendee form
function handler() {
    console.log("Change Checkout Page");
    var privacyNotice = $$('.customization2_attendee_further-data_custom-question').findField('Privacy Notice');

    $('.ew-confirmation__notice').append('<p> <strong>Ihre Buchungsbestätigung für die eBay Open 2022</strong> <br> <br> Willkommen an Bord! Hiermit bestätigen wir Ihre Buchung. <br> Schön, dass Sie dabei sind und gemeinsam mit uns zwei unvergessliche Tage auf der eBay Open Deutschland 2022 verbringen. <br> <br> <strong> Datum:</strong> 7. + 8. September 2022 <br> <strong>Ort:</strong> Motorwerk, An d. Industriebahn 12, 13088 Berlin <br> <br> Bleiben Sie auf dem neuesten Stand! <br> Auf unserer Website finden Sie alle wichtigen Informationen zu Themen wie Agenda, Workshops & Sponsoren. Schauen Sie gerne vorbei. Freuen Sie sich auf das Händler*innen-Event des Jahres. <br> <br> <a href="">Zur Event Website</a> <br> <br> Wir freuen uns auf Sie bei der eBay Open 2022! </p>');

    $('.customization-confirmation-description').hide();
    $('.notice__booking-id').hide();
    $('.ew-confirmation__link').hide();
    $('.ew-confirmation__text-paragraph').hide();

    $('.ew-confirmation__header svg').css("fill", "#86b817")
}

handler();
//Insert here, what should run once
//
var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        handler();
    }
}
document.addEventListener("animationstart", insertionListener, false);
// standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
