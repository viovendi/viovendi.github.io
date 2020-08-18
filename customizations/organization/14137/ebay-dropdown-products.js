console.log('Start working, Google Tag Manager');
 
  function productShow(shortName){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
    var regString  = `(${shortName})$`
    var rex = new RegExp(regString , 'g');
        if(item !== '' && item.trim().search(rex) == 0){
        $(this).toggleClass('show');
        }
    });
  } 
 
  function productAddTitle(shortName, title, indexShowFunction){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
    var item = $(this).find('label').text();
    var regString  = `(${shortName})$`
    var rex = new RegExp(regString , 'g');
    if(item !== '' && item.trim().search(rex) == 0){
          var div = document.createElement("div");
              div.setAttribute("class","products-title");
              div.textContent = title;
              div.setAttribute("onclick","javascript:workshopShow"+indexShowFunction+"();");
              element.before(div);
          return false;
       }
  })
  }
 
productAddTitle("Slot 1", "Do. 08. Oktober 2020", "SD1");
productAddTitle("Slot 2", "Fr. 09. Oktober 2020", "SD2");
productAddTitle("Slot 3", "Mo. 12. Oktober 2020", "SD3");
productAddTitle("Slot 4", "Di. 13. Oktober 2020", "SD4");
productAddTitle("Slot 5", "Mi. 14. Oktober 2020", "SD5");
productAddTitle("Slot 6", "Do. 15. Oktober 2020", "SD6");
productAddTitle("Slot 7", "Fr. 16. Oktober 2020", "SD7");
productAddTitle("Slot 8", "Mo. 19. Oktober 2020", "SD8");
productAddTitle("Slot 9", "Di. 20. Oktober 2020", "SD9");
productAddTitle("Slot 10", "Mi. 21. Oktober 2020", "SD10");
productAddTitle("Slot 11", "Do. 22. Oktober 2020", "SD11");
productAddTitle("Slot 12", "Fr. 23. Oktober 2020", "SD12");
productAddTitle("Slot 13", "Mo. 26. Oktober 2020", "SD13");
productAddTitle("Slot 14", "Di. 27. Oktober 2020", "SD14");

function workshopShowSD1(){
   productShow('Do. 08. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Do. 08. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Do. 08. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Do. 08. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD2(){
   productShow('Fr. 09. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD3(){
   productShow('Mo. 12. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Mo. 12. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Mo. 12. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Mo. 12. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD4(){
   
}

function workshopShowSD5(){
   
}

function workshopShowSD6(){
   
}

function workshopShowSD7(){
   
}

function workshopShowSD8(){
   
}

function workshopShowSD9(){
   
}

function workshopShowSD10(){
   
}

function workshopShowSD11(){
   
}
