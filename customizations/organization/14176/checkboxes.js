function addClassToField(shortName, className, wrapperClass) {
	$(`.${wrapperClass} .customization2_attendee_further-data .vv-nl-mb-lg`).each(function (i, element) {
		var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace('(optional)', '').trim();
		if (item !== '' && item.includes(shortName)) {
			console.log(item);
			$(this).closest('.vv-nl-mb-lg').addClass(className);
		}
	});
}


function enabledDisabledButton(name) {
	if (calcCheckboxes(name) < 5) {
		$('.' + name + ' .customization2_attendee_edit-action_save').attr('disabled', true);
		if ($('.' + name + ' .check-boxes-wrapper .button-error-message').length < 1) {
			$('.' + name + ' .check-boxes-wrapper .vv-checkbox-group__control').after('<span class="button-error-message error-text error-text--multiple">Bitte kreuzen Sie mindestens 5 an.</span>');
		}
	} else {
		$('.' + name + ' .customization2_attendee_edit-action_save').attr('disabled', false);
		$('.' + name + ' .button-error-message').remove();
	}
}

function calcCheckboxes(name) {
	var checked = 0;
	$('.' + name + ' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group vv-checkbox label').each(function () {
		if ($(this).find('.vv-checkbox__input').is(':checked')) {
			checked = checked + 1;
		}
	});
	return checked;
}

function markAsChecked(name) {
	$('.' + name + ' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group .vv-checkbox').each(function () {
		$(this).trigger('click');
	});
	// scroll page back to top
	$('.customization2_attendee_contact-data_first-name label').trigger('click');
}

function clickedEdit(name) {
	addClassToField('Mit dem Freiticket stimmst Du der Kontaktdaten-Weitergabe', 'check-boxes-wrapper', name);
	addClassToField('Mit dem VIP-Ticket stimmst Du der Kontaktdaten-Weitergabe', 'check-boxes-wrapper', name);

	addClassToField('Mit dem Freiticket stimmst Du der Datenweitergabe', 'check-boxes-wrapper', name);
	addClassToField('Mit dem ermäßigten VIP-Ticket stimmst Du der Datenweitergabe', 'check-boxes-wrapper', 'check-boxes-wrapper', name);

	//addClassToField('Mit dem Freiticket stimmst Du der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem Freiticket stimmst Du widerruflich der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem Ticket stimmst', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem Freiticket stimmst Du jederzeit ', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem VIP-Ticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);
	//addTextUnderQuestion('Hiermit stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);

	enabledDisabledButton(name);
	console.log(name)
	$('.' + name + ' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group').on('change', function () {
		console.log('change')
		enabledDisabledButton(name);
	});
}

function addTextUnderQuestion(shortName, className, wrapperClass) {
	$('.' + wrapperClass + ' .customization2_attendee_further-data .vv-nl-mb-lg').each(function (i, element) {
		var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");

		if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1) {
			$(this).find('.customization2_attendee_further-data_custom-question_label').css('font-size', '12px');
			$(this).after('<div class="addedtext" style="font-size: 12px; color: #343a3f; margin-top: 20px;margin-bottom: 30px;"><p>Die ausgewählten Partner erhalten meine Adress- und Kontaktdaten für die Bewerbung ihrer Produkte auch per E-Mail und Telefon sowie Daten zum Nachweis dieser Einwilligung, die diese in eigener Verantwortung verarbeiten. Du hast das Recht, diese Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen. Nutze dafür folgende Kontaktmöglichkeit <a href="mailto:eventservice@vogel.de" target="_blank">eventservice@vogel.de</a>. Sitzt einer der Partner außerhalb der EU, so weisen wir darauf hin, dass dort ggfs. ein niedrigeres Datenschutzniveau als in der EU besteht. Weitere Informationen zum Umgang mit personenbezogenen Daten siehe <a href="https://www.vogelitakademie.de/datenschutz" target="_blank">Datenschutzerklärung</a>.</p></div>');
		}
	});
}

function addTextUnderQuestionVIP(shortName, className, wrapperClass) {
	$('.' + wrapperClass + ' .customization2_attendee_further-data .vv-nl-mb-lg').each(function (i, element) {
		var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");

		if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1) {
			$(this).find('.customization2_attendee_further-data_custom-question_label').css('font-size', '12px');
			$(this).after('<div class="addedtext" style="font-size: 12px; color: #343a3f; margin-top: 20px;margin-bottom: 30px;"><p>Die ausgewählten Partner erhalten meine Adress- und Kontaktdaten für die Bewerbung ihrer Produkte auch per E-Mail und Telefon sowie Daten zum Nachweis dieser Einwilligung, die diese in eigener Verantwortung verarbeiten. Du hast das Recht, diese Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen. Nutze dafür folgende Kontaktmöglichkeit <a href="eventservice@vogel.de" target="_blank">eventservice@vogel.de</a>. Sitzt einer der Partner außerhalb der EU, so weisen wir darauf hin, dass dort ggfs. ein niedrigeres Datenschutzniveau als in der EU besteht. Weitere Informationen zum Umgang mit personenbezogenen Daten siehe <a href="https://www.vogelitakademie.de/datenschutz" target="_blank">Datenschutzerklärung</a>.</p></div>');
		}
	});
}


function init(name) {
	addClassToField('Mit dem Freiticket stimmst Du der Kontaktdaten-Weitergabe', 'check-boxes-wrapper', name);
	addClassToField('Mit dem VIP-Ticket stimmst Du der Kontaktdaten-Weitergabe', 'check-boxes-wrapper', name);
	addClassToField('Mit dem Freiticket stimmst Du der Datenweitergabe', 'check-boxes-wrapper', name);
	addClassToField('Mit dem ermäßigten VIP-Ticket stimmst Du der Datenweitergabe', 'check-boxes-wrapper', name);

	addTextUnderQuestion('Mit dem VIP-Ticket stimmst Du der Kontaktdaten-Weitergabe', 'check-boxes-wrapper', name);
	addTextUnderQuestion('Mit dem Ticket stimmst Du der Kontaktdaten-Weitergabe', 'check-boxes-wrapper', name);
	addTextUnderQuestion('Mit dem ermäßigten VIP-Ticket stimmst Du der Datenweitergabe', 'check-boxes-wrapper', name);
	addTextUnderQuestion('Mit dem Ticket stimmst Du der Datenweitergabe', 'check-boxes-wrapper', name);
	addTextUnderQuestionVIP('Mit dem ermäßigten VIP-Ticket stimmen Sie', 'check-boxes-wrapper', name);

	//addClassToField('Mit dem Freiticket stimmst Du der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem Freiticket stimmst Du widerruflich der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem Ticket stimmst', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem Freiticket stimmst Du jederzeit ', 'check-boxes-wrapper', name);
	//addClassToField('Mit dem VIP-Ticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);

	//addTextUnderQuestion('Mit dem Freiticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);
	//addTextUnderQuestion('Mit dem Ticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);
	//addTextUnderQuestion('Hiermit stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);


	markAsChecked(name);
	$('.' + name + ' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group').on('change', function () {
		enabledDisabledButton(name);
	});
}
init('customization2_attendee-1');


var insertionListener = function (event) {
	if (event.animationName === "nodeInserted") {
		var classNames = event.target.classList;

		for (var i = 0; i < classNames.length; i++) {
			var className = classNames[i];
			console.log(className)

			if (className.indexOf('customization2_attendee-') > -1) {
				clickedEdit(className);
				return false;
			}
		}

	}
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
