// Ü, ü     \u00dc, \u00fc
// Ä, ä     \u00c4, \u00e4
// Ö, ö     \u00d6, \u00f6
// ß        \u00df
console.log("GTM Git loaded");

// replace placeholder on first page:
var placeholder = $("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(1) > vv-input > label > div > input")
placeholder.attr("placeholder", "S\u00f6k efter nyckelord");
//
function translateDates() {
	$("table > thead > tr > th:nth-child(1) > span").text('Sö');
	$("table > thead > tr > th:nth-child(2) > span").text('Må');
	$("table > thead > tr > th:nth-child(3) > span").text('Ti');
	$("table > thead > tr > th:nth-child(4) > span").text('On');
	$("table > thead > tr > th:nth-child(5) > span").text('To');
	$("table > thead > tr > th:nth-child(6) > span").text('Fr');
	$("table > thead > tr > th:nth-child(7) > span").text('Lö');
	//div.p-datepicker-calendar-container.ng-tns-c47-0.ng-star-inserted >
	//$("div.p-datepicker-calendar-container.ng-tns-c47-1.ng-star-inserted > table > thead > tr > th:nth-child(2) > span")

	var month = $(".p-datepicker-month").text();
	var enMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	var swMonths = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']

	//get index of english month
	var indexEN = enMonths.indexOf(month);

	//replace english month by swedish month by using the same index
	$(".p-datepicker-month").text(swMonths[indexEN]);

}

//back (on top)
//$('.button-back').text()

//Dropdown
$("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__value-container > vv-selection-input > div > div > p").text('Välj varuhus');
//Dropdown opened
$('.vv-selection-input__control').click(function () {
	setTimeout(function () {
		$("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__dropdown-container.vv-selection__dropdown-container--bottom > vv-single-select-dropdown > div > vv-single-select-option:nth-child(1) > div").text('Välj varuhus');
	}, 50);
})

