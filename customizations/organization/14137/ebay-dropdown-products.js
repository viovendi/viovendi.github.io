console.log('Start working, Google Tag Manager');
 
  function productShow(shortName){
    $('vv-question-simple-product').each(function(i, element) {
    var item = $(this).find('label').text();
        if(item !== '' && item.replace(/^\s+|\s+$/g, "").indexOf(shortName) == 6){
        $(this).find('.row.question-simple-product').toggleClass('show');
        }
    });
  } 
 
  function productAddTitle(shortName, title, indexShowFunction){
    $('vv-question-simple-product').each(function(i, element) {
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
 
productAddTitle("Uhr: SD1 BayBG", "Do. 08. Oktober 2020", "SD1");
 
function workshopShowSD1(){
productShow("Uhr: SD1 BayBG");
}
