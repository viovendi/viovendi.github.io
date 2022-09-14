console.log("hide tickets");
const url = window.location.href;

const observerThisPage = new MutationObserver((mutations, obs) => {
    const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');

    if ($(page1).is(':visible')) {
        console.log('on page 1')
        logCat();
        observerOtherPage.observe(document, {
            childList: true,
            subtree: true
        });
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
    if(
    url.includes("booking-14127-33594") ||
    url.includes("booking-14127-33595") ||
    url.includes("booking-14127-34918") ||
    url.includes("booking-14127-33925") ||
    url.includes("booking-14127-33926")
    ){
        $('.event-category').each(function() {
            var ticketName = $( this ).find('.event-category__name').first().text().trim();
            if(ticketName=="Tagesticket kostenlos vor Ort (mit Legitimierung)"||
                    ticketName=="Dauerticket kostenlos vor Ort (mit Legitimierung)"){
                        console.log("hiding a ticket");
                $(this).hide();
            }
          });
    }
}
