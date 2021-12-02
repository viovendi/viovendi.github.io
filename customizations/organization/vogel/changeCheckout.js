const observer = new MutationObserver((mutations, obs) => {
    const page4 = document.getElementsByClassName('customization-booking-area-wrapper-page4');

    if ($(page4).is(':visible')) {
        console.log("page 4 visible");
        $('.customization-confirmation-description').text('Vielen Dank für Ihre unverbindliche Vormerkung zum Event! Gerne senden wir Ihnen Neuigkeiten zu der Veranstaltung direkt in Ihr Postfach und informieren Sie, wenn das Programm veröffentlicht wurde oder die Anmeldung freigeschaltet ist.');
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});
