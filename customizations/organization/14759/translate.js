

console.log("GTM Git loaded");

// replace placeholder on first page:
var placeholder = $("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(1) > vv-input").find('placeholder').innerHTML;
console.log(placeholder);
//

//replace available
var ava =  $("#event-list-widget > vv-events-search > vv-list-view > section > ul > li > vv-list-view-standard-item > article > div > div.col-12.event-article__event-info > div.event-article__footer > div > div.event-article__ticket-info.col-sm-7.col-md-8.green > span").text();
var replace = ava.replace("available", "tillgängliga platser");
$("#event-list-widget > vv-events-search > vv-list-view > section > ul > li > vv-list-view-standard-item > article > div > div.col-12.event-article__event-info > div.event-article__footer > div > div.event-article__ticket-info.col-sm-7.col-md-8.green > span").text(replace);



//Dropdown
$("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__value-container > vv-selection-input > div > div > p").text('Välj varuhus');
//Dropdown opened
$('.vv-selection-input__control').click(function () {
  setTimeout(function(){
    $("#event-list-widget > vv-events-search > vv-search > form > div.row.vv-mb-lg > div.col-md-8.col-sm-6 > div > div:nth-child(2) > vv-selection > div > div.vv-selection__dropdown-container.vv-selection__dropdown-container--bottom > vv-single-select-dropdown > div > vv-single-select-option:nth-child(1) > div").text('Välj varuhus');
}, 50);
}
                                )


setInterval(function(){ 
  
  
//page 1
  //contact person
$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(3) > span:nth-child(1)").text('Kontaktperson: ');
 //Phone Number
$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(4) > span:nth-child(1)").text('Telefon: ');
  //Email
$("#widgetContainer > vv-widget-master > div > div > vv-booking-standard > div:nth-child(3) > div > div > div.row.event-info__address > div.col-xs-12.col-12.col-sm-8 > div:nth-child(2) > div:nth-child(5) > span:nth-child(1)").text('E-postadress: ');
  
  
$('.event-info__details').hide();
$('.customization-event-info-address-label').hide();
$('.customization-event-info-contact').hide();

  

//Start Date
$('.ng-tns-c47-0').attr("placeholder", "Startdatum");

//End Date
$('.ng-tns-c47-1').attr("placeholder", "Slutdatum");
 
//Organizer contact
$('.customization-event-info-contact-label').text('Kontakta arrangör');


//99 available Replace the word
var available = $('.event-category__amount').text();
var res = available.replace("available", "tillgängliga platser");
$('.event-category__amount').text(res);
  


$('.event-category__error').text('has ended');

//Next
$('.customization-button-next').text('Nästa');


//Encrypted connection
$('.customization-encrypted-connection').text('Krypterad anslutning');

//		Selection
//$('.progress-point__label').text('');


$('.ew-header__progress-container .progress-meter .selection span').text('Urval');
$('.ew-header__progress-container .progress-meter .information span').text('Deltagarinformation');
$('.ew-header__progress-container .progress-meter .confirmation span').text('Bekräftelse');

//ATTENDEE DETAILS // BOOKING DETAILS
$('.customization2_booker_title').text('BOKNINGSINFORMATION');
    
  
//SUMMARY
$('.customization2_summary_headline').text('SAMMANFATTNING');
  
//Contact Person
$('.customization2_booker_contact-data_headline').text('Kontaktperson');


//Contact details
$('.customization2_booker_contact-data_headline').text('Kontaktperson: ');

//First name
$('.customization2_booker_contact-data_first-name_label').text('Förnamn');


//First name Required
$('.customization2_booker_contact-data_first-name_error').text('Obligatorisk');

//Last name
$('.customization2_booker_contact-data_last-name_label').text('Efternamn');

//Last name Required
$('.customization2_booker_contact-data_last-name_error').text('Obligatorisk');

//Organisation
$('.customization2_booker_contact-data_company_label').text('Organisation/Företag');
  
//Organisation Required
$('.customization2_booker_contact-data_company_error').text('Obligatorisk');
  
  
//Email address
$('.customization2_booker_contact-data_email_label').text('E-postadress (för bokningsbekräftelse och biljett)');
  
 // confirm email address                                                         
$('.customization2_booker_contact-data_email-confirmation_label').text('Bekräfta e-postadress');

  
//Please enter valid email address
$('.customization2_booker_contact-data_email_error').text('Vänligen fyll i giltig e-postadress');

//Confirm email address
$('.customization2_booker_contact-data_email-confirmation_label').text('Bekräfta e-postadress');

//Please enter valid email address
$('.customization2_booker_contact-data_email-confirmation_error').text('Vänligen fyll i giltig e-postadress');

//Accept
$('.customization2_booker_edit-action_save').text('Jag har fyllt i mina uppgifter');

//I accept the following terms:
//$('.customization2_booking-terms_text').text('');


//Email addresses not matching
$('.customization2_booker_contact-data_email-confirmation_error').text('E-postadresser stämmer inte överens');

//Change selection
$('.customization-button-previous').text('<- Tillbaka till urval');

//Book now
$('.customization-button-next').text('Boka nu');
  
  
//page 3 Confirmation

//Booking confirmation
$('.customization-confirmation-label').text('Bokningsbekräftelse');
  
//Thank you for your booking. You will shortly receive your confirmation by email.
$('.customization-confirmation-description').text('Tack för din bokning! Inom kort skickar vi en bekräftelse med din eventbiljett till den e-postadress du uppgivit.');
  
//Details and documents are available in the booking portal:
$('.customization-client-portal-description').text('Information om eventet hittar du även i bokningsportalen:');
  
//Your Booking Portal
$('.customization-client-portal-link').text('Klicka här för att komma till din bokning i bokningsportalen.');
$('.customization-client-portal-link').css('color', '#F99D27');
  
  
 }, 1000);
