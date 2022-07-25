//What runs on every new attendee form
function handler(){
  console.log("Add Privacy Notice Link");
  var privacyNotice = $$('.customization2_attendee_further-data_custom-question').findField('Privacy Notice');

  $($(privacyNotice).find(".customization2_attendee_further-data_custom-question_checkbox-line_label")).before('<p style = "font-size: .875rem; line-height: 1.37rem; color: #343a3f;"> I want to have my contact details shared within the Oerlikon Group and with Oerlikon\'s partners of the 2022 AMTC conference listed in the <a href="https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Oerlikon/2022+AMTC+Conference+privacy+noticefor+website_AF.pdf" target="_blank"> Privacy Notice </a> in order to receive information about their services, products and invites to their events and conferences.</p>');

  $(".customization2_attendee_further-data_custom-question_checkbox-line_label:contains(I want to have my contact details shared within the Oerlikon Group)").hide();
}
handler();
//Insert here, what should run once
//
var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
    console.log("Node has been inserted: ", event.target);    
    handler(); 
  }
}
document.addEventListener("animationstart", insertionListener, false); 
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
