console.log("github customization loaded");

async function makeRequest(options) {
  let result = null;
  try {
    result = await $.ajax(options);
    return result;
  } catch (error) {
    console.error(error);
  }
}

var pathname = window.location.pathname;
var eventId = pathname.split('/')[3]
console.log(eventId);



async function getContainerId(eventId) {
  const result = await makeRequest({
    url: `https://api.doo.net/v1/events/${eventId}`,
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    dataType: 'json',
  })
/*
   const attribute = $.grep(result.event_attributes.attributes, function (v) {
    if(v.data){
      console.log(result);
      console.log(result.total_amount);
      return v.data.includes('GTM-')
    }

  });
  return attribute[0];*/
  console.log("Samstag verfügbare Plätze: "+result.ticket_categories[0].available_amount);
  console.log("Sonntag verfügbare Plätze: "+result.ticket_categories[4].available_amount);
  return result.total_amount;
}

async function insertContainer() {
  const containerId = await getContainerId(eventId);
}
insertContainer();

//--- check each ticketcategory, if child, hide some stuff---

function hideStuff(name){
  var ticketTitle = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()
  if (!(ticketTitle == "Kind" || ticketTitle == "something else") ) {
      $('.'+name+' .customization2_attendee_contact-data_email').hide();
      console.log("hide");
  }
     /*if(calcCheckboxes(name) < 1 ){
       $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', true);
       if( $('.'+name+' .customization2_attendee_edit-action .button-error-message').length < 1 ){
        console.log(language)
         if (language == "en-us"){
        $('.'+name+' .customization2_attendee_further-data_product-1').before('<span class="button-error-message error-text error-text--multiple">Please select a date</span>');
        //$('.'+name+' .customization2_attendee_further-data_headline').after('<span class="button-error-message error-text error-text--multiple">Bitte wählen Sie einen Termin an dem Sie die Messe besuchen möchten aus.</span>');
         }
         else {
           $('.'+name+' .customization2_attendee_further-data_product-1').before('<span class="button-error-message error-text error-text--multiple">Bitte wählen Sie einen Termin an dem Sie die Messe besuchen möchten aus.</span>');
         }
         // this removes the error message in state_view
         $('.customization2_attendee-state_view .button-error-message').remove();

       }
     }else{
       $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', false);
       $('.'+name+' .button-error-message').remove();
     }
    }*/
}

function init(name) {
  hideStuff(name)
}

init('customization2_attendee');

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log('bookerNodeInserted')
        customization()

      // Added this so that this works for every attendee
        init('customization2_attendee');
    }
}



























var chosenDay = 0;


var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        //  console.log("nodeInserted");
        while (typeof $('input[type=radio]') == 'undefined') {
            //   console.log('undefined')   
        }
        changesForAttendeeForm();
    }
}
// OLD Code

/*
function setRadioGroup(radioGroup) {
    if (chosenDay == 0) {
        return;
    }
    if (chosenDay == 1) {
        //    console.log('chosen Day is 1')
        var buttonToSet = $(radioGroup).find('input[type=radio]').first()
        var buttonToReset = $(radioGroup).find('input[type=radio]').last()
    }
    if (chosenDay == 2) {
        //    console.log('chosen Day is 2')
        var buttonToSet = $(radioGroup).find('input[type=radio]').last()
        var buttonToReset = $(radioGroup).find('input[type=radio]').first()
    }


    //  $(buttonToReset).prop('checked', false);
    //  $(buttonToReset).get(0).dispatchEvent(new Event('change'));
    //  console.log($(buttonToSet).get(0));
    if (typeof $(buttonToSet).get(0) !== 'undefined') {
        $(buttonToSet).prop('checked', true);
        $(buttonToSet).get(0).dispatchEvent(new Event('change'));
        $(buttonToSet).get(0).click();
        $(buttonToSet).attr('disabled', 'disabled');
        $(buttonToReset).attr('disabled', 'disabled');
    } // else  console.log('undefined')
}

function isFirstRadioButton(radioGroup) {
    var attendeeField = $(radioGroup).closest('.booking-participant.booking-participant--attendee.customization3_booking-participant_attendee.vv-border-xs.vv-rounded-lg.vv-border-grey-light')[0];
    var firstAttendeeField = $('.booking-participant.booking-participant--attendee.customization3_booking-participant_attendee.vv-border-xs.vv-rounded-lg.vv-border-grey-light').first()[0];
    var isFirst = attendeeField == firstAttendeeField;
    // console.log('isFirst: ' + isFirst)
    return isFirst;
}

function changesForAttendeeForm() {
    $('.customization2_attendee_contact-data_copy-link').hide();
    //  console.log('hidden copy link');

    var firstRadioQuestion = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-1');

    $(firstRadioQuestion).each(function () {
        disableAndSet($(this));
    });

    $(firstRadioQuestion).find('.vv-radio__input.customization2_attendee_further-data_custom-question_radio-line_button').click(function () {
        radioButtonClicked($(this));
    });

}
function disableAndSet(radioGroup) {
    if (!isFirstRadioButton(radioGroup)) {

        setRadioGroup(radioGroup);
    }
}
function radioButtonClicked(radioButton) {

    //  console.log('clicked on radioButton');
    var parentOfBoth = $(radioButton).closest('.vv-radio-group__control.customization2_attendee_further-data_custom-question_radio-group');

    if ($(radioButton)[0] == $(parentOfBoth).find('input[type=radio]').first()[0]) {
        chosenDay = 1
    } else chosenDay = 2

    changesForAttendeeForm();
}

*/



document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //

// CUSTOMIZATION ON PAGE 1



function addListenerToTickets() {
    
   console.log( $(".event-categories"));
    console.log( $(".event-category"));
    $(".event-category").each(function () {
        console.log('found categorie');
        $(this).find("select").on('change', function () {
             resetOtherTicket($(this));
        });
    });
}
function resetOtherTicket(ticketBlock) {
    
    $(".event-category").each(
        function () {
            if ($(this) != $(ticketBlock)) {
                $(this).find("select").val(0);
                $(this).find("select").get(0).dispatchEvent(new Event('change'));
            }
        }
    );
}

addListenerToTickets();
