console.log("--clicked -> github check_duplicates.js")
attendeeDiv= $(".customization2_attendees");
mails=[];
errorMssge="Diese E-Mail ist bereits für diese Veranstaltung angemeldet";

function getAllMails(){
  mails=[];
  attendeeDiv.find("input[type=email][name=email]").each(function() {
    mails.push($(this).val());
  });
  attendeeDiv.find(".customization2_attendee_contact-data_email_value").each(function() {
    console.log("exists");
    mail = $(this).text();
    mail = mail.replace(/(\r\n|\n|\r)/gm, "");
    mail=mail.replace(/\s/g,'');
    //console.log(mail)
    mails.push(mail);
   });
console.log(mails);
} 

getAllMails();

function checkMails(){
attendeeDiv.find("input[type=email][name=email]").each(function() {
  if($(this).nextAll('.start:first').attr('id')!="errormail")
  $( "<p id='errormail' style='color:red;display:none;'>Diese E-Mail ist bereits für diese Veranstaltung angemeldet.</p>" ).insertAfter(this);
    
  $(this).on('input', function() {
        getAllMails();
        console.log($(this).val());
        count =0;
      for(let i=0;i<mails.length;i++){
          if(mails[i]==$(this).val()){
              count ++;
          }
      }
        if(count>1){
          $(this).prop("aria-invalid",true);
          console.log("Fehler:  kommt mehrfach vor!");
          $(this).nextAll('.start:first').css("display","inline");
          $(".customization-button-next").prop("disabled",true);
        //  $( "<p style='color:red;'>Fehler! Die Mail kommt mehrmals vor</p>" ).insertAfter(attendeeDiv);
          $(".customization2_attendee_edit-action_save").prop("disabled",true);
          $(".customization2_attendee_edit-action_save").before("<span class=“error-message”>"+errorMssge+"</span>");
        }else {
          $("div.customization2_attendee_edit-action").find(".error-message").remove();
          console.log("kein Fehler");
          $(this).nextAll('.start:first').css("display","none");
        //  $(this).prop("aria-invalid",false);
          $(".customization-button-next").prop("disabled",false);
          $(".customization2_attendee_edit-action_save").prop("disabled",false);
        }
   });
});
}

checkMails();
$(".customization2_attendee_contact-data_copy-link").click(function() {
checkMails();
});


