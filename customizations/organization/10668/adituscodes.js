console.log('git Start');

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
    //Testcode
     case 'Tagesticket':
       return '10668_Test-Codes';

    //case 'Tagesticket':
    //  return '10668-day-tickets-c1';

    case 'Tagesticket ermäßigt':
      return '10668-day-tickets-c1';

    case 'Nachmittagticket':
      return '10668-afternoon-tickets-c2';

    case 'Treff Tagesticket':
      return '10668-day-tickets-c1';

    case 'Eintrittskarten-Gutschein einlösen':
      return '10668-day-tickets-c1';

    case 'Presseticket':
      return '10668-day-tickets-c1';

    case 'Ausstellerausweis':
      return '10668-exhibitors-c3';

    case 'Auf- und Abbauausweis':
      return '10668-setup-c4';
      
    case 'Juniorticket':
      return '10668-day-tickets-c1';

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
