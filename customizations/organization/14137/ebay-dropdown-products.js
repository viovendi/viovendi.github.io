console.log('Start working, Google Tag Manager');
 
  function productShow(shortName){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
        if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) == 6){
        $(this).find('.customization2_attendee_further-data_product').toggleClass('show');
        }
    });
  } 
 
  function productAddTitle(shortName, title, indexShowFunction){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
    if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) == 6){
          var div = document.createElement("div");
              div.setAttribute("class","products-title");
              div.textContent = title;
              div.setAttribute("onclick","javascript:workshopShow"+indexShowFunction+"();");
              element.before(div);
          return false;
       }
  })
  }
 
productAddTitle("Slot 1", "HEading 1", "Slot 1");
productAddTitle("Slot 2", "Heading 2", "Slot 2"); 
function workshopShowSD1(){
 console.log('in workshopShowSD1');
productShow("Slot 1");
productShow("Slot 2");
productShow("Slot 3");
}
workshopShowSD1();
