function addClassToField(shortName, className, wrapperClass){
 $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
   
   if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
     $(this).closest('.vv-nl-mb-lg').addClass(className);
   }
 });
}

function markAsChecked(name){
 //search all further questions
 $('.customization2_attendee-1 .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
  
  // check all labels and check if it contains "Einwilligungserklärung kostenlos"
   var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
    if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Einwilligungserklärung kostenlos') > -1){
      $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group .vv-checkbox').each(function(){
        $(this).trigger('click');
      }
                                                                                                                                );
    }
 }
                                                                                        )
}


//funktion to hide Label of question
  function hide(tag, name){
   $(tag).each(function (i, element) {
     var item = $(this);
     var label = item.find("label");
      
     if(label.text().replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
       $(item).find('.customization2_attendee_further-data_custom-question_label').css( "display", "none" );
       $(item).find('.customization2_booker_further-data_custom-question_label').css( "display", "none" );

     }
      
   });             
  }

  hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");
  hide(".customization2_booker_further-data_custom-question","Einwilligungserklärung");



 
function init(name){
  addClassToField('Einwilligungserklärung kostenlos', 'check-boxes-wrapper', name);
  addClassToField('Einwilligungserklärung kostenpflichtig', 'check-boxes-wrapper', name);

  markAsChecked(name);
 //Add Text after Checkbox
  $('.'+name+' .check-boxes-wrapper .vv-checkbox__label--md').after('<span class="text-after-ewe"> Der Verwendung meiner Kontaktdaten für werbliche Zwecke gem. § 7 Abs. 3 UWG kann ich jederzeit widersprechen. Eine einfache Mitteilung über unsere <a href="https://contact.vogel.de/" target="_blank">Support-Seite</a> genügt.</span>');

 
 //add link to checkboxtext
 $('.'+name+' .customization2_attendee_further-data_custom-question_checkbox-line_label').wrapInner('<a href="https://privacy.vogel.de/" target="_blank"/>');

// add text after newsletter checkboxes
   $('.customization2_booking-terms_list').after('<span class="text-after-ewe"> Bitte beachten Sie: Mit Ihrer Registrierung zu dieser Veranstaltung erhalten Sie zusätzlich den kostenlosen redaktionellen Newsletter, den Sie jederzeit über den Abmelde-Link im Newsletter abbestellen können.</span>');
}

init('customization2_attendee-1');
init('customization2_booker')


var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
      hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");
      hide(".customization2_booker_further-data_custom-question","Einwilligungserklärung");


   var classNames = event.target.classList;

   for (var i = 0; i < classNames.length; i++) {
     var className = classNames[i];
     
     if(className.indexOf('customization2_attendee-') > -1){
       //clickedEdit(className);
       return false;
     }
   }

 }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
