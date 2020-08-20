console.log('Start working, Google Tag Manager');

async function getAccessToken(){
  const result = await $.ajax({
    url: `https://api.doo.net/v1/oauth`,
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify({
      username: 'oleg.stetsko@doo.net', 
      password:'canon450',
      client_id: 'viovendi_web',
      grant_type: 'password'
    }),
    dataType: 'json',
  });
  console.log(result)
  return result.data.access_token;
}

async function getContacts(accessToken, page = 1){
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

async function getPageCount(accessToken){
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
async function checkCode(code, pageCount){
  for (let i = 0; i < pageCount.length; i += 1) {
    const contacts = await getContacts(response.data.access_token, 2)
    console.log(i)
    for (let j = 0; j < contacts.length; j += 1) {
    console.log(contacts[j].external_customer_id)
    }
  }

}



async function handler(){
    const accessToken = await getAccessToken();
    console.log(accessToken)
    const pageCount = await getPageCount(accessToken)
    await checkCode(null, pageCount)
}

handler()