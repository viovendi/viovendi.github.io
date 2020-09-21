
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



translateTicketCategory('Frühbucher - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Ticket - Registration for Praxisforum Kunststoffrezyklate 2021', 'The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategory('Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Registration for Praxisforum Kunststoffrezyklate 2021', '')
translateTicketCategory('Frühbucher Abonnententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Subscriber Price - Registration for Praxisforum Kunststoffrezyklate 2021', '10% discount for subscribers of "Kunststoffe" or "Kunststoffe international". The Early Bird Ticket can be booked until 09.02.2021.')
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

 
