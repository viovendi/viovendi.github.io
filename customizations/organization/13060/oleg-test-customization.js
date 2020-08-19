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

async function getContacts(accessToken){
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
    headers.append("Authorization", `Bearer ${accessToken}`)
    const response = await fetch("https://api.doo.net/v1/organizers/current/contacts?sort_order=asc&sort_by=last_name&page_size=50&page=1", {
      headers,
      method: "GET",
    })
    return response.json();
}

async function handler(){

    const response = await getAccessToken();

    const contacts = await getContacts(response.data.access_token)
    console.log(JSON.stringify(contacts))
}

handler()