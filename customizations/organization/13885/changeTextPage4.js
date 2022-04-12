console.log($('.customization-confirmation-description').text().trim())
console.log("git");
const firtstTextElement=$('.customization-confirmation-description');
const text = firtstTextElement.text().trim();
if(text == "Vielen Dank für Ihre Buchung. In Kürze erhalten Sie Ihre Bestätigung per E-Mail."){
  var clone = firtstTextElement.clone();
  clone.text("Blablieblub")
  $(clone).insertAfter(firtstTextElement);
}
