 
  console.log('GTM file connected');

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
  
  
productAddTitle("Do. 08.", "> Donnerstag, 08. Oktober 2020", "SD1");
productAddTitle("Fr. 09.", "> Freitag, 09. Oktober 2020", "SD2");
productAddTitle("Mo. 12.", "> Montag, 12. Oktober 2020", "SD3");
productAddTitle("Di. 13.", "> Dienstag. 13. Oktober 2020", "SD4");
productAddTitle("Mi. 14.", "> Mittwoch. 14. Oktober 2020", "SD5");
productAddTitle("Do. 15.", "> Donnerstag. 15. Oktober 2020", "SD6");
productAddTitle("Fr. 16.", "> Freitag. 16. Oktober 2020", "SD7");
productAddTitle("Mo. 19.", "> Montag. 19. Oktober 2020", "SD8");
productAddTitle("Di. 20.", "> Dienstag. 20. Oktober 2020", "SD9");
productAddTitle("Mi. 21.", "> Mittwoch. 21. Oktober 2020", "SD10");
productAddTitle("Do. 22.", "> Donnerstag. 22. Oktober 2020", "SD11");
productAddTitle("Fr. 23.", "> Freitag. 23. Oktober 2020", "SD12");
productAddTitle("Mo. 26.", "> Montag. 26. Oktober 2020", "SD13");
productAddTitle("Di. 27.", "> Dienstag. 27. Oktober 2020", "SD14");

function workshopShowSD1(){
   productShow('Do. 08.');
}
function workshopShowSD2(){
 productShow('Fr. 09.');
}
function workshopShowSD3(){
  productShow('Mo. 12.');
}
function workshopShowSD4(){
   productShow('Di. 13.');
}
function workshopShowSD5(){
   productShow('Mi. 14.');
}
function workshopShowSD6(){
   productShow('Do. 15.');
}
function workshopShowSD7(){
  productShow('Fr. 16.');
}
function workshopShowSD8(){
  productShow('Mo. 19.');
}
function workshopShowSD9(){
  productShow('Di. 20.');
}
function workshopShowSD10(){
  productShow('Mi. 20.');   
}
function workshopShowSD11(){
  productShow('Do. 21.');
}
function workshopShowSD12(){
  productShow('Fr. 23.');
}
function workshopShowSD13(){
  productShow('Mo. 26.');
}
function workshopShowSD14(){
  productShow('Di. 27.');
}
  
  $('.customization2_attendee_further-data vv-additional-questions .vv-nl-mb-lg:first-child').after('<h3>Beratungs-Sessions</h3><p>Buchen Sie für 39,- € (netto) einen exklusiven Business Development-Termin mit einer unserer Expert*innen. In einem intensiven Beratungsgespräch erfahren Sie, wie Sie Ihre Strategien optimieren und noch mehr aus Ihrem Geschäft bei eBay machen können! Das Beratungsgespräch findet an dem von Ihnen gebuchten Termin als Zoom-Videokonferenz statt. Die Einwahldaten erhalten Sie zum gegebenen Zeitpunkt per E-Mail. Weitere Informationen finden Sie in den <a href="https://www.ebayopen.de/teilnahmebedingungen" target="_blank">Teilnahmebedingungen</a> und den ergänzenden <a href="https://www.ebay.de/help/policies/member-behavior-policies/datenschutzerklrung?id=4260" target="_blank">Datenschutzhinweisen</a> sowie in der <a href="https://zoom.us/de-de/privacy.html" target="_blank">Zoom Datenschutzerklärung</a>.</p>');
  
  addClassToField('Sonstiges', 'hiddenInput hidden');
  addClassToField('Themenwünsche', 'trackOnChange');

  
  $('.trackOnChange').on('change', function(){
    var thisVal = $(this).find('select').children("option:selected").val();
    if(thisVal == 'Sonstiges'){
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
