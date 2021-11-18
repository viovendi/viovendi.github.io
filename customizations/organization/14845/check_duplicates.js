console.log("---> github check_duplicates.js")
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
 
   count =0;
   for(let i=0;i<mails.length;i++){
        if(mails[i]==$(this).val()){
            count ++;
        }
    }
      if(count>1){
        $(".customization-button-next").prop("disabled",true);
        $(".customization2_attendee_edit-action_save").prop("disabled",true);
        $(".customization2_attendee_edit-action_save").before("<span class=error-message>"+errorMssge+"</span>");
      }else {
        $("div.customization2_attendee_edit-action").find(".error-message").remove();
        $(".customization-button-next").prop("disabled",false);
        $(".customization2_attendee_edit-action_save").prop("disabled",false);
      }
   
  $(this).on('input', function() {
      getAllMails();
      count =0;
      for(let i=0;i<mails.length;i++){
          if(mails[i]==$(this).val()){
              count ++;
          }
      }
        if(count>1){
          $(".customization-button-next").prop("disabled",true);
          $(".customization2_attendee_edit-action_save").prop("disabled",true);
          $(".customization2_attendee_edit-action_save").before("<span class=error-message>"+errorMssge+"</span>");
        }else {
          $("div.customization2_attendee_edit-action").find(".error-message").remove();
          $(".customization-button-next").prop("disabled",false);
          $(".customization2_attendee_edit-action_save").prop("disabled",false);
        }
   });
 });
}

checkMails();



