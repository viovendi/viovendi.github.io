console.log("triggered markcheckboxes.js")
function markAsChecked(name) {
	//search all further questions
	$('.customization2_attendee_further-data_custom-question').each(function (i, element) {

			//.customization2_attendee .customization2_attendee_further-data .vv-nl-mb-lg
			// check all labels and check if it contains "Hiermit erkläre ich mich"
			var item = $(this).find('.customization2_attendee_further-data_custom-question_label').text().replace(/^\s+|\s+$/g, "");
			if (item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf('Hiermit erkläre ich mich') > -1) {
				console.log("Bedingung eingetreten" + item);

				//get parent element and move to vv-checkbox to click it
				var parentElement = $(this).parent();
				console.log(parentElement);
				/*
				$(parentElement + " > div > div > vv-checkbox").trigger('click');
				console.log("clicked");
				*/
			}
		});
	}

function hideAndMoveCheckbox() {
	console.log('hideAndMoveCheckbox');
	// $('.customization2_booking-terms_checkbox.vv-checkbox__indicator').css("display", "none");
	$('.customization2_booking-terms_text').css("position", "relative");
	$('.customization2_booking-terms_text').css("left", "24px");
	console.log('hided')
}

/* check and hide privacy checkbox */
function checkAndHidePrivacy(){
  console.log('checkAndHidePrivacy');
  if ($('.customization2_booking-terms').length > 0 ){
    $('.customization2_booking-terms .customization2_booking-terms_checkbox').trigger('click');
  // $('.customization2_booking-terms .vv-checkbox__indicator').css('display', 'none');
    $('.customization2_booking-terms .vv-checkbox').on('click', function(e){
      e.preventDefault();
    });
  }
}

startCustomizationPage2();

function startCustomizationPage2(){
      
	markAsChecked('customization2_attendee');

	setTimeout(()=>{
		hideAndMoveCheckbox();
		checkAndHidePrivacy();
	}, 500);

	//hideAndMoveCheckbox();
	//checkAndHidePrivacy();
	
    const observerThisPage = new MutationObserver((mutations, obs) => {
        const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');
    
        if ($(page2).is(':visible')) {
            startCustomizationPage2();
            obs.disconnect();
            return;
        }
    });
    const observerOtherPage = new MutationObserver((mutations, obs) => {
        const page2 = document.getElementsByClassName('customization-booking-area-wrapper-page2');
    
        if (!$(page2).is(':visible')) {
            observerThisPage.observe(document, {
                childList: true,
                subtree: true
            });
            obs.disconnect();
            return;
        }
    });
    observerOtherPage.observe(document, {
        childList: true,
        subtree: true
    });
}
