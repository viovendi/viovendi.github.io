console.log('Tag - Homag');




var product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9;

var workshopblockObj = {
    workshopblock1 : ["Teilnahme | Montag, 25. Oktober 2021","Geplanter Besuchsbeginn | 25. Oktober 2021","Geplantes Besuchende | 25. Oktober 2021"],
    workshopblock2 : ["Teilnahme | Dienstag, 26. Oktober 2021","Geplanter Besuchsbeginn | 26. Oktober 2021","Geplantes Besuchsende | 26. Oktober 2021","26.10.21 | 13:00 Uhr - 14:00 Uhr | Software materialManager Advanced Workshop live"],
    workshopblock3 : ["Teilnahme | Mittwoch, 27. Oktober 2021","27.10.21 | 10:00 Uhr - 12:00 Uhr | Zuschnitt-Assistent: Neue Features & FAQs live","27.10.21 | 14:00 Uhr - 15:00 Uhr | Sichere Schnittqualität in der automatischen Produktion – SAWTEQ B-300 flexTec live","27.10.21 | 17:00 Uhr - 19:00 Uhr | Get together","Geplanter Besuchsbeginn | 27. Oktober 2021","Geplantes Besuchsende | 27. Oktober 2021"],
    workshopblock4 : ["Teilnahme | Donnerstag, 28. Oktober 2021","Geplanter Besuchsbeginn | 28. Oktober 2021","Geplantes Besuchsende | 28. Oktober 2021","28.10.21 | 10:00 Uhr - 11:00 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten. Workshop live","28.10.21 | 13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion","28.10.21 | 17:00 Uhr - 19:00 Uhr | Get together"],
    workshopblock5 : ["Teilnahme | Freitag, 29. Oktober 2021","Geplanter Besuchsbeginn | 29. Oktober 2021","Geplantes Besuchsende | 29. Oktober 2021","29.10.21 |10:00 Uhr - 11:00 Uhr | Software materialManager Advanced Workshop live"],
    workshopblock6 : ["Teilnahme | Dienstag, 02. November 2021","Geplanter Besuchsbeginn | 02. November 2021","Geplantes Besuchsende | 02. November 2021","02.11.21 | 10:00 Uhr - 11:00 Uhr | Einstieg in den halbautomatischen Zuschnitt – Flexibilität und Leistung (B-130/B-200 inkl. PC Classic)"],
    workshopblock7 : ["Teilnahme | Mittwoch, 03. November 2021","Geplanter Besuchsbeginn | 03. November 2021","Geplantes Besuchsende | 03. November 2021","03.11.21 | 10:00 Uhr - 11:00 Uhr | Puffer woodStore 8 Lager","03.11.21 | 14:00 Uhr - 15:00 Uhr | Sichere Schnittqualität in der automatischen Produktion – SAWTEQ B-300 flexTec live","03.11.21 | 17:00 Uhr - 19:00 Uhr | Get together"],
    workshopblock9 : ["Teilnahme | Freitag, 05. November 2021","Geplanter Besuchsbeginn | 05. November 2021","Geplantes Besuchsende | 05. November 2021","05.11.21 | 11:00 Uhr - 12:00 Uhr | Einstieg in den halbautomatischen Zuschnitt – Flexibilität und Leistung (B-130/B-200 inkl. PC Classic)"],
    workshopblock8 : ["Teilnahme | Donnerstag, 04. November 2021","Geplanter Besuchsbeginn | 04. November 2021","Geplantes Besuchsende | 04. November 2021","04.11.21 |13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion","04.11.21 | 17:00 Uhr - 19:00 Uhr | Get together"],
    
};
var workshopblock1 = ["Teilnahme | Montag, 25. Oktober 2021","Geplanter Besuchsbeginn | 25. Oktober 2021","Geplantes Besuchende | 25. Oktober 2021"];
var workshopblock2 = ["Teilnahme | Dienstag, 26. Oktober 2021","Geplanter Besuchsbeginn | 26. Oktober 2021","Geplantes Besuchsende | 26. Oktober 2021","26.10.21 | 13:00 Uhr - 14:00 Uhr | Software materialManager Advanced Workshop live"];
var workshopblock3 = ["Teilnahme | Mittwoch, 27. Oktober 2021","27.10.21 | 10:00 Uhr - 12:00 Uhr | Zuschnitt-Assistent: Neue Features & FAQs live","27.10.21 | 14:00 Uhr - 15:00 Uhr | Sichere Schnittqualität in der automatischen Produktion – SAWTEQ B-300 flexTec live","27.10.21 | 17:00 Uhr - 19:00 Uhr | Get together","Geplanter Besuchsbeginn | 27. Oktober 2021","Geplantes Besuchsende | 27. Oktober 2021"];
var workshopblock4 = ["Teilnahme | Donnerstag, 28. Oktober 2021","Geplanter Besuchsbeginn | 28. Oktober 2021","Geplantes Besuchsende | 28. Oktober 2021","28.10.21 | 10:00 Uhr - 11:00 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten. Workshop live","28.10.21 | 13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion","28.10.21 | 17:00 Uhr - 19:00 Uhr | Get together"];
var workshopblock5 = ["Teilnahme | Freitag, 29. Oktober 2021","Geplanter Besuchsbeginn | 29. Oktober 2021","Geplantes Besuchsende | 29. Oktober 2021","29.10.21 |10:00 Uhr - 11:00 Uhr | Software materialManager Advanced Workshop live"];
var workshopblock6 = ["Teilnahme | Dienstag, 02. November 2021","Geplanter Besuchsbeginn | 02. November 2021","Geplantes Besuchsende | 02. November 2021","02.11.21 | 10:00 Uhr - 11:00 Uhr | Einstieg in den halbautomatischen Zuschnitt – Flexibilität und Leistung (B-130/B-200 inkl. PC Classic)"];
var workshopblock7 = ["Teilnahme | Mittwoch, 03. November 2021","Geplanter Besuchsbeginn | 03. November 2021","Geplantes Besuchsende | 03. November 2021","03.11.21 | 10:00 Uhr - 11:00 Uhr | Puffer woodStore 8 Lager","03.11.21 | 14:00 Uhr - 15:00 Uhr | Sichere Schnittqualität in der automatischen Produktion – SAWTEQ B-300 flexTec live","03.11.21 | 17:00 Uhr - 19:00 Uhr | Get together"];
var workshopblock9 = ["Teilnahme | Freitag, 05. November 2021","Geplanter Besuchsbeginn | 05. November 2021","Geplantes Besuchsende | 05. November 2021","05.11.21 | 11:00 Uhr - 12:00 Uhr | Einstieg in den halbautomatischen Zuschnitt – Flexibilität und Leistung (B-130/B-200 inkl. PC Classic)"];
var workshopblock8 = ["Teilnahme | Donnerstag, 04. November 2021","Geplanter Besuchsbeginn | 04. November 2021","Geplantes Besuchsende | 04. November 2021","04.11.21 |13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion","04.11.21 | 17:00 Uhr - 19:00 Uhr | Get together"];



