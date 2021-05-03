console.log("GTM works");

console.log('Start working, Google Tag Manager');


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 


  var formValid;
  function handler(){
    formValid = false;

    checkboxChecked();
	hide("vv-additional-question-radio","Ja, ich möchte auf die Warteliste");


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


  function checkIfChecked(){
  	$('input[type=checkbox]').each(function(){

      console.log($(this).closest('vv-additional-question-product').length);

      if( $(this).closest('vv-additional-question-product').length ){

        var item = $(this).closest('vv-additional-question-product'),
            label = item.find("label"),
            label_text = label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( label_text.indexOf("Interaktiver Workshop: Pionierarbeit ist Teamarbeit") != -1){
		console.log("interaktiv ws");
          if( $(this).is(':checked') ){
		  
              $(this).addClass('checked-by-func');
                console.log("ischecked");
	  }
	    
      }
      }
  	}
    );
  }



  function checkboxChecked(){
    $('input[type=checkbox]').on('change', function(){

	      if( $(this).closest('vv-additional-question-product').length ){

		var item = $(this).closest('vv-additional-question-product'),
		    label = item.find("label"),
		    label_text = label[0].innerText.replace(/^\s+|\s+$/g, "");
		    cap = $('.customization2_attendee_further-data_product_capacity').text();
		      console.log(cap);

			if( label_text == "Interaktiver Workshop: Pionierarbeit ist Teamarbeit" ){
			  	console.log('workshop');
				cap = $('.customization2_attendee_further-data_product_capacity').text();
		      		console.log(cap);

			  if( !item.hasClass('ws')){
			    item.addClass('ws');
			    show("vv-additional-question-radio","Ja, ich möchte auf die Warteliste")

			  }else{
			    item.removeClass('ws');
			    hide("vv-additional-question-radio","Ja, ich möchte auf die Warteliste")
			  }
			}
	      }
    });
  }

  function hide(tag, date){
   $(tag).each(function(){
     	var item = $(this);
	var label = item.find('label')
	
	   

     if(label[0].innerText.replace(/^\s+|\s+$/g, "").indexOf(date) != -1){
	     console.log("display none");
       $(item[0]).css("display", "none");
     }
   });
  }

  function show(tag, date){
   $(tag).each(function(){
     var item = $(this);
     var label = item.find('label');

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