$('.vv-input__control-container').click(function () {
	translateDates();
});
$('.p-datepicker-next').click(function () {
	translateDates();
});
$('.p-datepicker-prev').click(function () {
	translateDates();
});


	setInterval(function () {


			$('.p-datepicker-next').click(function () {});


			//replace available
			// var ava = $("#event-list-widget > vv-events-search > vv-list-view > section > ul > li > vv-list-view-standard-item > article > div > div.col-12.event-article__event-info > div.event-article__footer > div > div.event-article__ticket-info.col-sm-7.col-md-8.green > span").text();
			// var replace = ava.replace("available", "tillg\u00e4ngliga platser");
			// $("#event-list-widget > vv-events-search > vv-list-view > section > ul > li > vv-list-view-standard-item > article > div > div.col-12.event-article__event-info > div.event-article__footer > div > div.event-article__ticket-info.col-sm-7.col-md-8.green > span").text(replace);

			//page 1
			//contact person
			$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(3) > span:nth-child(1)").text('Kontaktperson: ');
			//Phone Number
			$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(4) > span:nth-child(1)").text('Telefon: ');
			//Email
			$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(5) > span:nth-child(1)").text('E-postadress: ');


			$('.event-info__details').hide();
			$('.customization-event-info-address-label').hide();
			$('.customization-event-info-contact').hide();



			//Start Date
			$('.ng-tns-c47-0').attr("placeholder", "Startdatum");

			//End Date
			$('.ng-tns-c47-1').attr("placeholder", "Slutdatum");

			//Organizer contact
			$('.customization-event-info-contact-label').text('Kontakta arrangör');





			$('.event-category__error').text('has ended');

			//Next
			$('.customization-button-next').text('Nästa');


			//Encrypted connection
			$('.customization-encrypted-connection').text('Krypterad anslutning');

			//		Selection
			//$('.progress-point__label').text('');



			$('.ew-header__progress-container .progress-meter .selection span').text('Urval');
			$('.ew-header__progress-container .progress-meter .information span').text('Deltagarinformation');
			$('.ew-header__progress-container .progress-meter .confirmation span').text('Bekräftelse');


			//Please select a ticket category
			$('.ew-selection__error').text('Välj antal biljetter du vill boka');


			//ATTENDEE DETAILS
			$('.customization2_attendees_title').text('Deltagarinformation');


			//CONTACT
			$('.customization2_attendee_contact-data_headline').text('Kontaktuppgifter');

			//FIRST NAME
			$('.customization2_attendee_contact-data_first-name_label').text('Förnamn (valfritt)');

			//LAST NAME
			$('.customization2_attendee_contact-data_last-name_label').text('Efternamn (valfritt)');

			//Accept
			$('.customization2_attendee_edit-action_save').text('Jag har fyllt i mina uppgifter');

			//Cancel
			var canceltext = $(".customization2_attendee_edit-action_cancel .vv-button-text-blue").text();
			var replacecancel = canceltext.replace("Cancel", "X Avbryt");
			$(".customization2_attendee_edit-action_cancel .vv-button-text-blue").text(replacecancel);
			//   if(!typeof canceltext === "undefined"){}

			// BOOKING DETAILS
			$('.customization2_booker_title').text('BOKNINGSINFORMATION');


			//SUMMARY
			$('.customization2_summary_headline').text('SAMMANFATTNING');

			//Contact Person
			$('.customization2_booker_contact-data_headline').text('Kontaktperson');


			//Contact details
			$('.customization2_booker_contact-data_headline').text('Kontaktperson: ');

			//Dropdown
			$(".customization2_booker_contact-data_booker-attendee-relation_attendee-1").text('Samma uppgifter som “deltagare 1"');
			$(".customization2_booker_contact-data_booker-attendee-relation_different-attendee").text('Fyll i alternativa uppgifter');

			//First name
			$('.customization2_booker_contact-data_first-name_label').text('Förnamn');


			//First name Required
			$('.customization2_booker_contact-data_first-name_error').text('Obligatorisk');

			//Last name
			$('.customization2_booker_contact-data_last-name_label').text('Efternamn');

			//Last name Required
			$('.customization2_booker_contact-data_last-name_error').text('Obligatorisk');

			//Organisation
			$('.customization2_booker_contact-data_company_label').text('Organisation/Företag');

			//Organisation Required
			$('.customization2_booker_contact-data_company_error').text('Obligatorisk');


			//Email address
			$('.customization2_booker_contact-data_email_label').text('E-postadress (för bokningsbekräftelse och biljett)');

			// confirm email address
			$('.customization2_booker_contact-data_email-confirmation_label').text('Bekräfta e-postadress');


			//already registed
			$('.customization2_booker_contact-data_email_error').text('Du är redan inbokad på detta event');

			//Confirm email address
			$('.customization2_booker_contact-data_email-confirmation_label').text('Bekräfta e-postadress');

			//Please enter valid email address
			$('.customization2_booker_contact-data_email-confirmation_error').text('Vänligen fyll i giltig e-postadress');

			//Accept
			$('.customization2_booker_edit-action_save').text('Jag har fyllt i mina uppgifter');

			//Cancel
			var canceltext = $(".customization2_booker_edit-action_cancel .vv-button-text-blue").text();
			var replacecancel = canceltext.replace("Cancel", "X Avbryt"); $(".customization2_booker_edit-action_cancel .vv-button-text-blue").text(replacecancel);
			//   if(!typeof canceltext === "undefined"){}
			//Email addresses not matching
			$('.customization2_booker_contact-data_email-confirmation_error').text('E-postadresserna överensstämmer inte med varandra');

			//Change selection
			$('.customization-button-previous').text('<- Tillbaka till urval');

			//Back button (Back to Overview)
			$('.button-back').text('Tillbaka till översikt');


			//Book now
			$('.customization-button-next').text('Boka nu');


			$('.customization2_booking-terms_text').each(function () {
				var text = $(this).text('Jag har läst integritets- & personuppgiftspolicyn och godkänner att mina uppgifter registreras.');
				var editedtext = text.text();
				$(this).html(editedtext.replace('integritets- & personuppgiftspolicyn', '<a href="https://www.hornbach.se/service/integritets-och-personuppgiftspolicy/" target="_blank">integritets- & personuppgiftspolicyn</a>'));
			});



			$(".customization2_booking-terms_custom-term-1").hide();


			//page 3 Confirmation

			//Booking confirmation
			$('.customization-confirmation-label').text('Bokningsbekräftelse');

			//Thank you for your booking. You will shortly receive your confirmation by email.
			$('.customization-confirmation-description').text('Tack för din bokning! Inom kort skickar vi en bekräftelse med din eventbiljett till den e-postadress du uppgivit.');

			//Details and documents are available in the booking portal:
			$('.customization-client-portal-description').text('Information om eventet hittar du även i bokningsportalen:');

			//Your Booking Portal
			$('.customization-client-portal-link').text('Klicka här för att komma till din bokning i bokningsportalen.'); $('.customization-client-portal-link').css('color', '#F99D27');


	}, 3000);
		//99 available Replace the word
		//var available = $('.event-category__amount').text();
		//var res = available.replace("available", "tillgängliga platser");
		//$('.event-category__amount').text(res);


