
///*** Attendee email can be only once in email ***///
/*
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Shared/jquery/3.7.1/jquery.min.js";
script.onload = handlerQ;
document.head.appendChild(script);
*/

async function checkEmailRequest(email, oid, eid){
  try {
    const response = await fetch("https://hook.doo.integromat.celonis.com/l4nx5exnmmjxqsontn1o32oiu4ldxshs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, oid, eid })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    return await response.json();
  } catch (err) {
    console.error("Request failed:", err);
    throw err;
  }
}


function injectEmailErrorStyles() {
  if (document.getElementById('email-error-styles')) return;

  const style = document.createElement('style');
  style.textContent = `
    .customization2_attendee_edit-action span.error-message {
      position: absolute;
      color: #c13c26;
      font-size: .75rem;
      line-height: .875rem;
      margin-top: 50px;
    }
  `;
  document.head.appendChild(style);
}

function showError(){
  console.log("showError");
  $('.customization2_attendee_edit-action_save').attr('disabled', true);
  if($('.error-message').length < 1){
    $('.customization2_attendee_edit-action').append('<span class="error-message">Bitte geben Sie Ihre persönliche Mailadresse ein. Funktionspostfächer können bei Teilnehmerdaten nicht berücksichtigt werden.</span>');
  }
}

function hideError(){
  console.log("hideError");
  $('.customization2_attendee_edit-action_save').attr('disabled', false);
  $('.customization2_attendee_edit-action').find('.error-message').remove();
}

function getEmailStore() {
  if (!window.__emailStore) {
    window.__emailStore = {
      byIndex: {},     // {0: "a@b.com", 1: "c@d.com"}
      rawByIndex: {},  // {0: "A@B.com ", 1: "c@d.com"}
      updatedAt: Date.now()
    };
  }
  return window.__emailStore;
}

function hasDuplicateEmails() {
  const store = window.__emailStore;
  const byIndex = (store && store.byIndex) ? store.byIndex : {};

  const seen = new Set();
  for (const key of Object.keys(byIndex)) {
    const email = byIndex[key];
    if (!email) continue; 

    if (seen.has(email)) return true;
    seen.add(email);
  }
  return false;
}

function isEmailAllowed(email, firstName, lastName){
  
  if (!email || !firstName || !lastName) return false;

  const restrictedPrefixes = [
    "contact@",
    "kontakt@",
    "invoice@",
    "info@",
    "buchhaltung@",
    "personal@",
    "mail@"
  ];

  const e = String(email).trim().toLowerCase();

  // Quick structure sanity check
  const atIndex = e.indexOf("@");
  if (atIndex <= 0 || atIndex === e.length - 1) {
    return false; // not a plausible email format
  }

  // 1) Block restricted departmental addresses
  if (restrictedPrefixes.some(prefix => e.startsWith(prefix))) {
    return false;
  }

  // 2) First-letter rule on local part
  const localPart = e.slice(0, atIndex);
  const firstLocalChar = localPart[0];

  const f = String(firstName).trim().toLowerCase();
  const l = String(lastName).trim().toLowerCase();
  if (!f || !l) return false;

  const matchesFirstLetter = firstLocalChar === f[0] || firstLocalChar === l[0];

  return matchesFirstLetter;
}

function validateEmailsAndToggleError(email) {
  console.log("validateEmailsAndToggleError", email);
  const fName = document.querySelector('.customization2_attendee_contact-data_first-name_input');
  const lName = document.querySelector('.customization2_attendee_contact-data_last-name_input');

  if(!fName || !fName.value || !lName || !lName.value) return;
  
  if(!hasDuplicateEmails() && !isEmailUsed && isEmailAllowed(email, fName.value, lName.value) ){
    hideError();
    console.log("hideError", email);
  }else{
    showError();
    console.log("showError", email);
  }
}


const normEmail = v => (v || "").trim().toLowerCase();
// true
let isEmailUsed = false;

function trackEmailChanges(event) {
  console.log('trackEmailChanges', event);

  const store = getEmailStore();
  let emailValue = '';
  const oid = event.detail.event.organizer.id;
  const eid = event.detail.event.id;
  
  for (let i = 0; i < event.detail.order.attendees.length; i++) {
    const attendeeTools = window.doo.tools.booking.attendee({ index: i });
    attendeeTools.defaultQuestions.watchAnswerChange('email', ({ value }) => {
      if (!value || value.lenght < 5) return;
      store.rawByIndex[i] = value ?? "";
      store.byIndex[i] = normEmail(value);
      store.updatedAt = Date.now();

      console.log('Email changed:', i, store.byIndex[i], window.__emailStore);
      emailValue = value;
      validateEmailsAndToggleError(value);
    });
    // listen to the focus-out event for each attendee
    setTimeout(function(){
      document.querySelector(`.customization2_attendee-${i+1} .customization2_attendee_contact-data_email_input`).addEventListener('focusout', async (e)=>{
        //isEmailUsed = await checkEmailRequest(emailValue, oid, eid);
        console.log("on focus out validateEmailsAndToggleError");
        validateEmailsAndToggleError(emailValue);
      });
    }, 500);
  }
  validateEmailsAndToggleError(emailValue);
}

function checkEmailData(event){  
  if(event.detail.widget.page.name == "booking_registration_details"){
    console.log("checkEmailData");
    injectEmailErrorStyles();
    trackEmailChanges(event);
  }
}

window.addEventListener('doo_page_loaded', checkEmailData);
///*****///
