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

 
 
 
