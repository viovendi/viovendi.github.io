console.log("--clicked -> github check_duplicates.js")
attendeeDiv= $(".customization2_attendees");
mails=[]

attendeeDiv.find("input[type=email][name=email]").each(function() {
    mails.push($(this).val());
});
attendeeDiv.find(".customization2_attendee_contact-data_email_value").each(function() {
    console.log("exists");
    mail = $(this).text();
    mail = mail.replace(/(\r\n|\n|\r)/gm, "");
    mail=mail.replace(/\s/g,'');
    console.log(mail)
    mails.push(mail);
});
console.log(mails);

attendeeDiv.find("input[type=email][name=email]").each(function() {
    $(this).on('input', function() { 
        console.log($(this).val());
      //for(let i=0;i<mails.length;i++){
        //  if(mails[i]==$(this).val()){
         //   console.log("Fehler:  kommt mehrfach vor!");
            //$(".customization-button-next").prop("disabled",true);
            //$( "<p style='color:red;'>Fehler! Die Mail kommt mehrmals vor</p>" ).insertAfter(attendeeDiv);
        //Dann setze ich das this auf color rot und füge danach eine fehlermeldung ein
        //  }
     // } 
   });
});


