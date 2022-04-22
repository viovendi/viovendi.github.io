console.log('test');

var dropdownLable = "Dropdown1";
var value = "A";
var arrayOfLabelsToShow = ["A","A B","A C","A B C"];
var arrayOfLabelsToHide = ["B","C","B C"];
var disableSaveOnValueSelected = true;
$$().condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected)
