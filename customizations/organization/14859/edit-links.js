console.log('GTM Works Standard-230');

var answer1 = '<div class="standard-230">I want to have my contact details shared within the Oerlikon Group and with Oerlikon’s partners of the 2021 AMTC conference listed in the <a href="https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Oerlikon/2021/2021+AMTC+Conference+privacy+noticefor+website.pdf" target="_blank">Privacy Notice</a> in order to receive information about their services, products and invites to their events and conferences.</div>'
$(".vv-checkbox__label--md").before(answer1)
$(".standard-230").css({
	"word-break": "break-all"
})

var insertionListener = function (event) {
	if (event.animationName === "nodeInserted") {
		console.log("noteInserted");

		// code here
		$(".vv-checkbox__label--md").before(answer1)
		$(".standard-230").css({
			"word-break": "break-all"
		})
	}
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
