console.log('Start working, Google Tag Manager');

 function translateTicketCategoryName(titleName, titleTranslation, descriptionTranslation){
   $('.event-categories li').each(function(i, element) {
  var category = $(this);
  var categoryName = category.find('.customization-category-name')

 
   if(categoryName.text().trim().indexOf(titleName) == 0){
     var categoryDescription = category.find('.customization-category-description')
     categoryName.text(titleTranslation)
     categoryDescription.text(descriptionTranslation)
   }
});
  }
 
 function callAll(){
translateTicketCategoryName('Early-Bird-Ticket (Mitglieder/Partner*)', 'Early-Bird-Ticket (Members / Partner*)', 'until 31.01.2021')
translateTicketCategoryName('Early-Bird-Ticket (Nicht-Mitglieder)', 'Early-Bird-Ticket (Non-Members)', 'until 31.01.2021')
translateTicketCategoryName('Ticket OPS 2021 (Mitglieder/Partner*)', 'Ticket OPS 2021 (Members / Partner*)', 'For members of associations and partners')
translateTicketCategoryName('Ticket OPS 2021 (Nicht-Mitglieder)', 'Ticket OPS 2021 (Non-Members)', 'Price without additional discounts')
translateTicketCategoryName('Ticket OPS 2021 (Mitarbeiter)', 'Ticket OPS 2021 (Employees)', '')


 }
 
  


    var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if(mutation){
        if(mutation){
          console.log('mutation')
          setTimeout(function(){
  callAll();
}, 500);
            
        }
      };
    });
  });

  $('.customization-access-code-label').click(function(){
    mutationObserver.observe($('.customization-access-code-input')[0], {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true
    });
  });

  callAll();
