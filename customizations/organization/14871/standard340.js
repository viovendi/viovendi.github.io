console.log('Start working, Google Tag Manager');
 
  function productShow(shortName){
    $('customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
        if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > 0){
        $(this).find('.customization2_attendee_further-data_product').toggleClass('show');
        }
    });
  } 
 
  function productAddTitle(shortName, title, indexShowFunction){
    $('customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
    if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) > 0){
          var div = document.createElement("div");
              div.setAttribute("class","products-title");
              div.textContent = title;
              div.setAttribute("onclick","javascript:workshopShow"+indexShowFunction+"();");
              element.before(div);
          return false;
       }
  })
  }
 
productAddTitle("(16:15-16:35)", "❯ BWorkshopslot 1 (16:15-16:35) ", "(16:15-16:35)");
 
function workshopShowSD1(){
productShow("(16:15-16:35)");
}
