console.log('test');
function handler(){
  var dropdownLable = "Dropdown1";
  var value = "A";
  var arrayOfLabelsToShow = ["A","A B","A C","A B C"];
  var arrayOfLabelsToHide = ["B","C","B C"];
  var disableSaveOnValueSelected = true;
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
