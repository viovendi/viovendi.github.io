console.log('Google Tag Manager: Hornbach List Widget PC-1194.');

console.log($('.event-categories li').length)
if ($('.event-categories li').length == 0) {
    $('.customization-booking-area-wrapper-page1 ').hide();
}
$('.event-categories li').each(function (index, element) {

    if ($(this).find('p').text().trim() !== "" && $(this).find('p').text().trim() == "Registration period has ended") {
        console.log($(this).find('p').text().trim())
        console.log("hide wrapper page1");
        $('.customization-booking-area-wrapper-page1 ').hide();
    }
});

$('.event-category__error').text("Keine Registrierung erforderlich");


document.querySelector("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(1) > div.m-box--small").style.marginTop = "20px";


// hide the details by name
function hideEventInfo(name) {
    $('.event-info__details > .row').each(function (i, element) {
        if ($(this).find('.event-info__details__col-name').text().indexOf(name) >= 0) {
            $(this).addClass('hidden');
        }
    });
}


function stop_checking_page() {
    cancelAnimationFrame(id_page);
}


function checking_page() {
    console.log('checking_page');
    id_page = requestAnimationFrame(checking_page);
    if ($('.event-info__details').length > 0) {

        console.log('element found!');

        hideEventInfo('Marktkunden');
        hideEventInfo('Zielgruppe');

        stop_checking_page();
    }
}
checking_page();
