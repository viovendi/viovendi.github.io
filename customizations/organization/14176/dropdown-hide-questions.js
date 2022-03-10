function getValueFromDropDown(dropDown){
   const valueText = $(dropDown).find('.vv-selection-input__value.m-ellipsis');
   console.log(valueText);
   const value = $(valueText).text().trim();
  
   return value;
}
function getValueTagFromDropDown(dropDown){
   const valueText = $(dropDown).find('.vv-selection-input__value.m-ellipsis');
   return valueText;
}
function findDropDownByLabel(label){
   var found = null;
   $(".vv-selection-input").each(function(){
      const labelText = $(this).find(".vv-control-label").text();
      if(labelText.trim()==label.trim()){
         console.log('found label: '+label.trim());
          found =this;
      }
   });
   return found;
}



// Funktion to show and hide custom question

function handler(){
    var styles = `
        .error-state{
            border-color: #ea674d!important;
            background-color: #fff1ef!important;
           
        }
        .error-message{
            display: block;
            color: #ea674d;
            font-size: 12px;
            line-height: 1;
            margin-bottom: 10px;
            left: 0;
            top: 3px;
        }
    `
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;

    styleSheet.onreadystatechange = handlerS;
    styleSheet.onload = handlerS;

    document.head.appendChild(styleSheet);

    function handlerS() {
        console.log('style added');
    }
    
    var field1 = $$('.customization2_attendee_further-data_custom-question').findField('Welche Position hast Du? (optional)');
   console.log('field: '+field1);
    $(field1).hide()
    
    var field2 = $$('.customization2_attendee_further-data_custom-question').findField('Welche Funktion hast Du? (optional)');
      console.log('field: '+field2);

    $(field2).hide()
    
    var dropdown1 = findDropDownByLabel('Position im Unternehmen?');
    console.log('Dropdown 1 :'+dropdown1);
    var dropdown2 = findDropDownByLabel('Position im Unternehmen');
    console.log('Dropdown 2 :'+dropdown2);
    var dropdown3 = findDropDownByLabel('Funktion im Unternehmen');
    console.log('Dropdown 3 :'+dropdown3);
    var dropdown4 = findDropDownByLabel('Funktion im Unternehmen?');
    console.log('Dropdown 4 :'+dropdown4);
    
    console.log('Value: '+getValueFromDropDown(dropdown1));
   
   $(dropdown1).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
    console.log('dropdown1 changed');
   });
    var observer1 = new MutationObserver( function(mutations) {
        console.log('dropdown1 changed');
    });
   dropdown1
   
   /*
   console.log(dropdown1);
   console.log($(dropdown1).get(0));
   console.log(getValueTagFromDropDown($(dropdown1)).get(0));
   console.log(getValueTagFromDropDown($(dropdown1)));
      console.log($(getValueTagFromDropDown($(dropdown1))).get(0));

   observer1.observe(dropdown1,{characterData: true, childList: true});
   */
   
   observer1.observe($(getValueTagFromDropDown($(dropdown1))).get(0),{characterData: true, childList: true});
/*
   $(getValueTagFromDropDown($(dropdown1))).change(function() {
      console.log('change detected on dropdown 1');
if($(this).find('option').filter(':selected').text().trim() == 'andere'){
  $(field1).show()
  $(field1).find('vv-optional-text').css("display","none");
  disableWhenEmpty(field1);
}else{
  $(field1).hide()
  $(field1).find('.customization2_attendee_further-data_custom-question_input').val('')
  $('.customization2_attendee_edit-action_save').prop("disabled", false);
}
   }
                     );
    
     $(dropdown2).change(function() {
if($(this).find('option').filter(':selected').text().trim() == 'andere'){
  $(field1).show()
  $(field1).find('vv-optional-text').css("display","none");
    disableWhenEmpty(field1);
}else{
  $(field1).hide()
  $(field1).find('.customization2_attendee_further-data_custom-question_input').val('')
  $('.customization2_attendee_edit-action_save').prop("disabled", false);
}
   }
                     );
    
     $(dropdown3).change(function() {
if($(this).find('option').filter(':selected').text().trim() == 'andere'){
  $(field2).show()
  $(field2).find('vv-optional-text').css("display","none");
  disableWhenEmpty(field2);
}else{
  $(field2).hide()
  $(field2).find('.customization2_attendee_further-data_custom-question_input').val('')
  $('.customization2_attendee_edit-action_save').prop("disabled", false);
}
   }
                     );
    
     $(dropdown4).change(function() {
if($(this).find('option').filter(':selected').text().trim() == 'andere'){
  $(field2).show()
  $(field2).find('vv-optional-text').css("display","none");
    disableWhenEmpty(field2);
}else{
  $(field2).hide()
  $(field2).find('.customization2_attendee_further-data_custom-question_input').val('')
  $('.customization2_attendee_edit-action_save').prop("disabled", false);
}
   }
                     );
    */
   
