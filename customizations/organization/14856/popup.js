console.log('GTM github!');

  function addPopUp(){
    if($('#checkboxModal').length < 1){
       $('<div id="checkboxModal" class="modal"><div class="modal-content"><div class="modal-head">'+headerText+'</div><div class="modal-body"><p>'+modalText1+'</p><p>'+modalText2+'</p><p>'+modalText3+'</p><p>'+modalText4+'</p><p>'+modalText5+'</p></div><div class="modal-footer"><button class="accept-button" id="accept" disabled>'+buttonText+'</button></div></div>').insertBefore( ".customization-booking-area-wrapper-page2" );
      // move popup to checkbox
      var offset = $('.popup').offset();
      var positionPopup = offset.top - $('#checkboxModal .modal-content').outerHeight() - 35;

      $('#checkboxModal .modal-content').css({top: positionPopup});
    }
  }


  function addClass(){
    $('.customization2_attendee .vv-checkbox__label-text').each(function(){
      var textLabel = $(this).text().trim();
      var textTofind = 'Einwilligungstext für die Verwendung des Videokonferenztools Zoom';

      if(textLabel == textTofind){
        $(this).closest('label').find('input').addClass('popup');
      }

      $('.popup').after('<p><a href="'+linkSource+'" target="_blank" class="checkbox-link">'+linkText+'</a></p>');

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
    $('.popup').on('click', function(e){
      if($(this).hasClass('unchecked')){
        e.preventDefault();
        addPopUp();
        checkScroll();
      }else{
        $('.popup').addClass('unchecked');
      }
    });
  }


  // check scroll inside the pop-up
  function checkScroll(){
    $('#checkboxModal .modal-body').scroll(function(){
      if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        $('#checkboxModal .accept-button').attr('disabled', false);
        clickAcceptButton();
      }
    });
  }


  function clickAcceptButton(){
     $('#accept').on('click', function(){
      $('#checkboxModal').hide();
      $('#checkboxModal').remove();

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
