console.log("github customization loaded");
let changedBackToSite1 = false;
var counter = 0;
setupObserversPage1()

function getWidgetLang() {
  var lang = $('html').attr('lang');
  return lang;
}




async function updateTicket(ticket) {
  console.log("11");
  await $(ticket).find(".vv-selection-input__control").click();
  await $(ticket).find(".vv-single-select-option").filter(el => el == '0').click();
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

function sendEmail() 
{
    window.open('mailto:50years-wdf@sap.com?subject=Register%20additional%20children&body=Please%20note%20that%20only%20your%20own%20children%20are%20invited%20and%20all%20tickets%20are%20personalized.%0D%0A%0D%0AWe%20need%20the%20following%20Contact%20Details.%0D%0A%0D%0AFirst%20name%3A%0D%0ALast%20name%3A%0D%0AAge%20%5B0-6%5D%5B7-15%5D%5B16-17%5D%5B%C3%9C18%5D%3A%0D%0AEmergency%20contact%20number%20(optional)%3A', '_blank');

}

async function getInfo() {
  const amtountArray = await getTicketAmount(eventId);
  console.log(amtountArray);
  //TODO
  if (getWidgetLang() == 'en') {
  var element = $('.customization3_edit-booking_header').after('<div class= "addedHeading" style="font-size:14px;padding: 20px;font-family: inherit;color: #343a3f;">available Tickets on Saturday:' + amtountArray[0] + " --- verfügbare Tickets Sonntag: " + amtountArray[1] + '</div><div></div>'
  );
  }
  else{
  var element = $('.customization3_edit-booking_header').after('<div class= "addedHeading" style="font-size:14px;padding: 20px;font-family: inherit;color: #343a3f;">verfügbare Tickets Samstag:' + amtountArray[0] + " --- verfügbare Tickets Sonntag: " + amtountArray[1] + '</div><div class= "addedHeading" style="font-size:14px;padding: 20px;font-family: inherit;color: #343a3f;">Bitte beachte, dass du an dieser Stelle keine Personen hinzufügen oder stornieren kannst. Schreibe hierfür bitte eine E-Mail an 50years-wdf@sap.com</div><div><button class="vv-button vv-button-secondary vv-button-secondary-red vv-text__size--lg" style="padding:24px;"onclick="sendEmail();" type="button">Einzelne Personen Stornieren</button></div>'
  );
  }

}




function init(name) {
   addstuff(name);

  setTimeout(function () {
    startCustomizationPage1();
  }, 800);
}

init('customization2_attendee');

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    
    //  console.log("nodeInserted");
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

function setupObserversPage1() {
  let observerNotPage1;
  const observerPage1 = new MutationObserver((mutations, obs) => {
    const page1 = document.getElementsByClassName('customization-booking-area-wrapper-page1');

    if ($(page1).is(':visible')) {
      observerNotPage1.observe(document, {
        childList: true,
        subtree: true
      });
      changedBackToSite1 = true;
      startCustomizationPage1();
      obs.disconnect();
      return;
    }
  });
  observerNotPage1 = new MutationObserver((mutations, obs) => {
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
}
function startCustomizationPage1() {
  addListenerToTickets();
  addTextToAmountOfTickets();
}

function addListenerToTickets() {
  console.log("adding listener to tickets" + $('.event-category').length);
  $('.event-category').not('.event-category--child').each(function () {
    const ticket = this;
    $(this).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
      if ($(this).text().trim() != 0) {
        if (changedBackToSite1) {
          console.log('blocked reset')
          changedBackToSite1 = false;
        } else {
          resetOtherTicket($(ticket));
        }
      }
    });
  });
}
function resetOtherTicket(ticketBlock) {

  if (getWidgetLang() == 'en') {
    //plusone
   // $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(2) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Please note that only your own children are invited and all tickets are personalized. If you have more than 3 children that you would like to register, please send us an <a href="mailto:50years-wdf@sap.com?subject=Register%20additional%20children&body=Please%20note%20that%20only%20your%20own%20children%20are%20invited%20and%20all%20tickets%20are%20personalized.%0D%0A%0D%0AWe%20need%20the%20following%20Contact%20Details.%0D%0A%0D%0AFirst%20name%3A%0D%0ALast%20name%3A%0D%0AAge%20%5B0-6%5D%5B7-15%5D%5B16-17%5D%5B%C3%9C18%5D%3A%0D%0AEmergency%20contact%20number%20(optional)%3A" target="_blank">email</a>.</p>');
   // $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(5) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Please note that only your own children are invited and all tickets are personalized. If you have more than 3 children that you would like to register, please send us an <a href="mailto:50years-wdf@sap.com?subject=Register%20additional%20children&body=Please%20note%20that%20only%20your%20own%20children%20are%20invited%20and%20all%20tickets%20are%20personalized.%0D%0A%0D%0AWe%20need%20the%20following%20Contact%20Details.%0D%0A%0D%0AFirst%20name%3A%0D%0ALast%20name%3A%0D%0AAge%20%5B0-6%5D%5B7-15%5D%5B16-17%5D%5B%C3%9C18%5D%3A%0D%0AEmergency%20contact%20number%20(optional)%3A" target="_blank">email</a>.</p>');

    
    
    //child
    $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(3) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Please note that only your own children are invited and all tickets are personalized. If you have more than 3 children that you would like to register, please send us an <a href="mailto:50years-wdf@sap.com?subject=Register%20additional%20children&body=Please%20note%20that%20only%20your%20own%20children%20are%20invited%20and%20all%20tickets%20are%20personalized.%0D%0A%0D%0AWe%20need%20the%20following%20Contact%20Details.%0D%0A%0D%0AFirst%20name%3A%0D%0ALast%20name%3A%0D%0AAge%20%5B0-6%5D%5B7-15%5D%5B16-17%5D%5B%C3%9C18%5D%3A%0D%0AEmergency%20contact%20number%20(optional)%3A" target="_blank">email</a>.</p>');
    $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(6) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Please note that only your own children are invited and all tickets are personalized. If you have more than 3 children that you would like to register, please send us an <a href="mailto:50years-wdf@sap.com?subject=Register%20additional%20children&body=Please%20note%20that%20only%20your%20own%20children%20are%20invited%20and%20all%20tickets%20are%20personalized.%0D%0A%0D%0AWe%20need%20the%20following%20Contact%20Details.%0D%0A%0D%0AFirst%20name%3A%0D%0ALast%20name%3A%0D%0AAge%20%5B0-6%5D%5B7-15%5D%5B16-17%5D%5B%C3%9C18%5D%3A%0D%0AEmergency%20contact%20number%20(optional)%3A" target="_blank">email</a>.</p>');

  }
  else {
    //begleitperon
    $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(2) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Jede:r Mitarbeiter:in ist herzlich eingeladen eine Begleitperson mit zur Veranstaltung zu bringen. Falls die Begleitperson SAP Mitarbeiter:in am Standort Walldorf, St. Leon-Rot und Karlsruhe ist, wird darum gebeten nur eine Registrierung für beide Personen vorzunehmen.</p>');
    $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(5) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Jede:r Mitarbeiter:in ist herzlich eingeladen eine Begleitperson mit zur Veranstaltung zu bringen. Falls die Begleitperson SAP Mitarbeiter:in am Standort Walldorf, St. Leon-Rot und Karlsruhe ist, wird darum gebeten nur eine Registrierung für beide Personen vorzunehmen.</p>');
  
    
    //kind
    $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(3) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Bitte beachtet, dass lediglich eigene Kinder zur Veranstaltung eingeladen sind. Die Zutrittsbändchen werden personalisiert. Die Personalien werden stichprobenartig kontrolliert. Selbstverständlich dürft Ihr alle Eure Kinder mitbringen. Solltet Ihr mehr als 3 haben könnt Ihr diese <a href="mailto:50years-wdf@sap.com?subject=Register%20additional%20children&body=Please%20note%20that%20only%20your%20own%20children%20are%20invited%20and%20all%20tickets%20are%20personalized.%0D%0A%0D%0AWe%20need%20the%20following%20Contact%20Details.%0D%0A%0D%0AFirst%20name%3A%0D%0ALast%20name%3A%0D%0AAge%20%5B0-6%5D%5B7-15%5D%5B16-17%5D%5B%C3%9C18%5D%3A%0D%0AEmergency%20contact%20number%20(optional)%3A" target="_blank">hier</a> anmelden</p>');
    $("#customization-booking-area-wrapper-page1 > vv-ticket-selection > div > div > div > form > ul > li:nth-child(6) > vv-ticket > div > div:nth-child(1) > div.col-xs-8.col-8 > div > p > vv-category-description > span").html('<p>Bitte beachtet, dass lediglich eigene Kinder zur Veranstaltung eingeladen sind. Die Zutrittsbändchen werden personalisiert. Die Personalien werden stichprobenartig kontrolliert. Selbstverständlich dürft Ihr alle Eure Kinder mitbringen. Solltet Ihr mehr als 3 haben könnt Ihr diese <a href="mailto:50years-wdf@sap.com?subject=Register%20additional%20children&body=Please%20note%20that%20only%20your%20own%20children%20are%20invited%20and%20all%20tickets%20are%20personalized.%0D%0A%0D%0AWe%20need%20the%20following%20Contact%20Details.%0D%0A%0D%0AFirst%20name%3A%0D%0ALast%20name%3A%0D%0AAge%20%5B0-6%5D%5B7-15%5D%5B16-17%5D%5B%C3%9C18%5D%3A%0D%0AEmergency%20contact%20number%20(optional)%3A" target="_blank">hier</a> anmelden</p>');
  }
  //jonas code 
  
  console.log("resetting all other then:")
  console.log(ticketBlock.get(0))
  const run = async (tickets) => {
    await tickets.get().reverse().reduce(async (memo, ticket) => {
      await memo;
      // console.log(ticket);
      if (ticket != ticketBlock.get(0)) {
        await updateTicket($(ticket));
      }
    }, undefined);
  }

  run($('.event-category'));
  
}
function addTextToAmountOfTickets() {
  $('.event-category__amount').each(function () {
    const amount = $(this).text().trim().split(" ")[0];
    console.log("text: " + amount)


    if (getWidgetLang() == 'en') {
      if (amount > 5000) {
        $(this).text('Tickets still available');
        $(this).css('color', 'green');
      } else if (amount > 1000) {
        $(this).text('Some tickets still available');
        $(this).css('color', 'orange');
      } else if (amount > 200) {
        $(this).text('Just few tickets available');
        $(this).css('color', 'red');
      } else if (amount <= 200) {
        $(this).text('Less than 200 tickets available');
        $(this).css('color', 'red');
      }
    }
    else {

      if (amount > 5000) {
        $(this).text('genügend Tickets vorhanden');
        $(this).css('color', 'green');
      } else if (amount > 1000) {
        $(this).text('wenige Tickets verfügbar');
        $(this).css('color', 'orange');
      } else if (amount > 200) {
        $(this).text('nur noch wenige Tickets verfügbar');
        $(this).css('color', 'red');
      } else if (amount <= 200) {
        $(this).text('weniger als 200 Tickets verfügbar');
        $(this).css('color', 'red');
      }
    }
  });
}




//--- check each ticketcategory, if child, hide some stuff---

function addstuff(name) {
  $('.customization2_attendee-1 .customization2_attendee_contact-data_first-name_input').prop('disabled', true);
  $('.customization2_attendee-1 .customization2_attendee_contact-data_last-name_input').prop('disabled', true);


  }

function changeMobileNumber() {
  console.log("changeMobilenumber");
  $(".customization2_attendee_further-data_custom-question_phone input").attr("placeholder", "1234 56789");
}

function addErrorText() {
  console.log("errortext");
  
}



oberserverPhoneNumber = new MutationObserver((mutations, obs) => {
 
    
  
    const phoneNumber = document.getElementsByClassName('customization2_attendee_further-data_custom-question_phone');
  
  
  
    if ($(phoneNumber).is(':visible')) {
      console.log("observerChangeMobilenumber");
      changeMobileNumber();
      $(".customization2_attendee_further-data_custom-question_phone input").attr("placeholder", "1234 56789");
      
      //obs.disconnect();
      return;
    }
  });
  oberserverPhoneNumber.observe(document, {
    childList: true,
    subtree: true
  });


oberserverClick = new MutationObserver((mutations, obs) => {
  // Valentin Code click 1x
  
  const attendeetitle = document.getElementsByClassName('customization2_attendees_title');
    if ($(attendeetitle).is(':visible')) {
      console.log("attendeetitle");
       $("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > vv-attendees > div > vv-attendee > div > vv-collapsible-wrapper > div > div.collapsible-wrapper_header.customization3_collapsible-wrapper_header > div.d-none.d-sm-flex.collapsible-wrapper__view-actions.collapsible-wrapper__view-actions--desktop.customization3_collapsible-wrapper_view-actions.customization2_attendee_view-action > div > vv-tooltip > div > vv-button > button").click();
        if (getWidgetLang() == 'en') {
      $("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(4)").before("<p style='padding: 20px;'>Please note that you will not be able to add or cancel any additional attendees after finalising your booking. Should you want to add or cancel any attendees, please send an email to 50years-wdf@sap.com</p>");
      }
    else{
      $("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(4)").before("<p style='padding: 20px;'>Nach Abschluss der Buchung kannst du keine weiteren Personen mehr zu deiner Buchung hinzufügen. Falls du später weitere Personen hinzufügen oder stornieren möchtest, sende bitte eine Email an 50years-wdf@sap.com</p>");
    }

      obs.disconnect();
      return;
    }
  });
  oberserverClick.observe(document, {
    childList: true,
    subtree: true
  });

oberserverError = new MutationObserver((mutations, obs) => {
  // Valentin Code click 1x
  
  const errorAlreadyRegistered = document.getElementsByClassName('m-box__text');
  if ($(errorAlreadyRegistered).is(':visible')) {
      console.log("errorvisible");
      if (getWidgetLang() == 'en') {
      $(".m-box__text").html("<p>You are already registered for this event. Please go back to the <a href='https://50years-wdf.int.sap/registration' target='_blank'>registration page</a> and use the booking code you received with your confirmation mail</p>");
      }
    else{
    $(".m-box__text").html("<p>Du bist bereits registriert. Bitte gehe auf die <a href='https://50years-wdf.int.sap/registration' target='_blank'>Registrierungsseite</a> klicke auf 'Hier geht es zu deiner Buchung' und benutze deine Buchungsnummer, welche du in der Bestätigungsmail bekommen hast</p>");
    }
      obs.disconnect();
      return;
    }
  });
  oberserverError.observe(document, {
    childList: true,
    subtree: true
  });