function disableWhenEmpty(field){
    
   
   if(!$(field).find('.customization2_attendee_further-data_custom-question_input').hasClass("error-state")){
       $( "<div class='error-message'>Erforderlich</div>" ).insertAfter($(field).find('.customization2_attendee_further-data_custom-question_input'));
   }
    
   $(field).find('.customization2_attendee_further-data_custom-question_input').addClass('error-state');
   $('.customization2_attendee_edit-action_save').prop("disabled", true);
    
   $(field).find('.customization2_attendee_further-data_custom-question_input').on('input', function() {
       
      if($(this).val().trim().length==0){
         $(this).addClass('error-state');
          $(field).find('.error-message').show();
         $('.customization2_attendee_edit-action_save').prop("disabled", true);
          
       }else{
         $(this).removeClass('error-state');
           $(field).find('.error-message').hide();
         $('.customization2_attendee_edit-action_save').prop("disabled", false);
       }
    });
 }
    
    
    // ---------------- OLD UGLY CODE -----------------
 
    
   /* var funkton = $$('.customization2_attendee_further-data_custom-question').findField('Welche Position hast Du? (optional)');
    
    $(funkton).css("display","none")   
       var ddPosition = $(select).find('.customization2_attendee_further-data_custom-question_dropdown')
       var inputPosition = $(funkton).find('.customization2_attendee_further-data_custom-question_input')
       var ddPosition2 = $(select2).find('.customization2_attendee_further-data_custom-question_dropdown')
       ddPosition.change(function(){
            var state = ddPosition.val().trim()
            if (state.includes("andere")) {
              $(funkton).css("display","block");
              $(funkton).find('vv-optional-text').css("display","none");
              inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
                var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
                  if ( input == "") {
                        $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  }
                  else {    
                      $('.customization2_attendee_edit-action_save').attr('disabled', false);
                      $('.input-error-message').remove();
                  }
            }
            else {    
              $(funkton).css("display","none") 
              inputPosition.val('')
            }
       }
                        )
    
          inputPosition.change(function(){
            var input = inputPosition.val().replace(/^\s+|\s+$/g, "")
              if ( input == "") {
                  $('.customization2_attendee_edit-action_save').attr('disabled', true);
                  inputPosition.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
              }
              else {    
                  $('.customization2_attendee_edit-action_save').attr('disabled', false);
                  $('.input-error-message').remove();
              }
       }
                        )
    // Funktion im Unternehmen?*
/*
    ddPosition2.change(function(){
      var state = ddPosition2.val().trim()
      if (state.includes("andere")) {
        $(funkton2).css("display","block");
        $(funkton2).find('vv-optional-text').css("display","none");
        inputPosition2.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
          var input = inputPosition2.val().replace(/^\s+|\s+$/g, "")
            if ( input == "") {
                  $('.customization2_attendee_edit-action_save').attr('disabled', true);
            }
            else {    
                $('.customization2_attendee_edit-action_save').attr('disabled', false);
                $('.input-error-message').remove();
            }
      }
      else {    
        $(funkton2).css("display","none") 
        inputPosition2.val('')
      }
 } 
                  )
    inputPosition2.change(function(){
      var input = inputPosition2.val().replace(/^\s+|\s+$/g, "")
        if ( input == "") {
            $('.customization2_attendee_edit-action_save').attr('disabled', true);
            inputPosition2.after('<span class="input-error-message error-text error-text--multiple">Bitte tragen Sie etwas in das Feld ein</span>');
        }
        else {    
            $('.customization2_attendee_edit-action_save').attr('disabled', false);
            $('.input-error-message').remove();
        }
 }
                  )
  
      $('customization2_attendee_view-action_edit').on( "click", function() {
  console.log( "clicked" );
});
*/
/*
 Google Tag Manager JS Helpers used
*/
var field = $$('.customization2_attendee_further-data_custom-question').findField('Branche (optional)');
//$(field).hide()
var dropdown =  findDropDownByLabel('Welcher Branche');
    
   $(dropdown).change(function() {
if($(this).find('option').filter(':selected').text().trim() == 'andere'){
  $(field).show()
  disableWhenEmpty(field);
}else{
  $(field).hide()
  $(field).find('.customization2_attendee_further-data_custom-question_input').val('')
  $('.customization2_attendee_edit-action_save').prop("disabled", false);
}
   }
                     );

 }
handler();

var insertionListener = function(event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted: ", event.target);
    //Inser your code here.
    handler();

    $('customization2_attendee_view-action_edit').on( "click", function() {
        console.log( "clicked" );
    });
  }
}

  
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
