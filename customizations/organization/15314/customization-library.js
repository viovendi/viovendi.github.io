/*
This is the first iteration of our extended helpers.js library
*/

function myHelpers(elements) {
    /*
     label - is the name of the field you want to get the (string: 'Branche (optional)' )
      for example  var field = $$('.customization2_attendee_further-data_custom-question').findField('Branche (optional)');
      Note: you are not required to use the entire field name only part of it
    */
    this.findField = function (label) {

        this.label = label;
        this.field = null;

        elements.forEach((field) => {
            if (field.querySelector('label p') && field.querySelector('label p').innerText.trim().includes(this.label)) {
                this.field = field;
            }
        });
        return this.field;
    }
    this.findRadioGroup = function (label) {
        this.label = label;
        this.field = null;

        elements.forEach((field) => {
            console.log("FIELD");
            console.log(field);
            if ($(field.querySelectorAll('.vv-radio-group > p')[0]).text().trim().includes(this.label)) {
                this.field = field;
            }
        });
        return this.field;
    }
    this.findCheckboxGroup = function (label) {
        this.label = label;
        this.field = null;

        elements.forEach((field) => {
            if ($(field.querySelectorAll('.vv-checkbox-group > p')[0]).text().trim().includes(this.label)) {
                this.field = field;
            }
        });
        return this.field;
    }

    this.findDropDown = function (label) {
        this.label = label;
        this.field = null;
        elements.forEach((field) => {
            const labelText = $(field).find(".vv-control-label").text();
            if (labelText.trim().includes(label)) {
                this.field = field;
            }
        });
        return this.field;
    }
    /*
    This method combines the search for any inputs of the attendee form 
    return:
        The container of the label and the input itself
    */
    this.findQuestionByLabel = function (label) {
        var field = this.findField(label);
        if (field == undefined) {
            field = this.findDropDown(label);
        }
        if (field == undefined) {
            field = this.findCheckboxGroup(label);
        }
        if (field == undefined) {
            field = this.findRadioGroup(label);
        }
        return field;
    }
    /*
    param:
        value = the answer text 
    */
    this.setValueToDropdown = async function (label, value) {
        const dropdown = this.findDropDown(label);
        await $(dropdown).find(".vv-selection-input__control").click();
        await $(dropdown).find(".vv-single-select-option").filter(function () {
            return $(this).text().trim() == value
        }).click();
        return
    }
    /*
    param: dropDown is a parent element from the dropdown input
    */
    this.getValueFromDropDown = function (label) {
        const dropDown = this.findDropDown(label);
        const valueText = $(dropDown).find('.vv-selection-input__value.m-ellipsis');
        const value = $(valueText).text().trim();
        return value;
    }
    /*
    This method is needed for selecting answers on multiple dropdowns at once because of synchronization requirements
    params:
        dropdownLabelArray= array of strings containing the labels of the dropdowns
        valueArray = Array of the answer texts that should be selected
    */
    this.setValueToDropdownArray = function (dropdownLabelArray, valueArray) {
        if (dropdownLabelArray.length != valueArray.length) {
            console.log('array size not equal');
            return
        }
        const run = async (dropDownLabels) => {
            await dropDownLabels.reduce(async (memo, label, idx) => {
                await memo;
                await this.setValueToDropdown(label, valueArray[idx]);
            }, undefined);
        }
        run(dropdownLabelArray);
    }


    this.setValueToTextInputByLabel = function (inputLabel, value) {
        var field = this.findField(inputLabel);
        $(field).find('.customization2_attendee_further-data_custom-question_input').val(value);
    }

    this.getValueFromTextInputByLabel = function (inputLabel) {
        var field = this.findField(inputLabel);
        return $(field).find('.customization2_attendee_further-data_custom-question_input').val();
    }
    this.hideQuestionByLabel = function (label) {
            $(this.findQuestionByLabel(label)).hide();
    }
    this.hideMultipleQuestionsByLabel = function (labelArray) {
        labelArray.forEach(label => {
            this.hideQuestionByLabel(label);
        });
    }
    /*
    Implements the conditional questions for a dropdown -> Depending on the selection we show different questions or hide them
    params:
        dropdownLabel   = label of the dropdown we specify this for  
        value   =   answer text we specify this for
        arrayOfLabelsToShow =   all labels that should be visible when the value is selected
        arrayOfLabelsToHide =   all labels that should not be visible when the value is selected
        disableSaveOnValueSelected  = boolean that is true if the save button should be disabled when the value is selected
    */
    this.condQuestionDropdown = function (dropdownLabel, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected) {
        this.addErrorStyles();
        var dropdown = this.findDropDown(dropdownLabel);
        //console.log(dropdown)
        const questionsToShow = [];
        for (let i = 0; i < arrayOfLabelsToShow.length; i++)
            questionsToShow[i] = $$('.customization2_attendee_further-data_custom-question').findQuestionByLabel(arrayOfLabelsToShow[i]);
        //console.log(questionsToShow)
        const questionsToHide = [];
        for (let i = 0; i < arrayOfLabelsToHide.length; i++)
            questionsToHide[i] = $$('.customization2_attendee_further-data_custom-question').findQuestionByLabel(arrayOfLabelsToHide[i]);
        //console.log(questionsToHide)
        $(dropdown).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
            if ($(this).text().trim() == value) {

                for (let i = 0; i < questionsToShow.length; i++) {
                    $(questionsToShow[i]).show()
                    $(questionsToShow[i]).find('vv-optional-text').css("display", "none");
                    $$('.customization2_attendee_further-data_custom-question').disableWhenEmpty(questionsToShow[i]);
                }
                for (let i = 0; i < questionsToHide.length; i++) {
                    $(questionsToHide[i]).hide()
                    $(questionsToHide[i]).find('.customization2_attendee_further-data_custom-question_input').val('')
                }
                if (disableSaveOnValueSelected)
                    $('.customization2_attendee_edit-action_save').prop("disabled", false);
            };
        });
    }
    /*
    Adds the error styles needed for the conditional questions
    */
    this.addErrorStyles = function () {
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
    }

    /*
    This method handles empty inputs for the condQuestionDropdown(), it adds the error styles to the inputs and disables the save button accordingly

    params:
        field is an element containing the input
    */
    this.disableWhenEmpty = function (field) {
        var inputOfField = $(field).find('.vv-selection-input__value.m-ellipsis').get(0);
       // console.log("inputOfField: " + inputOfField)

        if (inputOfField != undefined) {
            $(field).find('.customization2_attendee_further-data_custom-question_dropdown').addClass('error-state');
            if (!$(field).find('.customization2_attendee_further-data_custom-question_dropdown').next().hasClass("error-message")) {
                $("<div class='error-message'> Please complete </div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_dropdown'));
            }

            $(field).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
                console.log("change detected: " + $(this).text())
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

        inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_input');

        if (typeof $(inputOfField).get(0) === 'undefined') {
            //         console.log('is date')
            inputOfField = $(field).find('.customization2_attendee_further-data_custom-question_date');
        } else {
            if (!$(inputOfField).next().hasClass("error-message")) {
                $("<div class='error-message'> Please complete </div>").insertAfter($(inputOfField));
            }
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
}
/*
 selector - is the CSS class of the parent input field that you want to change
 for example $$('.customization2_attendee_further-data_custom-question')
*/
function $$(selector) {
    const elements = document.querySelectorAll(selector);
    return new myHelpers(elements);
}
function $$NoParams() {
    return new myHelpers();
}
