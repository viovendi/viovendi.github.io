function checkURL(word){
    var path = window.location.pathname;
    return path.includes(word);
}

const observer = new MutationObserver((mutations, obs) => {
    const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page3');

    if ($(page2).is(':visible')) {
        console.log('Adding English Payment Description');
        if(checkURL("en-us")) {
            addPaymentDescription();
        }

        obs.disconnect();
        return;
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});


function addPaymentDescription() {
    var paymentStyles = `
    .vv-mb-xxl.customization2_payment_options p.vv-radio__label-text{
        font-size: 0; 
    }
    .vv-mb-xxl.customization2_payment_options p.vv-radio__label-text:after{
    content:'I hereby confirm the binding booking and the accuracy of my information';
    font-size: 16px;
    }
      
    .customization2_payment_options > vv-text > p{
        font-size: 0;
    }
    
    .customization2_payment_options > vv-text > p:after{
        content:"Please confirm.";
        font-size: 14px;
    }
    
    .customization2_payment_title {
    text-indent: -9999px;
    line-height: 0;
    display: block;
    }
    .customization2_payment_title:after{
    content: "Confirmation";
    text-indent: 0;
    display: block;
    line-height: normal;
    }
    
    .customization2_payment-description_none-selected  vv-text.vv-mb-xxs  p{
    text-indent: -9999px;
    line-height: 0;
    display: block;
    }
    .customization2_payment-description_none-selected  vv-text.vv-mb-xxs  p:after{
    content: "You will receive a binding booking confirmation and an invoice in a few days time via Email.";
    text-indent: 0;
    display: block;
    line-height: normal; 
    }
    
    .customization2_payment-description_none-selected vv-text:nth-child(2) p{
    text-indent: -9999px;
    line-height: 0;
    display: block;
    }
    .customization2_payment-description_none-selected vv-text:nth-child(2) p:after{
    content: "We store your data for the purpose of processing and handling your order. Your data are deleted after we have fulfilled our contractual obligations and the statutory retention obligations have expired. You can find more information on how we handle your personally identifiable data and on your rights in our Data privacy, see link below.";
    text-indent: 0;
    display: block;
    line-height: normal; 
    }
    
    .customization2_payment-description_organizer-bank-transfer vv-heading h4{
    text-indent: -9999px;
    line-height: 0;
    display: block;
    }
    .customization2_payment-description_organizer-bank-transfer vv-heading h4:after{
    content: "";
    text-indent: 0;
    display: block;
    line-height: normal;   
    }
    
    .customization2_payment-description_organizer-bank-transfer  vv-text.vv-mb-xxs p{
    text-indent: -9999px;
    line-height: 0;
    display: block;
    }
    .customization2_payment-description_organizer-bank-transfer  vv-text.vv-mb-xxs p:after{
    content: "You will receive a binding booking confirmation and an invoice in a few days time via Email.";
    text-indent: 0;
    display: block;
    line-height: normal; 
    }
    
    .customization2_payment-description_organizer-bank-transfer  vv-text:nth-child(3)  p{
    text-indent: -9999px;
    line-height: 0;
    display: block;
    }
    .customization2_payment-description_organizer-bank-transfer  vv-text:nth-child(3)  p:after{
    content: "We store your data for the purpose of processing and handling your order. Your data are deleted after we have fulfilled our contractual obligations and the statutory retention obligations have expired. You can find more information on how we handle your personally identifiable data and on your rights in our Data privacy, see link below.";
    text-indent: 0;
    display: block;
    line-height: normal;  
    }
    `
    var paymentStyleSheet = document.createElement("style");
    paymentStyleSheet.type = "text/css";
    paymentStyleSheet.innerText = paymentStyles;

    paymentStyleSheet.onreadystatechange = handlerS;
    paymentStyleSheet.onload = handlerS;

    document.head.appendChild(paymentStyleSheet);

    function handlerS() {
        console.log('Payment style added');
    }

}


var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        //Insert your code here.

    }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
