console.log("-clicked -> github check_duplicates.js")
mails=[]
$("input[type=email][name=email]").each(function() {
    mails.push($(this).val());
});
$(".vv-text vv-text__size--lg vv-text__weight--regular vv-color--text customization2_attendee_contact-data_email_value").each(function() {
    
    console.log("exists");
    mails.push($(this).text());
});
console.log(mails);
//let fehler="";
for(let i=0;i<mails.length;i++){
    for(let k=0;k<mails.length;k++){
        if(mails[k]==mails[i]&&k!=i){console.log("Fehler: Mail:"+mails[k]+" kommt mehrfach vor!");}
 }
}
