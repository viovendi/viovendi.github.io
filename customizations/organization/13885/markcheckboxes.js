function markAsChecked(name) {
	//search all further questions
	$('.customization2_attendee_further-data_custom-question').each(function (i, element) {

			//.customization2_attendee .customization2_attendee_further-data .vv-nl-mb-lg
			// check all labels and check if it contains "Hiermit erkläre ich mich"
			var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
			if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Hiermit erkläre ich mich') > -1) {
				console.log("Bedingung eingetreten" + item);

				//get parent element and move to vv-checkbox to click it
				var parentElement = $(this).parent();
				console.log(parentElement);
				/*
				$(parentElement + " > div > div > vv-checkbox").trigger('click');
				console.log("clicked");
				*/
			}
		});
	}

function hideAndMoveCheckbox() {
	// $('.customization2_booking-terms_checkbox.vv-checkbox__indicator').css("display", "none");
	$('.customization2_booking-terms_text').css("position", "relative");
	$('.customization2_booking-terms_text').css("left", "24px");
	console.log('hided')
}
// markAsChecked('customization2_attendee');
// hideAndMoveCheckbox();

if ($('.customization2_booking-terms').length > 0 ){
	$('.customization2_booking-terms .customization2_booking-terms_checkbox').trigger('click');
	$('.customization2_booking-terms').hide();
}
