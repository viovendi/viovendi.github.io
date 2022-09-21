function condQuestion(selector, arrayOfLabelsToShow, arrayOfLabelsToHide) {

    console.log("Start condQuestions for: " + selector);

    $(selector).on("change", function () {

        console.log(selector + " clicked");

        if ($(selector).find("input").is(":checked")) {
            
            console.log("is checked");

            $.each(arrayOfLabelsToShow, function(key, value) {
                var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel(value);
                console.log("Show " + question);
                $(question).show();
                $(question).find("vv-optional-text").css("display", "none");
                $$(".customization2_attendee_further-data_custom-question").disableWhenEmpty(question);
            });

            $.each(arrayOfLabelsToHide, function(key, value) {
                var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel(value);
                console.log("Hide " + question);
                $(question).hide();
                $(question).find(".customization2_attendee_further-data_custom-question_input").val("");
            });
        }

        if(selector.includes('customization2_attendee_further-data_product')){
            hideQuestionsIfNoProductSelected();
        }
        
    });
}

function hideQuestionsIfNoProductSelected(){
    var productSelected = false;
    $(".customization2_attendee_further-data_product").each(function (i, element) {
        var checkbox = $(this).find(".customization2_attendee_further-data_product_checkbox");
        if (checkbox.is(":checked")) {
            productSelected = true;
        }
    });

    if (!productSelected) {
        $(".customization2_attendee_further-data_custom-question:contains(Ihr Handicap)").hide();
        $(".customization2_attendee_further-data_custom-question:contains(Ihre Schuhgröße)").hide();
    }
}

function handler() {

    $$(".customization2_attendee_further-data_custom-question").hideMultipleQuestionsByLabel(["Benötigen Sie einen Parkplatz?", "Abreise-Bahnhof", "Abflughafen", "Ihr Handicap", "Ihre Schuhgröße"]);

    if($(".customization2_attendee_further-data_custom-question_radio-line:contains(Auto)").find("input").is(":checked")){
        $(".customization2_attendee_further-data_custom-question:contains(Benötigen Sie einen Parkplatz?)").show();
    } 
    
    if ($(".customization2_attendee_further-data_custom-question_radio-line:contains(Bahn)").find("input").is(":checked")){
        $(".customization2_attendee_further-data_custom-question:contains(Abreise-Bahnhof)").show();
    } 
    
    if ($(".customization2_attendee_further-data_custom-question_radio-line:contains(Flugzeug)").find("input").is(":checked")){
        $(".customization2_attendee_further-data_custom-question:contains(Abflughafen)").show();
    } 
    
    if ($(".customization2_attendee_further-data_product:contains(Golf)").find("input").is(":checked")){
        $(".customization2_attendee_further-data_custom-question:contains(Ihr Handicap)").show();
    } 
    
    if ($(".customization2_attendee_further-data_product:contains(Laufen)").find("input").is(":checked")){
        $(".customization2_attendee_further-data_custom-question:contains(Ihre Schuhgröße)").show();
    }
    
    // Auto
    var arrayOfLabelsToShow = ["Benötigen Sie einen Parkplatz?"];
    var arrayOfLabelsToHide = ["Abreise-Bahnhof", "Abflughafen"];
    condQuestion(".customization2_attendee_further-data_custom-question_radio-line:contains(Auto)", arrayOfLabelsToShow, arrayOfLabelsToHide);

    // Bahn
    arrayOfLabelsToShow = ["Abreise-Bahnhof"];
    arrayOfLabelsToHide = ["Benötigen Sie einen Parkplatz?", "Abflughafen"];
    condQuestion(".customization2_attendee_further-data_custom-question_radio-line:contains(Bahn)", arrayOfLabelsToShow, arrayOfLabelsToHide);

    // Flugzeug
    arrayOfLabelsToShow = ["Abflughafen"];
    arrayOfLabelsToHide = ["Benötigen Sie einen Parkplatz?", "Abreise-Bahnhof"];
    condQuestion(".customization2_attendee_further-data_custom-question_radio-line:contains(Flugzeug)", arrayOfLabelsToShow, arrayOfLabelsToHide);

    // Golf
    arrayOfLabelsToShow = ["Ihr Handicap"];
    arrayOfLabelsToHide = ["Ihre Schuhgröße"];
    condQuestion(".customization2_attendee_further-data_product:contains(Golf)", arrayOfLabelsToShow, arrayOfLabelsToHide);

    // Laufen
    arrayOfLabelsToShow = ["Ihre Schuhgröße"];
    arrayOfLabelsToHide = ["Ihr Handicap"];
    condQuestion(".customization2_attendee_further-data_product:contains(Laufen)", arrayOfLabelsToShow, arrayOfLabelsToHide);
}

handler();

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        handler();
    }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
