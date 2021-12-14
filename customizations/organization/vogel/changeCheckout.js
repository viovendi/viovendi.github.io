const observer = new MutationObserver((mutations, obs) => {
    const page4 = document.getElementsByClassName('customization-booking-area-wrapper-page4');

    if ($(page4).is(':visible')) {
        console.log("page 4 visible");
        if($('.customization-confirmation-description').text().includes("Vielen Dank"))
        $('.customization-confirmation-description').text('Vielen Dank für Ihre unverbindliche Vormerkung zum Event! Gerne senden wir Ihnen Neuigkeiten zu der Veranstaltung direkt in Ihr Postfach und informieren Sie, wenn das Programm veröffentlicht wurde oder die Anmeldung freigeschaltet ist.');
        if($('.customization-confirmation-description').text().includes("Thank you"))
        $('.customization-confirmation-description').text('Thank you for your non-binding reservation for the event! We will be happy to send you news about the event directly to your mailbox and inform you when the programme has been published or registration is open.');
        
        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});

const observer2 = new MutationObserver((mutations, obs) => {
    const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');

    if ($(page2).is(':visible')) {
        console.log("page 2 visible");
        if($('.customization-button-next').text().includes("Jetzt Buchen"))
        $('.customization-button-next').text('Vielen Dank für Ihre unverbindliche Vormerkung zum Event! Gerne senden wir Ihnen Neuigkeiten zu der Veranstaltung direkt in Ihr Postfach und informieren Sie, wenn das Programm veröffentlicht wurde oder die Anmeldung freigeschaltet ist.');
        if($('.customization-button-next').text().includes("Order now"))
        $('.customization-button-next').text('Thank you for your non-binding reservation for the event! We will be happy to send you news about the event directly to your mailbox and inform you when the programme has been published or registration is open.');
        
        obs.disconnect();
        return;
    }
});

observer2.observe(document, {
    childList: true,
    subtree: true
});
