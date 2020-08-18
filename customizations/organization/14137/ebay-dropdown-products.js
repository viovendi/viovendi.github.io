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
 
productAddTitle("Do. 08", "Do. 08. Oktober 2020", "SD1");
productAddTitle("Fr. 09", "Fr. 09. Oktober 2020", "SD2");
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
 productShow('Slot 1');
 productShow('Slot 2');
 productShow('Slot 3');
}

function workshopShowSD2(){
   productShow('Fr. 09. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
 productShow('Slot 4');
 productShow('Slot 5');
 productShow('Slot 6');
}

function workshopShowSD3(){
   productShow('Mo. 12. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Mo. 12. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Mo. 12. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Mo. 12. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD4(){
   productShow('Di. 13. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Di. 13. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Di. 13. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Di. 13. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD5(){
   productShow('Mi. 14. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Mi. 14. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Mi. 14. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Mi. 14. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD6(){
   productShow('Do. 15. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Do. 15. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Do. 15. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Do. 15. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD7(){
   productShow('Fr. 16. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Fr. 16. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Fr. 16. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Fr. 16. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD8(){
   productShow('Mo. 19. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Mo. 19. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Mo. 19. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Mo. 19. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD9(){
   productShow('Di. 20. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Di. 20. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Di. 20. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Di. 20. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD10(){
   productShow('Mi. 21. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Mi. 21. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Mi. 21. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Mi. 21. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD11(){
   productShow('Do. 22. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Do. 22. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Do. 22. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Do. 22. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD12(){
   productShow('Fr. 23. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Fr. 23. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Fr. 23. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Fr. 23. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD13(){
   productShow('Mo. 26. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Mo. 26. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Mo. 26. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Mo. 26. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD14(){
   productShow('Di. 27. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Di. 27. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Di. 27. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Di. 27. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

