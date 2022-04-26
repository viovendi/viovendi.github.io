console.log('Start working, Google Tag Manager Tag CUSTOM-1434')

  function disableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
         var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) == -1){
                checkbox.prop( "disabled", true )
             }
    });
   }

   function enableProd(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
         var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName){
                checkbox.prop( "disabled", false )
             }
    });
   }

   function isCheked(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      if(checkbox.is(':checked')){
        disableProd(checkboxName)
      }
    })
   }

   function prodCheked(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          console.log('checked')
             disableProd(checkboxName)
        }else if(!checkbox.is(':checked')){
             enableProd(checkboxName)
          }
      })
    })
  }

function handler(){
  var pathname = window.location.pathname;
  var eventId = pathname.split('/')[3];
  if (eventId == 105260) {
  console.log("do nothing");
  }
  else{
     isCheked()
  prodCheked()
  }
}
handler();
 
