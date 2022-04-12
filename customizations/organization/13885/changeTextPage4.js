
console.log("git changeTextPage4.js");
const firtstTextElement=$('.customization-confirmation-description');
const text = firtstTextElement.text().trim();
if(text == "Vielen Dank für Ihre Buchung. In Kürze erhalten Sie Ihre Bestätigung per E-Mail."){
  var clone = firtstTextElement.clone();
  clone.text("Ihre Rechnung erhalten Sie in den nächsten Tagen gesondert per E-Mail von unserem Team.")
  $(clone).insertAfter(firtstTextElement);
}
