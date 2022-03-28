/*
param: dropDown is a parent element from the dropdown input
*/
function getValueFromDropDown(dropDown) {
    const valueText = $(dropDown).find('.vv-selection-input__value.m-ellipsis');
    console.log(valueText);
    const value = $(valueText).text().trim();
    return value;
}
/*
param: dropDown is a parent element from the dropdown input
*/
function getValueTagFromDropDown(dropDown) {
    const valueText = $(dropDown).find('.vv-selection-input__value.m-ellipsis');
    return valueText;
}

function findDropDownByLabel(label) {
    var found = null;
    $(".vv-selection-input").each(function () {
        const labelText = $(this).find(".vv-control-label").text();
        if (labelText.trim().includes(label)) {
            found = this;
        }
    });
    return found;
}

function findQuestionByLabel(label) {
    var field = $$('.customization2_attendee_further-data_custom-question').findField(label);
    if (field == undefined) {
        field = findDropDownByLabel(label);
    }
    return label;
}

function setValueToTextInputByLabel(inputLabel, value) {
    var field = $$('.customization2_attendee_further-data_custom-question').findField(inputLabel);
    $(field).find('.customization2_attendee_further-data_custom-question_input').val(value);
}

function getValueFromTextInputByLabel(inputLabel) {
    var field = $$('.customization2_attendee_further-data_custom-question').findField(inputLabel);
    return $(field).find('.customization2_attendee_further-data_custom-question_input').val();
}

async function setValueToDropdown(dropdownLabel, value) {
    const dropdown = findDropDownByLabel(dropdownLabel);
    await $(dropdown).find(".vv-selection-input__control").click();
    await $(dropdown).find(".vv-single-select-option").filter(el => el == value).click();
    return	
}

function setValueToDropdownArray(dropdownLabelArray, valueArray) {
    if (dropdownLabelArray.length != valueArray.length) {
        console.log('array size not equal');
        return
    }
    const run = async (dropDowns) => {
        await dropDowns.get().reduce(async (memo, label[, idx[, dropDowns]]) => {
            await memo;
            await setValueToDropdown(label, valueArray[idx]);
        }, undefined);
    }
    run(dropdownLabelArray);
}

function condQuestionDropdown(dropdownLabel, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected) {

    var dropdown = findDropDownByLabel(dropdownLabel);

    const questionsToShow = [];
    for (let i = 0; i < arrayOfLabelsToShow.length; i++)
        questionsToShow[i] = findQuestionByLabel(arrayOfLabelsToShow[i]);

    const questionsToHide = [];
    for (let i = 0; i < arrayOfLabelsToHide.length; i++)
        questionsToHide[i] = findQuestionByLabel(arrayOfLabelsToHide[i]);

    $(dropdown).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
        if ($(this).text().trim() == value) {

            for (let i = 0; i < questionsToShow.length; i++) {
                $(questionsToShow[i]).show()
                $(questionsToShow[i]).find('vv-optional-text').css("display", "none");
                disableWhenEmpty(questionsToShow[i]);
            }
            for (let i = 0; i < questionsToHide.length; i++) {
                $(questionsToHide[i]).hide()
                $(questionsToHide[i]).find('.customization2_attendee_further-data_custom-question_input').val('')
            }
            if (disableSaveOnValueSelected)
                $('.customization2_attendee_edit-action_save').prop("disabled", false);
        });
}
                   
function addErrorStyles() {
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

function disableWhenEmpty(field) {

    if (!$(field).find('.customization2_attendee_further-data_custom-question_input').hasClass("error-state")) {
        $("<div class='error-message'>Erforderlich</div>").insertAfter($(field).find('.customization2_attendee_further-data_custom-question_input'));
    }

    $(field).find('.customization2_attendee_further-data_custom-question_input').addClass('error-state');
    $('.customization2_attendee_edit-action_save').prop("disabled", true);

    $(field).find('.customization2_attendee_further-data_custom-question_input').on('input', function () {

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
