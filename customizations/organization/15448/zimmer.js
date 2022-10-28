console.log("in git");

function handler() {
   
    var select = $$('.customization2_booker_further-data_custom-question').findField('Zimmer 1');
    var funkton2 = $$('.customization2_booker_further-data_custom-question').findField('Zimmer 2');

    $(funkton2).css("display", "none")

    var ddPosition = $(select).find('.customization2_booker_further-data_custom-question_dropdown')
    var inputPosition2 = $(funkton2).find('.customization2_booker_further-data_custom-question_input')

    ddPosition.change(function () {
        var state = ddPosition.val().trim()
        if (state.includes("Einzelzimmer - 1 Person")) {
            $(funkton2).find('vv-optional-text').css("display", "none");

        } else {
            $(funkton2).css("display", "none")
            inputPosition.val('');
        }

    })

}
handler();

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        //Inser your code here.
        handler();

        $('customization2_attendee_view-action_edit').on("click", function () {
            console.log("clicked");
        });
    }
}


document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
