

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
 
//Organizer contact
$('.customization-event-info-contact-label').text('Kontakta arrangör');


//99 available
//$('.event-category__amount')


//Next
$('.customization-button-next').text('Nästa');


//Encrypted connection
$('.customization-encrypted-connection').text('Krypterad anslutning');

//		Selection
//$('.progress-point__label').text('');


$('.ew-header__progress-container .progress-meter .selection span').text('Urval');
$('.ew-header__progress-container .progress-meter .details span').text('Deltagarinformation');
$('.ew-header__progress-container .progress-meter .information span').text('Bekräftelse');

//ATTENDEE DETAILS // BOOKING DETAILS
$('.customization2_attendees_title').text('BOKNINGSINFORMATION');
    
  
//SUMMARY
$('.customization2_summary_headline').text('SAMMANFATTNING');

//Contact details
$('.customization2_attendee_contact-data_headline').text('Contact details1');

//First name
$('.customization2_attendee_contact-data_first-name_label').text('Förnamn');


//Required
$('.customization2_attendee_contact-data_first-name_error').text('Obligatorisk');

//Last name
$('.customization2_attendee_contact-data_last-name_label').text('Efternamn');

//   Required
$('.customization2_attendee_contact-data_last-name_error').text('Obligatorisk');

//Email address
$('.customization2_attendee_contact-data_email_label').text('E-postadress');

//Please enter valid email address
$('.customization2_attendee_contact-data_email_error').text('Vänligen fyll i giltig e-postadress');

//Confirm email address
$('.customization2_attendee_contact-data_email-confirmation_label').text('Bekräfta e-postadress');

//Please enter valid email address
$('.customization2_attendee_contact-data_email-confirmation_error').text('Vänligen fyll i giltig e-postadress');

//Accept
$('.customization2_attendee_edit-action_save').text('Jag har fyllt i mina uppgifter');

//I accept the following terms:
$('.customization2_booking-terms_text').text('');


//Email addresses not matching
$('.customization2_attendee_contact-data_email-confirmation_error').text('E-postadresser stämmer inte överens');

//Change selection
$('.customization-button-previous').text('Tillbaka till urval');


//Book now
$('.customization-button-next').text('Boka nu');
  

