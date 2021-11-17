console.log("--clicked -> github check_duplicates.js")
attendeeDiv= $(".customization2_attendees");
mails=[];

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

attendeeDiv.find("input[type=email][name=email]").each(function() {
  $( "<p #errormail style='color:red;'>Fehler! Die Mail kommt mehrmals vor</p>" ).insertAfter(this);
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
        console.log("Fehler:  kommt mehrfach vor!");
              //$(this).css({ 'color': 'red', 'background-color': 'pink' });
              $(this).closest('.customization3_collapsible-wrapper_body').find("#errormail").show();
            $(".customization-button-next").prop("disabled",true);
            //$( "<p style='color:red;'>Fehler! Die Mail kommt mehrmals vor</p>" ).insertAfter(attendeeDiv);
          $(".customization2_attendee_edit-action_save").prop("disabled",true);
        }else {
         // $(this).closest('.customization3_collapsible-wrapper_body').find("#errormail").hide();
        //$(this).css({ 'color': 'black', 'background-color': 'white' });
            $(".customization-button-next").prop("disabled",false);
          $(".customization2_attendee_edit-action_save").prop("disabled",false);
        }
   });
});


