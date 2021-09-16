function markAsChecked(name) {
	//search all further questions
	$('.customization2_attendee_further-data_custom-question').each(function (i, element) {

		//.customization2_attendee .customization2_attendee_further-data .vv-nl-mb-lg
		// check all labels and check if it contains "Einwilligungserklärung"
		var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
		console.log(item);
		if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Hiermit erkläre ich mich') > -1) {
			console.log("Bedingung eingetreten" + item)
			$('.' + name + ' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group .vv-checkbox').each(function () {
				console.log(this)
				if (!$(this).hasClass('checked-manually')) {
					$(this).trigger('click');
					$(this).addClass('checked-manually');
					console.log('clicked');
				}
			});
		}
	})
}

function hideAndMoveCheckbox() {
	$('.customization2_booking-terms_checkbox.vv-checkbox__indicator').css("display", "none");
	$('.customization2_booking-terms_text').css("position", "relative");
	$('.customization2_booking-terms_text').css("left", "24px");
	console.log('hided')
}
markAsChecked('customization2_attendee');
hideAndMoveCheckbox();
