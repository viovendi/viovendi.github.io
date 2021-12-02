const observer = new MutationObserver((mutations, obs) => {
    const page4 = document.getElementsByClassName('customization-booking-area-wrapper-page4');

    if ($(page4).is(':visible')) {
        console.log("page 4 visible");
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});
