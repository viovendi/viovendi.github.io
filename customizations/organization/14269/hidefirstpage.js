console.log('git first page')
//rearange search-button INFO, overlaps on smartphone view
//$('.d-flex.align-items-center.justify-content-end').css('margin-top', '-57px')


// --------------------------------------
$('.event-article__event-info__title').each(function(i, element) {
  if($(this).text().indexOf('Brennholz') >= 0){
   
      $(this).parents().find('div.event-article__date-container__day > span:nth-child(2)').hide();
      $(this).parents().find('div.event-article__date-container__month > span:nth-child(2)').hide();
      $(this).parents().find('div.event-article__date-container__day > span.ng-star-inserted').each(function(i, element) {
       var newTextDay = $(this).text('Ab ' + $(this).text().replace(/^\s+|\s+$/g, ""));
       var textDay = newTextDay.text().replace('-','');
       var finalTextDay = textDay.replace(/^\s+|\s+$/g, "")
       $(this).empty().html(finalTextDay);
    });



  }
});
 var forstReplaceText = function() {
  //hide end day
  $('div.event-article__date-container__day > span:nth-child(2)').each(function(i, element) {
      // $(this).hide();
    });
  //hide end month
  $('div.event-article__date-container__month > span:nth-child(2)').each(function(i, element) {
       $(this).hide();
    });
  
  // remove '-' from day
  $('div.event-article__date-container__day > span.ng-star-inserted').each(function(i, element) {
    /*
       var newTextDay = $(this).text('Ab ' + $(this).text().replace(/^\s+|\s+$/g, ""));
       var textDay = newTextDay.text().replace('-','');
       var finalTextDay = textDay.replace(/^\s+|\s+$/g, "")
       $(this).empty().html(finalTextDay);*/
    });
  
  // remove '-' from month
  $('div.event-article__date-container__month > span.ng-star-inserted').each(function(i, element) {
       var newTextMonth = $(this).text().replace('-','');
       var finalTextMonth = newTextMonth.replace(/^\s+|\s+$/g, "");
       $(this).empty().html(finalTextMonth);
    });
  
}
 
 $('.vv-button').on('click', function(){
   setTimeout(function(){
  forstReplaceText();
}, 400);
   
  })



forstReplaceText();


