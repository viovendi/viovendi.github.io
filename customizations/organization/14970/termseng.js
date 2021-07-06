console.log('git 14970 ENG');

$('h4.vv-heading.vv-heading--4.vv-text-align--left.vv-color--text').text('Paying-informationen');


$('p.vv-text.vv-text__size--md.vv-text__weight--regular.vv-color--text').first().text("We have saved your binding ticket booking in our system. However, payment for the tickets is not due until around 4 weeks before the start of the fair. You will then receive a straightforward e-mail from us with the link to pay for your booked tickets and further information.");
$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div:nth-child(4) > div > vv-payment-step > div > div.vv-ph-lg.vv-pb-md > form > div.col-md-7 > vv-booking-approval-notice > div > vv-text > p").hide();

$('.vv-pl-lg.customization2_booking-terms_list').after('<div class="addedterms" style="font-size: 14px;"><p>The hygiene regulations valid during the event must be observed.</p></div>');
$('.addedterms').css('margin-left','22px')
