console.log("github -> /13369/hideOrShowQuestions")
// Funktion to show and hide custom question

function handler() {
    var styles = `
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
    
    var field1 = $$('.customization2_attendee_further-data_custom-question').findField('Benötigen Sie ein Shuttle? (optional)');
    $(field1).hide()

    var field2 = $$('.customization2_attendee_further-data_custom-question').findField('Art des Zimmers? (optional)');
    $(field2).hide()
    

    var dropdown1 = $$('.customization2_attendee_further-data_custom-question').findField('Wie reisen Sie an? (optional)');
    
    var dropdown2 = $$('.customization2_attendee_further-data_custom-question').findField('Benötigen Sie ein Hotelzimmer? (optional)');  

    $(dropdown1).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'Zug' || $(this).find('option').filter(':selected').text().trim() == 'Flugzeug') {
            $(field1).show()
            $(field1).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field1);
        } else {
            $(field1).hide()
            var innerValue=$(field1).find('.customization2_attendee_further-data_custom-question_dropdown');
            console.log($(innerValue).val())
            $(field1).find('.customization2_attendee_further-data_custom-question_dropdown').val('')
            console.log($(innerValue).val())
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    }
    );

    $(dropdown2).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'Ja') {
            $(field2).show()
            $(field2).find('vv-optional-text').css("display", "none");
        } else {
             var innerValue=$(field2).find('.customization2_attendee_further-data_custom-question_dropdown');
            console.log($(innerValue).val())
            $(field2).hide()
            $(field2).find('.customization2_attendee_further-data_custom-question_dropdown').val('Bitte auswählen')
            console.log($(innerValue).val())
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    }
    );

    
}
handler();

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        handler();

        $('customization2_attendee_view-action_edit').on("click", function () {
            console.log("clicked");
        });
    }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 


