console.log('git first page')
//rearange search-button INFO, overlaps on smartphone view
//$('.d-flex.align-items-center.justify-content-end').css('margin-top', '-57px')
 var hideEndDate = function() {
  console.log('observe');
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
       var newTextDay = $(this).text().replace(/^\s+|\s+$/g, "");
       var finalTextDay = newTextDay.replace('-','');
       $(this).empty().html(finalTextDay);
    });
  
  // remove '-' from month
  $('div.event-article__date-container__month > span.ng-star-inserted').each(function(i, element) {
       var newTextMonth = $(this).text().replace(/^\s+|\s+$/g, "");
       var finalTextMonth = newTextMonth.replace('-','');
       $(this).empty().html(finalTextMonth);
    });
  
  /*if (element.textContent.trim() === textToReplace) {
    element.childNodes.forEach(function(node){
      if (node.textContent.trim() === textToReplace) {
        node.textContent = textReplacement;
      } 
    })
  }*/
}

observer = new MutationObserver(hideEndDate);

observer.observe(element, { characterData: true, subtree: true, childList: true });

hideEndDate();


