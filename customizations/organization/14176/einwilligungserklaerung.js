/*
function addClassToField2(shortName, className, wrapperClass){
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     $(this).closest('.vv-nl-mb-lg').addClass(className);
   }
 });
}


//funktion to hide Label of question
  function hide(tag, name){
   $(tag).each(function (i, element) {
     var item = $(this);
     var label = item.find("label");
      
     if(label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1){
       $(item).find('.customization2_attendee_further-data_custom-question_label').css( "display", "none" );
       $(item).find('.customization2_booker_further-data_custom-question_label').css( "display", "none" );
     }
      
   });             
  }

  hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");
  hide(".customization2_booker_further-data_custom-question","Einwilligungserklärung");



 
function init2(name){
  addClassToField2('Einwilligungserklärung', 'check-boxes-wrapper', name);
  
  //markAsChecked(name);
  //markAsCheckedBooker(name)
  
  if(name == 'customization2_attendee'){
    if(!!$('.customization2_attendee_further-data_custom-question_checkbox-group').length){
      if( !$('.'+name+' .customization2_attendee_further-data_custom-question_checkbox-line_label').hasClass('with-links')){
        var textString = $('.'+name+' .customization2_attendee_further-data_custom-question_checkbox-line_label').html();
        var textString1 = textString.replace("Einwilligungserklärung", "<a target='_blank' href='https://www.vogelitakademie.de/ewe'>Einwilligungserklärung</a>");
        var res = textString1.replace("(https://www.vogelitakademie.de/ewe)", "<a target='_blank' href='https://www.vogelitakademie.de/ewe'>(https://www.vogelitakademie.de/ewe)</a>");
        $('.'+name+' .customization2_attendee_further-data_custom-question_checkbox-line_label').html(res);
        $('.'+name+' .customization2_attendee_further-data_custom-question_checkbox-line_label').addClass('with-links');
      }
    }
  }
  else{
    if(!!$('.customization2_booker_further-data_custom-question_checkbox-group').length){
      if( !$('.'+name+' .customization2_booker_further-data_custom-question_checkbox-line_label').hasClass('with-links')){
        var textString = $('.'+name+' .customization2_booker_further-data_custom-question_checkbox-line_label').html();
        var textString1 = textString.replace("Einwilligungserklärung", "<a target='_blank' href='https://privacy.vogel.de/'>Einwilligungserklärung</a>");
        var res = textString1.replace("(https://www.vogelitakademie.de/ewe)", "<a target='_blank' href='https://www.vogelitakademie.de/ewe'>(privacy.vogel.de)</a>");
        $('.'+name+' .customization2_booker_further-data_custom-question_checkbox-line_label').html(res);
        $('.'+name+' .customization2_booker_further-data_custom-question_checkbox-line_label').addClass('with-links');
      }
    }
  }
  
}

init2('customization2_attendee');
init2('customization2_booker');


*/

/*
var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
  console.log("noteInserted test");
      hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");
      hide(".customization2_booker_further-data_custom-question","Einwilligungserklärung");
      init('customization2_booker');
      init('customization2_attendee');
      console.log(!$('.customization2_attendee .customization2_attendee_further-data_custom-question_checkbox-line_label').hasClass('with-links'))

   var classNames = event.target.classList;

   for (var i = 0; i < classNames.length; i++) {
     var className = classNames[i];
     
     if(className.indexOf('customization2_attendee-') > -1){
       //clickedEdit(className);
       return false;
     }
    if(className.indexOf('customization2_booker') > -1){
       //clickedEdit(className);
       return false;
     }
   }

 }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
*/



