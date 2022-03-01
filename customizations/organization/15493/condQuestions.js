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

    var field2 = $$('.customization2_attendee_further-data_custom-question').findField('Ich möchte zu folgendem Datum anreisen (optional)');
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

function customTerms () {
    if(!$('.custom_terms_checkbox').length){
        console.log("Terms added");
        var customBookingTerms = $(".customization2_booking-terms .vv-mb-xxs vv-checkbox").clone();
        $('.customization2_booking-terms').prepend('<div class="custom_terms_checkbox" style="margin-bottom:10px"></div>');
        $('.custom_terms_checkbox').append(customBookingTerms);
        $('.custom_terms_checkbox p.customization2_booking-terms_text').text('Ich habe zur Kenntnis genommen, dass die Veranstaltung nach den zum Zeitpunkt gültigen Corona-Verordnungen des Landes Sachsen durchgeführt wird. Ich trage dafür Sorge, alle notwendigen Zertifikate am Veranstaltungstag vorweisen zu können.');
    }
}

function addHotelDescription () {
    if(!$('.hotelText').length){
        console.log("Hotel description added");
        $($$('.customization2_attendee_further-data_custom-question').findField('Ich benötige einen Hoteltransfer')).prepend('<div class="hotelText" style="margin-bottom:10px"><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Hotel</p><p style="font-size:.875rem; line-height: 1.37rem; font-weight: 400; color: #343a3f;">Wir haben für Sie Zimmerkontingente in Hotels der Region optioniert, die bis XX.XX.XX abrufbar sind. Von diesen Partnerhotels werden auch Bustransfers zur Veranstaltungslocation angeboten. Bitte beachten Sie, dass die Hotelkosten und Extras von Ihnen getragen werden. In Ihrer Anmeldebestätigung senden wir Ihnen den Link zu den Partnerhotels.</p><br><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Hoteltransfer</p><p style="font-size:.875rem; line-height: 1.37rem; font-weight: 400; color: #343a3f;">Bitte beachten Sie, dass wir einen Hoteltransfer nur von unseren Partnerhotels anbieten können.</p> </div>');
    }
}

function addEssenswahl () {
    if(!$('.headerEssenswahl').length){
        console.log("Essenswahl added");
        $($$('.customization2_attendee_further-data_custom-question').findField('Ich wähle zum intergalaktischen Dinner')).prepend('<div class="headerEssenswahl" style="margin-bottom:10px"><p style="font-size:1rem; font-weight: 600; color: #343a3f;">Essenswahl</p></div>');
    }
}


handler();
addHotelDescription();
addEssenswahl();
customTerms();


var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        handler();
        addHotelDescription();
        addPartnerWeitereAngaben();
        customTerms();

        $('customization2_attendee_view-action_edit').on("click", function () {
            console.log("clicked");
        });
    }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
