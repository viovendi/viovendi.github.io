console.log("hide tickets");
const observerThisPage = new MutationObserver((mutations, obs) => {
    const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');

    if ($(page1).is(':visible')) {
        console.log('on page 1')
        logCat();
        obs.disconnect();
        return;
    }
});
const observerOtherPage = new MutationObserver((mutations, obs) => {
    const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');

    if (!$(page1).is(':visible')) {
        console.log('not on page 1')
        observerThisPage.observe(document, {
            childList: true,
            subtree: true
        });
        obs.disconnect();
        return;
    }
});
observerOtherPage.observe(document, {
    childList: true,
    subtree: true
});

function logCat(){
    $('.event-category').each(function() {
        console.log('i');
        console.log($( this ).find('.event-category__name')[0].text())
      });
}
