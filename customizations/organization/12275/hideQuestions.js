console.log("github -> /12275/hideOrShowQuestions")
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
    
    var pathArray = window.location.pathname.split('/');
    
    for (i = 0; i < pathArray.length; i++) {
        if(pathArray[i].includes("100745")) 
            handler();
     }
    
}
function showField(field){
    $(field).show()
    disableWhenEmpty(field);
    $(field).find('vv-optional-text').css("display", "none");
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
    
    
    //Arrival
    var dropdownArrival = $('.customization2_attendee_further-data_custom-question-13');

    //
    var fieldArrivalFrom = $('.customization2_attendee_further-data_custom-question-14');
    //
    var fieldArrivalTo = $('.customization2_attendee_further-data_custom-question-15');
    //
    var fieldArrivalDate = $('.customization2_attendee_further-data_custom-question-16');
    //
    var fieldArrivalTime = $('.customization2_attendee_further-data_custom-question-17');
    //
    var fieldArrivalFlightNumber = $('.customization2_attendee_further-data_custom-question-18');
    //
    var dropdownArrivalShuttle = $('.customization2_attendee_further-data_custom-question-19');
    //
    var dropdownArrivalParking = $('.customization2_attendee_further-data_custom-question-20');
    //
    var fieldArrivalTrainNumber = $('.customization2_attendee_further-data_custom-question-21');

  
    //Departure
    var dropdownDeparture = $('.customization2_attendee_further-data_custom-question-22');  
    
    //
    var fieldDepartureFrom = $('.customization2_attendee_further-data_custom-question-23');
    //
    var fieldDepartureTo = $('.customization2_attendee_further-data_custom-question-24');
    //
    var fieldDepartureDate = $('.customization2_attendee_further-data_custom-question-25');
    //
    var fieldDepartureTime = $('.customization2_attendee_further-data_custom-question-26');
    //
    var fieldDepartureFlightNumber = $('.customization2_attendee_further-data_custom-question-27');
    //
    var dropdownDepartureShuttlePlane = $('.customization2_attendee_further-data_custom-question-28');
    //
    var dropdownDepartureShuttleTrain = $('.customization2_attendee_further-data_custom-question-29');
    //
    var fieldDepartureTrainNumber = $('.customization2_attendee_further-data_custom-question-30');
    
    //PCR Test
    var dropdownTest = $('.customization2_attendee_further-data_custom-question-31');  
    //
    var fieldTestTime = $('.customization2_attendee_further-data_custom-question-32');
    
    
    
     console.log(field1);
    $(dropdownArrival).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'By train') {
            console.log("train selected")
            showField($(fieldArrivalFrom));
            showField($(fieldArrivalTo));
            showField($(fieldArrivalDate));
            showField($(fieldArrivalTime));
            showField($(fieldArrivalTrainNumber));
            showField($(dropdownArrivalShuttle));
            $(fieldArrivalFlightNumber).hide();
            $(dropdownArrivalParking).hide();
        } 
        if ($(this).find('option').filter(':selected').text().trim() == 'By plane') {
            console.log("plane selected")
            showField($(fieldArrivalFrom));
            showField($(fieldArrivalTo));
            showField($(fieldArrivalDate));
            showField($(fieldArrivalTime));
            showField($(fieldArrivalFlightNumber));
            $(dropdownArrivalParking).hide();
            $(fieldArrivalTrainNumber).hide();
            $(dropdownArrivalShuttle).hide();
        }
        if ($(this).find('option').filter(':selected').text().trim() == 'By car') {
            console.log("car selected")
           
            showField($(fieldArrivalDate));
            showField($(fieldArrivalTime));
            showField($(fieldArrivalTrainNumber));
            showField($(dropdownArrivalParking));
            $(fieldArrivalFlightNumber).hide();
            $(dropdownArrivalShuttle).hide();
            $(fieldArrivalTo).hide();
            $(fieldArrivalFrom).hide();
            $(fieldArrivalTrainNumber).hide();
          
        }
    }
    );
/*
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

*/
    
}

setup();

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


