
  console.log('Start working, Google Tag Manager');
  
  var formValid;
  function handler(){
    formValid = false;
    
    checkboxChecked();
	hide("vv-additional-question-dropdown","23.06.");
	hide("vv-additional-question-dropdown","24.06.");
	  
	hide("vv-additional-question-dropdown","25.03.2020");
	hide("vv-additional-question-dropdown","26.03.2020");
  }
  handler();
 
  $('.customization2_attendee_edit-action_save').mouseover( function(){
    formValid = $("form").hasClass( "ng-valid" );
  })
  
  $('.customization2_attendee_edit-action_save').on('click', function(){
    if(formValid){
      handler();
    }
  })
  
  $(window).on('click', function(event){
    var target = event.target;
	
    console.log(target);
    
	if( $(target).prop('tagName') === 'use' || $(target).prop('tagName') === 'svg'|| $(target).prop('tagName') === 'BUTTON' || $(target).hasClass('.customization2_attendee_view-action_edit') || $(target).closest('div').hasClass('.customization2_attendee_view-action_edit') ){
      if( $(target).closest('vv-icon').attr('name') === 'edit' || $(target).find('vv-icon').attr('name') === 'edit' ){
        console.log('EDIT Click');
        handler();
        checkIfChecked();
      }
    }
  });
  
  
  
  
  /*
  checkboxChecked();
  
  hide("vv-additional-question-dropdown","25.03.2020");
  hide("vv-additional-question-dropdown","26.03.2020");
  */
  
  function checkIfChecked(){
  	$('input[type=checkbox]').each(function(){
      
      console.log($(this).closest('vv-additional-question-product').length);
      
      if( $(this).closest('vv-additional-question-product').length ){

        var item = $(this).closest('vv-additional-question-product'),
            label = item.find("label"),
            label_text = label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( label_text.indexOf("BUSTOUR Rot") != -1 || label_text.indexOf("BUSTOUR Blau") != -1){
        
          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func');
              makeChecked('FORUM','NIGHT');
          }else{
            if( $(this).hasClass('checked-by-func') ){
              $(this).removeClass('checked-by-func');
              makeUnChecked('FORUM','NIGHT','.checked-by-func');
            }
          }

        }else if( label_text.indexOf("BUSTOUR Grün") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-grun');
              makeChecked('BREAKFAST','CLOSING');
          }else{
            if( $(this).hasClass('checked-by-func-grun') ){
              $(this).removeClass('checked-by-func-grun');
              makeUnChecked('BREAKFAST','CLOSING', '.checked-by-func-grun');
            }
          }

        }else if( label_text.indexOf("MEET HANSE TOUR inkl. MICE Networking Event") != -1){
          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-meet');
              makeChecked('MICE','MICE');
          }else{
            if( $(this).hasClass('checked-by-func-meet') ){
              $(this).removeClass('checked-by-func-meet');
              makeUnChecked('MICE','MICE', '.checked-by-func-meet');
            }
          }
        }
        
      }
      
    });
  }
  
  
  
  function checkboxChecked(){
    $('input[type=checkbox]').on('change', function(){
      
      if( $(this).closest('vv-additional-question-product').length ){
        
        var item = $(this).closest('vv-additional-question-product'),
            label = item.find("label"),
            label_text = label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( label_text == "INDIVIDUELLE TOUR am 23. Juni, 14 - 17:30 Uhr - kostenfrei" ){
          console.log('23. Juni');

          if( !item.hasClass('product-23-06')){
            item.addClass('product-23-06');
            show("vv-additional-question-dropdown","23.06.");
          }else{
            item.removeClass('product-23-06');
            hide("vv-additional-question-dropdown","23.06.");
          }

        }else if( label_text == "INDIVIDUELLE TOUR am 24. Juni, 10 - 17 Uhr - kostenfrei" ){
          console.log('24. Juni');

          if( !item.hasClass('product-24-06')){
            item.addClass('product-24-06');
            show("vv-additional-question-dropdown","24.06.");
          }else{
            item.removeClass('product-24-06');
            hide("vv-additional-question-dropdown","24.06.");
          }

        }else if( label_text.indexOf("BUSTOUR Rot") != -1 || label_text.indexOf("BUSTOUR Blau") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func');
              makeChecked('FORUM','NIGHT');
          }else{
            if( $(this).hasClass('checked-by-func') ){
              $(this).removeClass('checked-by-func');
              makeUnChecked('FORUM','NIGHT','.checked-by-func');
            }
          }

        }else if( label_text.indexOf("BUSTOUR Grün") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-grun');
              makeChecked('BREAKFAST','CLOSING');
          }else{
            if( $(this).hasClass('checked-by-func-grun') ){
              $(this).removeClass('checked-by-func-grun');
              makeUnChecked('BREAKFAST','CLOSING', '.checked-by-func-grun');
            }
          }

        }else if( label_text.indexOf("MEET HANSE TOUR inkl. MICE Networking Event") != -1){
        	
          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-meet');
              makeChecked('MICE','MICE');
          }else{
            if( $(this).hasClass('checked-by-func-meet') ){
              $(this).removeClass('checked-by-func-meet');
              makeUnChecked('MICE','MICE', '.checked-by-func-meet');
            }
          }
        
        }
      }
    });
  }
  
  function hide(tag, date){
   $(tag).each(function(){
     var item = $(this);
     var label = item.find("label");
      
     if(label[0].innerText.replace(/^\s+|\s+$/g, "").indexOf(date) != -1){
       $(item[0]).css("display", "none");
     }
   });             
  }
  
  function show(tag, date){
   $(tag).each(function(){
     var item = $(this);
     var label = item.find("label");
      
     if(label[0].innerText.replace(/^\s+|\s+$/g, "").indexOf(date) != -1){
       $(item[0]).css("display", "block");
     } 
   });             
  }
  
  function makeChecked(title1, title2){
    $('input[type=checkbox]').each(function(){
      
      if( $(this).closest('vv-additional-question-product').length ){

        var true_item = $(this).closest('vv-additional-question-product'),
            true_label = true_item.find("label"),
            true_label_text = true_label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( true_label_text.indexOf(title1) == 0 || true_label_text.indexOf(title2) == 0 ){
          if( $(this).is(':checked') ){
            $(this).attr('disabled',true);
          }else{
            $(this).attr('checked','checked').click();
            $(this).attr('disabled',true);
          }
        }
      }
    });
  }
  
  
  function makeUnChecked(title1, title2, class_name){
    $('input[type=checkbox]').each(function(){

      if( $(this).closest('vv-additional-question-product').length ){
        
        var false_item = $(this).closest('vv-additional-question-product'),
            false_label = false_item.find("label"),
            false_label_text = false_label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( false_label_text.indexOf(title1) == 0 || false_label_text.indexOf(title2) == 0 ){  
          if( $(class_name).length == 0 ){
            $(this).removeAttr('disabled');
          	$(this).removeAttr('checked').click();
          }
        }
      }
    });
  }
  
  
