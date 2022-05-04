console.log('Start working, Google Tag Manager Tag CUSTOM-1434')

  function disableProd2(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
         var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName.indexOf(disable) == -1){
               console.log("disable");
                checkbox.prop( "disabled", true )
             }
    });
   }

   function enableProd2(disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
          var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
         var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
             if(checkboxName){
                checkbox.prop( "disabled", false )
             }
    });
   }

   function isCheked2(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      if(checkbox.is(':checked')){
        disableProd2(checkboxName)
      }
    })
   }

   function prodCheked2(){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          console.log('checked')
             disableProd2(checkboxName)
        }else if(!checkbox.is(':checked')){
             enableProd2(checkboxName)
          }
      })
    })
  }

function handler2(){
  var pathname = window.location.pathname;
  var eventId = pathname.split('/')[3];
  if (eventId == 105260) {
  console.log("do nothing");
  }
  else{
  console.log("call functions");
  isCheked2();
  prodCheked2();
  }
}
handler2();
 
