console.log('Start working, Google Tag Manager, Custom Tag 14426 Link');

let params = (new URL(window.location.href)).searchParams;
let eventId = params.get("eventId");
console.log(eventId)
/*
// CSS MISSING maybe because of empty()
    var text = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-1').find('.customization2_attendee_further-data_custom-question_radio-line_label').text();
    var newtext = text.replace("www.westfalenhallen.de/dataprotectionnotice-beretta", "<a target='_blank' href='https://www.westfalenhallen.de/dataprotectionnotice-beretta'>www.westfalenhallen.de/dataprotectionnotice-beretta</a>");
    $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-1').find('.customization2_attendee_further-data_custom-question_radio-line_label').empty().html(newtext);
*/



/* CODE FROM VOGEL
customization2_attendee_further-data_custom-question customization2_attendee_further-data_custom-question-1
var fieldDe = $$('.customization2_booker_further-data_custom-question_checkbox-line').findField('Ich bin mit der Verarbeitung')
      var fieldEn = $$('.customization2_booker_further-data_custom-question_checkbox-line').findField('I consent to the use and processing')
      if (!$('.' + name + ' .customization2_booker_further-data_custom-question_checkbox-line_label').hasClass('with-links') && $(fieldDe).html()) {
        var textString = $('.' + name + ' .customization2_booker_further-data_custom-question_checkbox-line_label').html();
        var textString1 = textString.replace("Einwilligungserklärung", "<a target='_blank' href='https://privacy.vogel.de/'>Einwilligungserklärung</a>");
        var res = textString1.replace("(privacy.vogel.de)", "<a target='_blank' href='https://privacy.vogel.de/'>(privacy.vogel.de)</a>");
        $('.' + name + ' .customization2_booker_further-data_custom-question_checkbox-line_label').html(res);
        $('.' + name + ' .customization2_booker_further-data_custom-question_checkbox-line_label').addClass('with-links');
      } else if($(fieldEn).html()){
        var resultString = $(fieldEn).find('.customization2_booker_further-data/*_custom-question_checkbox-line_label').html().replace("declaration of consent (privacy.vogel.de)", "<a target='_blank' href='https://privacy.vogel.de/index_en.html'>declaration of consent (privacy.vogel.de)</a>");
        $(fieldEn).find('.customization2_booker_further-data_custom-question_checkbox-line_label').html(resultString)
      }
*/



