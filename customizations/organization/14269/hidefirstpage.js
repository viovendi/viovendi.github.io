console.log('git first page')
//hide end day
  $('div.event-article__date-container__day > span:nth-child(2)').each(function(i, element) {
       $(this).hide();
    });
  //hide end month
  $('div.event-article__date-container__month > span:nth-child(2)').each(function(i, element) {
       $(this).hide();
    });
  
  // remove '-' from day
  $('div.event-article__date-container__day > span.ng-star-inserted').each(function(i, element) {
       var finalTextDay = $(this).text().replace('-','')
       $(this).empty().html(finalTextDay);
    });
  
  // remove '-' from month
  $('div.event-article__date-container__month > span.ng-star-inserted').each(function(i, element) {
       var finalTextMonth = $(this).text().replace('-','');
       $(this).empty().html(finalTextMonth);
    });
  
