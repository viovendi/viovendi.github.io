
$( '<div>I consent to the........<div><button onclick="insertLinkedIn()">consent</button>').insertBefore(".customization-booking-area-wrapper-page1")
function insertLinkedIn(){
    $( '<div><script type="text/javascript" async="true" data-name="li-quickbind-frame" data-api-key="78zzq2f3sri2xq" data-event-id="6985910004214079489" `="" data-registrant-last-name="Mustermann" data-registrant-email="max.mustermann@example.com" data-registrant-title="Principal Analyst" data-registrant-company="Business Co." data-locale="de_DE" data-success-callback="success_callback">(function(d){ var js, fjs = d.querySelector(\'script[data-name="li-quickbind-frame"]\'); js = d.createElement(\'script\'); js.src = "https://www.linkedin.com/quickbind/init"; fjs.parentNode.insertBefore(js, fjs); }(document)); </script> </div>" ').insertBefore(".customization-booking-area-wrapper-page1")
}
