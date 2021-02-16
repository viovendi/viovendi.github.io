   function addClassToField(shortName, className, wrapperClass){
    $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
      var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
      
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
        $(this).closest('.vv-nl-mb-lg').addClass(className);
      }
    });
  }
   
  function enabledDisabledButton(name){
    if(calcCheckboxes(name) < 5 ){
      $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', true);
      if( $('.'+name+' .check-boxes-wrapper .button-error-message').length < 1 ){
        $('.'+name+' .check-boxes-wrapper .vv-checkbox-group__control').after('<span class="button-error-message error-text error-text--multiple">Bitte kreuzen Sie mindestens 5 an.</span>');
      }
    }else{
      $('.'+name+' .customization2_attendee_edit-action_save').attr('disabled', false);
      $('.'+name+' .button-error-message').remove();
    }
  }
  
   function calcCheckboxes(name){
     var checked = 0;
     $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group vv-checkbox label').each(function(){
       if ( $(this).find('.vv-checkbox__input').is(':checked') ) {
         checked = checked + 1;
       }
     });
     return checked;
   }
   
   function markAsChecked(name){
     $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group .vv-checkbox').each(function(){
       $(this).trigger('click');
     });
   }
   
   function clickedEdit(name){
     addClassToField('Mit dem Freiticket stimmst Du der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
     enabledDisabledButton(name);
     $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group').on('change', function(){
       enabledDisabledButton(name);
     });
   }
//funktion to hide Label of question
  function hide2(tag, name){
   $(tag).each(function (i, element) {
     var item = $(this);
     var label = item.find("label");
      
     if(label.text().replace(/^\s+|\s+$/g, "").indexOf(name) > -1){
       $(item).find('.customization2_attendee_further-data_custom-question_label').css( "display", "none" );
       $(item).find('.customization2_booker_further-data_custom-question_label').css( "display", "none" );
     }
      
   });             
  }

  hide2(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");
  hide2(".customization2_booker_further-data_custom-question","Einwilligungserklärung");


   
   function init(name){
     addClassToField('Mit dem Freiticket stimmst Du der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
      
     addClassToField('Einwilligungserklärung', 'check-boxes-wrapper', name);
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
      
      
      
      
     markAsChecked(name);
     $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group').on('change', function(){
       enabledDisabledButton(name);
     });
   }
   init('customization2_attendee-1');
   init('customization2_booker');

   
  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
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
