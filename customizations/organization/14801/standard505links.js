console.log("Standard-505");
var textLiveHomag = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-2').find('.customization2_attendee_further-data_custom-question_label').text();
var newtext = textLiveHomag.replace("Datenschutz-, bzw. Einwilligungserklärung", "<a target='_blank' href='https://www.destatis.de/DE/Ueber-uns/Kolloquien-Tagungen/Kolloquien/2021/datenschutz-tn.html'>Datenschutz-, bzw. Einwilligungserklärung</a>");
$('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-2').find('.customization2_attendee_further-data_custom-question_label').empty().html(newtext);
