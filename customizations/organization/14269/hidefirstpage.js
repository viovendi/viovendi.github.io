console.log('14269 hidefirstpage.js - git first page.')
//rearange search-button INFO, overlaps on smartphone view
//$('.d-flex.align-items-center.justify-content-end').css('margin-top', '-57px')


// --------------------------------------


 var forstReplaceText = function() {
   
   $('.event-article__event-info__title').each(function(i, element) {
  // check if name contains 'Brennholz');
    if($(this).text().indexOf('Brennholz') >= 0){  
     // hide end day and month
        $(this).parents().find('div.event-article__date-container__day > span:nth-child(2)').hide();
        $(this).parents().find('div.event-article__date-container__month > span:nth-child(2)').hide();
    }
 });
  //hide end day
 /* $('div.event-article__date-container__day > span:nth-child(2)').each(function(i, element) {
    if($(this).parents().find('.event-article__event-info__title').text().indexOf('Brennholz') >= 0){
       $(this).hide();
     }
    });
  //hide end month
  $('div.event-article__date-container__month > span:nth-child(2)').each(function(i, element) {
      if($(this).parents().find('.event-article__event-info__title').text().indexOf('Brennholz') >= 0){

       $(this).hide();
       }
    });
  */
  // remove '-' from day for all events which contain Brennholz
  $('div.event-article__date-container__day > span.ng-star-inserted').each(function(i, element) {
      if($(this).parents().find('.event-article__event-info__title').text().indexOf('Brennholz') >= 0){
           var newTextDay = $(this).text('Ab ' + $(this).text().replace(/^\s+|\s+$/g, ""));
           var textDay = newTextDay.text().replace('-','');
           var finalTextDay = textDay.replace(/^\s+|\s+$/g, "")
           $(this).empty().html(finalTextDay);
      }
   });
  
  // remove '-' from month for all events which contain Brennholz
  $('div.event-article__date-container__month > span.ng-star-inserted').each(function(i, element) {
      if($(this).parents().find('.event-article__event-info__title').text().indexOf('Brennholz') >= 0){
           var newTextMonth = $(this).text().replace('-','');
           var finalTextMonth = newTextMonth.replace(/^\s+|\s+$/g, "");
           $(this).empty().html(finalTextMonth);
       }
   });
  
}
 
 
 // page buttons < 1 2 3  etc. >
$('.vv-pagination__item').on('click', function(){
   setTimeout(function(){
  forstReplaceText();
}, 400);
   
  })

// other buttons like 'search' or 'zurücksetzen' / 'reset'
 $('.vv-button').on('click', function(){
   setTimeout(function(){
  forstReplaceText();
}, 400);
   
  })



forstReplaceText();
