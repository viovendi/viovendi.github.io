console.log("github -> /13369/hideOrShowQuestions")
// Function to show and hide custom question
function setup(){
    var styles = `
    
    
  @keyframes nodeInserted { 
    from { opacity: 0.99; }
    to { opacity: 1; } 
  }
  /*.customization2_attendee-state_edit{*/
  .customization2_attendees .customization2_attendee-state_edit{
    animation-duration: 0.1s;
    animation-name: nodeInserted;
  }
  
        .error-state{
            border-color: #ea674d!important;
            background-color: #fff1ef!important;
           
        }
        .error-message{
            display: block;
            color: #ea674d;
            font-size: 12px;
            line-height: 1;
            margin-bottom: 10px;
            left: 0;
            top: 3px;
        }
    `
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;

    styleSheet.onreadystatechange = handlerS;
    styleSheet.onload = handlerS;

    document.head.appendChild(styleSheet);

    function handlerS() {
        console.log('style added');
    }
}

function handler() {
    
    
    var field1 = $$('.customization2_attendee_further-data_custom-question').findField('Benötigen Sie ein Shuttle? (optional)');
    $(field1).hide()
    console.log(field1)
    
    var field2 = $$('.customization2_attendee_further-data_custom-question').findField('Art des Zimmers? (optional)');
    $(field2).hide()
    console.log(field2)

    var dropdown1 = $$('.customization2_attendee_further-data_custom-question').findField('Wie reisen Sie an? (optional)');
    console.log(dropdown1);
    var dropdown2 = $$('.customization2_attendee_further-data_custom-question').findField('Benötigen Sie ein Hotelzimmer? (optional)');  
    console.log(dropdown2);

    $(dropdown1).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'Zug' || $(this).find('option').filter(':selected').text().trim() == 'Flugzeug') {
            $(field1).show()
            disableWhenEmpty(field1)
            $(field1).find('vv-optional-text').css("display", "none");
        } else {
            $(field1).hide()
            $(field1).find('.customization2_attendee_further-data_custom-question_dropdown').val('')
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    }
    );

    $(dropdown2).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'Ja') {
            $(field2).show()
            disableWhenEmpty(field2)
            $(field2).find('vv-optional-text').css("display", "none");
        } else {
            $(field2).hide()
            $(field2).find('.customization2_attendee_further-data_custom-question_dropdown').val('')
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    }
    );

    
}

setup();
handler();

function disableWhenEmpty(field) {

        if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').hasClass("error-state")) {
            $("<div class='error-message'>Erforderlich</div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
        }

        $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
        $('.customization2_attendee_edit-action_save').prop("disabled", true);

        $(field).find('.customization2_attendee_further-data_custom-question_dropdown').on('input change', function () {

            if ($(this).val().trim().length == 0) {
                $(this).addClass('error-state');
                $(field).find('.error-message').show();
                $('.customization2_attendee_edit-action_save').prop("disabled", true);

            } else {
                $(this).removeClass('error-state');
                $(field).find('.error-message').hide();
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
            }
        });
    }


var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        
        handler();

        $('customization2_attendee_view-action_edit').on("click", function () {
            console.log("clicked");
        });
    }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 


