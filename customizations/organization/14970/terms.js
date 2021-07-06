console.log('git 14970');

$('h4.vv-heading.vv-heading--4.vv-text-align--left.vv-color--text').text('Zahlungs-Informationen');


$('p.vv-text.vv-text__size--md.vv-text__weight--regular.vv-color--text').first().text("Ihre Ticket-Buchung haben wir verbindlich in unserem System gespeichert. Die Bezahlung der Tickets wird jedoch erst rund 4 Wochen vor dem Messestart fällig. Dann erhalten Sie von uns ganz unkompliziert eine E-Mail mit dem Link zur Bezahlung Ihrer gebuchten Tickets sowie weiteren Informationen.");
$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-payment-step > div > div.vv-ph-lg.vv-pb-md > form > div.col-md-7 > vv-booking-approval-notice > div > vv-text > p").hide();

$('.vv-pl-lg.customization2_booking-terms_list').after('<div class="addedterms" style="font-size: 14px;"><p>Die im Zeitraum der Veranstaltung gültigen Hygienevorschriften sind einzuhalten.</p></div>');
$('.addedterms').css('margin-left','22px')
