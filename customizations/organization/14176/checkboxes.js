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
     // scroll page back to top
     $('.customization2_attendee_contact-data_first-name label').trigger('click');
   }
   
   function clickedEdit(name){
     addClassToField('Mit dem Freiticket stimmst Du der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
     addClassToField('Mit dem Freiticket stimmst Du widerruflich der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
     addClassToField('Mit dem Ticket stimmst', 'check-boxes-wrapper', name);
     addClassToField('Mit dem Ticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);

     enabledDisabledButton(name);
     $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group').on('change', function(){
       enabledDisabledButton(name);
     });
   }

function addTextUnderQuestion(shortName, className, wrapperClass){
    $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
      var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
      
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
        $(this).find('.customization2_attendee_further-data_custom-question_label').css('font-size','12px') ;
        $(this).after('<div class="addedtext" style="font-size: 12px; color: #343a3f; margin-top: 20px;margin-bottom: 30px;"><p>Mit Ankreuzen der oben aufgeführten Konferenzpartner oder Teilnahme an deren Sessions erlaubst Du uns, Deine Daten an diese zu übermitteln, damit diese Dich per Mail oder Telefon ansprechen können. Dazu erhalten sie Deine Adress- und Kontaktdaten sowie den Nachweis dieser Einwilligung, die Du im Übrigen jederzeit mit Wirkung für die Zukunft gegenüber den Konferenzpartnern widerrufen kannst. Sitzt einer der Partner außerhalb der EU, so weisen wir darauf hin, dass dort ggfs. ein niedrigeres Datenschutzniveau als in der EU besteht.</p></div>');         
      }
    });
  }

   
   function init(name){
     addClassToField('Mit dem Freiticket stimmst Du der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
     addClassToField('Mit dem Freiticket stimmst Du widerruflich der Weitergabe Deiner Kontaktdaten', 'check-boxes-wrapper', name);
     addClassToField('Mit dem Ticket stimmst', 'check-boxes-wrapper', name);
     addClassToField('Mit dem Ticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);
      
     addTextUnderQuestion('Mit dem Freiticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);
     addTextUnderQuestion('Mit dem Ticket stimmst Du jederzeit widerruflich', 'check-boxes-wrapper', name);
        
     markAsChecked(name);
     $('.'+name+' .check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group').on('change', function(){
       enabledDisabledButton(name);
     });
   }
   init('customization2_attendee-1');

   
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
