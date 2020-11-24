function addClassToField(shortName, className, wrapperClass){
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
   
   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     $(this).closest('.vv-nl-mb-lg').addClass(className);
   }
 });
}

function markAsChecked(name){
  $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group .vv-checkbox').each(function(){
    $(this).trigger('click');
  });
}


//funktion to hide Label of question
  function hide(tag, name){
   $(tag).each(function (i, element) {
     var item = $(this);
     var label = item.find("label");
      
     if(label.text().replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
       $(item).find('.customization2_attendee_further-data_custom-question_label').css( "display", "none" );
     }
      
   });             
  }

  hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");

 
function init(name){
  addClassToField('Einwilligungserklärung', 'check-boxes-wrapper', name);
  markAsChecked(name);
  $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group').on('change', function(){
    enabledDisabledButton(name);
  });
}
init('customization2_attendee-1');

var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
      hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");

   var classNames = event.target.classList;

   for (var i = 0; i < classNames.length; i++) {
     var className = classNames[i];
     
     if(className.indexOf('customization2_attendee-') > -1){
       clickedEdit(className);
       return false;
     }
   }

 }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
