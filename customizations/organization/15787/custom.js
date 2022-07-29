console.log('github-js');

/*
function salutationChecked() {
  $('.customization2_attendee_contact-data_salutation_input').on('change', function(){
    console.log('change');
  });
  
  
  $('.customization2_attendee_contact-data_salutation_input').each(function (i, element) {
    var item = $(this)
    var label = item.find("label");
    if (label[0].innerText.replace(/^\s+|\s+$/g, "") == "EFN vorhanden?**") {
       
      var radioLabel = item.find("input[type=radio]");
      $(radioLabel[1]).change(function(){
        if($(radioLabel[1]).is(':checked')){
          hide("vv-question-text","EFN Eingabe");
          show("vv-question-file","Bitte laden Sie einen Nachweis Ihrer medizinischen Tätigkeit hoch"); 
        }
      });
       
       $(radioLabel[0]).change(function(){
        if($(radioLabel[0]).is(':checked')){ 
          show("vv-question-text","EFN Eingabe");
          hide("vv-question-file","Bitte laden Sie einen Nachweis Ihrer medizinischen Tätigkeit hoch");
        }
      });
    }
  });
 
}
 
 */

function salutationChecked() {
  $('.customization2_attendee_contact-data_salutation_input').on('change', function(){
    console.log('change');
  });
}

function hide(tag, name){
 $(tag).each(function (i, element) {
   var item = $(this);
   var label = item.find("label");

   if(label[0].innerText.replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
     $(item[0]).css("display", "none");
   }
 });             
}

function show(tag, name){
 $(tag).each(function (i, element) {
   var item = $(this);
   var label = item.find("label");

   if(label[0].innerText.replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
     $(item[0]).css("display", "block");
   }
 });             
}
   
hide("vv-question-text","EFN Eingabe");
hide("vv-question-file","Bitte laden Sie einen Nachweis Ihrer medizinischen Tätigkeit hoch"); 

salutationChecked();


var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    salutationChecked();
  }
}

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
