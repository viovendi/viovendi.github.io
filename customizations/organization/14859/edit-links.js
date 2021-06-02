console.log('GTM Works Standard-230');



var newdiv1 = $( "<div id='object1'>I want to have my contact details shared within the Oerlikon Group and with Oerlikon’s partners of the 2021 AMTC conference listed in the <a href='https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Oerlikon/2021/2021+AMTC+Conference+privacy+noticefor+website.pdf' target='_blank'>Privacy Notice</a> in order to receive information about their services, products and invites to their events and conferences.'</div>" );

//var answer1 = 'I want to have my contact details shared within the Oerlikon Group and with Oerlikon’s partners of the 2021 AMTC conference listed in the <a href="https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Oerlikon/2021/2021+AMTC+Conference+privacy+noticefor+website.pdf" target="_blank">Privacy Notice</a> in order to receive information about their services, products and invites to their events and conferences.'
$(".customization2_booking-terms_text").prepend(newdiv1);
$("#object1").css({
	"margin-top": "-50px",
	"padding-bottom": "10px"	
})


