console.log('GTM github');

var modalText = '<p>Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body</p><p>Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body</p><p>Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body</p><p>Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body</p><p>Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body</p><p>Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body Some text in the Modal Body</p>';

  function addPopUp(){
    if($('#myModal').length < 1){
       $('<div id="myModal" class="modal"><div class="modal-content"><div class="modal-body">'+modalText+'</div><div class="modal-footer"><button class="accept-button" id="accept" disabled>Akzeptieren!</button></div></div>').insertBefore( ".customization-booking-area-wrapper-page2" ); 
      // move popup to checkbox
      var offset = $('.popup').offset();
      var positionPopup = offset.top - $('#myModal .modal-content').outerHeight() - 35;

      $('#myModal .modal-content').css({top: positionPopup});
    }
  }
  
  
  function addClass(){
    $('.customization2_attendee .vv-checkbox__label-text').each(function(){
      var textLabel = $(this).text().trim();
      var textTofind = 'Einwilligungstext für die Verwendung des Videokonferenztools Zoom';
    
      if(textLabel == textTofind){
        $(this).closest('label').addClass('popup');
      }
    });
  }
  
  // add class to checkbox
  function init(){
    addClass();
    if(!$('.popup input').is(':checked')){
       $('.popup').addClass('unchecked');
    }
    popupClick();    
  }
  init();
  
  
  function popupClick(){
    console.log('popupClick- ');
    $('.popup').on('click', function(e){
      console.log($(this).hasClass('unchecked'));
      
      if($(this).hasClass('unchecked')){
        console.log('show pop-up');
        e.preventDefault();
        addPopUp();
        checkScroll();
      }else{
        console.log('checkbox unchecked');
        $('.popup').addClass('unchecked');
      }
    });
  }
  
  
  // check scroll inside the pop-up
  function checkScroll(){
    console.log('checkScroll1- ');
    $('#myModal .modal-body').scroll(function(){
      if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        $('#myModal .accept-button').attr('disabled', false);
        clickAcceptButton();
      }
    });
  }
  
  
  function clickAcceptButton(){
     $('#accept').on('click', function(){
      console.log('bttn clicked- ');
      $('#myModal').hide();
      $('#myModal').remove();
    
      $('.popup').removeClass('unchecked');
      $('.popup input').trigger('click');
       
    }); 
  }
  
    var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      console.log('edit');
      init();
    }
  }
  
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 
