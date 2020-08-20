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
    const contacts = await getContacts(accessToken, pageCount - i)
    console.log(i)
    for (let j = 0; j < contacts.length; j += 1) {
      if (contacts[j].external_customer_id) {
        console.log(contacts[j].external_customer_id)
      }
    }
  }

}



async function handler() {
  const accessToken = await getAccessToken();
  const pageCount = await getPageCount(accessToken)
  await checkCode(null, pageCount, accessToken)
}

handler()