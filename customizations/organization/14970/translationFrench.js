console.log("translating")

function handler(){
  $('.customization2_attendee_further-data_custom-question_dropdown option').each(function(){
    if($(this).text().trim()=="Bitte auswählen"){
        $(this).text("NEW TEXT");
    }
  })
}

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        
        handler();

        $('customization2_attendee_view-action_edit').on("click", function () {
            console.log("clicked");
        });
    }
}
handler();

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
