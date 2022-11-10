console.log("running linkedIn customization");
$( '<div style="margin-bottom:50px"id="linkedInConsent"><div>I consent to the........Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna felis, maximus ut sagittis vitae, pellentesque non tellus. Morbi lobortis felis sed volutpat vehicula. Integer nec metus sed mi sollicitudin viverra eu vel felis. Duis fringilla augue in diam bibendum, sed accumsan massa dapibus. Fusce eget iaculis nunc, quis interdum arcu </div><div><button style="width:150px"class="button pull-right float-right col-xs-12 col-12"onclick="insertLinkedIn()">consent</button></div></div>').insertBefore(".container")
function insertLinkedIn(){
    $('#linkedInConsent').hide();
    $( '<div><script type="text/javascript" async="true" data-name="li-quickbind-frame" data-api-key="78zzq2f3sri2xq" data-event-id="6985910004214079489" `="" data-registrant-last-name="Mustermann" data-registrant-email="max.mustermann@example.com" data-registrant-title="Principal Analyst" data-registrant-company="Business Co." data-locale="de_DE" data-success-callback="success_callback">(function(d){ var js, fjs = d.querySelector(\'script[data-name="li-quickbind-frame"]\'); js = d.createElement(\'script\'); js.src = "https://www.linkedin.com/quickbind/init"; fjs.parentNode.insertBefore(js, fjs); }(document)); </script> </div>" ').insertBefore(".container")
    console.log($('.viovendi_iframe').height());
    $('.viovendi_iframe').height($('.viovendi_iframe').height()+500);
}
