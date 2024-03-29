function disableProd(disable) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if (checkboxName.indexOf(disable) >= 0) {
            checkbox.prop("disabled", true)
        }
    });
}

function enableProd(disable) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if (checkboxName.indexOf(disable) >= 0) {
            checkbox.prop("disabled", false)
        }
    });
}

function prodCheked(shortName, disable) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if (checkbox.is(':checked')) {
            if (checkboxName.indexOf(shortName) >= 0) {
                disableProd(disable)
            }
        }
        checkbox.change(function () {
            if (checkbox.is(':checked')) {
                if (checkboxName.indexOf(shortName) >= 0) {
                    disableProd(disable)
                }
            } else if (!checkbox.is(':checked')) {
                if (checkboxName.indexOf(shortName) >= 0) {
                    enableProd(disable)
                }
            }
        })
    })
}



$('vv-additional-question-product').each(function (index, value) {
    const prodName = $(this).find('label p').text().trim();
    if (prodName.includes('Power Talk')) {
        //$(this).hide()
        $('.power_talk').append($(this))
    }

    if (prodName.includes('Investment Forum')) {
        //$(this).hide()
        $('.investment_forum').append($(this))
    }
});

// $('.power_talk h4').click(function (e) {
//     if ($('.power_talk').find('vv-additional-question-product:visible').length) {
//         $('.power_talk').find('vv-additional-question-product').hide();
//     } else {
//         $('.power_talk').find('vv-additional-question-product').show();
//     }

// })
// $('.investment_forum h4').click(function () {
//     if ($('.investment_forum').find('vv-additional-question-product:visible').length) {
//         $('.investment_forum').find('vv-additional-question-product').hide();
//     } else {
//         $('.investment_forum').find('vv-additional-question-product').show();
//     }

// })


var field1 = $$('.customization2_attendee_further-data_custom-question').findField('Ankunft Datum (optional)');
$(field1).hide();

var field2 = $$('.customization2_attendee_further-data_custom-question').findField('Ankunft Uhrzeit (optional)');
$(field2).hide();

var field3 = $$('.customization2_attendee_further-data_custom-question').findField('Ankunft mit Flug Nr. / Bahn Nr. (optional)');
$(field3).hide();

var field4 = $$('.customization2_attendee_further-data_custom-question').findField('Abfahrts-/Abflugsort (optional)');
$(field4).hide();


var field1En = $$('.customization2_attendee_further-data_custom-question').findField('Date of arrival (optional)');
$(field1En).hide();

var field2En = $$('.customization2_attendee_further-data_custom-question').findField('Time of arrival (optional)');
$(field2En).hide();

var field3En = $$('.customization2_attendee_further-data_custom-question').findField('Arrival flight number / train number (optional)');
$(field3En).hide();

var field4En = $$('.customization2_attendee_further-data_custom-question').findField('Arriving from (city / country) (optional)');
$(field4En).hide();


var checkboxGroup = $$('.customization2_attendee_further-data_custom-question').findCheckboxGroup('Shuttle');

$(checkboxGroup).find('input').change(function () {
    if ($(this).is(":checked")) {
        const option = $(this).parent('label').text().trim();
        if (option.includes('Ich benötige einen Shuttle-Service vom Flughafen zur Location')|| option.includes('I would like to use the shuttle-service from Frankfurt Airport to Event Location')) {
            if (locale === "de-de") {
                $(field1).show();
                $(field2).show();
                $(field3).show();
                $(field4).show();
                $(checkboxGroup).after(`<p class="service"  style="margin-top: 20px;">Wenn Sie einen Shuttle-Service vom Flughafen zur Location benötigen, geben Sie hier bitte Ihre Anreisedaten an.</p>`)
            }

            if (locale === "en-us") {
                $(field1En).show();
                $(field2En).show();
                $(field3En).show();
                $(field4En).show();
                $(checkboxGroup).after(`<p class="service" style="margin-top: 20px;">If you need a shuttle service from the airport to the location, please enter your arrival information here.</p>`)
            }
        }
    } else {
        $(field1).hide();
        $(field2).hide();
        $(field3).hide();
        $(field4).hide();
        $('.service').hide();;
    }
})




//EN
prodCheked("Power Talks (on-site)", "Power Talks (online)");
prodCheked("Power Talks (online)", "Power Talks (on-site)");
prodCheked("Investment Forum (on-site)", "Investment Forum (online)");
prodCheked("Investment Forum (online)", "Investment Forum (on-site)");
// DE
prodCheked("Power Talks (vor Ort)", "Power Talks (online)");
prodCheked("Power Talks (online)", "Power Talks (vor Ort)");
prodCheked("Investment Forum (vor Ort)", "Investment Forum (online)");
prodCheked("Investment Forum (online)", "Investment Forum (vor Ort)");