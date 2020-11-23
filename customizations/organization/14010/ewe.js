function getAttendee(){
    $('.customization2_attendee_further-data_custom-question').each(function(i, element) {
      var attendee = $(this);
      var checkbox = attendee.find('input[type="checkbox"]')
      var inputs = attendee.find('vv-control-label').text().replace(/^\s+|\s+$/g, "");
      var labels = attendee.find('customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");;

      
      hideQuestionText('Einwilligungserklärung',labels);
      hideQuestionText('Einwilligungserklärung',inputs);
      hideQuestionText('Einwilligungserklärung',attendee);

        
      console.log(labels)
      console.log(inputs)

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
      var item = $(this).find('customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
      console.log("item:" +item);
 
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) == 0){
        $(this).find('.customization2_attendee_further-data_custom-question_label').css( "display", "none" );
      }
    });
  }

  function hide(tag, name){
   $(tag).each(function (i, element) {
       var item = $(this);
     var label = item.find("label");
     if(label.text().replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
         console.log("displayNone");
       $(label).css("display", "none");
     }
      
   });             
  }

  hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");

 
 
 
