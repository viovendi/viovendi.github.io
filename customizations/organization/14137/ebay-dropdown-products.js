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
 
productAddTitle("Do. 08.", "Do. 08. Oktober 2020", "SD1");
productAddTitle("Fr. 09.", "Fr. 09. Oktober 2020", "SD2");
productAddTitle("Mo. 12.", "Mo. 12. Oktober 2020", "SD3");
productAddTitle("Di. 13.", "Di. 13. Oktober 2020", "SD4");
productAddTitle("Mi. 14.", "Mi. 14. Oktober 2020", "SD5");
productAddTitle("Do. 15.", "Do. 15. Oktober 2020", "SD6");
productAddTitle("Fr. 16.", "Fr. 16. Oktober 2020", "SD7");
productAddTitle("Mo. 19.", "Mo. 19. Oktober 2020", "SD8");
productAddTitle("Di. 20.", "Di. 20. Oktober 2020", "SD9");
productAddTitle("Mi. 21.", "Mi. 21. Oktober 2020", "SD10");
productAddTitle("Do. 22.", "Do. 22. Oktober 2020", "SD11");
productAddTitle("Fr. 23.", "Fr. 23. Oktober 2020", "SD12");
productAddTitle("Mo. 26.", "Mo. 26. Oktober 2020", "SD13");
productAddTitle("Di. 27.", "Di. 27. Oktober 2020", "SD14");

function workshopShowSD1(){
   productShow('Do. 08.');
   //productShow('Do. 08. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   //productShow('Do. 08. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
  // productShow('Do. 08. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   //productShow('Do. 08. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');
}

function workshopShowSD2(){
 productShow('Fr. 09.');
   /*productShow('Fr. 09. Oktober 2020 | 9:00 Uhr - 10:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 11:00 Uhr - 12:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 14:00 Uhr - 15:00 Uhr');
   productShow('Fr. 09. Oktober 2020 | 16:00 Uhr - 17:00 Uhr');*/
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

