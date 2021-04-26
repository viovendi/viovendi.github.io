console.log("GTM Git loaded");

// replace placeholder on first page:
$('#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(1) > vv-input > label > div').attr("placeholder", "newText");
$('#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(1)').find('vv-input__control').attr("placeholder", "newText1");

//Dropdown
$('vv-selection-input__value ng-star-inserted').text('some Text');


//Start Date
$('.ng-tns-c47-0').attr("placeholder", "newText");

//End Date
$('.ng-tns-c47-1').attr("placeholder", "newText");
 
