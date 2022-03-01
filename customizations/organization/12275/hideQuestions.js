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
function hide(field){
    console.log(field);
    
    if(field.hasClass("error-state"))console.log("error state detected");
    
    if($(field[0]).hasClass("error-state"))console.log("error state detected");
    
        $(field[0]).removeClass("error-state");
        $(field).hide(); 

}
function setupConditionals(dropdown, fieldFrom, fieldTo, fieldDate, fieldTime, fieldFlightNumber, fieldTrainNumber,
                                         dropdownTrainShuttle, dropdownPlaneShuttle, dropdownParking){
  /*  console.log($(fieldFrom));
    console.log($(fieldTo));
    console.log($(fieldDate));
    console.log($(fieldTime));
    console.log($(fieldFlightNumber));
    console.log($(fieldTrainNumber));
    console.log($(dropdownTrainShuttle));
    console.log($(dropdownParking));
    */
    $(dropdown).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'By train') {
            $('.customization2_attendee_edit-action_save').prop("disabled", true);
         //   console.log("train selected")
            showField($(fieldFrom));
            showField($(fieldTo));
            showField($(fieldDate));
            showField($(fieldTime));
            hide($(fieldFlightNumber));
            showField($(fieldTrainNumber));
            showField($(dropdownTrainShuttle));
            hide($(dropdownParking));
        } else{
        if ($(this).find('option').filter(':selected').text().trim() == 'By plane') {
            $('.customization2_attendee_edit-action_save').prop("disabled", true);
        //    console.log("plane selected")
            showField($(fieldFrom));
            showField($(fieldTo));
            showField($(fieldDate));
            showField($(fieldTime));
            showField($(fieldFlightNumber));
            hide($(fieldTrainNumber));
            hide($(dropdownParking));
            showField($(dropdownPlaneShuttle));

        }   else{
        if ($(this).find('option').filter(':selected').text().trim() == 'By car') {
            $('.customization2_attendee_edit-action_save').prop("disabled", true);
         //   console.log("car selected")
            hide($(fieldFrom));
            hide($(fieldTo));
            hide($(fieldFlightNumber));
            hide($(fieldTrainNumber));
            hide($(dropdownPlaneShuttle));
            hide($(dropdownTrainShuttle));
            showField($(fieldDate));
            showField($(fieldTime));
            showField($(dropdownParking));
          
          
        }   else{
            
            hide($(fieldFrom));
            hide($(fieldTo));
            hide($(fieldFlightNumber));
            hide($(fieldTrainNumber));
            hide($(dropdownPlaneShuttle));
            hide($(dropdownTrainShuttle));
            hide($(fieldDate));
            hide($(fieldTime));
            hide($(dropdownParking));
      
        }}}
    }
    );
}
function showField(field){
    $(field).show();
    disableWhenEmpty(field);
    $(field).find('vv-optional-text').css("display", "none");
   // console.log('setting field:')
  //  console.log($(field))
}
function handler() {

    let questionNumber = 8;
    //Arrival
    var dropdownArrival = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    //
    var fieldArrivalFrom = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldArrivalFrom).hide();
    //
    var fieldArrivalTo = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldArrivalTo).hide();
    //
    var fieldArrivalDate = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldArrivalDate).hide();
    //
    var fieldArrivalTime = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldArrivalTime).hide();
    //
    var fieldArrivalFlightNumber = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldArrivalFlightNumber).hide();
    //
    var dropdownArrivalShuttle = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(dropdownArrivalShuttle).hide();
    //
    var dropdownArrivalParking = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(dropdownArrivalParking).hide();
    //
    var fieldArrivalTrainNumber = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldArrivalTrainNumber).hide();

  
    //Departure
    var dropdownDeparture = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);  
    
    //
    var fieldDepartureFrom = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldDepartureFrom).hide();
    //
    var fieldDepartureTo = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldDepartureTo).hide();
    //
    var fieldDepartureDate = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldDepartureDate).hide();
    //
    var fieldDepartureTime = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldDepartureTime).hide();
    //
    var fieldDepartureFlightNumber = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldDepartureFlightNumber).hide();
    //
    var dropdownDepartureShuttlePlane = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(dropdownDepartureShuttlePlane).hide();
    //
    var dropdownDepartureShuttleTrain = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(dropdownDepartureShuttleTrain).hide();
    //
    var fieldDepartureTrainNumber = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldDepartureTrainNumber).hide();
    
    //PCR Test
    var dropdownTest = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);  
    $("<div class='vv-control-label vv-control-label--regular' style='line-height: 1 rem;'>Please check the entry and quarantine regulations for your home country.</div>").insertBefore($(dropdownTest));
    //
    var fieldTestTime = $('.customization2_attendee_further-data_custom-question-'+questionNumber++);
    $(fieldTestTime).hide();
    
    setupConditionals(dropdownArrival, fieldArrivalFrom, fieldArrivalTo, fieldArrivalDate, fieldArrivalTime, fieldArrivalFlightNumber, fieldArrivalTrainNumber,
                                         dropdownArrivalShuttle, dropdownArrivalShuttle, dropdownArrivalParking);
    setupConditionals(dropdownDeparture, fieldDepartureFrom, fieldDepartureTo, fieldDepartureDate, fieldDepartureTime, fieldDepartureFlightNumber, fieldDepartureTrainNumber,
                                         dropdownDepartureShuttleTrain, dropdownDepartureShuttlePlane, null);

    $(dropdownTest).change(function () {
        if ($(this).find('option').filter(':selected').text().trim() == 'Yes'){
            $('.customization2_attendee_edit-action_save').prop("disabled", true);
            showField($(fieldTestTime));    
        }else if ($(this).find('option').filter(':selected').text().trim() == 'No'){
            
             hide($(fieldTestTime));  
              if($(".error-state").length==0)
              $('.customization2_attendee_edit-action_save').prop("disabled", false);
            else console.log($(".error-state"))
         }
            
    });
}

function disableWhenEmpty(field) {

        var inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_input');   
    
        if(typeof $(inputOfField).get(0) === 'undefined'){
         //   console.log('is dropdown')
            inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_dropdown');
        }
          if(typeof $(inputOfField).get(0) === 'undefined'){
               //         console.log('is date')

            inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_date');
        }else{
            if (!$(inputOfField).hasClass('error-state')) {
            //    console.log('adding new message')
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
                else console.log($(".error-state"))
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


