function handler(){
  
  /*
  How to use the conditional questions functions, example:
  */
  $$('.customization2_attendee_further-data_custom-question').hideMultipleQuestionsByLabel(["Benötigen Sie einen Parkplatz?","Abreise-Bahnhof","Abflughafen"])

  var dropdownLable = "Wie reisen Sie an?";
  var disableSaveOnValueSelected = true;
  
  value = "Bitte auswählen";
  arrayOfLabelsToShow = [];
  arrayOfLabelsToHide = ["Benötigen Sie einen Parkplatz?","Abreise-Bahnhof","Abflughafen"];
  $$('.customization2_attendee_further-data_custom-question').condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);
  
  var value = "Auto";
  var arrayOfLabelsToShow = ["Benötigen Sie einen Parkplatz?"];
  var arrayOfLabelsToHide = ["Abreise-Bahnhof","Abflughafen"];
  $$('.customization2_attendee_further-data_custom-question').condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);
  
  value = "Bahn";
  arrayOfLabelsToShow = ["Abreise-Bahnhof"];
  arrayOfLabelsToHide = ["Benötigen Sie einen Parkplatz?","Abflughafen"];
  $$('.customization2_attendee_further-data_custom-question').condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

  value = "Flugzeug";
  arrayOfLabelsToShow = ["Abflughafen"];
  arrayOfLabelsToHide = ["Benötigen Sie einen Parkplatz?","Abreise-Bahnhof"];
  $$('.customization2_attendee_further-data_custom-question').condQuestionDropdown(dropdownLable, value, arrayOfLabelsToShow, arrayOfLabelsToHide, disableSaveOnValueSelected);

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
