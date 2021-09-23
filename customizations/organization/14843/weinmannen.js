console.log("wennmannen");



var product1,
    product2,
    product3;
  

var workshopblockObj = {
    workshopblock1 : ["Participation | Wednesday, 17 November 2021","Planned start of visit | 17 November 2021","Planned end of visit | 17 November 2021","17.11.21 | 9.30 am | Fit for the future - Developing the right strategy for your success in timber construction."," 17.11.21 | 1.30 pm | Digital and sustainable - Ways out of the industry logic."],
    workshopblock2 : ["Participation | Thursday, 18 November 2021","Planned start of visit | 18 November 2021","Planned end of visit | 18 November 2021","18.11.21 | 9.30 am | From modular construction to module."," 18.11.21 | 1.30 pm | What opportunities does multi-storey construction offer?"],    
	  workshopblock3 : ["Participation | Friday, 19 November 2021","Planned start of visit | 19 November 2021","Planned end of visit | 19 November 2021","19.11.21 |9.30 am | From bream production to prefabricated elements - How do i position myself for the future?"],

};

   var workshopblock1 = ["Participation | Wednesday, 17 November 2021","Planned start of visit | 17 November 2021","Planned end of visit | 17 November 2021","17.11.21 | 9.30 am | Fit for the future - Developing the right strategy for your success in timber construction."," 17.11.21 | 1.30 pm | Digital and sustainable - Ways out of the industry logic."];
   var workshopblock2 = ["Participation | Thursday, 18 November 2021","Planned start of visit | 18 November 2021","Planned end of visit | 18 November 2021","18.11.21 | 9.30 am | From modular construction to module."," 18.11.21 | 1.30 pm | What opportunities does multi-storey construction offer?"];
	 var workshopblock3 = ["Participation | Friday, 19 November 2021","Planned start of visit | 19 November 2021","Planned end of visit | 19 November 2021","19.11.21 |9.30 am | From bream production to prefabricated elements - How do i position myself for the future?"];




function clickListener(){
    console.log(workshopblockObj);
    $('.customization2_attendee-state_edit .workshops').on('click', function(e){
        var prodWrapperElem = e.target.closest('.customization2_attendee');
        var prodWrapperClassList = $(prodWrapperElem).attr('class').split(' ');
        var prodWrapper = prodWrapperClassList[3];
        console.log('prodWrapper');
        console.log(prodWrapper);
        var workshopblockProp = $(this).data('block');
        var workshopblock = workshopblockObj[workshopblockProp];
        console.log(workshopblock);

        $(workshopblock).each( function(i, element) {
            console.log('each prodWrapper');
            console.log(prodWrapper);
            console.log('.'+prodWrapper+'.customization2_attendee-state_edit .customization2_attendee_further-data_product');
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

    product1 = $$('.'+wrapper+' .customization2_attendee_further-data_product').findField('Participation | Wednesday, 17 November 2021');
    $(product1).before('<p id="drop-down-header" style="color:#343a3f">Please assist us with the organization and let us know your planned arrival and departure time for the day of your visit. Thank you very much!</p><br/>');
    $(product1).before('<span class= "workshops" data-block="workshopblock1" style="color:#001941">Wednesday, 17 November 2021 ▼</span>');

    // Workshopblock2
    product2 = $$('.'+wrapper+' .customization2_attendee_further-data_product').findField('Participation | Thursday, 18 November 2021');
    console.log(product2);
    $(product2).before('<span class= "workshops" data-block="workshopblock2" style="color:#001941">Thursday, 18 November 2021 ▼</span>');

    //Mittwoch
    product3 = $$('.'+wrapper+' .customization2_attendee_further-data .customization2_attendee_further-data_product').findField('Participation | Friday, 19 November 2021');
    $(product3).before('<span class= "workshops" data-block="workshopblock3" style="color:#001941">Friday, 19 November 2021 ▼</span>');

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
      
    editFunc(classList[3]);
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
