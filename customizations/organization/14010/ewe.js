function getAttendee(){
    $('.customization2_attendee_further-data_custom-question').each(function(i, element) {
      var attendee = $(this);
      var checkbox = attendee.find('input[type="checkbox"]')
      var inputs = attendee.find('vv-question-text');

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
 


   function markAsChecked(shortName, className, wrapperClass){
    $('.'+wrapperClass+' .customization2_attendee_further-data .vv-nl-mb-lg').each(function(i, element) {
      var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
      console.log(item);
      if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > -1){
        $('.check-boxes-wrapper .customization2_attendee_further-data_custom-question_checkbox-group .vv-checkbox').each(function(){
            $(this).trigger('click');
            console.log("click");
        });
      }
    });
  }
markAsChecked('Einwilligungserklärung','check-boxes-wrapper','customization2_attendee-1')
markAsChecked('Einwilligungserklärung(optional)','check-boxes-wrapper','customization2_attendee-1')



  function hide(tag, name){
   $(tag).each(function (i, element) {
     var item = $(this);
     var label = item.find("label");
     if(label.text().replace(/^\s+|\s+$/g, "").indexOf(name) == 0){
       console.log("displayNone");
       $(item).find('.customization2_attendee_further-data_custom-question_label').css( "display", "none" );
     }
      
   });             
  }

  hide(".customization2_attendee_further-data_custom-question","Einwilligungserklärung");

 
 
 
