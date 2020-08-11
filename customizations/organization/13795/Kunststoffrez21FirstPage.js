<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


<script>
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
 


  
translateTicketCategoryName('Frühbucher - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Ticket - Registration for Praxisforum Kunststoffrezyklate 2021', 'The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategoryName('Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Registration for Praxisforum Kunststoffrezyklate 2021', '')
translateTicketCategoryName('Frühbucher Abonnententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Subscriber Price - Registration for Praxisforum Kunststoffrezyklate 2021', '10% discount for subscribers of "Kunststoffe" or "Kunststoffe international". The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategoryName('Abonnententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Subscriber Price - Registration for Praxisforum Kunststoffrezyklate 2021', '10% discount for subscribers of "Kunststoffe" or "Kunststoffe international".')
translateTicketCategoryName('Frühbucher Sonderrabatt - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Special Rate Ticket - Registration for Praxisforum Kunststoffrezyklate 2021', '15% discount from advisory board. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts. The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategoryName('Sonderrabatt - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Special Rate Ticket - Registration for Praxisforum Kunststoffrezyklate 2021', '15% discount from advisory board. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts.')
translateTicketCategoryName('Frühbucher Weiterempfehlungsticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Recommendation Ticket – Registration for Praxisforum Kunststoffrezyklate 2021', '30% recommendation discount for customers and partners. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts. The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategoryName('Weiterempfehlungsticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Recommendation Ticket – Registration for Praxisforum Kunststoffrezyklate 2021', '30% recommendation discount for customers and partners. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts.')
translateTicketCategoryName('Frühbucher Hochschulticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Ticket for university members - Registration for Praxisforum Kunststoffrezyklate 2021', 'The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategoryName('Hochschulticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Ticket for university members - Registration for Praxisforum Kunststoffrezyklate 2021', '')
translateTicketCategoryName('Studententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Student ticket - Registration for Praxisforum Kunststoffrezyklate 2021', '')
translateTicketCategoryName('Ausstellerstand Praxisforum Kunststoffrezyklate 2021', 'Exhibitor Stand for Praxisforum Kunststoffrezyklate 2021', 'The booking includes 1 stand supervisor including participation in the conference, documents and catering.')
translateTicketCategoryName('Weiterer Mitarbeiter mit Tagungsteilnahme', 'Additional employee with conference participation', '')
translateTicketCategoryName('Ausstellungsstand Praxisforum Kunststoffrezyklate 2020 - Referentenunternehmen', 'Exhibitor Stand for Praxisforum Kunststoffrezyklate 2021 / Speaker company', 'The booking includes 1 stand supervisor including participation in the conference, documents and catering.')
 }
 
  

  $('.event-categories').change(function() {
   
      translateTicketCategoryName('Weiterer Mitarbeiter mit Tagungsteilnahme', 'Additional employee with conference participation', '')
    translateTicketCategoryName('Hiermit melde ich mich zum Get-together am Abend des 09.03.2021 an', 'I hereby register for the networking event on the evening of 09.03.2021', '')
  
  })

    

 

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
</script>
