console.log('Start working, Google Tag Manager (DOI)');

handler();

function markAsChecked(name) {
  $('.customization2_opt-out-and-opt-in').each(function (i, element) {
    var checkbox = $(this).find('.customization2_double-opt-in_checkbox')
    var checkboxName = $(this).find('.customization2_double-opt-in_checkbox-text').text().trim()
    if (checkboxName.indexOf(name) >= 0) {
      checkbox.trigger('click');
      console.log('clicked');
    }
  });
  $('.customization2_opt-out-and-opt-in').hide()
}


// click radio box and hid
$('.customization2_organizer-bank-transfer_button').trigger('click');
//$('.customization2_payment').hide()
$("vv-payment-method-selection > div > div.vv-p-xl.vv-border-xs.vv-border-grey-light.vv-rounded-lg").hide()



function prefill(){
      
    //Prefill fields
    if ($('.customization2_booker_contact-data_street_input').val().length === 0 ){
      $('.customization2_booker_contact-data_street_input').val('prefilled');
      $('.customization2_booker_contact-data_street_input').focus();
      $('.customization2_booker_contact-data_street_input').trigger('focusout');
    }

    if ($('.customization2_booker_contact-data_street-number_input').val().length === 0 ){
      $('.customization2_booker_contact-data_street-number_input').val('prefilled');
      $('.customization2_booker_contact-data_street-number_input').focus();
      $('.customization2_booker_contact-data_street-number_input').trigger('focusout');

    }
    if ($('.customization2_booker_contact-data_zip_input').val().length === 0 ){
      $('.customization2_booker_contact-data_zip_input').val('prefilled');
      $('.customization2_booker_contact-data_zip_input').focus();
      $('.customization2_booker_contact-data_zip_input').trigger('focusout');

    }
    if ($('.customization2_booker_contact-data_city_input').val().length === 0 ){
      $('.customization2_booker_contact-data_city_input').val('prefilled');
      $('.customization2_booker_contact-data_city_input').focus();
      $('.customization2_booker_contact-data_city_input').trigger('focusout');

    }
    console.log($('.customization2_booker_contact-data_country_input').val().length);
    if ($('.customization2_booker_contact-data_country_input').val().length === 0 ){
      $(".customization2_booker_contact-data_country_input")[0].selectedIndex = 49;
      $('.customization2_booker_contact-data_country_input').focus();
      $('.customization2_booker_contact-data_country_input').trigger('click');
      $('.customization2_booker_contact-data_country_input').trigger('focusout');
    }
  
  //set focus to first input
  $('.customization2_booker_contact-data_first-name_input').focus();    
}

prefill();

$('.customization2_booker-state_edit').focus()
// handler is called every time a checkbox is "changed" 
function handler() {
markAsChecked("Double Opt in Text");
  
}

$('.vv-checkbox__indicator').css({"position":"absolute","top":"85px","left":"23px"});


var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    //handler();
    
    $('.customization2_opt-out-and-opt-in').hide()
    
    prefill();
    
    

    
    
    
  }
};
//change Datasecurity text
var obj = $(".customization2_booking-terms_text").text("Ich willige ein, dass die Wealthcap Kapitalverwaltungsgesellschaft mbH die von mir angegebenen personenbezogenen Daten zu Werbezwecken per E-Mail und/oder Briefpost nutzt, um mir Informationen zu Veranstaltungen, zum Unternehmen und zu weiteren Produkten und Angeboten der Wealthcap Kapitalverwaltungsgesellschaft mbH aus dem Bereich der Finanz- und Kapitalanlage sowie zur Immobilienwirtschaft zukommen zu lassen. \n \n Ich nehme zur Kenntnis, dass Wealthcap die Richtigkeit meiner E-Mail-Adresse durch Zusendung eines von mir zu bestätigenden Links überprüft. Nur durch diese Bestätigung schließe ich meine Anmeldung erfolgreich ab.\n\n");
if(!obj.length <= 0){
obj.append($('<a/>').attr({ href:"https://www.wealthcap.com/service/datenschutz", target:"_blank" }).html("Es gelten die Datenschutzinformationen von Wealthcap.")).html();
obj.html(obj.html().replace(/\n/g,'<br/>'));
  }
// .customization2_booking-terms_text
$(".customization2_booking-terms_custom-term-1").hide();

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
