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


// handler is called every time a checkbox is "changed" 
function handler() {
markAsChecked("Double Opt in Text");
}


//change Datasecurity text
var obj = $(".customization2_booking-terms_text").text("Ich willige ein, dass die Wealthcap Kapitalverwaltungsgesellschaft mbH die von mir angegebenen personenbezogenen Daten zu Werbezwecken per E-Mail und/oder Briefpost nutzt, um mir Informationen zu Veranstaltungen, zum Unternehmen und zu weiteren Produkten und Angeboten der Wealthcap Kapitalverwaltungsgesellschaft mbH aus dem Bereich der Finanz- und Kapitalanlage sowie zur Immobilienwirtschaft zukommen zu lassen. \n \n Ich nehme zur Kenntnis, dass Wealthcap die Richtigkeit meiner E-Mail-Adresse durch Zusendung eines von mir zu bestätigenden Links überprüft. Nur durch diese Bestätigung schließe ich meine Anmeldung erfolgreich ab.\n\n");
obj.append($('<a/>').attr('href', 'http://www.wealthcap.com/service/datenschutz">Datenschutzunformationen').html("Es gelten die Datenschutzinformationen von Wealthcap.")).html();
obj.html(obj.html().replace(/\n/g,'<br/>'));
// .customization2_booking-terms_text
$(".customization2_booking-terms_custom-term-1").hide();


var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    //handler();
    
    $('.customization2_opt-out-and-opt-in').hide()
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
