console.log('test');
function handler(){
  var dropdownLable = "Dropdown1";
  var value = "A";
  var arrayOfLabelsToShow = ["1","3","5","7"];
  var arrayOfLabelsToHide = ["2","4","6"];
  var disableSaveOnValueSelected = true;
  $$('.customization2_attendee_further-data_custom-question').condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);
  
  value = "B";
  arrayOfLabelsToShow = ["2","4","6"];
  arrayOfLabelsToHide = ["1","3","5","7"];
  $$('.customization2_attendee_further-data_custom-question').condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

  value = "C";
  arrayOfLabelsToShow = ["3","6"];
  arrayOfLabelsToHide = ["1","2","4","5","7"];
  $$('.customization2_attendee_further-data_custom-question').condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

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
