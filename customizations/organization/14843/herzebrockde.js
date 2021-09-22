console.log('Tag - Homag');

// $('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question-1').show()
// $('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question-2').show()
// $('.customization2_attendee-state_edit .customization2_attendee_further-data_custom-question-3').show()


var product1,
    product2,
    product3,
 

var workshopblockObj = {
     workshopblock1 : ["Teilnahme | Mittwoch, 17. November 2021","Geplanter Besuchsbeginn | 17. November 2021","Geplantes Besuchende | 17. November 2021","17.11.21 |14:00 Uhr - 15:00 Uhr | Klassische Servicekonzepte für Handwerk und Mittelstand","17.11.21 | 16:00 Uhr - 17:00 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten.","17.11.21 | 17:15 Uhr - 18:15 Uhr | Apps und digitale Werkzeuge im Handwerk"],
    workshopblock2 : ["Teilnahme | Donnerstag, 18. November 2021","Geplanter Besuchsbeginn | 18. November 2021","Geplantes Besuchsende | 18. November 2021","18.11.21 | 10:00 Uhr - 11:00 Uhr | Erweiterte Servicelösungen für die optimale Nutzung Ihrer Maschine","18.11.21 | 13:00 Uhr - 14:00 Uhr | Klassische Servicekonzepte für Handwerk und Mittelstand","18.11.21 | 14:00 Uhr - 15:00 Uhr | Erweiterte Servicelösungen für die optimale Nutzung Ihrer Maschine","18.11.21 | 16:00 Uhr - 17:00 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten.","18.11.21 |17:15 Uhr - 18:15 Uhr | Apps und digitale Werkzeuge im Handwerk"],    
	workshopblock3 : ["Teilnahme | Freitag, 19. November 2021","Geplanter Besuchsbeginn | 19. November 2021","Geplantes Besuchsende | 19. November 2021","19.11.21 | 09:30 Uhr - 10:30 Uhr | Klassische Servicekonzepte für Handwerk und Mittelstand","19.11.21 | 10:45 Uhr - 11:45 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten.","19.11.21 | 13:00 Uhr - 14:00 | Apps und digitale Werkzeuge im Handwerk"],

};


  	var workshopblock1 = ["Teilnahme | Mittwoch, 17. November 2021","Geplanter Besuchsbeginn | 17. November 2021","Geplantes Besuchende | 17. November 2021","17.11.21 |14:00 Uhr - 15:00 Uhr | Klassische Servicekonzepte für Handwerk und Mittelstand","17.11.21 | 16:00 Uhr - 17:00 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten.","17.11.21 | 17:15 Uhr - 18:15 Uhr | Apps und digitale Werkzeuge im Handwerk"];
  	var workshopblock2 = ["Teilnahme | Donnerstag, 18. November 2021","Geplanter Besuchsbeginn | 18. November 2021","Geplantes Besuchsende | 18. November 2021","18.11.21 | 10:00 Uhr - 11:00 Uhr | Erweiterte Servicelösungen für die optimale Nutzung Ihrer Maschine","18.11.21 | 13:00 Uhr - 14:00 Uhr | Klassische Servicekonzepte für Handwerk und Mittelstand","18.11.21 | 14:00 Uhr - 15:00 Uhr | Erweiterte Servicelösungen für die optimale Nutzung Ihrer Maschine","18.11.21 | 16:00 Uhr - 17:00 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten.","18.11.21 |17:15 Uhr - 18:15 Uhr | Apps und digitale Werkzeuge im Handwerk"];   
	var workshopblock3 = ["Teilnahme | Freitag, 19. November 2021","Geplanter Besuchsbeginn | 19. November 2021","Geplantes Besuchsende | 19. November 2021","19.11.21 | 09:30 Uhr - 10:30 Uhr | Klassische Servicekonzepte für Handwerk und Mittelstand","19.11.21 | 10:45 Uhr - 11:45 Uhr | woodWOP 8.0: Neue Funktionen. Neue Möglichkeiten.","19.11.21 | 13:00 Uhr - 14:00 | Apps und digitale Werkzeuge im Handwerk"];






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

    product1 = $$('.'+wrapper+' .customization2_attendee_further-data_product').findField('Teilnahme | Mittwoch, 17. November 2021');
    $(product1).before('<p id="drop-down-header" style="color:#343a3f">Bitte unterstützen Sie uns bei der Organisation und teilen uns für den Tag Ihres Besuchs Ihre geplante Ankunfts- und Abreisezeit mit. Vielen Dank!</p><br/>');
    $(product1).before('<span class= "workshops" data-block="workshopblock1" style="color:#001941">Mittwoch, 17. November 2021 ▼</span>');

    product2 = $$('.'+wrapper+' .customization2_attendee_further-data_product').findField('Teilnahme | Donnerstag, 18. November 2021');
    $(product2).before('<span class= "workshops" data-block="workshopblock2" style="color:#001941">Donnerstag, 18. November 2021 ▼</span>');

    product3 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Teilnahme | Freitag, 19. November 2021');
    $(product3).before('<span class= "workshops" data-block="workshopblock3" style="color:#001941">Freitag, 19. November 2021 ▼</span>');

    
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
