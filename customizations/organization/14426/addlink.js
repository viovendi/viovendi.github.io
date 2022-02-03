console.log('git works');

    var textLiveHomag = $('.customization2_attendee_further-data_custom-question_radio-line.customization2_attendee_further-data_custom-question_radio-line-1').find('.customization2_attendee_further-data_custom-question_radio-line_label').text();
    var newtext = textLiveHomag.replace("www.westfalenhallen.de/dataprotectionnotice-beretta", "<a target='_blank' href='https://www.westfalenhallen.de/dataprotectionnotice-beretta'>www.westfalenhallen.de/dataprotectionnotice-beretta</a>");
    $('.customization2_attendee_further-data_custom-question_radio-line.customization2_attendee_further-data_custom-question_radio-line-1').find('.customization2_attendee_further-data_custom-question_radio-line_label').empty().html(newtext);


