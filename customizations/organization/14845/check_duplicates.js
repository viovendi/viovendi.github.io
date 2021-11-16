console.log("-clicked -> github check_duplicates.js")
mails=[]
$("input[type=email][name=email]").each(function() {
    mails.push($(this).val());
});
console.log(mails);
