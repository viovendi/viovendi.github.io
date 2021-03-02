console.log('Start working, Google Tag Manager (WHUG)');
    

  
  function calcCheckboxes(name){
    var checked = 0;
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
     handler();
   console.log("letsgo");
   
   
 });
}
init('customization2_attendee');
  


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
             $(this).css("display", "none");
          }
 });
  }

 function showProduct(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(shortName) >= 0){
             $(this).css("display", "block");
          }
 });
  }
   

   
  function hideProdWhenChecked(shortName, hide){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             hideProduct(hide)
          }
        }else if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             showProduct(hide)
          }
          }
      })
    })
  }
function showProdWhenChecked(shortName, show){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             showProduct(show)
          }
        }else if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             hideProduct(show)
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
    
    hideProduct("Workshop Montag");
    hideProduct("Workshop Dienstag");
    hideProduct("Workshop Mittwoch");
    hideProduct("Workshop Donnerstag");
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
      
    hideProdWhenChecked("Montag", "Dienstag" )
    hideProdWhenChecked("Montag", "Mittwoch" )
    hideProdWhenChecked("Montag", "Donnerstag" )
    
    hideProdWhenChecked("Dienstag", "Montag" )
    hideProdWhenChecked("Dienstag", "Mittwoch" )
    hideProdWhenChecked("Dienstag", "Donnerstag" )
      
      
    hideProdWhenChecked("Mittwoch", "Montag" )
    hideProdWhenChecked("Mittwoch", "Dienstag" )
    hideProdWhenChecked("Mittwoch", "Donnerstag" )
      
    hideProdWhenChecked("Donnerstag", "Montag" )
    hideProdWhenChecked("Donnerstag", "Dienstag" )
    hideProdWhenChecked("Donnerstag", "Mittwoch" )
      
      
    hideProdWhenChecked("Montag", "Workshop Dienstag" )
    hideProdWhenChecked("Montag", "Workshop Mittwoch" )
    hideProdWhenChecked("Montag", "Workshop Donnerstag" )
  
    showProdWhenChecked("Montag", "Workshop Montag");
    showProdWhenChecked("Dienstag", "Workshop Dienstag");
    showProdWhenChecked("Mittwoch", "Workshop Mittwoch"); 
    showProdWhenChecked("Donnerstag", "Workshop Donnerstag"); 
      
    if (calcCheckboxes(name) == 0 ){
        console.log("calc is 0");
        hideProduct("Workshop Montag");
        hideProduct("Workshop Dienstag");
        hideProduct("Workshop Mittwoch");
        hideProduct("Workshop Donnerstag");
       
   }
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

 