function clickListener(){
    $('.customization2_attendee-state_edit .workshops').on('click', function(e){
        var prodWrapperElem = e.target.closest('.customization2_attendee');
        var prodWrapperClassList = $(prodWrapperElem).attr('class').split(' ');
        var prodWrapper = prodWrapperClassList[3];
        var workshopblockProp = $(this).data('block');
        var workshopblock = workshopblockObj[workshopblockProp];

        $(workshopblock).each( function(i, element) {
            var product = $$('.'+prodWrapper+'.customization2_attendee-state_edit .customization2_attendee_further-data_product').findField(element);
            var question = $$('.'+prodWrapper+'.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question').findField(element);
            if($(product).hasClass('show')){
              $(product).removeClass('show');
            } else {
             $(product).addClass('show');
            }
            if($(question).hasClass('show')){
              $(question).removeClass('show');
            } else {
             $(question).addClass('show');
            }
        });
    });
}

function showWorkshopblock(workshopblock){
    console.log('11111');
    
    //var prodWrapper;
    /*
  $(workshopblock).each( function(i, element) {
    console.log('each prodWrapper');
    console.log(prodWrapper);
    var product = $$('.'+prodWrapper+'.customization2_attendee-state_edit .customization2_attendee_further-data_product').findField(element);
    var question = $$('.'+prodWrapper+'.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question').findField(element);
    console.log(element);
    if($(product).hasClass('show')){
      $(product).removeClass('show');
    } else {
     $(product).addClass('show');
    }
    if($(question).hasClass('show')){
      $(question).removeClass('show');
    } else {
     $(question).addClass('show');
    }

  });
  */
};



