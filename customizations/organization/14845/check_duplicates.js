console.log("-clicked -> github check_duplicates.js")
mails=[]
$("input[type=email][name=email]").each(function() {
    mails.push($(this).val());
});
console.log(mails);
let fehler="";
for(let i=0;i<mails.length;i++){
    for(let k=0;k<mails.length;k++){
        if(mails[k].equals(mails[i])){console.log("Fehler: Mail:"+mails[k]+" kommt mehrfach vor!");}
 }
}
