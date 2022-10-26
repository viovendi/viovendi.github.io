
//What runs on every new attendee form
function handler(){
  
    $(".customization2_attendee_further-data_custom-question_checkbox-line_label:contains(I want to have my contact details shared within the Oerlikon Group)").hide();
    var elementBefore = document.querySelector(".customization2_booker_contact-data_company_label")
    console.log(elementBefore);
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
    $(newInfo).appendTo(elementBefore);
}
  handler();
  //Insert here, what should run once
  //
  var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
    //  console.log("Node has been inserted: ", event.target);
  
      handler();
  
      $("customization2_attendee_view-action_edit").on("click", function () {
   //     console.log("clicked");
      });
    }
  };
  
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //