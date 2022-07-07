console.log("git");

function handler() {
  $(".customization-category-price:contains(0,00)").hide();
  $('.customization2_summary_item_price:contains(0,00)').hide()
}

handler();

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted" || event.animationName === "nodeInserted2") {
    console.log("Node has been inserted: ", event.target);
    handler();
  }
};

document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);
