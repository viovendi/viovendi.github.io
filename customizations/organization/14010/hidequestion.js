console.log('hide Eventinsight');

//funktion to hide Label of question
function hideQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).find('.customization2_attendee_further-data_custom-question_label').css("display", "none");    }
  });
}

hideQuestion(".customization2_attendee_further-data_custom-question", "EventInsight user id");


