console.log("GTM Git loaded");

// replace placeholder on first page:

//
$("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(1) > vv-input > label > div > input").attr("placeholder", "Sök efter nyckelord");

//Dropdown
$("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__value-container > vv-selection-input > div > div > p").text('Välj varuhus');
//Dropdown opened
$('.vv-selection-input__control').click(function () {
  setTimeout(function(){
    $("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__dropdown-container.vv-selection__dropdown-container--bottom > vv-single-select-dropdown > div > vv-single-select-option:nth-child(1) > div").text('Välj varuhus');
}, 50);
  console.log("changed");                          
}
                                )



//Start Date
$('.ng-tns-c47-0').attr("placeholder", "Startdatum");

//End Date
$('.ng-tns-c47-1').attr("placeholder", "Slutdatum");
 
