function getAttendee(){
    $('.customization2_attendee_further-data_custom-question').each(function(i, element) {
      var attendee = $(this);
      var checkbox = attendee.find('input[type="checkbox"]')
      var inputs = attendee.find('vv-question-text').text().replace(/^\s+|\s+$/g, "");
      var labels = attendee.find('customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
      console.log(inputs)
      console.log(labels)
      checkbox.change(function(){
 
        if(checkbox.is(':checked')){
          //showQuestionText('Firma/Company',  inputs);
          console.log('checked');
        }else{
          //hideQuestionText('Firma/Company', inputs);
          console.log("not checked")  
 
        }
      });
    });
  }
 
  getAttendee();
 
 
  function hideQuestionText(shortName, inputs){
    $(inputs).each(function(i, element) {
      var item = $(this).find('label').text().replace(/^\s+|\s+$/g, "");
 
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) == 0){
        $(this).find('.ew-billing-information__field').css( "display", "none" );
      }
    });
  }
 
  function hideImputs(shortName){
    $('vv-question-text').each(function(i, element) {
      var item = $(this).find('label').text().replace(/^\s+|\s+$/g, "");
 
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) == 0){
        $(this).find('.ew-billing-information__field').css( "display", "none" );
      }
    });
  }
 
  function showQuestionText(shortName, inputs){
    $(inputs).each(function(i, element) {
      var item = $(this).find('label').text().replace(/^\s+|\s+$/g, "");
 
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) == 0){
        $(this).find('.ew-billing-information__field').css( "display", "block" );
      }
    });
  }
 
  hideImputs('Einwilligungserklärung kostenlos')
