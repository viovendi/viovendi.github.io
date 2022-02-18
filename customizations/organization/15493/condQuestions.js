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

    var field1 = $$('.customization2_attendee_further-data_custom-question').findField('Ich benötige ein Hotelzimmer (optional)');
    $(field1).hide()

    var field2 = $$('.customization2_attendee_further-data_custom-question').findField('Ich möchte wie folgt anreisen (optional)');
    $(field2).hide()

    var dropdown1 = $$('.customization2_attendee_further-data_custom-question').findField('Werk / Standort');

    $(dropdown1).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'PM3') {
            $(field1).show()
            $(field1).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field1);
        } else {
            $(field1).hide()
            $(field1).find('.customization2_attendee_further-data_custom-question_input').val('')
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    });

    $(dropdown2).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'PW06 / Group Office') {
            $(field1).show()
            $(field1).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field1);
        } else {
            $(field1).hide()
            $(field1).find('.customization2_attendee_further-data_custom-question_input').val('')
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    });


    function disableWhenEmpty(field) {


        if (!$(field).find('.customization2_attendee_further-data_custom-question_input').hasClass("error-state")) {
            $("<div class='error-message'>Erforderlich</div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_input'));
        }

    }


    /*
     Google Tag Manager JS Helpers used
    */
    var field = $$('.customization2_attendee_further-data_custom-question').findField('Branche (optional)');
    $(field).hide()
    var dropdown = $$('.customization2_attendee_further-data_custom-question').findField('Welcher Branche');

    $(dropdown).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'andere') {
            $(field).show()
            disableWhenEmpty(field);
        } else {
            $(field).hide()
            $(field).find('.customization2_attendee_further-data_custom-question_input').val('')
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    });

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
