console.log("running linkedIn customization");
//console.log($((".customization-booking-area-wrapper"))[0])
//$( '<div style="margin:150px; height = 500px"id="linkedInConsent"><div>I consent to the........Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna felis, maximus ut sagittis vitae, pellentesque non tellus. Morbi lobortis felis sed volutpat vehicula. Integer nec metus sed mi sollicitudin viverra eu vel felis. Duis fringilla augue in diam bibendum, sed accumsan massa dapibus. Fusce eget iaculis nunc, quis interdum arcu </div><div><button style="width:150px"class="button pull-right float-right col-xs-12 col-12"onclick="insertLinkedIn()">consent</button></div></div>').insertBefore(".customization-booking-area-wrapper")

//console.log($(("#widgetContainer"))[0])

function setHeight(){
    height=$('.viovendi_iframe').height();
    while(!height){
        height=$('.viovendi_iframe').height();
    }
    console.log(height)
    $('.viovendi_iframe').height(height+500);
}
function insertLinkedIn(){
    $('#linkedInConsent').hide();
    $( '<div style = "display:block;"><script type="text/javascript" async="true" data-name="li-quickbind-frame" data-api-key="78zzq2f3sri2xq" data-event-id="6985910004214079489" `="" data-registrant-last-name="Mustermann" data-registrant-email="max.mustermann@example.com" data-registrant-title="Principal Analyst" data-registrant-company="Business Co." data-locale="de_DE" data-success-callback="success_callback">(function(d){ var js, fjs = d.querySelector(\'script[data-name="li-quickbind-frame"]\'); js = d.createElement(\'script\'); js.src = "https://www.linkedin.com/quickbind/init"; fjs.parentNode.insertBefore(js, fjs); }(document)); </script> </div>" ').insertBefore("#widgetContainer")
    setHeight()
}
//".ew-header__progress-container")

$( '<div style="margin:150px; height = 500px"id="linkedInConsent"><div>We want to show you content from LinkedIn - by consenting, you agree that your IP-Address is shared with Microsoft</div><div><button style="width:150px"class="button pull-right float-right col-xs-12 col-12"onclick="insertLinkedIn()">consent</button></div></div>').insertBefore("#widgetContainer")
setHeight()