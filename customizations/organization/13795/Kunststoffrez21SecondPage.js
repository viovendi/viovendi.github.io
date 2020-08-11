<style type="text/css">
  @keyframes nodeInserted { 
    from { opacity: 0.99; }
    to { opacity: 1; } 
  }

  .customization2_booker-state_edit{
    animation-duration: 0.001s;
    animation-name: nodeInserted;
  }
  .customization2_attendee_contact-data_first-name{
    animation-duration: 0.001s;
    animation-name: nodeInserted;
  } 
  .customization2_attendee_edit-action_save{
    animation-duration: 0.001s;
    animation-name: nodeInserted;
  }
    .customization2_summary_item-2{
    animation-duration: 0.001s;
    animation-name: nodeInserted;
  }
   .customization2_summary_item-3{
    animation-duration: 0.001s;
    animation-name: nodeInserted;
  }
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
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

  function translateSummaryBox(categoryName, translation){ 
    $(".customization2_summary_item").each(function(i, element) {
      var item = $(this);
      var ticketCategoryName = item.find(".customization2_summary_item_name");
      if(ticketCategoryName.text().trim().indexOf(categoryName) == 0){
        ticketCategoryName.text(translation)
      }

    })
  }
  
  function translateProduct(categoryName, translation, description){ 
    $(".customization2_attendee_further-data_product").each(function(i, element) {
      var item = $(this);
      var productName = item.find(".customization2_attendee_further-data_product_name");
      var productDescription = item.find(".customization2_attendee_further-data_product_description");
      if(productName.text().trim().indexOf(categoryName) == 0){
        productName.text(translation)
        productDescription.text(description)
      }

    })
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
translateTicketCategory('Abonnententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Subscriber Price - Registration for Praxisforum Kunststoffrezyklate 2021', '10% discount for subscribers of "Kunststoffe" or "Kunststoffe international".')
translateTicketCategory('Frühbucher Sonderrabatt - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Special Rate Ticket - Registration for Praxisforum Kunststoffrezyklate 2021', '15% discount from advisory board. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts. The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategory('Sonderrabatt - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Special Rate Ticket - Registration for Praxisforum Kunststoffrezyklate 2021', '15% discount from advisory board. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts.')
translateTicketCategory('Frühbucher Weiterempfehlungsticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Recommendation Ticket – Registration for Praxisforum Kunststoffrezyklate 2021', '30% recommendation discount for customers and partners. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts. The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategory('Weiterempfehlungsticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Recommendation Ticket – Registration for Praxisforum Kunststoffrezyklate 2021', '30% recommendation discount for customers and partners. Applies only to persons not yet registered, is not granted retroactively and cannot be combined with other discounts.')
translateTicketCategory('Frühbucher Hochschulticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Ticket for university members - Registration for Praxisforum Kunststoffrezyklate 2021', 'The Early Bird Ticket can be booked until 09.02.2021.')
translateTicketCategory('Hochschulticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Ticket for university members - Registration for Praxisforum Kunststoffrezyklate 2021', '')
translateTicketCategory('Studententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Student ticket - Registration for Praxisforum Kunststoffrezyklate 2021', '')
translateTicketCategory('Ausstellerstand Praxisforum Kunststoffrezyklate 2021', 'Exhibitor Stand for Praxisforum Kunststoffrezyklate 2021', 'The booking includes 1 stand supervisor including participation in the conference, documents and catering.')
translateTicketCategory('Weiterer Mitarbeiter mit Tagungsteilnahme', 'Additional employee with conference participation', '')
translateTicketCategory('Ausstellungsstand Praxisforum Kunststoffrezyklate 2020 - Referentenunternehmen', 'Exhibitor Stand for Praxisforum Kunststoffrezyklate 2021 / Speaker company', 'The booking includes 1 stand supervisor including participation in the conference, documents and catering.')
translateProduct('Hiermit melde ich mich zum Get-together am Abend des 09.03.2021 an', 'I hereby register for the networking event on the evening of 09.03.2021', '(included in the participation fee)')
translateSummaryBox("Hiermit melde ich mich zum Get-together am Abend des 09.03.2021 an", "I hereby register for the Get-together on the evening of 09.03.2021. (included in the participation fee)");
    /*
 //
 // Translate Summary Box
 //
 */
    
    
translateSummaryBox('Frühbucher - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Ticket - Registration for Praxisforum Kunststoffrezyklate 2021');
translateSummaryBox('Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Registration for Praxisforum Kunststoffrezyklate 2021');
translateSummaryBox('Frühbucher Abonnententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Subscriber Price - Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Abonnententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Subscriber Price - Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Frühbucher Sonderrabatt - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Special Rate Ticket - Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Sonderrabatt - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Special Rate Ticket - Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Frühbucher Weiterempfehlungsticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Recommendation Ticket – Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Weiterempfehlungsticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Recommendation Ticket – Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Frühbucher Hochschulticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Early Bird Ticket for university members - Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Hochschulticket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Ticket for university members - Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Studententicket - Anmeldung zum Praxisforum Kunststoffrezyklate 2021', 'Student ticket - Registration for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Ausstellerstand Praxisforum Kunststoffrezyklate 2021', 'Exhibitor Stand for Praxisforum Kunststoffrezyklate 2021')
translateSummaryBox('Weiterer Mitarbeiter mit Tagungsteilnahme', 'Additional employee with conference participation')
translateSummaryBox('Ausstellungsstand Praxisforum Kunststoffrezyklate 2020 - Referentenunternehmen', 'Exhibitor Stand for Praxisforum Kunststoffrezyklate 2021 / Speaker company')
  }


  function checkboxChecked (){
    $('input[type="checkbox"]').each(function(i, element) {
      var item = $(this)

      item.change(function(){
        if(item.is(':checked')){
          console.log("checked")
          translateAll();
         


        }
      }
                 )
    }
                                    )
  }

  checkboxChecked();
  translateAll();



  var positionen = ["Corporate Management", "General Technical Management", "Operations Manager","Department Manager","Engineer / Foreman","Technical Clerk", "Other"];
  for (i = 2; i < 9; i++) {
    $('.customization2_attendee_further-data > vv-additional-questions > div:nth-child(2) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select > option:nth-child('+i+')').attr("label",positionen[i-2])
  }

  var abteilung = ["Manufacturing / Production", "Production Planning / Planning Operation", "Research & Development", "Construction / Product Development","Quality Management / -security","Purchasing Department","Materials Testing","Logistics / Materials Management","Marketing / Sales","Other"];
  for (i = 2; i < 12; i++) {
    $('.customization2_attendee_further-data > vv-additional-questions > div:nth-child(3) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select > option:nth-child('+i+')').attr("label",abteilung[i-2])
  }

  var altersgruppen = ["up to the age of 29", "30 to 39 years", "40 to 49 years", "50 to 59 years","60 years and older"];
  for (i = 2; i < 7; i++) {
    $('.customization2_attendee_further-data > vv-additional-questions > div:nth-child(4) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select > option:nth-child('+i+')').attr("label",altersgruppen[i-2])
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


  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      console.log("Node has been inserted: ", event.target);
      //Inser your code here.
      checkboxChecked();
      translateAll();

      var positionen = ["Corporate Management", "General Technical Management", "Operations Manager","Department Manager","Engineer / Foreman","Technical Clerk", "Other"];
      for (i = 2; i < 9; i++) {
        $('.customization2_attendee_further-data > vv-additional-questions > div:nth-child(2) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select > option:nth-child('+i+')').attr("label",positionen[i-2])
      }

      var abteilung = ["Manufacturing / Production", "Production Planning / Planning Operation", "Research & Development", "Construction / Product Development","Quality Management / -security","Purchasing Department","Materials Testing","Logistics / Materials Management","Marketing / Sales","Other"];
      for (i = 2; i < 12; i++) {
        $('.customization2_attendee_further-data > vv-additional-questions > div:nth-child(3) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select > option:nth-child('+i+')').attr("label",abteilung[i-2])
      }

      var altersgruppen = ["up to the age of 29", "30 to 39 years", "40 to 49 years", "50 to 59 years","60 years and older"];
      for (i = 2; i < 7; i++) {
        $('.customization2_attendee_further-data > vv-additional-questions > div:nth-child(4) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select > option:nth-child('+i+')').attr("label",altersgruppen[i-2])
      }

      //customization2_attendee_further-data_custom-question-2


    }
  }


  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 


</script>
