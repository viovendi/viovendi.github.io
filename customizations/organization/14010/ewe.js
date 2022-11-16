
function addClassToField(shortName, className, wrapperClass) {
  $('.' + wrapperClass + ' .customization2_attendee_further-data .vv-nl-mb-lg').each(function (i, element) {
    var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
    if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1) {
      $(this).closest('.vv-nl-mb-lg').addClass(className);
    }
  });
}

function markAsChecked(name) {
  //search all further questions
  $('.customization2_attendee .customization2_attendee_further-data .vv-nl-mb-lg').each(function (i, element) {

    // check all labels and check if it contains "Einwilligungserklärung"
    var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
    if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Einwilligungserklärung kostenlos') > -1) {
      $('.' + name + ' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group .vv-checkbox').each(function () {
        if (!$(this).hasClass('checked-manually')) {
          $(this).trigger('click');
          $(this).addClass('checked-manually');
        }
      });
    }
  })
}

function markAsCheckedBooker(name) {
  //search all further questions
  $('.customization2_booker .customization2_booker_further-data .vv-nl-mb-lg').each(function (i, element) {

    // check all labels and check if it contains "Einwilligungserklärung"
    var item = $(this).find('.customization2_booker_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
    if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Einwilligungserklärung kostenlos') > -1) {
      $('.' + name + ' .check-boxes-wrapper .customization2_booker_further-data_custom-question_checkbox-group .vv-checkbox').each(function () {
        if (!$(this).hasClass('checked-manually')) {
          $(this).trigger('click');
          $(this).addClass('checked-manually');
        }
      });
    }
  })
}

//funktion to hide Label of question
function hide(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label");

    if (label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1) {
      $(item).find('.customization2_attendee_further-data_custom-question_label').css("display", "none");
      $(item).find('.customization2_booker_further-data_custom-question_label').css("display", "none");
    }

  });
}

hide(".customization2_attendee_further-data_custom-question", "Einwilligungserklärung");
hide(".customization2_booker_further-data_custom-question", "Einwilligungserklärung");
hide(".customization2_attendee_further-data_custom-question", "declaration of consent");
hide(".customization2_booker_further-data_custom-question", "declaration of consent");



function init(name) {
  console.log("Start init() function");
  addClassToField('Einwilligungserklärung kostenlos', 'check-boxes-wrapper', name);
  addClassToField('Einwilligungserklärung kostenpflichtig', 'check-boxes-wrapper', name);

  //markAsChecked(name);
  //markAsCheckedBooker(name)

  if (name == 'customization2_attendee') {

    if (!!$('.customization2_attendee_further-data_custom-question_checkbox-group').length) {
      var fieldDe = $$('.customization2_attendee_further-data_custom-question_checkbox-line').findField('Ich bin mit der Verarbeitung')
      var fieldEn = $$('.customization2_attendee_further-data_custom-question_checkbox-line').findField('I consent to the use and processing')
      if (!$('.' + name + ' .customization2_attendee_further-data_custom-question_checkbox-line_label').hasClass('with-links') && $(fieldDe).html()) {
        var textString = $(fieldDe).find('.customization2_attendee_further-data_custom-question_checkbox-line_label').html();
        var textString1 = textString.replace("Einwilligungserklärung", "<a target='_blank' href='https://privacy.vogel.de/'>Einwilligungserklärung</a>");
        var res = textString1.replace("(privacy.vogel.de)", "<a target='_blank' href='https://privacy.vogel.de/'>(privacy.vogel.de)</a>");

        $(fieldDe).find('.customization2_attendee_further-data_custom-question_checkbox-line_label').html(res);
        $(fieldDe).find('.customization2_attendee_further-data_custom-question_checkbox-line_label').addClass('with-links');
        //$('.' + name + ' .customization2_attendee_further-data_custom-question_checkbox-line_label').html(res);
        //$('.' + name + ' .customization2_attendee_further-data_custom-question_checkbox-line_label').addClass('with-links');
      } else if($(fieldEn).html()){
        var resultString = $(fieldEn).find('.customization2_attendee_further-data_custom-question_checkbox-line_label').html().replace("declaration of consent (privacy.vogel.de)", "<a target='_blank' href='https://privacy.vogel.de/index_en.html'>declaration of consent (privacy.vogel.de)</a>");
        $(fieldEn).find('.customization2_attendee_further-data_custom-question_checkbox-line_label').html(resultString)
      }
    }
  } else {
    if (!!$('.customization2_booker_further-data_custom-question_checkbox-group').length) {
      var fieldDe = $$('.customization2_booker_further-data_custom-question_checkbox-line').findField('Ich bin mit der Verarbeitung')
      var fieldEn = $$('.customization2_booker_further-data_custom-question_checkbox-line').findField('I consent to the use and processing')
      if (!$('.' + name + ' .customization2_booker_further-data_custom-question_checkbox-line_label').hasClass('with-links') && $(fieldDe).html()) {
        var textString = $(fieldDe).find('.customization2_booker_further-data_custom-question_checkbox-line_label').html();
        var textString1 = textString.replace("Einwilligungserklärung", "<a target='_blank' href='https://privacy.vogel.de/'>Einwilligungserklärung</a>");
        var res = textString1.replace("(privacy.vogel.de)", "<a target='_blank' href='https://privacy.vogel.de/'>(privacy.vogel.de)</a>");
        $(fieldDe).find('.customization2_booker_further-data_custom-question_checkbox-line_label').html(res);
        $(fieldDe).find('.customization2_booker_further-data_custom-question_checkbox-line_label').addClass('with-links');
        //$('.' + name + ' .customization2_booker_further-data_custom-question_checkbox-line_label').html(res);
        //$('.' + name + ' .customization2_booker_further-data_custom-question_checkbox-line_label').addClass('with-links');
      } else if($(fieldEn).html()){
        var resultString = $(fieldEn).find('.customization2_booker_further-data_custom-question_checkbox-line_label').html().replace("declaration of consent (privacy.vogel.de)", "<a target='_blank' href='https://privacy.vogel.de/index_en.html'>declaration of consent (privacy.vogel.de)</a>");
        $(fieldEn).find('.customization2_booker_further-data_custom-question_checkbox-line_label').html(resultString)
      }
    }
  }

}

init('customization2_attendee');
init('customization2_booker');
/*
if (!$('.text-after-ewe').length) {
  $('.customization2_booking-terms_list').after('<span class="text-after-ewe"> Bitte beachten Sie: Mit Ihrer Registrierung zu dieser Veranstaltung erhalten Sie zusätzlich den kostenlosen redaktionellen Newsletter, den Sie jederzeit über den Abmelde-Link im Newsletter abbestellen können.</span>');
}*/


/*
var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
  console.log("noteInserted test");
      hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");
      hide(".customization2_booker_further-data_custom-question","Einwilligungserklärung");
      init('customization2_booker');
      init('customization2_attendee');
      console.log(!$('.customization2_attendee .customization2_attendee_further-data_custom-question_checkbox-line_label').hasClass('with-links'))

   var classNames = event.target.classList;

   for (var i = 0; i < classNames.length; i++) {
     var className = classNames[i];
     
     if(className.indexOf('customization2_attendee-') > -1){
       //clickedEdit(className);
       return false;
     }
    if(className.indexOf('customization2_booker') > -1){
       //clickedEdit(className);
       return false;
     }
   }

 }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
*/
