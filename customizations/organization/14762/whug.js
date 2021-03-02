console.log('Start working, Google Tag Manager (WHUG)');
    

  var checked = 0;
  function calcCheckboxes(name){
    $('.'+name+' .customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
     
         if(checkbox.is(':checked')){
          checked = checked + 1;
          };
      
    });
     return checked;
  }
  
  
function init(name){
 $('.'+name+' .customization2_attendee_further-data_product_checkbox').on('change', function(){
   console.log("letsgo");
   handler();
 });
}
init('customization2_attendee');
  

function disableProd(disable){
 $('.customization2_attendee_further-data_product').each(function(i, element) {
       var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(disable) >= 0){
             checkbox.prop( "disabled", true )
          }
 });
}


function uncheckProd(disable){
 $('.customization2_attendee_further-data_product').each(function(i, element) {
       var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(disable) >= 0){
             checkbox.prop( "checked", false )
          }
 });
}
  
  function hideProduct(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(shortName) >= 0){
             checkbox.css("display", "none");
          }
 });
  }

 function showProduct(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(shortName) >= 0){
             checkbox.css("display", "block");
          }
 });
  }
   
function enableProd(disable){
 $('.customization2_attendee_further-data_product').each(function(i, element) {
       var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(disable) >= 0){
             checkbox.prop( "disabled", false )
          }
 });
}
   
  function prodCheked(shortName, disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             hideProduct(disable)
          }
        }else if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             showProduct(disable)
          }
          }
      })
    })
  }
 
    function prodcheck(shortName, disable){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             uncheckProd(disable)
          }
        }
      })
    })
  }
  
  function recheckProd(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      
      if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             checkbox.trigger('click');
             checkbox.trigger('click');
          }
        }
  }
                                                        )}
  
  
  
function handler(){
  
    //get Ticket name:
  var ticketname = $('.customization2_attendee_title')
  var name = ticketname.text().replace(/^\s+|\s+$/g, "")
  
  //pseudo code
  /*
  if any day ticket is selected:
   by clicking one day (eg. Monday), hide all other day
   show only the workshops that are on the selected day
   #
   first hide all workshops
    
  */
  if (name == "Day Ticket Adult" ){
    hideProduct("Workshop Montag");
    hideProduct("Workshop Dienstag");
    hideProduct("Workshop Mittwoch");
    hideProduct("Workshop Donnerstag");
      
      prodCheked("Montag", "Dienstag" )
      prodCheked("Montag", "Mittwoch" )
      prodCheked("Montag", "Donnerstag" )
    
   }
    
    
  

  
  // this is if booker edits his booking, retrigger all checked checkboxes so onchange is triggerd in other functions
    recheckProd("Kreatives Zeichnen")
    

  /*---------------*/

    

    prodcheck("Kreatives Zeichnen", "Filmpräsentation" )
    
    

}
  handler();
  
  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      console.log("Node has been inserted: ", event.target);
      //Insert your code here.
      handler();
      init('customization2_attendee');
    
    }};
  
document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 

 
