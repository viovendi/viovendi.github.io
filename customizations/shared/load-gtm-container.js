console.log('Start working, Google Tag Manager (Load different GTM-Container into the widget for each event)');
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
var locale = window.location.pathname.split('/')[1]


async function getContainerId(eventId, locale) {
  const result = await makeRequest({
    url: `https://api.doo.net/v1/events/${eventId}?locale=${locale}`,
    type: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    dataType: 'json',
  })

  const attribute = $.grep(result.event_attributes.attributes, function (v) {
    if(v.name){
      return v.name.includes('GTM-Container')
    }

  });
  console.log(attribute[0])
  return  attribute[0] ? attribute[0].data : null;
}

async function loadContainer() {
  const s = document.createElement("script");
  const sc = document.createElement("script");
  const containerId = await getContainerId(eventId, locale)
  // Add script content
  s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${containerId}');`;
  sc.setAttribute("async", "");
  sc.setAttribute("custom-element", "amp-analytics");
  sc.src = "https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
  // Append
  document.head.appendChild(s);
  document.body.appendChild(sc);

}

loadContainer();
