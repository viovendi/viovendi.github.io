console.log("---> github check_duplicates.js")
attendeeDiv= $(".customization2_attendees");
mails=[];
errorMssge="Diese E-Mail ist bereits für diese Veranstaltung angemeldet";

/*
This Method collects all email-addresses that are already entered in the form, 
eighter still in their textinput field or if it already got saved the method takes the email which is displayed for the attendee 
*/
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
    mails.push(mail);
   });
console.log(mails);
} 

/*
This method goes through each currently active email-input-field and checks whether or not it is already entered 
for another attendee. If that is the case, an error message gets displayed above the save-button. 
The same thing will then also be checked each new keystroke of the email-input.
That save button together with the submit button at the bottom of the page gets disabled.
I first remove an already existing error message and than add a new one, this way it never gets displayed two times 
if for some reason the error gets detected 2 times. 
*/
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
        $(this).closest(".customization3_booking-participant_attendee").find(".customization2_attendee_edit-action_save").prop("disabled",true);
        $(this).closest(".customization3_booking-participant_attendee").find("div.customization2_attendee_edit-action").find(".error-message").remove();
        $(this).closest(".customization3_booking-participant_attendee").find(".customization2_attendee_edit-action_save").before("<span class=error-message>"+errorMssge+"</span>");
      }else {
        $(this).closest(".customization3_booking-participant_attendee").find("div.customization2_attendee_edit-action").find(".error-message").remove();
        $(".customization-button-next").prop("disabled",false);
       $(this).closest(".customization3_booking-participant_attendee").find(".customization2_attendee_edit-action_save").prop("disabled",false);
      }
   
  $(this).on('change paste input', function() {
      getAllMails();
      count =0;
      for(let i=0;i<mails.length;i++){
          if(mails[i]==$(this).val()){
              count ++;
          }
      }
        if(count>1){
          $(".customization-button-next").prop("disabled",true);
          $(this).closest(".customization3_booking-participant_attendee").find(".customization2_attendee_edit-action_save").prop("disabled",true);
          $(this).closest(".customization3_booking-participant_attendee").find("div.customization2_attendee_edit-action").find(".error-message").remove();
          $(this).closest(".customization3_booking-participant_attendee").find(".customization2_attendee_edit-action_save").before("<span class=error-message>"+errorMssge+"</span>");
        }else {
          $(this).closest(".customization3_booking-participant_attendee").find("div.customization2_attendee_edit-action").find(".error-message").remove();
          $(".customization-button-next").prop("disabled",false);
          $(this).closest(".customization3_booking-participant_attendee").find(".customization2_attendee_edit-action_save").prop("disabled",false);
        }
   });
 });
}

getAllMails();

checkMails();
$(attendeeDiv).on('click', '.customization2_attendee_contact-data_copy-link', function() {
  getAllMails();
  checkMails();
 console.log("clicked on copy-button");
});


$(attendeeDiv).on('tap', '.customization3_collapsible-wrapper_view-actions', function() {
  getAllMails();
  checkMails();
  console.log("clicked on the edit button2");
});
$(attendeeDiv).on('tap', '.vv-icon__size--sm', function() {
  getAllMails();
  checkMails();
  console.log("clicked on the edit button3");
});


