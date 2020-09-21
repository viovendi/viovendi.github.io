
  console.log('Start working, Google Tag Manager Second Page');

  function translateTicketCategory(categoryName, translation, description){
    $(".customization2_attendee").each(function(i, element) {
      var attendee = $(this);
      var ticketCategoryName = attendee.find(".customization2_attendee_title")
       var ticketDescription = attendee.find(".customization-category-description")
      if(ticketCategoryName.text().trim().indexOf(categoryName) == 0){
        ticketCategoryName.text(translation)
        ticketDescription.text(description)
      }
    });   
  }


  /*
 //
 // Translate Ticket Category
 //
 */

  function translateAll(){
      translateTicketCategory('Early-Bird-Ticket (Mitglieder/Partner*)', 'Early-Bird-Ticket (Members / Partner*)', 'until 31.01.2021')
      translateTicketCategory('Early-Bird-Ticket (Nicht-Mitglieder)', 'Early-Bird-Ticket (Non-Members)', 'until 31.01.2021')
      translateTicketCategory('Ticket OPS 2021 (Mitglieder/Partner*)', 'Ticket OPS 2021 (Members / Partner*)', 'For members of associations and partners')
      translateTicketCategory('Ticket OPS 2021 (Nicht-Mitglieder)', 'Ticket OPS 2021 (Non-Members)', 'Price without additional discounts')
      translateTicketCategory('Ticket OPS 2021 (Mitarbeiter)', 'Ticket OPS 2021 (Employees)', '')
  }


  translateAll();




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

 
