 var stateObj = {};
   
   function checkStateObj(obj){     
     var keys = Object.keys(obj);

     for (var i = 0; i < keys.length; i++) {
       var val = obj[keys[i]];       
       enabledDisabledButton(keys[i], val);
     }
   }
   
   function saveObjToLocalStorage(obj){
     if(localStorage.getItem('stateObject') != null){
       localStorage.removeItem('stateObject');
     }
     localStorage.setItem('stateObject', JSON.stringify(obj));
   }
   
   
   function main(){
     $('vv-additional-question-product .customization2_attendee_further-data_product_checkbox').on('change', function(e){
       
       var wrapperClassArr = $(this).closest('.customization2_attendee-state_edit').attr('class').split(' ');
       var wrapperClassName = wrapperClassArr[5];
       
       calcCheckboxes(wrapperClassName);
       
       stateObj[wrapperClassName] = calcCheckboxes(wrapperClassName);
       
       checkStateObj(stateObj);
       
       saveObjToLocalStorage(stateObj);
       
     });
   }
   
   function calcCheckboxes(attendee){
     var checked = 0;
     $('.'+attendee+' .customization2_attendee_further-data vv-checkbox label').each(function(){
       if ( $(this).find('.vv-checkbox__input').is(':checked') ) {
         checked = checked + 1;
       }
     });
     return checked;
   }
   
   function enabledDisabledButton(attendee, number){
    if(number < 1 ){
      $('.'+attendee+' .customization2_attendee_edit-action_save').attr('disabled', true);
      
      if( $('.'+attendee+' .button-error-message').length < 1 ){
        $('.'+attendee+' .customization2_attendee_edit-action_save').after('<span class="button-error-message error-text error-text--multiple">Bitte wählen Sie 1 Ticket aus.</span>');
      }
    }else{
      $('.'+attendee+' .customization2_attendee_edit-action_save').attr('disabled', false);
      $('.'+attendee+' .button-error-message').remove();
     
     // disable other checkboxes
     $('.'+attendee+' .customization2_attendee_further-data vv-checkbox label').each(function(){
       if ( $(this).find('.vv-checkbox__input').not(':checked') ) {
         console.log($(this));
        $('.'+attendee+' .customization2_attendee_further-data vv-checkbox').attr("disabled", true);
       }
     });
     
    }
  }
  
  function inint(){
    main();
    enabledDisabledButton('customization2_attendee-1', 0);
  }
  inint();
   
   
  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      var classNames = event.target.classList;

      for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];
        
        if(className.indexOf('customization2_attendee-') > -1){
          
          if(localStorage.getItem('stateObject') != null){
            
            var stateObj = JSON.parse(localStorage.getItem('stateObject'));
            
            var checked = 0;
            if(stateObj[className]){
              checked = stateObj[className];
            }
            enabledDisabledButton(className, checked);
          }
          
          main();
          return false;
        }
      }
    }
  }


  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
