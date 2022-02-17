console.log('Start working, Google Tag Manager, Custom Tag 14426 Link');


if(window.location.href.indexOf('88669') !== -1){
  const href = window.location.href;
    // Script works only for EID 88669
  if(href.indexOf('de-de') !== -1){
    // const radioLineLabel1 = $('.customization2_attendee_further-data_custom-question-1 .customization2_attendee_further-data_custom-question_radio-line_label p');
   const radio1 = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Datenschutzhinweis');
   const radioLineLabel1 = $(radio1).find('p.vv-radio__label-text');

  radioLineLabel1.html(`
    <span>Ich bin mit den Bedingungen unter folgendem Link einverstanden </span>
    <a target='_blank' href='https://www.jagd-und-hund.de/en/beretta/'>www.westfalenhallen.de/datenschutzhinweis-beretta.</a>
    `);

    const radio2 = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Datenweitergabe');
    const radioLineLabel2 = $(radio2).find('p.vv-radio__label-text');

    radioLineLabel2.html(`
      <span>Mit Ihrer Einwilligung erlauben Sie der Westfalenhallen Unternehmensgruppe GmbH, Ihre persönlichen Daten (z.B. Name, Vorname, E-Mail) an die Fabbrica D'Armi Pietro Beretta S.p.A. zu übermitteln, um Ihnen Werbe- oder Direktverkaufsmaterial zuzusenden, Marktforschung zu betreiben oder kommerzielle Kommunikation per E-Mail zu betreiben (Third Party Marketing). Bitte nutzen Sie den Link für weitere Informationen: </span>
      <a target='_blank' href='https://www.westfalenhallen.de/datenschutzhinweis-beretta'>www.westfalenhallen.de/datenschutzhinweis-beretta</a>
      `);
  }
  if(href.indexOf('en-us') !== -1){
    const radioLineLabel = $('.customization2_attendee_further-data_custom-question-1 .customization2_attendee_further-data_custom-question_radio-line_label p');
  radioLineLabel.html(`
    <span>I agree to the terms and conditions at the following link </span>
    <a target='_blank' href='https://www.westfalenhallen.de/dataprotectionnotice-beretta'>www.westfalenhallen.de/dataprotectionnotice-beretta.</a>
    `);

    const radioLineLabel2 = $('.customization2_attendee_further-data_custom-question-2 .customization2_attendee_further-data_custom-question_radio-line_label p');

    radioLineLabel2.html(`
      <span>By giving your consent, you allow Westfalenhallen Unternehmensgruppe GmbH to communicate your personal data (i.e. name, surname, email) to Fabbrica D’Armi Pietro Beretta S.p.A. for sending you advertising or direct sales material, for carrying out market research or commercial communication via email (Third party Marketing). please click the following link for more info: </span>
      <a target='_blank' href='https://www.westfalenhallen.de/dataprotectionnotice-beretta'>https://www.westfalenhallen.de/dataprotectionnotice-beretta</a>
      `);
  }
}


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



