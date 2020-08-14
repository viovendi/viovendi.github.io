console.log('Start working, Google Tag Manager');

async function getAccessToken(){
    const user = {
        "username":"oleg.stetsko@doo.net", 
        "password":"canon450",
        "client_id": "viovendi_web",
        "grant_type":"password"
      }
    headers.append("Accept", "application/json")
    fetch("https://api.doo.net/v1/oauth", {
        headers,
        method: "POST",
        body: user
      })
}
const accessToken = await getAccessToken();
console.log(accessToken)

const headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Authorization", `Bearer ${accessToken}`)
fetch("https://api.doo.net/v1/organizers/current/contacts?sort_order=asc&sort_by=last_name&page_size=50&page=1", {
  headers,
  method: "GET",
}).then((contacts) => {
    console.log(contacts)
})