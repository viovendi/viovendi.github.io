function condQuestion(selector, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected) {
    
    console.log("Start condQuestions for: " + selector);

    const questionsToShow = [];
    for (let i = 0; i < arrayOfLabelsToShow.length; i++)
        questionsToShow[i] = $$('.customization2_attendee_further-data_custom-question').findQuestionByLabel(arrayOfLabelsToShow[i]);

    const questionsToHide = [];
    for (let i = 0; i < arrayOfLabelsToHide.length; i++)
        questionsToHide[i] = $$('.customization2_attendee_further-data_custom-question').findQuestionByLabel(arrayOfLabelsToHide[i]);

    $(selector).click(function() {
        console.log(selector + " clicked");
        var input = $(selector).find('input')
        if (input.is(':checked')) {
            
            console.log("is checked");

            for (let i = 0; i < questionsToShow.length; i++) {
                console.log('Show ' + questionsToShow[i])
                $(questionsToShow[i]).show()
                $(questionsToShow[i]).find('vv-optional-text').css("display", "none");
                $$('.customization2_attendee_further-data_custom-question').disableWhenEmpty(questionsToShow[i]);
            }
            for (let i = 0; i < questionsToHide.length; i++) {
                console.log('Hide ' + questionsToHide[i])
                $(questionsToHide[i]).hide()
                $(questionsToHide[i]).find('.customization2_attendee_further-data_custom-question_input').val('')
            }
            if (disableSaveOnValueSelected)
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
        };
        
        var productSelected = false;
        $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')

        if (checkbox.is(':checked')) {
            productSelected = true;
        }
        })
        
        if(productSelected) {
            $('.customization2_attendee_further-data_custom-question:contains(Ihr Handicap)').hide();
            $('.customization2_attendee_further-data_custom-question:contains(Ihre Schuhgröße)').hide();
        }
        
    });
}


/*
Adds the error styles needed for the conditional questions
*/
function addErrorStyles () {
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

    /*
    styleSheet.onreadystatechange = handlerS;
    styleSheet.onload = handlerS;
    function handlerS() {
      console.log('style added');
    }
  */
    document.head.appendChild(styleSheet);
}

function handler(){
    
  addErrorStyles();
  
  /*
  How to use the conditional questions functions, example:
  */
  $$('.customization2_attendee_further-data_custom-question').hideMultipleQuestionsByLabel(["Benötigen Sie einen Parkplatz?","Abreise-Bahnhof","Abflughafen","Ihr Handicap", "Ihre Schuhgröße"])

  var disableSaveOnValueSelected = true;
  
  // Auto
  var arrayOfLabelsToShow = ["Benötigen Sie einen Parkplatz?"];
  var arrayOfLabelsToHide = ["Abreise-Bahnhof","Abflughafen"];
  condQuestion('.customization2_attendee_further-data_custom-question_radio-line:contains(Auto)', arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);
  
  // Bahn
  arrayOfLabelsToShow = ["Abreise-Bahnhof"];
  arrayOfLabelsToHide = ["Benötigen Sie einen Parkplatz?","Abflughafen"];
  condQuestion('.customization2_attendee_further-data_custom-question_radio-line:contains(Bahn)', arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

  // Flugzeug
  arrayOfLabelsToShow = ["Abflughafen"];
  arrayOfLabelsToHide = ["Benötigen Sie einen Parkplatz?","Abreise-Bahnhof"];
  condQuestion('.customization2_attendee_further-data_custom-question_radio-line:contains(Flugzeug)', arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

  // Golf
  arrayOfLabelsToShow = ["Ihr Handicap"];
  arrayOfLabelsToHide = ["Ihre Schuhgröße"];
  condQuestion('.customization2_attendee_further-data_product:contains(Golf)', arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

  // Laufen
  arrayOfLabelsToShow = ["Ihre Schuhgröße"];
  arrayOfLabelsToHide = ["Ihr Handicap"];
  condQuestion('.customization2_attendee_further-data_product:contains(Laufen)', arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

  /*
    example
  */
  //$$('.customization2_attendee_further-data_custom-question').setValueToDropdownArray(["Dropdown2","Dropdown3","Dropdown4"],["selected","selected","selected"])

}

handler();

var insertionListener = function(event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted: ", event.target);
    //Inser your code here.
    handler();

    $('customization2_attendee_view-action_edit').on( "click", function() {
        console.log( "clicked" );
    });
  }
}

  
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
