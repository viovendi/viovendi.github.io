//-------other js----
//What runs on every new attendee form
function changeTextTo(selector, originalText, newText) {
    $(selector).each(function () {
        if ($(this).text().trim() == originalText) {
            $(this).text(newText);
        }
    })
};

function changePriceTags() {
    $('.customization-category-price:contains(286,25)').text('2.290 EUR')
    $('.customization-category-price:contains(236,25)').text('1.990 EUR')
    $('.customization-category-price:contains(280)').text('1.680 EUR')
    $('.customization-category-price:contains(311,25)').text('2.490 EUR')
    $('.customization-category-price:contains(268,25)').text('2.2890 EUR')
    $('.customization-category-price:contains(315)').text('1.890 EUR')



};

function changeTicketAmount() {
    
    //Summary
    changeTextTo('.customization2_summary_item_quantity', '8x', '1x');
    changeTextTo('.customization2_summary_item_quantity', '6x', '1x');

    
    
    // Dropdown
    changeTextTo('.vv-single-select-option', '8', '1');
    changeTextTo('.vv-single-select-option', '6', '1');


    document.querySelectorAll(".vv-selection-input__value").forEach(el => {
        if (el.innerText === '8') { el.innerText = '1' }
    });

    addEventListener('click', e => {
        if (e.target.classList.contains('vv-single-select-option')) {
            let selectContainer = e.target.closest('.vv-selection');
            let valueElement = selectContainer.getElementsByClassName('vv-selection-input__value')[0];
            valueElement.innerText = e.target.textContent.trim().replace('<br>', '');
        }
    });

};

changePriceTags(); 
changeTicketAmount();


var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
    console.log("Node has been inserted: ", event.target);    
    changePriceTags();
    changeTicketAmount();
  }
}
document.addEventListener("animationstart", insertionListener, false); 
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 

//--------original js----

//What runs on every new attendee form
function handler(){
    console.log("info.jss");
    $(".customization2_attendee_further-data_custom-question_checkbox-line_label:contains(I want to have my contact details shared within the Oerlikon Group)").hide();
    var elementBefore= document.querySelector("#widgetContainer > vv-widget-master > div > div > vv-booking-short > div > vv-information-step-master > div > vv-information-step > form > div:nth-child(2) > vv-questions > div.vv-mt-xxxxl > vv-buyer > div > vv-collapsible-wrapper > div > div > div > vv-child-form > form > div.vv-mb-lg.customization2_booker_contact-data > vv-default-questions > div > div:nth-child(1) > div > vv-input > label > p > vv-optional-text");
    console.log("....");
    
    var newInfo = `<vv-tooltip _ngcontent-hfv-c179="" standalone="">
    <div class="vv-tooltip vv-tooltip__size--md vv-tooltip__skin--default vv-tooltip__position--bottom">
      <vv-icon name="info" color="blue"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="vv-icon vv-icon__size--sm vv-icon__color--blue" focusable="false" aria-hidden="true"><path d="M20 12a8 8 0 10-16 0 8 8 0 0016 0zM5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-2a1 1 0 100-2 1 1 0 000 2zm0 1c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1-.552 0-1-.444-1-1v-3c0-.552.444-1 1-1z" fill="currentColor"></path></svg></vv-icon>
      <div class="vv-tooltip__content">
        
    
      Bitte tragen Sie hier die <u>genaue</u> Firmierung Ihrer Kanzlei ein!
        
  <!---->
      </div>
    </div>
  <!----><!---->
  
  <!---->
  
  <!---->
  </vv-tooltip>`;
    $(newInfo).insertAfter(elementBefore);
}
  handler();
  //Insert here, what should run once
  //
   insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
      console.log("Node has been inserted: ", event.target);
  
      handler();
  
      $("customization2_attendee_view-action_edit").on("click", function () {
        console.log("clicked");
      });
    }
  };
  
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
  
   insertionListener = function(event) {  
    if (event.animationName === "nodeInserted") {    
      console.log("Node has been inserted: ", event.target);    
      handler();
    }
  }
  document.addEventListener("animationstart", insertionListener, false); 
  // standard + firefox  
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 