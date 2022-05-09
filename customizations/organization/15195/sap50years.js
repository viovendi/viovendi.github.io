console.log("github customization loaded");

async function updateTicket (ticket){ 
  await  $(ticket).find(".vv-selection-input__control").click();
	await  $(ticket).find(".vv-single-select-option").filter(el => el=='0').click();
  return
}	

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

async function getTicketAmount(eventId) {
  const result = await makeRequest({
    url: `https://api.doo.net/v1/events/${eventId}`,
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    dataType: 'json',
  })
  const amount = [result.ticket_categories[0].available_amount, result.ticket_categories[4].available_amount];
  return amount;
}

async function getInfo() {
  const amtountArray = await getTicketAmount(eventId);
  console.log(amtountArray);
//TODO
  var element = $('.customization3_edit-booking_header').after('<div class= "addedHeading" style="font-size:14px;padding: 20px;font-family: inherit;color: #343a3f;">verfügbare Tickets Sonntag:'+amtountArray[0]+" --- verfügbare Tickets Sonntag: " +amtountArray[1]+'</div>'
);
  
}
//getInfo();


//--- check each ticketcategory, if child, hide some stuff---

function hideStuff(name){
  var ticketTitle = $('.customization2_attendee_title').text().trim()
  if (ticketTitle == "Kind" || ticketTitle == "Child" ) {
      $('.'+name+' .customization2_attendee_contact-data_email').parent().hide();
      $('.'+name+' .customization2_attendee_contact-data_email-confirmation').parent().hide();
  }
  
  if (ticketTitle == "Partner" ) {
    $('.'+name+' .customization2_attendee_contact-data_email vv-optional-text > vv-text > span').hide();
    $('.'+name+' .customization2_attendee_contact-data_email-confirmation vv-optional-text > vv-text > span').hide();
    $('.'+name+' .customization2_attendee_contact-data_email').before('<span class= "addedHeading" style="font-size:14px;padding: 12px;font-family: inherit;color: #343a3f;">Falls ihr Partner auch bei der SAP arbeitet, bitte tragen Sie die SAP-Email-Adresse ein</span>');
  }
	
if (ticketTitle == "Employee" || ticketTitle == "Samstag. den 16.07.2022"  || ticketTitle == "Sonntag. den 17.07.2022" ) {
    	$('.'+name+' .customization2_attendee_further-data_custom-question-1').parent().hide();
	$('.'+name+' .customization2_attendee_further-data_custom-question-2').parent().hide();
	$('.'+name+' .customization2_attendee_further-data_headline').hide();
	
	//TODO hide if view state: .customization2_attendee-state_view
	$('.'+name+' .customization2_attendee-state_view .customization2_attendee_further-data_custom-question-1').hide();
	$('.'+name+' .customization2_attendee-state_view .customization2_attendee_further-data_custom-question-2').hide();
	
	console.log("mitarbeiter hide");
}	
  
  
    
}

function init(name) {
  hideStuff(name)
  setTimeout(function (){
        startCustomizationPage1();
              }, 800);  
}

init('customization2_attendee');

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        //  console.log("nodeInserted");
      console.log("main actions");
        while (typeof $('input[type=radio]') == 'undefined') {
            //   console.log('undefined')   
        }
        //changesForAttendeeForm();
      init('customization2_attendee');
    }
  if (event.animationName === "nodeSelfBooking") {
    console.log("nodeSelfBooking");
     getInfo();
  }
if (event.animationName === "nodeInserted2") {
      init('customization2_attendee');
  }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //

// CUSTOMIZATION ON PAGE 1


function startCustomizationPage1(){
	const observerPage1 = new MutationObserver((mutations, obs) => {
        const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');
    
        if ($(page1).is(':visible')) {
            startCustomizationPage1();
            obs.disconnect();
            return;
        }
    });
    const observerNotPage1 = new MutationObserver((mutations, obs) => {
        const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');
    
        if (!$(page1).is(':visible')) {
            observerPage1.observe(document, {
                childList: true,
                subtree: true
            });
            obs.disconnect();
            return;
        }
    });
    observerNotPage1.observe(document, {
        childList: true,
        subtree: true
    });

	addListenerToTickets();
	addTextToAmountOfTickets();
}

function addListenerToTickets() {
  console.log("adding listener to tickets"+$('.event-category').length);
     $('.event-category').each(function () {
	     const ticket = this;
            $(this).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
                if($(this).text().trim()!=0){
                resetOtherTicket($(ticket));
                }
            });
    });
  
}
function resetOtherTicket(ticketBlock) {
	
     const run = async (tickets) =>{
        await tickets.get().reverse().reduce(async (memo, ticket) => {
	    await memo;
            if (ticket != ticketBlock.get(0)) {
              	await updateTicket($(ticket));
            }
	}, undefined); 
    }	

    run($('.event-category'));
}
function addTextToAmountOfTickets(){
	$('.event-category__amount').each(function(){
		const amount = $(this).text().trim().split(" ")[0];
    console.log("text: "+amount)
    if(amount=="weniger"){

    }else
		if(amount>5000){
			$(this).text('genügend Plätze vorhanden');
			$(this).css('color', 'green');
		}else if(amount >1000){
			$(this).text('wenige Plätze verfügbar');
			$(this).css('color', 'orange');
		}else if(amount >200){
			$(this).text('nur noch wenige Plätze verfügbar');
			$(this).css('color', 'red');
		}else{
			$(this).text('weniger als 200 Plätze verfügbar');
			$(this).css('color', 'red');
		}
	});		
}

/*var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log('bookerNodeInserted')
        customization()

      // Added this so that this works for every attendee
        init('customization2_attendee');
    }
}

*/

//var chosenDay = 0;



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



