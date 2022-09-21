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
              disableWhenEmpty(question);
              $('.customization2_attendee_edit-action_save').prop("disabled", true);
          });

          $.each(arrayOfLabelsToHide, function(key, value) {
              var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel(value);
              console.log("Hide " + question);
              $(question).hide();
              $(question).find("input").val("").prop('checked', false).prop('selected', false);
              $(question).find('.vv-single-select-option:contains(Bitte auswählen)').click();
          });
      }

      if(selector.includes('customization2_attendee_further-data_product')){
          hideQuestionsIfNoProductSelected();
      }
      
  });
};

function disableWhenEmpty(field) {

  if ($(field).find('.vv-selection-input__value.m-ellipsis').get(0) != undefined) {

      $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
      if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').next().hasClass("error-message")) {
          $("<div class='error-message'> Bitte ausfüllen </div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
      }

      $(field).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
      //   console.log("change detected: " + $(this).text())
          if ($(this).text().trim() == "Please select" || $(this).text().trim() == "Bitte auswählen") {
              $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
              $(field).find('.error-message').show();
              $('.customization2_attendee_edit-action_save').prop("disabled", true);

          } else {
              $(field).find('.customization2_attendee_further-data_custom-question_dropdown').removeClass('error-state');
              $(field).find('.error-message').hide();
              //   $(".error-state").each(function(){console.log($(this))});

              if ($(".error-state").length == 0)
                  $('.customization2_attendee_edit-action_save').prop("disabled", false);
          }
      });

      return;
  }

  if ($(field).find('.vv-radio__input').get(0) != undefined) {

    $(field).find('.customization2_attendee_further-data_custom-question_radio-group').addClass('error-state');
    if (!$(field).find('.customization2_attendee_further-data_custom-question_radio-group').next().hasClass("error-message")) {
        $("<div class='error-message'> Bitte ausfüllen </div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_radio-group'));
    }

    $(field).on("click change input", ".vv-radio__input", function () {

      console.log("radio changed");

      var radioSelected = false;
      $(field).find('.vv-radio__input').each(function (i, element) {
        if ($(this).is(":checked")) {
          radioSelected = true;
          console.log("radio is selected");
        }
      });

      if (radioSelected) {
        console.log("remove Error State from Radio");
        $(field).find('.customization2_attendee_further-data_custom-question_radio-group').removeClass('error-state');
        $(field).find('.error-message').hide();

            if ($(".error-state").length == 0)
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
      } else {
        console.log("add Error State from Radio");
            $(field).find('.customization2_attendee_further-data_custom-question_radio-group').addClass('error-state');
            $(field).find('.error-message').show();
            $('.customization2_attendee_edit-action_save').prop("disabled", true);
      }

    });

    return;
}

  inputOfField = $(field).find('input');

      if (!$(inputOfField).next().hasClass("error-message")) {
          $("<div class='error-message'> Bitte ausfüllen </div>").insertAfter($(inputOfField));
      }

  $(inputOfField).addClass('error-state');

  $(inputOfField).on("focusout blur", function () {
      myTimeout = setTimeout(function () {
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

           if ($(".error-state").filter(function(){
               return $(this).is(':visible');
           }).length == 0)
               $('.customization2_attendee_edit-action_save').prop("disabled", false);
       }
   });
}

function disableWhenEmptyOnLoad(field) {

  if ($(field).find('.vv-selection-input__value.m-ellipsis').get(0) != undefined) {

          if ($(field).find(".vv-selection-input__value.m-ellipsis").text().trim() == "Please select" || $(field).find(".vv-selection-input__value.m-ellipsis").text().trim() == "Bitte auswählen") {
              $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
              $(field).find('.error-message').show();
              $('.customization2_attendee_edit-action_save').prop("disabled", true);

          } else {
              $(field).find('.customization2_attendee_further-data_custom-question_dropdown').removeClass('error-state');
              $(field).find('.error-message').hide();

              if ($(".error-state").length == 0)
                  $('.customization2_attendee_edit-action_save').prop("disabled", false);
          }
          return;
      };
      

  if ($(field).find('.vv-radio__input').get(0) != undefined) {

      var radioSelected = false;
      $(field).find('.vv-radio__input').each(function (i, element) {
        if ($(field).find(".vv-radio__input").is(":checked")) {
          radioSelected = true;
          console.log("radio is selected");
        }
      });

      if (radioSelected) {
        console.log("remove Error State from Radio");
        $(field).find('.customization2_attendee_further-data_custom-question_radio-group').removeClass('error-state');
        $(field).find('.error-message').hide();

            if ($(".error-state").length == 0)
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
      } else {
        console.log("add Error State from Radio");
            $(field).find('.customization2_attendee_further-data_custom-question_radio-group').addClass('error-state');
            $(field).find('.error-message').show();
            $('.customization2_attendee_edit-action_save').prop("disabled", true);
      }

    return;
}

  inputOfField = $(field).find('input');

      if ($(inputOfField).val().trim().length == 0) {
           $(inputOfField).addClass('error-state');
           $(field).find('.error-message').show();
           $('.customization2_attendee_edit-action_save').prop("disabled", true);

       } else {
           $(inputOfField).removeClass('error-state');
           $(field).find('.error-message').hide();

           if ($(".error-state").filter(function(){
               return $(inputOfField).is(':visible');
           }).length == 0)
               $('.customization2_attendee_edit-action_save').prop("disabled", false);
       }
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

  $$(".customization2_attendee_further-data_custom-question").hideMultipleQuestionsByLabel(["Benötigen Sie einen Parkplatz?", "Abreise-Bahnhof", "Abflughafen", "Ihr Handicap", "Ihre Schuhgröße"]);

  if($(".customization2_attendee_further-data_custom-question_radio-line:contains(Auto)").find("input").is(":checked")){
      $(".customization2_attendee_further-data_custom-question:contains(Benötigen Sie einen Parkplatz?)").show();
      var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel("Benötigen Sie einen Parkplatz?");
      $(question).find("vv-optional-text").css("display", "none");
      disableWhenEmptyOnLoad(question);
  } 
  
  if ($(".customization2_attendee_further-data_custom-question_radio-line:contains(Bahn)").find("input").is(":checked")){
      $(".customization2_attendee_further-data_custom-question:contains(Abreise-Bahnhof)").show();
      var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel("Abreise-Bahnhof");
      $(question).find("vv-optional-text").css("display", "none");
      disableWhenEmptyOnLoad(question);
  } 
  
  if ($(".customization2_attendee_further-data_custom-question_radio-line:contains(Flugzeug)").find("input").is(":checked")){
      $(".customization2_attendee_further-data_custom-question:contains(Abflughafen)").show();
      var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel("Abflughafen");
      $(question).find("vv-optional-text").css("display", "none");
      disableWhenEmptyOnLoad(question);
  } 
  
  if ($(".customization2_attendee_further-data_product:contains(Golf)").find("input").is(":checked")){
      $(".customization2_attendee_further-data_custom-question:contains(Ihr Handicap)").show();
      var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel("Ihr Handicap");
      $(question).find("vv-optional-text").css("display", "none");
      disableWhenEmptyOnLoad(question);
  } 
  
  if ($(".customization2_attendee_further-data_product:contains(Laufen)").find("input").is(":checked")){
      $(".customization2_attendee_further-data_custom-question:contains(Ihre Schuhgröße)").show();
      var question = $$(".customization2_attendee_further-data_custom-question").findQuestionByLabel("Ihre Schuhgröße");
      $(question).find("vv-optional-text").css("display", "none");
      disableWhenEmptyOnLoad(question);
  }
  
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
