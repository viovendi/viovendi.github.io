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
            $(field1).show();
            $(field2).hide();
            $(field1).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field1);
        } else if ($(this).find('option').filter(':selected').text().trim() == 'PW06 / Group Office') {
            $(field1).hide()
            $(field2).show()
            $(field2).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field2);
        } else {
            $(field1).hide();
            $(field1).find('.customization2_attendee_further-data_custom-question_dropdown').val('');
            $(field2).hide();
            $(field2).find('.customization2_attendee_further-data_custom-question_dropdown').val('');
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
        }
    });
    
    


    function disableWhenEmpty(field) {


        if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').hasClass("error-state")) {
            $("<div class='error-message'>Erforderlich</div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
        }

        $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
        $('.customization2_attendee_edit-action_save').prop("disabled", true);

        $(field).find('.customization2_attendee_further-data_custom-question_dropdown').on('input', function () {

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

}

function hideInternalFields() {
$($$('.customization2_attendee_further-data_custom-question').findField('Kommentarfeld 1: Hotelvergabe (optional)')).hide();
$($$('.customization2_attendee_further-data_custom-question').findField('Kommentarfeld 2: Buchungsnummer (optional)')).hide();
$($$('.customization2_attendee_further-data_custom-question').findField('Kommentarfeld 3: interner Ansprechpartner (optional)')).hide();
$($$('.customization2_attendee_further-data_custom-question').findField('Kommentarfeld 4: Tischnummer (optional)')).hide();
$($$('.customization2_attendee_further-data_custom-question').findField('Kommentarfeld 5: Sonstige Bemerkungen (optional)')).hide();
};

handler();
hideInternalFields();

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        handler();
        hideInternalFields();

        $('customization2_attendee_view-action_edit').on("click", function () {
            console.log("clicked");
        });
    }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
