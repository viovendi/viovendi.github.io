 function checkIfChecked(){
  	$('vv-radio__indicator').each(function(){
      console.log($(this).closest('vv-radio').length);

      if( $(this).closest('vv-radio').length ){

        var item = $(this).closest('vv-radio__label'),
            label = item.find("label"),
            label_text = label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( label_text.indexOf("Abstract submission") != -1){

          if( $(this).is(':checked') ){
              
          console.log("show");
        }
        else{console.log("hide")}
      }
    
    }
                                   })
 }
/*var stateObj = {};

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
  $('vv-additional-question-product .customization2_booker_further-data_product_checkbox').on('change', function(e){

    var wrapperClassArr = $(this).closest('.customization2_booker-state_edit').attr('class').split(' ');
    var wrapperClassName = wrapperClassArr[5];

    calcCheckboxes(wrapperClassName);

    stateObj[wrapperClassName] = calcCheckboxes(wrapperClassName);

    checkStateObj(stateObj);

    saveObjToLocalStorage(stateObj);

  });
}

function calcCheckboxes(attendee){
  var checked = 0;
  $('.'+attendee+' .customization2_booker_further-data vv-checkbox label').each(function(){
    if ( $(this).find('.vv-checkbox__input').is(':checked') ) {
      checked = checked + 1;
    }
  });
  return checked;
}

function enabledDisabledButton(attendee, number){
 if(number < 1 ){
   $('.'+attendee+' .customization2_booker_edit-action_save').attr('disabled', true);

   if( $('.'+attendee+' .button-error-message').length < 1 ){
     $('.'+attendee+' .customization2_booker_edit-action_save').after('<span class="button-error-message error-text error-text--multiple">Please select at least 1 presentation</span>');
   }
 }else{
   $('.'+attendee+' .customization2_booker_edit-action_save').attr('disabled', false);
   $('.'+attendee+' .button-error-message').remove();
 }
}

function inint(){
 main();
 enabledDisabledButton('customization2_booker', 0);
}
inint();


var insertionListener = function(event) {
 if (event.animationName === "nodeInserted") {
   var classNames = event.target.classList;

   for (var i = 0; i < classNames.length; i++) {
     var className = classNames[i];

     if(className.indexOf('customization2_booker-') > -1){

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
*/
