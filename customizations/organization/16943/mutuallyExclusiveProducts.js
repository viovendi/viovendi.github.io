var lookup = { };
var h = document.querySelector(".customization2_attendee_further-data");
var t = h.children[1];
var groups = t.querySelectorAll("div.question-group");
var select = [...groups[0].querySelectorAll("vv-checkbox")].map(function () { return false; });
function trigger() {
  groups.forEach(function (gd, gdindex) {
    var products = gd.querySelectorAll(".customization2_attendee_further-data_product");
    if ([...products].some(function (p) {
      if (lookup[p.querySelector(".question-product__name").innerText.trim()]) return true;
    })) return;
    
    products.forEach(function (p, pindex) {
      var input = p.querySelector(".customization2_attendee_further-data_product_checkbox");
      if (!select[pindex] && p.querySelector(".customization2_attendee_further-data_product_capacity").innerText.trim() == "") {
        p.classList.add("ng-valid");
        input.disabled = false;
      } else {
        p.classList.remove("ng-valid");
        input.disabled = true;
      }
    });
  });
}

groups.forEach(function (g, gindex) {
  g.querySelectorAll(".customization2_attendee_further-data_product").forEach(function (box, index) {
    var product = box.querySelector(".question-product__name").innerText.trim();
    box.querySelector(".customization2_attendee_further-data_product_checkbox").onclick = function () {
      lookup[product] = !lookup[product];
      select[index] = lookup[product];
      trigger();
    }
  });
  g.querySelector("vv-button > button").onclick = function () { setTimeout(trigger, 100); };
});
