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
function findQuestionByLabel(label){
    var field = $$('.customization2_attendee_further-data_custom-question').findField(label);
    if(field==undefined){
        field = findDropDownByLabel(label);
    }
    return label;
}

function setValueToTextInput(inputLabel, value){

}
function setValueToDropdown(dropdownLabel, value){

}
function setValueToDropdownArray(dropdownLabelArray, valueArray){
  if(dropdownLabelArray.length!=valueArray.length){
    console.log('array size not equal');
    return
  }
  for(let i =0, i<valueArray.length;i++){
    
  }
}
function condQuestionDropdown(dropdownLabel , value , arrayOfLabelsToShow , arrayOfLabelsToHide , disableSaveOnValueSelected){
  
    var dropdown = findDropDownByLabel(dropdownLabel);
  
    const questionsToShow = [];
    for (let i = 0;i<arrayOfLabelsToShow.length;i++)
      questionsToShow[i] = findQuestionByLabel(arrayOfLabelsToShow[i]);
    
    const questionsToHide = [];
    for (let i = 0;i<arrayOfLabelsToHide.length;i++)
      questionsToHide[i] = findQuestionByLabel(arrayOfLabelsToHide[i]);
  
    $(dropdown).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
      if($(this).text().trim() == value){
        
        for (let i = 0;i<questionsToShow.length;i++){
            $(questionsToShow[i]).show()
            $(questionsToShow[i]).find('vv-optional-text').css("display","none");
            disableWhenEmpty(questionsToShow[i]);
        }
         for (let i = 0;i<questionsToHide.length;i++){
             $(questionsToHide[i]).hide()
             $(questionsToHide[i]).find('.customization2_attendee_further-data_custom-question_input').val('')
        }
        if(disableSaveOnValueSelected)
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
   });
    
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
   if($(this).text().trim() == 'andere'){
         $(field1).show()
         $(field1).find('vv-optional-text').css("display","none");
         disableWhenEmpty(field1);
      }else{
         $(field1).hide()
         $(field1).find('.customization2_attendee_further-data_custom-question_input').val('')
         $('.customization2_attendee_edit-action_save').prop("disabled", false);
      }
   });
   
   /*
    var observer1 = new MutationObserver( function(mutations) {
        console.log('dropdown1 changed');
    });
   dropdown1

   console.log(dropdown1);
   console.log($(dropdown1).get(0));
   console.log(getValueTagFromDropDown($(dropdown1)).get(0));
   console.log(getValueTagFromDropDown($(dropdown1)));
   console.log($(getValueTagFromDropDown($(dropdown1))).get(0));

   observer1.observe(dropdown1,{characterData: true, childList: true});
 
   observer1.observe($(getValueTagFromDropDown($(dropdown1))).get(0),{characterData: true, childList: true});
*/

   $(getValueTagFromDropDown($(dropdown1))).change(function() {
      console.log('change detected on dropdown 1');
      if($(this).find('option').filter(':selected').text().trim() == 'andere'){
         $(field1).show();
         $(field1).find('vv-optional-text').css("display","none");
         disableWhenEmpty(field1);
      }else{
         $(field1).hide();
         $(field1).find('.customization2_attendee_further-data_custom-question_input').val('');
         $('.customization2_attendee_edit-action_save').prop("disabled", false);
      }
   });
    
  $(dropdown2).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
   if($(this).text().trim() == 'andere'){
      $(field1).show();
      $(field1).find('vv-optional-text').css("display","none");
      disableWhenEmpty(field1);
   }else{
      $(field1).hide()
      $(field1).find('.customization2_attendee_further-data_custom-question_input').val('')
      $('.customization2_attendee_edit-action_save').prop("disabled", false);
      }
   });
    
     $(dropdown3).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
   if($(this).text().trim() == 'andere'){
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
    
 $(dropdown4).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
   if($(this).text().trim() == 'andere'){
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
    

var field = $$('.customization2_attendee_further-data_custom-question').findField('Branche (optional)');
$(field).hide()
var dropdown =  findDropDownByLabel('Welcher Branche');
    
$(dropdown).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
   if($(this).text().trim() == 'andere'){
  $(field).show();
  disableWhenEmpty(field);
}else{
  $(field).hide();
  $(field).find('.customization2_attendee_further-data_custom-question_input').val('');
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
