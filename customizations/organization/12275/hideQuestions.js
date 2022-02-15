console.log("github -> /12275/hideQuestions")
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

function setupConditionals(dropdown, fieldFrom, fieldTo, fieldDate, fieldTime, fieldFlightNumber, fieldTrainNumber,
                                         dropdownTrainShuttle, dropdownPlaneShuttle, dropdownParking){
    console.log($(fieldFrom));
    console.log($(fieldTo));
    console.log($(fieldDate));
    console.log($(fieldTime));
    console.log($(fieldFlightNumber));
    console.log($(fieldTrainNumber));
    console.log($(dropdownTrainShuttle));
    console.log($(dropdownParking));
    
    $(dropdown).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'By train') {
            console.log("train selected")
            showField($(fieldFrom));
            showField($(fieldTo));
            showField($(fieldDate));
            showField($(fieldTime));
            $(fieldFlightNumber).hide();
            showField($(fieldTrainNumber));
            showField($(dropdownTrainShuttle));
            $(dropdownParking).hide();
        } else{
        if ($(this).find('option').filter(':selected').text().trim() == 'By plane') {
            console.log("plane selected")
            showField($(fieldFrom));
            showField($(fieldTo));
            showField($(fieldDate));
            showField($(fieldTime));
            showField($(fieldFlightNumber));
            $(fieldTrainNumber).hide();
            showField($(dropdownPlaneShuttle));
            $(dropdownParking).hide();
            
        }   else{
        if ($(this).find('option').filter(':selected').text().trim() == 'By car') {
            console.log("car selected")
            $(fieldFrom).hide();
            $(fieldTo).hide();
            showField($(fieldDate));
            showField($(fieldTime));
            $(fieldFlightNumber).hide();
            $(fieldTrainNumber).hide();
            $(dropdownPlaneShuttle).hide();
            $(dropdownTrainShuttle).hide();
            showField($(dropdownParking));
          
          
        }   else{
            console.log('im letzten else');
            $(fieldDate).hide();
            $(fieldTime).hide();
            $(dropdownParking).hide();
            $(fieldFlightNumber).hide();
            $(dropdownPlaneShuttle).hide();
            $(dropdownTrainShuttle).hide();            
            $(fieldTo).hide();
            $(fieldFrom).hide();
            $(fieldTrainNumber).hide();
        }}}
    }
    );
}
function showField(field){
    $(field).show();
    disableWhenEmpty(field);
    $(field).find('vv-optional-text').css("display", "none");
    console.log('setting field:')
    console.log($(field))
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
    $(fieldArrivalFrom).hide();
    //
    var fieldArrivalTo = $('.customization2_attendee_further-data_custom-question-15');
    $(fieldArrivalTo).hide();
    //
    var fieldArrivalDate = $('.customization2_attendee_further-data_custom-question-16');
    $(fieldArrivalDate).hide();
    //
    var fieldArrivalTime = $('.customization2_attendee_further-data_custom-question-17');
    $(fieldArrivalTime).hide();
    //
    var fieldArrivalFlightNumber = $('.customization2_attendee_further-data_custom-question-18');
    $(fieldArrivalFlightNumber).hide();
    //
    var dropdownArrivalShuttle = $('.customization2_attendee_further-data_custom-question-19');
    $(dropdownArrivalShuttle).hide();
    //
    var dropdownArrivalParking = $('.customization2_attendee_further-data_custom-question-20');
    $(dropdownArrivalParking).hide();
    //
    var fieldArrivalTrainNumber = $('.customization2_attendee_further-data_custom-question-21');
    $(fieldArrivalTrainNumber).hide();

  
    //Departure
    var dropdownDeparture = $('.customization2_attendee_further-data_custom-question-22');  
    
    //
    var fieldDepartureFrom = $('.customization2_attendee_further-data_custom-question-23');
    $(fieldDepartureFrom).hide();
    //
    var fieldDepartureTo = $('.customization2_attendee_further-data_custom-question-24');
    $(fieldDepartureTo).hide();
    //
    var fieldDepartureDate = $('.customization2_attendee_further-data_custom-question-25');
    $(fieldDepartureDate).hide();
    //
    var fieldDepartureTime = $('.customization2_attendee_further-data_custom-question-26');
    $(fieldDepartureTime).hide();
    //
    var fieldDepartureFlightNumber = $('.customization2_attendee_further-data_custom-question-27');
    $(fieldDepartureFlightNumber).hide();
    //
    var dropdownDepartureShuttlePlane = $('.customization2_attendee_further-data_custom-question-28');
    $(dropdownDepartureShuttlePlane).hide();
    //
    var dropdownDepartureShuttleTrain = $('.customization2_attendee_further-data_custom-question-29');
    $(dropdownDepartureShuttleTrain).hide();
    //
    var fieldDepartureTrainNumber = $('.customization2_attendee_further-data_custom-question-30');
    $(fieldDepartureTrainNumber).hide();
    
    //PCR Test
    var dropdownTest = $('.customization2_attendee_further-data_custom-question-31');  
    //
    var fieldTestTime = $('.customization2_attendee_further-data_custom-question-32');
    $(fieldTestTime).hide();
    
    setupConditionals(dropdownArrival, fieldArrivalFrom, fieldArrivalTo, fieldArrivalDate, fieldArrivalTime, fieldArrivalFlightNumber, fieldArrivalTrainNumber,
                                         dropdownArrivalShuttle, dropdownArrivalShuttle, dropdownArrivalParking);
    setupConditionals(dropdownDeparture, fieldDepartureFrom, fieldDepartureTo, fieldDepartureDate, fieldDepartureTime, fieldDepartureFlightNumber, fieldDepartureTrainNumber,
                                         dropdownDepartureShuttleTrain, dropdownDepartureShuttlePlane, null);

    
}

function disableWhenEmpty(field) {

    
        var inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_input');   
    
        if(typeof $(inputOfField).get(0) === 'undefined'){
            console.log('is dropdown')
            inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_dropdown');
        }
          if(typeof $(inputOfField).get(0) === 'undefined'){
                        console.log('is date')

            inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_date');
              
              $(inputOfField).on("focusout", function (event) {
            $(this).click();
        });
              
        }else{
            if (!$(inputOfField).hasClass("error-state")) {
                $("<div class='error-message'>Erforderlich</div>").insertAfter($(inputOfField));
            }
        }
        
       
        
        $(inputOfField).addClass('error-state');
        
        $(inputOfField).on("focusout blur", function (event) {
            $(this).get(0).dispatchEvent(new Event('change'));
            $(this).get(0).click();
                       console.log('fired click and change')

        });
    
        $(inputOfField).on("click change input", function (event) {
            console.log(event.type)
            if ($(this).val().trim().length == 0) {
                $(this).addClass('error-state');
                $(field).find('.error-message').show();
                $('.customization2_attendee_edit-action_save').prop("disabled", true);

            } else {
                console.log('value that isnt empty: '+$(this).val())
                $(this).removeClass('error-state');
                $(field).find('.error-message').hide();
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
            }
        });
    
       
       
    }

function startCustomization(){
    
    setup();
    handler();
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
}

var pathArray = window.location.pathname.split('/');
    
for (i = 0; i < pathArray.length; i++) {
     if(pathArray[i].includes("100745")) 
            startCustomization();
}


