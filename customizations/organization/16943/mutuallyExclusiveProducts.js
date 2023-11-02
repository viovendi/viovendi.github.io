var lookup = { };
var h = document.querySelector(".customization2_booker_further-data");
var t = h.children[1];
var groups = t.querySelectorAll("form>div");
var select = [...groups[0].querySelectorAll("vv-checkbox")].map(function () { return false; });
function trigger() {
  groups.forEach(function (gd, gdindex) {
    var products = gd.querySelectorAll("vv-checkbox");
    if ([...products].some(function (p) {
      if (lookup[p.innerText.trim()]) return true;
    })) return;
    
    products.forEach(function (p, pindex) {
      var input = p.querySelector(".customization2_booker_further-data_product_checkbox");
      if (select[pindex]) {
        p.classList.remove("ng-valid");
        input.disabled = true;
      } else {
        p.classList.add("ng-valid");
        input.disabled = false;
      }
    });
  });
}

groups.forEach(function (g, gindex) {
  g.querySelectorAll("vv-checkbox").forEach(function (box, index) {
    var product = box.innerText.trim();
    box.querySelector(".customization2_booker_further-data_product_checkbox").onclick = function () {
      lookup[product] = !lookup[product];
      select[index] = lookup[product];
      trigger();
    }
  });
  g.querySelector("vv-button > button").onclick = function () { setTimeout(trigger, 100); };
});
