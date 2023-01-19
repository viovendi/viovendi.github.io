// Funktion to show and hide custom question
var locale = window.location.pathname.split('/')[1]

console.log(locale);

function showQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label, p");
    if (label.text().trim().includes(name)) {
      $(item).show();
    }
  });
}

function hideQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label, p");

    if (label.text().trim().includes(name)) {
      $(item).hide();
    }
  });
}

var pathArray = window.location.pathname.split('/');
    
for (i = 0; i < pathArray.length; i++) {
  console.log(pathArray[i]);
     if(pathArray[i].includes("15448-40425")) 
            console.log("mitarbeiter");
}
//hide all questions
 hideQuestion(".customization2_attendee_further-data_custom-question", "Deutschland");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Spanien");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Österreich");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Belgien");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Schweiz");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Holland");
 hideQuestion(".customization2_attendee_further-data_custom-question", "UK");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Nederland");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Ibérica");
 hideQuestion(".customization2_attendee_further-data_custom-question", "Belgium");

if (locale == "de-de"){
  showQuestion(".customization2_attendee_further-data_custom-question", "Deutschland");
}
if (locale == "en-us"){
  showQuestion(".customization2_attendee_further-data_custom-question", "UK");
}




/*
function findDropDownByLabel(label) {
    var found = null;
    $(".vv-selection-input").each(function () {
        const labelText = $(this).find(".vv-control-label").text().replace(/\s+/g, ' ');

        if (labelText.trim() == label.trim()) {
            found = this;
        }
    });
    return found;
};

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

    var field1 = findDropDownByLabel('Zimmer 2 (optional)');
    //var field2 = findDropDownByLabel('Zimmer 2');

    $(field1).hide();
    //$(field2).hide();


    var dropdown1 = findDropDownByLabel('Zimmer 1 (optional)');
    
    $(dropdown1).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
        if ($(this).text().trim() == 'Einzelzimmer - 1 Person') {
            $(field1).show();
            $(field1).find('vv-optional-text').css("display", "none");
            disableWhenEmpty(field1);
           console.log("einzezimmer");
        } else {
            $(field1).hide();
            $(field1).find('.customization2_attendee_further-data_custom-question_dropdown').val('');
            $('.customization2_attendee_edit-action_save').prop("disabled", false);
            console.log("else");
        }
    });
    

    function disableWhenEmpty(field) {
        var inputOfField = $(field).find('.vv-selection-input__value.m-ellipsis').get(0);

        if(inputOfField!=undefined){
            $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
            if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').next().hasClass("error-message")) {
                $("<div class='error-message'> Please complete </div>").insertAfter( $(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
            }
            
        $(field).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
           if ($(this).text().trim() == "Please select"||$(this).text().trim() == "Bitte auswählen") {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
                $(field).find('.error-message').show();
                $('.customization2_attendee_edit-action_save').prop("disabled", true);

            } else {
                $(field).find('.customization2_attendee_further-data_custom-question_dropdown').removeClass('error-state');
                $(field).find('.error-message').hide();
             //   $(".error-state").each(function(){console.log($(this))});
                if($(".error-state").length==0)
                    $('.customization2_attendee_edit-action_save').prop("disabled", false);
            }
        });
            
        return;
        }
    
         inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_input');   

          if(typeof $(inputOfField).get(0) === 'undefined'){
               //         console.log('is date')
            inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_date');
        }else{
            if (!$(inputOfField).next().hasClass("error-message")) {
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
            }
        });     
    }
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
*/
