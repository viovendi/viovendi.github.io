console.log("Complex864")
 console.log('GTM file connected');



 //hideQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer - Vertretung");

     
     var radioGroupGastorMitglied = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Betreiben Sie einen eBay Shop');
     var productCheckbox = $$('.customization2_attendee_further-data_product_name').findField('Eventbox');
     console.log(productCheckbox):
   
// show 2 questions if 'Gast' or 'Stimmberechtigtes Mitglied' is clicked
        var inputs = $(radioGroupGastorMitglied).find('input');
        inputs.each(function( i, element ) {
        $(element).change(function(input) {
          console.log("changed");
            //on change show these 2 questions
           if($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().replace(/^\s+|\s+$/g, "").indexOf('Nein')){
             $('.customization2_attendee_further-data_custom-question-2').show();
             $(this).closest('.vv-nl-mb-lg').addClass('visibleCheckbox');
             $(this).closest('vv-input').find('input').addClass('addressField addressInput');

              console.log('show');
            }
            else{
               $('.customization2_attendee_further-data_custom-question-2').hide();
              console.log('hide');
            }
           });
        });

 function checkIfAddressEmpty(){
    var sum = 0;
    var select = false;
    $('.addressInput').each(function(){
      if($(this).val() !=''){
        sum = sum + 1;
      }
    });
    if($('.addressSelect').children("option:selected").val() != ''){
      select = true;
    }
    if(sum == 4 && select){
      makeAddressOptional();
    }
  }

function checkIfAddressEmpty(){
    var sum = 0;
    var select = false;
    $('.addressInput').each(function(){
      if($(this).val() !=''){
        sum = sum + 1;
      }
    });
    if($('.addressSelect').children("option:selected").val() != ''){
      select = true;
    }
    if(sum == 1 && select){
      makeAddressOptional();
    }
  }
  
  function makeAddressRequired(){
    if(!checkIfAddressEmpty() ){
      $('.customization2_attendee_edit-action_save').attr('disabled', true);
      $('.customization2_attendee_edit-action_save').after('<span class="button-error-message error-text error-text--multiple">Bitte geben Sie Ihre Adresse an</span>');
      $('.addressInput').closest('input').addClass('ng-invalid ng-dirty');
      $('.addressSelect').closest('select').addClass('ng-invalid ng-dirty'); 
    }
  }
  
  function makeAddressOptional(){
    $('.customization2_attendee_edit-action_save').attr('disabled', false);
    $('.button-error-message').remove();
    $('.addressInput').closest('input').removeClass('ng-invalid ng-dirty');
    $('.addressSelect').closest('select').removeClass('ng-invalid ng-dirty');
  }

 $('.visibleCheckbox').on('change', function(){
    if( $(this).find('input').is(':checked') ){
      makeAddressRequired();
      var timerId = setInterval(checkIfAddressEmpty, 500);
    }else{
      clearInterval(timerId);
      makeAddressOptional();
    }
  });


/*

  function addClassToField(shortName, className){
    $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
      var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
      
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
        console.log('shortName!');
        $(this).closest('.vv-nl-mb-lg').addClass(className);
      }
    });
  }
 
  
function productShow(shortName){
  $('vv-additional-question-product').each(function(i, element) {
    var item = $(this).find('.customization2_attendee_further-data_product_name').text();
    if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
      $(this).closest('.vv-nl-mb-lg').toggleClass('show');
    }
  });
} 
 
function productAddTitle(shortName, title, indexShowFunction){
  $('vv-additional-question-product').each(function(i, element) {
    var item = $(this).find('.customization2_attendee_further-data_product_name').text();
    if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
      var div = document.createElement("div");
      div.setAttribute("class","products-title");
      div.textContent = title;
      div.setAttribute("onclick","javascript:workshopShow"+indexShowFunction+"();");
      element.before(div);
      return false;
    }
  });
}
  
  

  
  
  addClassToField('Sonstiges', 'hiddenInput hidden');
  addClassToField('Themenwünsche', 'trackOnChange');

  
  $('.trackOnChange').on('change', function(){
    var thisVal = $(this).find('select').children("option:selected").val();
    if(thisVal == 'Ja'){
      $('.hiddenInput').removeClass('hidden');
    }else{
      $('.hiddenInput').addClass('hidden');
      $('.hiddenInput').find('input').val('');
    }
  });
  
  $('.customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
    var itemCheckbox = $(this).find('.customization2_attendee_further-data_product_name').text();
        console.log(itemCheckbox);
    if(itemCheckbox !== '' && itemCheckbox.replace(/^\s+|\s+$/g, "").indexOf('Goodie-Box') > -1){
      $(this).closest('.vv-nl-mb-lg').addClass('visibleCheckbox');
      $(this).before('<h3>Goodie-Box</h3><p>Ja, ich möchte ein kostenfreies eBay Open 2020.digital eBay-Goodie-Paket per Post erhalten. Das Paket erhalten die ersten 2.000 Teilnehmer, die sich für die Zusendung anmelden. Die Pakete werden in den Tagen vor der Veranstaltung an die in diesem Formular angegebene Adresse geliefert. Der Versand der Pakete ist nur an eine Postanschrift in Deutschland möglich. Weitere Informationen finden Sie unter <a href="www.ebayopen.de" target="_blank">www.ebayopen.de</a> sowie in den <a href="https://www.ebayopen.de/teilnahmebedingungen" target="_blank">Teilnahmebedingungen</a> und den ergänzenden <a href="https://www.ebay.de/help/policies/member-behavior-policies/datenschutzerklrung?id=4260" target="_blank">Datenschutzhinweisen</a>.</p>');
    }
  });
  
  
  $('.customization2_attendee_contact-data .row').each(function(i, element) {
    $('.vv-control-label').each(function(i, element) {
      var item = $(this).text();
      
      if( item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Straße') > -1 ||
         item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Nr.') > -1 ||
         item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('PLZ') > -1 ||
         item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Ort') > -1 ||
         item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Land') > -1 ){
        $(this).closest('vv-input').find('input').addClass('addressField addressInput');
        $(this).closest('vv-simple-select').find('select').addClass('addressField addressSelect');
      }
      
    });
  });
  
  function checkIfAddressEmpty(){
    var sum = 0;
    var select = false;
    $('.addressInput').each(function(){
      if($(this).val() !=''){
        sum = sum + 1;
      }
    });
    if($('.addressSelect').children("option:selected").val() != ''){
      select = true;
    }
    if(sum == 4 && select){
      makeAddressOptional();
    }
  }
  
  function makeAddressRequired(){
    if(!checkIfAddressEmpty() ){
      $('.customization2_attendee_edit-action_save').attr('disabled', true);
      $('.customization2_attendee_edit-action_save').after('<span class="button-error-message error-text error-text--multiple">Bitte geben Sie Ihre Adresse an</span>');
      $('.addressInput').closest('input').addClass('ng-invalid ng-dirty');
      $('.addressSelect').closest('select').addClass('ng-invalid ng-dirty'); 
    }
  }
  
  function makeAddressOptional(){
    $('.customization2_attendee_edit-action_save').attr('disabled', false);
    $('.button-error-message').remove();
    $('.addressInput').closest('input').removeClass('ng-invalid ng-dirty');
    $('.addressSelect').closest('select').removeClass('ng-invalid ng-dirty');
  }
  
  
  $('.visibleCheckbox').on('change', function(){
    if( $(this).find('input').is(':checked') ){
      makeAddressRequired();
      var timerId = setInterval(checkIfAddressEmpty, 500);
    }else{
      clearInterval(timerId);
      makeAddressOptional();
    }
  });
*/
