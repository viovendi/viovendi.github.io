console.log('git changeCheckout.js loaded');
const observer = new MutationObserver((mutations, obs) => {
    const page4 = document.getElementsByClassName('customization-booking-area-wrapper-page4');

    if ($(page4).is(':visible')) {
        console.log("page 4 visible");
        if ($('.customization-confirmation-description').text().includes("Vielen Dank"))
            $('.customization-confirmation-description').text('Vielen Dank für Ihre unverbindliche Vormerkung zum Event! Gerne senden wir Ihnen Neuigkeiten zu der Veranstaltung direkt in Ihr Postfach und informieren Sie, wenn das Programm veröffentlicht wurde oder die Anmeldung freigeschaltet ist.');
        if ($('.customization-confirmation-description').text().includes("Thank you"))
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
        startCustomizationPage2();
        obs.disconnect();
        return;
    }
});

observer2.observe(document, {
    childList: true,
    subtree: true
});

function startCustomizationPage2(){
    if ($('.customization-button-next').text().includes("Jetzt buchen"))
    $('.customization-button-next').text('Jetzt vormerken');
if ($('.customization-button-next').text().includes("Book now"))
    $('.customization-button-next').text('Register now');

    const observerThisPage = new MutationObserver((mutations, obs) => {
        const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');
    
        if ($(page2).is(':visible')) {
            startCustomizationPage2();
            obs.disconnect();
            return;
        }
    });
    const observerOtherPage = new MutationObserver((mutations, obs) => {
        const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');
    
        if (!$(page2).is(':visible')) {
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
}




