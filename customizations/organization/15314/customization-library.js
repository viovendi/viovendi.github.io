/*
This is the first iteration of our extended helpers.js library
*/

function myHelpers(elements) {
    /*
     label - is the name of the field you want to get the (string: 'Branche (optional)' )
      for example  var field = $$('.customization2_attendee_further-data_custom-question').findField('Branche (optional)');
      Note: you are not required to use the entire field name only part of it
    */
    this.findField = function (lable) {

        this.lable = lable;
        this.field = null;

        elements.forEach((field) => {

            if (field.querySelector('label p') && field.querySelector('label p').innerText.trim().includes(this.lable)) {
                this.field = field;
            }
        });
        return this.field;
    }
    this.findRadioGroup = function (lable) {
        this.lable = lable;
        this.field = null;

        elements.forEach((field) => {
            if ($(field.querySelectorAll('.vv-radio-group > p')[0]).text().trim().includes(this.lable)) {
                this.field = field;
            }
        });
        return this.field;
    }
    this.findCheckboxGroup = function (lable) {
        this.lable = lable;
        this.field = null;

        elements.forEach((field) => {
            if ($(field.querySelectorAll('.vv-checkbox-group > p')[0]).text().trim().includes(this.lable)) {
                this.field = field;
            }
        });
        return this.field;
    }
    //Maybe useless because findField works now? should be checked
    this.findDropDown = function (lable) {
        this.lable = lable;
        this.field = null;
        elements.forEach((field) => {
            const labelText = $(field).find(".vv-control-label").text();
            console.log('Label Texts: '+labelText)
            if (labelText.trim().includes(lable)) {
                this.field = field;
            }
        });
        return this.field;
    }
    this.setValueToDropdown = async function (lable, value) {
        const dropdown = this.findDropDown(lable);
        await $(dropdown).find(".vv-selection-input__control").click();
        await $(dropdown).find(".vv-single-select-option").filter(el => el == value).click();
        return
    }
    /*
    param: dropDown is a parent element from the dropdown input
    */
    this.getValueFromDropDown = function (lable) {
        const dropDown = this.findDropDown(lable);
        const valueText = $(dropDown).find('.vv-selection-input__value.m-ellipsis');
        const value = $(valueText).text().trim();
        return value;
    }
    /*
    TODO : Testing
    */
    this.setValueToDropdownArray = function (dropdownLabelArray, valueArray) {
        if (dropdownLabelArray.length != valueArray.length) {
            console.log('array size not equal');
            return
        }
        const run = async (dropDownLables) => {
            console.log("not implemented!!!!!!!!!");
        //    await dropDownLables.reduce(async (memo, label [, idx[, dropDownLables]]) => {
        //        await memo;
         //       await this.setValueToDropdown(label, valueArray[idx]);
        //    }, undefined);
        }
        run(dropdownLabelArray);
    }
    this.findQuestionByLabel = function (label) {
        var field = $$('.customization2_attendee_further-data_custom-question').findField(label);
        if (field == undefined) {
            field = $$('.customization2_attendee_further-data_custom-question').findDropDown(label);
        }
        return field;
    }

    this.setValueToTextInputByLabel = function (inputLabel, value) {
        var field = $$('.customization2_attendee_further-data_custom-question').findField(inputLabel);
        $(field).find('.customization2_attendee_further-data_custom-question_input').val(value);
    }

    this.getValueFromTextInputByLabel = function (inputLabel) {
        var field = $$('.customization2_attendee_further-data_custom-question').findField(inputLabel);
        return $(field).find('.customization2_attendee_further-data_custom-question_input').val();
    }
    /*
    Needs testing
    */
    this.condQuestionDropdown = function (dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected) {

        var dropdown = this.findDropDown(dropdownLable);
        console.log(dropdown)
        const questionsToShow = [];
        for (let i = 0; i < arrayOfLabelsToShow.length; i++)
            questionsToShow[i] = this.findQuestionByLabel(arrayOfLabelsToShow[i]);
        console.log(questionsToShow)
        const questionsToHide = [];
        for (let i = 0; i < arrayOfLabelsToHide.length; i++)
            questionsToHide[i] = this.findQuestionByLabel(arrayOfLabelsToHide[i]);
        console.log(questionsToHide)
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

    this.disableWhenEmpty = function (field) {
        var inputOfField = $(field).find('.vv-selection-input__value.m-ellipsis').get(0);
        console.log("inputOfField: " + inputOfField)

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
                //   $(".error-state").each(function(){console.log($(this))});
                if ($(".error-state").length == 0)
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