function main(wrapper){
    var targetWrapper = 'customization2_attendee-state_edit';

    if(!wrapper){
        wrapper = targetWrapper;
    }

    console.log(wrapper);

    //Add Link to text
    //var element = $("label:contains('live.homag.com')");
    //console.log(element);
    //element.replace("live.homag.com", "<a target='_blank' href='https://live.homag.com/'>live.homag.com</a>");
   // console.log("replaced");
    var textLiveHomag = $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-4').find('.customization2_attendee_further-data_custom-question_label').text();
    var newtext = textLiveHomag.replace("live.homag.com", "<a target='_blank' href='https://live.homag.com/de'>live.homag.com</a>");
    $('.customization2_attendee_further-data_custom-question.customization2_attendee_further-data_custom-question-4').find('.customization2_attendee_further-data_custom-question_label').empty().html(newtext);

    
    $('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question-1').show();
    $('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question-2').show();
    $('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question-3').show();
    $('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question-4').show();

    // var workshopblock1 = ["Teilnahme | Montag, 25. Oktober 2021","Geplanter Besuchsbeginn | 25. Oktober 2021","Geplantes Besuchende | 25. Oktober 2021"];
    product1 = $$('.'+wrapper+' .customization2_attendee_further-data_product').findField('Teilnahme | Montag, 25. Oktober 2021');
    $(product1).before('<p id="drop-down-header" style="color:#343a3f">Bitte unterstützen Sie uns bei der Organisation und teilen uns für den Tag Ihres Besuchs Ihre geplante Ankunfts- und Abreisezeit mit. Vielen Dank!</p><br/>');
    $(product1).before('<span class= "workshops" data-block="workshopblock1" style="color:#001941">Montag, 25. Oktober 2021 ▼</span>');

    // Workshopblock2
    // var workshopblock2 = ["Teilnahme | Dienstag, 26. Oktober 2021","Geplanter Besuchsbeginn | 26. Oktober 2021","Geplantes Besuchsende | 26. Oktober 2021","26.10.21 | 13:00 Uhr - 14:00 Uhr | Software materialManager Advanced Workshop live"];
    product2 = $$('.'+wrapper+' .customization2_attendee_further-data_product').findField('Teilnahme | Dienstag, 26. Oktober 2021');
    console.log(product2);
    $(product2).before('<span class= "workshops" data-block="workshopblock2" style="color:#001941">Dienstag, 26 Oktober 2021▼</span>');

    //Mittwoch
    // var workshopblock3 = ["Teilnahme | Mittwoch, 27. Oktober 2021","27.10.21 | 10:00 Uhr - 12:00 Uhr | Digital Factory Workshop live – face to face","27.10.21 | 14:00 Uhr - 15:00 Uhr | Sichere Schnittqualität in der automatischen Produktion – SAWTEQ B-300 flexTec live","27.10.21 | 17:00 Uhr - 19:00 Uhr | Get together","Geplanter Besuchsbeginn | 27. Oktober 2021","Geplantes Besuchsende | 27. Oktober 2021"];
    product3 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Mittwoch, 27. Oktober 2021');
    $(product3).before('<span class= "workshops" data-block="workshopblock3" style="color:#001941">Mittwoch, 27. Oktober 2021 ▼</span>');

    //donnerstag
    // var workshopblock4 = ["Teilnahme | Donnerstag, 28. Oktober 2021","Geplanter Besuchsbeginn | 28. Oktober 2021","Geplantes Besuchsende | 28. Oktober 2021","28.10.21 | 10:00 Uhr - 11:00 Uhr | Woodwop Workshop live – face to face","28.10.21 | 13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion","28.10.21 | 17:00 Uhr - 19:00 Uhr | Get together"];
    product4 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Donnerstag, 28. Oktober 2021');
    $(product4).before('<span class= "workshops" data-block="workshopblock4" style="color:#001941">Donnerstag, 28. Oktober 2021 ▼</span>');

    //Freitag
    // var workshopblock5 = ["Teilnahme | Freitag, 29. Oktober 2021","Geplanter Besuchsbeginn | 29. Oktober 2021","Geplantes Besuchsende | 29. Oktober 2021","29.10.21 |10:00 Uhr - 11:00 Uhr | Software materialManager Advanced Workshop live"];
    product5 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Freitag, 29. Oktober 2021');
    $(product5).before('<span class= "workshops" data-block="workshopblock5" style="color:#001941">Freitag, 29. Oktober 2021 ▼</span>');


    //Dienstag
    // var workshopblock6 = ["Teilnahme | Dienstag, 02. November 2021","Geplanter Besuchsbeginn | 02. November 2021","Geplantes Besuchsende | 02. November 2021","02.11.21 | 10:00 Uhr - 11:00 Uhr | Einstieg in den halbautomatischen Zuschnitt – Flexibilität und Leistung (B-130/B-200 inkl. PC Classic)"];
    product6 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Dienstag, 02. November 2021');
    $(product6).before('<span class= "workshops" data-block="workshopblock6" style="color:#001941">Dienstag, 02. November 2021 ▼ (AUSGEBUCHT)</span>');

    //Mittwoch
    // var workshopblock7 = ["Teilnahme | Mittwoch, 03. November 2021","Geplanter Besuchsbeginn | 03. November 2021","Geplantes Besuchsende | 03. November 2021","03.11.21 | 10:00 Uhr - 11:00 Uhr | Puffer woodStore 8 Lager","03.11.21 | 17:00 Uhr - 19:00 Uhr | Get together"];
    product7 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Mittwoch, 03. November 2021');
    $(product7).before('<span class= "workshops" data-block="workshopblock7" style="color:#001941">Mittwoch, 03. November 2021 ▼</span>');


    //Donnerstag
    //var workshopblock8 = ["Teilnahme | Donnerstag, 04. November 2021","Geplanter Besuchsbeginn | 04. November 2021","Geplantes Besuchsende | 04. November 2021","04.11.21 |13:00 Uhr - 14:00 Uhr | Neues Leistungsniveau in der vollautomatischen LG1-Produktion"];
    product8 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Donnerstag, 04. November 2021');
    $(product8).before('<span class= "workshops" data-block="workshopblock8" style="color:#001941">Donnerstag, 04. November 2021 ▼</span>');


    //Freitag
    // var workshopblock9 = ["Teilnahme | Freitag, 05. November 2021","Geplanter Besuchsbeginn | 05. November 2021","Geplantes Besuchsende | 05. November 2021"];
    product9 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Freitag, 05. November 2021');
    $(product9).before('<span class= "workshops" data-block="workshopblock9" style="color:#001941">Freitag, 05. November 2021 ▼</span>');
    
    clickListener();
}
main();

function editFunc(wrapper){
  main(wrapper);
}


var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted Git: ", event.target);
    //Insert your code here
    // get current attendee wrapper
    var classList = $(event.target).attr('class').split(' ');
      console.log(classList);
    editFunc(classList[3]);
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
