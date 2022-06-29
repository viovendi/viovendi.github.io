//What runs on every new attendee form
function changeTextTo(selector, originalText, newText) {
    $(selector).each(function () {
        if ($(this).text().trim() == originalText) {
            $(this).text(newText);
        }
    })
};

function changePriceTags() {
    changeTextTo('.event-category__price', '236,25 EUR', '1.890 EUR');
    changeTextTo('.event-category__price', '273,75 EUR', '2.190 EUR');
};

function changeTicketAmount() {
    changeTextTo('.vv-single-select-option', '8', '1');

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

function handler(){
  changePriceTags();
  changeTicketAmount();
  }
handler();
//Insert here, what should run once
//
var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
    console.log("Node has been inserted: ", event.target);    
    handler(); 
  }
}
document.addEventListener("animationstart", insertionListener, false); 
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
