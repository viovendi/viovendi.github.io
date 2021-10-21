console.log("Standard-505");
//erste Frage momentan für alle
var textLiveHomag0 = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-2').find('.customization2_attendee_further-data_custom-question_label').text();

console.log(textLiveHomag0);
var newtext0 = textLiveHomag0.replace("Datenschutz-, bzw. Einwilligungserklärung", "<a target='_blank' href='https://www.destatis.de/DE/Ueber-uns/Kolloquien-Tagungen/Kolloquien/2021/datenschutz-einwilligung-speaker-t1-vortrag.html'>Datenschutz-, bzw. Einwilligungserklärung</a>");
$('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-2').find('.customization2_attendee_further-data_custom-question_label').empty().html(newtext0);

//2. Frage nur für Speaker
var textLiveHomag2 = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-3').find('.customization2_attendee_further-data_custom-question_label').text();
var newtext2 = textLiveHomag2.replace("Datenschutz-, bzw. Einwilligungserklärung", "<a target='_blank' href='https://www.destatis.de/DE/Ueber-uns/Kolloquien-Tagungen/Kolloquien/2021/datenschutz-einwilligung-speaker-t2-video-doku.html'>Datenschutz-, bzw. Einwilligungserklärung</a>");
$('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-3').find('.customization2_attendee_further-data_custom-question_label').empty().html(newtext2);
