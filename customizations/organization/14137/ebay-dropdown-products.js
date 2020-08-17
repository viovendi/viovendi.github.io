console.log('Start working, Google Tag Manager');
 
  function productShow(shortName){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
        if(item !== '' && item.trim().indexOf(shortName) == 0){
         console.log(item.trim().indexOf(shortName) == 0, this)
         console.log(item)
        $(this).find('.customization2_attendee_further-data_product').toggleClass('show');
        }
    });
  } 
 
  function productAddTitle(shortName, title, indexShowFunction){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
    if(item !== '' && item.trim().indexOf(shortName) == 0){
          var div = document.createElement("div");
              div.setAttribute("class","products-title");
              div.textContent = title;
              div.setAttribute("onclick","javascript:workshopShow"+indexShowFunction+"();");
              element.before(div);
          return false;
       }
  })
  }
 
productAddTitle("Slot 1", "Heading 1", "SD1");
productAddTitle("Slot 2", "Heading 2", "SD2"); 
function workshopShowSD1(){
  console.log('workshopShowSD1')
productShow("Slot 1");
productShow("Slot 2");
productShow("Slot 3");
}

function workshopShowSD2(){
  // productShow("Slot 1");
  // productShow("Slot 2");
  // productShow("Slot 3");
  }
