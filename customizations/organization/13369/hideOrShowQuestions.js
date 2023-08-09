console.log("github -> /13369/hideOrShowQuestions")
// Function to show and hide custom question
//disable all customizations
    /*
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
    
    //Shuttle
    var field1 = $('.customization2_attendee_further-data_custom-question-3');
    $(field1).hide()
   // console.log(field1);
    //Art des Zimmers
    var field2 = $('.customization2_attendee_further-data_custom-question-5');
    $(field2).hide()
   // console.log(field1);
    //Wie reisen Sie an
    var dropdown1 = $('.customization2_attendee_further-data_custom-question-2');
   // console.log(field1);
    //Hotelzimmer ja nein
    var dropdown2 = $('.customization2_attendee_further-data_custom-question-4');  
   // console.log(field1);
    $(dropdown1).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
        if ($(this).text().trim() == 'Zug' || $(this).text().trim() == 'Flugzeug') {
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

    $(dropdown2).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
        if ($(this).text().trim() == 'Ja') {
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
        var inputOfField = $(field).find('.vv-selection-input__value.m-ellipsis').get(0);
                console.log("inputOfField: "+inputOfField)

        if(inputOfField!=undefined){
            $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
            if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').next().hasClass("error-message")) {
                $("<div class='error-message'> Please complete </div>").insertAfter( $(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
            }
            
        $(field).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
            console.log("change detected: "+$(this).text())
           if ($(this).text().trim() == "Please select"||$(this).text().trim() == "Bitte auswählen") {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
                $(field).find('.error-message').show();
                $('.customization2_attendee_edit-action_save').prop("disabled", true);

            } else {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').removeClass('error-state');
                $(field).find('.error-message').hide();
             //   $(".error-state").each(function(){console.log($(this))});
                if($(".error-state").length==0)
                    $('.customization2_attendee_edit-action_save').prop("disabled", false);
            }
        });
            
        return;
        }
    
         inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_input');   

          if(typeof $(inputOfField).get(0) === 'undefined'){
               //         console.log('is date')
            inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_date');
        }else{
            if (!$(inputOfField).next().hasClass("error-message")) {
                $("<div class='error-message'> Please complete </div>").insertAfter($(inputOfField));
            }
        }
        
       
        
        $(inputOfField).addClass('error-state');
        
        $(inputOfField).on("focusout blur", function () {
            myTimeout = setTimeout(function(){
            $(inputOfField).get(0).dispatchEvent(new Event('change'));
          $(inputOfField).get(0).click();
           //     console.log('fired click and change')
            }, 50);
        });
    
        $(inputOfField).on("click change input", function (event) {
            
            if ($(this).val().trim().length == 0) {
                $(this).addClass('error-state');
                $(field).find('.error-message').show();
                $('.customization2_attendee_edit-action_save').prop("disabled", true);

            } else {
                $(this).removeClass('error-state');
                $(field).find('.error-message').hide();
             //   $(".error-state").each(function(){console.log($(this))});
                if($(".error-state").length==0)
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
*/
