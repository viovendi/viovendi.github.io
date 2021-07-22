
  console.log('Start working, Google Tag Manager');

  var formValid;
  function handler(){
    formValid = false;

    checkboxChecked();
	hide("vv-additional-question-dropdown","08.12.");
	hide("vv-additional-question-dropdown","09.12.");

	hide("vv-additional-question-dropdown","25.08.");
	hide("vv-additional-question-dropdown","26.08.");

	hide("vv-additional-question-dropdown","27.10.");
	hide("vv-additional-question-dropdown","28.10.");

	hide("vv-additional-question-dropdown","17.11.");
	hide("vv-additional-question-dropdown","18.11.");




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

        if( label_text.indexOf("BUSTOUR Rot") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func');
              	makeChecked('LUNCH','MICE');
		makeChecked('FORUM','NIGHT');
             	disableProd("INDIVIDUELLE TOUR am 08.12.,");
		disableProd("INDIVIDUELLE TOUR am 25.08.,");
		disableProd("INDIVIDUELLE TOUR am 27.10.,");
		disableProd("INDIVIDUELLE TOUR am 17.11.,");
              disableProd("BUSTOUR Blau");
          }else{
            if( $(this).hasClass('checked-by-func') ){
              $(this).removeClass('checked-by-func');
              	makeUnChecked('LUNCH','MICE','.checked-by-func');
		makeUnChecked('FORUM','NIGHT','.checked-by-func');
              	enableProd("INDIVIDUELLE TOUR am 08.12.,");
		enableProd("INDIVIDUELLE TOUR am 25.08.,");
		enableProd("INDIVIDUELLE TOUR am 27.10.,");
		enableProd("INDIVIDUELLE TOUR am 17.11.,");
              enableProd("BUSTOUR Blau");
            }
          }

        }else if( label_text.indexOf("BUSTOUR Blau") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func');
              	makeChecked('LUNCH','MICE');
              	disableProd("INDIVIDUELLE TOUR am 08.12.,");
		disableProd("INDIVIDUELLE TOUR am 25.08.,");
		disableProd("INDIVIDUELLE TOUR am 27.10.,");
		disableProd("INDIVIDUELLE TOUR am 17.11.,");
              disableProd("BUSTOUR Rot");
          }else{
            if( $(this).hasClass('checked-by-func') ){
              $(this).removeClass('checked-by-func');
              makeUnChecked('LUNCH','MICE','.checked-by-func');
              	enableProd("INDIVIDUELLE TOUR am 08.12.,");
		enableProd("INDIVIDUELLE TOUR am 25.08.,");
		enableProd("INDIVIDUELLE TOUR am 27.10.,");
		enableProd("INDIVIDUELLE TOUR am 17.11.,");
              enableProd("BUSTOUR Rot");
            }
          }

        }
        else if( label_text.indexOf("BUSTOUR Grün") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-grun');
              makeChecked('BREAKFAST','CLOSING');
              	disableProd("INDIVIDUELLE TOUR am 09.12.,");
		disableProd("INDIVIDUELLE TOUR am 26.08.,");
		disableProd("INDIVIDUELLE TOUR am 28.10.,");
		disableProd("INDIVIDUELLE TOUR am 18.11.,");
          }else{
            if( $(this).hasClass('checked-by-func-grun') ){
              $(this).removeClass('checked-by-func-grun');
              makeUnChecked('BREAKFAST','CLOSING', '.checked-by-func-grun');
              	enableProd("INDIVIDUELLE TOUR am 09.12.,");
		enableProd("INDIVIDUELLE TOUR am 26.08.,");
		enableProd("INDIVIDUELLE TOUR am 28.10.,");
		enableProd("INDIVIDUELLE TOUR am 18.11.,");
            }
          }

        }else if( label_text.indexOf("INDIVIDUELLE TOUR am 08.12., 14 - 17:30 Uhr - kostenfrei") != -1){
          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-meet');
              makeChecked('BUSTOUR Rot',''); //grüner tour nicht BUSTOUR Grün
          }else{
            if( $(this).hasClass('checked-by-func-meet') ){
              $(this).removeClass('checked-by-func-meet');
              makeUnChecked('BUSTOUR Rot','', '.checked-by-func-meet');
            }
          }
        }

	//newcode for other events
	  else if( label_text.indexOf("INDIVIDUELLE TOUR am 25.08., 14 - 17:30 Uhr - kostenfrei") != -1){
          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-meet');
              makeChecked('BUSTOUR Rot',''); //BUSTOUR Grün
          }else{
            if( $(this).hasClass('checked-by-func-meet') ){
              $(this).removeClass('checked-by-func-meet');
              makeUnChecked('BUSTOUR Rot','', '.checked-by-func-meet'); //BUSTOUR Grün
            }
          }
        }
	 else if( label_text.indexOf("INDIVIDUELLE TOUR am 27.10., 14 - 17:30 Uhr - kostenfrei") != -1){
          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-meet');
              makeChecked('BUSTOUR Rot',''); //BUSTOUR Grün
          }else{
            if( $(this).hasClass('checked-by-func-meet') ){
              $(this).removeClass('checked-by-func-meet');
              makeUnChecked('BUSTOUR Rot','', '.checked-by-func-meet'); //BUSTOUR Grün
            }
          }
        }
	else if( label_text.indexOf("INDIVIDUELLE TOUR am 17.11., 14 - 17:30 Uhr - kostenfrei") != -1){
          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-meet');
              makeChecked('BUSTOUR Rot',''); //BUSTOUR Grün
          }else{
            if( $(this).hasClass('checked-by-func-meet') ){
              $(this).removeClass('checked-by-func-meet');
              makeUnChecked('BUSTOUR Rot','', '.checked-by-func-meet'); //BUSTOUR Grün
            }
          }
        }


	      //end new code

      }


    });
  }



  function checkboxChecked(){
    $('input[type=checkbox]').on('change', function(){

      if( $(this).closest('vv-additional-question-product').length ){

        var item = $(this).closest('vv-additional-question-product'),
            label = item.find("label"),
            label_text = label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( label_text == "INDIVIDUELLE TOUR am 08.12., 14 - 17:30 Uhr - kostenfrei" ){
          console.log('08. 12');

          if( !item.hasClass('product-08-12')){
            item.addClass('product-08-12');
            show("vv-additional-question-dropdown","08.12.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  disableProd("BUSTOUR Rot");
		  //disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-08-12');
            hide("vv-additional-question-dropdown","08.12.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-08-12");
          }

        }else if( label_text == "INDIVIDUELLE TOUR am 09.12., 10 - 17 Uhr - kostenfrei" ){
          console.log('09. 12');

          if( !item.hasClass('product-09-12')){
            item.addClass('product-09-12');
            show("vv-additional-question-dropdown","09.12.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  //disableProd("BUSTOUR Rot");
		  disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-09-12');
            hide("vv-additional-question-dropdown","09.12.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-09-12");
          }

        }

	      //newcode
	      else if( label_text == "INDIVIDUELLE TOUR am 25.08., 10 - 17 Uhr - kostenfrei" ){
          console.log('25.08');

          if( !item.hasClass('product-25-08')){
            item.addClass('product-25-08');
            show("vv-additional-question-dropdown","25.08.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  disableProd("BUSTOUR Rot");
		  //disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-25-08');
            hide("vv-additional-question-dropdown","25.08.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-25-08");
          }

        }
	else if( label_text.includes("INDIVIDUELLE TOUR am 26.08., 10 - 17 Uhr - kostenfrei") ){
          console.log('26.08');

          if( !item.hasClass('product-26-08')){
            item.addClass('product-26-08');
            show("vv-additional-question-dropdown","26.08.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  //disableProd("BUSTOUR Rot");
		  disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-26-08');
            hide("vv-additional-question-dropdown","26.08.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-26-08");
          }

        }
	      else if( label_text == "INDIVIDUELLE TOUR am 27.10., 10 - 17 Uhr - kostenfrei" ){
          console.log('27. 10');

          if( !item.hasClass('product-27-10')){
            item.addClass('product-27-10');
            show("vv-additional-question-dropdown","27.10.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  disableProd("BUSTOUR Rot");
		  //disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-27-10');
            hide("vv-additional-question-dropdown","27.10.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-27-10");
          }

        }
	      else if( label_text == "INDIVIDUELLE TOUR am 28.10., 10 - 17 Uhr - kostenfrei" ){
          console.log('28.10');

          if( !item.hasClass('product-28-10')){
            item.addClass('product-28-10');
            show("vv-additional-question-dropdown","28.10.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  //disableProd("BUSTOUR Rot");
		  disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-28-10');
            hide("vv-additional-question-dropdown","28.10.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-28-10");
          }

        }
	      else if( label_text == "INDIVIDUELLE TOUR am 17.11., 10 - 17 Uhr - kostenfrei" ){
          console.log('17.11');

          if( !item.hasClass('product-17-11')){
            item.addClass('product-17-11');
            show("vv-additional-question-dropdown","17.11.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  disableProd("BUSTOUR Rot");
		  //disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-17-11');
            hide("vv-additional-question-dropdown","17.11.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-17-11");
          }

        }
	  else if( label_text == "INDIVIDUELLE TOUR am 18.11., 10 - 17 Uhr - kostenfrei" ){
          console.log('18.11');

          if( !item.hasClass('product-18-11')){
            item.addClass('product-18-11');
            show("vv-additional-question-dropdown","18.11.");

		  // disable
		  disableProd("BUSTOUR Blau");
		  //disableProd("BUSTOUR Rot");
		  disableProd("BUSTOUR Grün");
          }else{
            item.removeClass('product-18-11');
            hide("vv-additional-question-dropdown","18.11.");

		  //enable
		  enableProd("BUSTOUR Blau","BUSTOUR Rot","BUSTOUR Grün", "product-18-11");
          }

        }


	  //end newcode



	else if( label_text.indexOf("BUSTOUR Rot") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func');
              makeChecked('LUNCH','MICE');
		  makeChecked('FORUM','NIGHT');
              disableProd("INDIVIDUELLE TOUR am 08.12");
              disableProd("BUSTOUR Blau");
          }else{
            if( $(this).hasClass('checked-by-func') ){
              $(this).removeClass('checked-by-func');
              makeUnChecked('LUNCH','MICE','.checked-by-func');
		    makeUnChecked('FORUM','NIGHT','.checked-by-func');
              enableProd("INDIVIDUELLE TOUR am 08.12");
              enableProd("BUSTOUR Blau");
            }
          }

        }else if( label_text.indexOf("BUSTOUR Blau") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func');
              makeChecked('LUNCH','MICE');
              	disableProd("INDIVIDUELLE TOUR am 08.12");
		disableProd("INDIVIDUELLE TOUR am 25.08");
		disableProd("INDIVIDUELLE TOUR am 27.10");
		disableProd("INDIVIDUELLE TOUR am 17.11");
              disableProd("BUSTOUR Rot");
          }else{
            if( $(this).hasClass('checked-by-func') ){
              $(this).removeClass('checked-by-func');
              makeUnChecked('LUNCH','MICE','.checked-by-func');
              	enableProd("INDIVIDUELLE TOUR am 08.12");
		enableProd("INDIVIDUELLE TOUR am 25.08");
		enableProd("INDIVIDUELLE TOUR am 27.10");
		enableProd("INDIVIDUELLE TOUR am 17.11");

              enableProd("BUSTOUR Rot");
            }
          }

        }
        else if( label_text.indexOf("BUSTOUR Grün") != -1){

          if( $(this).is(':checked') ){
              $(this).addClass('checked-by-func-grun');
              makeChecked('BREAKFAST','CLOSING');
              	disableProd("INDIVIDUELLE TOUR am 09.12");
		disableProd("INDIVIDUELLE TOUR am 26.08");
		disableProd("INDIVIDUELLE TOUR am 28.10");
		disableProd("INDIVIDUELLE TOUR am 18.11");
          }else{
            if( $(this).hasClass('checked-by-func-grun') ){
              $(this).removeClass('checked-by-func-grun');
              makeUnChecked('BREAKFAST','CLOSING', '.checked-by-func-grun');
              	enableProd("INDIVIDUELLE TOUR am 09.12");
		enableProd("INDIVIDUELLE TOUR am 26.08");
		enableProd("INDIVIDUELLE TOUR am 28.10");
		enableProd("INDIVIDUELLE TOUR am 18.11");
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

function disableProd(title1){
    $('input[type=checkbox]').each(function(){

      if( $(this).closest('vv-additional-question-product').length ){

        var true_item = $(this).closest('vv-additional-question-product'),
            true_label = true_item.find("label"),
            true_label_text = true_label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( true_label_text.indexOf(title1) == 0 ){
            $(this).attr('disabled',true);
          }
      }
    });
  }

  function enableProd(title1,title2, title3, class_name){
    $('input[type=checkbox]').each(function(){

      if( $(this).closest('vv-additional-question-product').length ){

        var false_item = $(this).closest('vv-additional-question-product'),
            false_label = false_item.find("label"),
            false_label_text = false_label[0].innerText.replace(/^\s+|\s+$/g, "");

        if( false_label_text.indexOf(title1) == 0 || false_label_text.indexOf(title2) || false_label_text.indexOf(title3) ){
          if( $(class_name).length == 0 ){
            $(this).removeAttr('disabled');

          }
        }
      }
    });
  }


