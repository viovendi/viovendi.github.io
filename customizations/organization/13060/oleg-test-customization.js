console.log('Start working, Google Tag Manager');

async function getAccessToken(){
    const headers = new Headers();
    const user = {
        username: 'oleg.stetsko@doo.net', 
        password:'canon450',
        client_id: 'viovendi_web',
        grant_type: 'password'
      }
    headers.append("Accept", "application/json")
    headers.append("Content-Type", "application/json")
    const response = await fetch("https://api.doo.net/v1/oauth", {
        headers,
        method: "POST",
        body: JSON.stringify(user)
      })
     return response.json();
      
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
    const response = await getAccessToken();
    const pageCount = await getPageCount(response.data.access_token)
    await checkCode(null, pageCount)
    console.log(contacts)
}

handler()