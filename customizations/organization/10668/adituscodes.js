console.log('git Start');
/*
function hideQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label, p");

    if (label.text().trim().includes(name)) {
      $(item).hide();
    }
  });
}




async function getCode(key) {
  return $.ajax({
    url: 'https://cs.doo.net/v1/integrations/custom-qr-codes/get-code?key=' + key,
    type: 'get',
    dataType: 'json',
  });
}

function markCodeAsUsed(code, key) {
  $.ajax({
    url: 'https://cs.doo.net/v1/integrations/custom-qr-codes/mark-code-as-used',
    headers: {
      'Content-Type': 'application/json',
    },
    type: 'post',
    data: JSON.stringify({
      "customCode": code,
      "key": key,
    }),
  })
}

function addCode(code, input) {
  let event;
  input.value = code
    if(typeof(Event) === 'function') {
      event = new Event('input'); // for Chrome
    }else{
      event = document.createEvent('Event');
      event.initEvent('input', true, true); // for IE
    }
    input.dispatchEvent(event)
    return input.value;
}

function getTicketCategory() {
  const categoryName = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
  console.log(categoryName);
  switch (categoryName) {
    //Testcodes !! these are all testcodes at the moment
     case 'Tagesticket':
       return '166_Tagesticket';

    case 'Tagesticket ermäßigt':
      return '174_Tagesticket-ermaessigt';

    case 'Nachmittagticket':
      return '177_Nachmittagsticket';

    case 'Treff Tagesticket':
      return '10668-day-tickets-c1'; //  ! ! !TODO ! ! !

    case 'Eintrittskartengutschein einlösen':
      return '178_Freies-Ticket';

    case 'Juniorticket':
      return '176_Kinderticket';

    case 'Presseticket':
      return '184_Presseticket-Samstag';

    case 'Ausstellerausweis':
      return '4_Ausstellerausweis';
      
    case 'Auf- und Abbauausweis':
      return '3_Ausstellerausweis-Auf-Abbau';

    default:
      return 'error';
    
  }
}

async function handler() {
  const element = document.querySelector('vv-additional-questions');

  const inputIs = () => {
    let input = null;
    if (element) {
      const label = $('p:contains("Aditus Code")');
      input = label.parent('label').find('input');

    }
    return input;
  }
  observer = new MutationObserver(inputIs);

  observer.observe(element, {
    characterData: true,
    subtree: true,
    childList: true
  });

  const input = inputIs();

  if (input) {
    const ticketCategory = getTicketCategory();
    const getCodeRes = await getCode(ticketCategory);
    const customCode = getCodeRes.payload.customCode;
    const codeAdded = addCode(customCode ,input[0]);

    if(codeAdded){
       markCodeAsUsed(customCode, ticketCategory)
    }
  }
}

handler();
hideQuestion(".customization2_attendee_further-data_custom-question", "Aditus Code");
*/
