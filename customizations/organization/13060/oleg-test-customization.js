console.log('Start working, Google Tag Manager');

async function getAccessToken() {
  const result = await $.ajax({
    url: `https://api.doo.net/v1/oauth`,
    type: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify({
      username: 'oleg.stetsko@doo.net',
      password: 'canon450',
      client_id: 'viovendi_web',
      grant_type: 'password'
    }),
    dataType: 'json',
  });
  return result.data.access_token;
}

async function getContacts(accessToken, page = 1) {
  const result = await $.ajax({
    url: `https://api.doo.net/v1/organizers/current/contacts?sort_order=asc&sort_by=last_name&page_size=50&page=${page}`,
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    dataType: 'json',
  });
  return result._embedded.organizer_contacts;
}

async function getPageCount(accessToken) {
  const result = await $.ajax({
    url: 'https://api.doo.net/v1/organizers/current/contacts?sort_order=asc&sort_by=last_name&page_size=50&page=1',
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    dataType: 'json',
  });
  return result.page_count;
}
async function checkCode(code, pageCount, accessToken) {
  for (let i = 0; i < pageCount; i += 1) {
    const page = pageCount - i;
    const contacts = await getContacts(accessToken, page)
    for (let j = 0; j < contacts.length; j += 1) {
      if (contacts[j].external_customer_id && contacts[j].external_customer_id.includes(code)) {
        console.log(contacts[j].external_customer_id)
        return true
      }
    }
  }

}

function getInput(name){
  var input;
  $('.customization2_attendee_further-data_custom-question').each(function() {

    var inputName =  $(this).find('.customization2_attendee_further-data_custom-question_label').text().trim();
    if(inputName.indexOf(name) >= 0){
      input = $(this).find('.customization2_attendee_further-data_custom-question_input')
    }
  });
  return input;
};

function prefill(input){
  if(input) input.value = 'ZS';
  var event;
  if(typeof(Event) === 'function') {
    event = new Event('input'); // for Chrome
  }else{
    event = document.createEvent('Event');
    event.initEvent('input', true, true); // for IE
  }
  input.dispatchEvent(event)
}

var debounce = function(fn, ms){
  var timeout;
  return function () {
    var fnCall = function(){ fn.call(this, arguments) }
    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms)
  };
}



async function handler() {
  const accessToken = await getAccessToken();
  const pageCount = await getPageCount(accessToken)
  const input = getInput('Abonnentennummer');
  const code = input.val().trim();
  onChange = debounce(checkCode, 500);
  const checkCode = await checkCode(code, pageCount, accessToken)


  if(input)  $('.customization2_attendee_edit-action_save').prop('disabled', true);
  prefill(input[0])
  onChange = debounce(checkCode, 500);
  input.keyup('keyup', onChange);
}

handler()