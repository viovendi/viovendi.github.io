console.log('Start working, Google Tag Manager (WHUG)');



// call handler whenever a checkbox is clicked/changed
function init(name){
 $('.'+name+' .customization2_attendee_further-data_product_checkbox').on('change', function(){
      handler();
 });
}

init('customization2_attendee');

handler();



    // retuen 1 id checkbox is checked , return 0 when not checked                                                      
          
                                                          
  //hides Products
  function hideProduct(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(shortName) >= 0){
              console.log("hide");
             $(this).hide();
          }
 });
  }

// show Products
 function showProduct(shortName){
  $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_name')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(checkboxName.indexOf(shortName) >= 0){
             $(this).show();
          }
 });
  }
   

   // this hides or shows another product when checked or unchecked
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
             showProduct(hide);
          }
          }
      })
    })
  }

   // this hides another product when checkbox is unchecked
function hideProdWhenUnChecked(shortName, hide){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
 
      checkbox.change(function(){
         if(!checkbox.is(':checked')){
              if(checkboxName.indexOf(shortName) >= 0){
                 hideProduct(hide);
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
                                                        )};

  function markAsChecked(name){
       $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
       if(checkboxName.indexOf(name) >= 0){
             checkbox.prop('checked', true);
          }
   });
  }


function ischecked(shortName){
 var bool = false;
   $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      
      
        if(checkbox.is(':checked')){
            console.log("checkbox is checked + name:" + checkboxName)
          if(checkboxName.indexOf(shortName) >= 0){
             console.log("checked");
             bool = true;
          }
        
        }if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
             console.log("unchecked");
          }
        }
      
       console.log(bool);
   
   }
                                                          )
 return bool;
}
    
   
    /*hideProduct("Workshop 1");
    hideProduct("Workshop 2");
    hideProduct("Workshop 3");
    hideProduct("Workshop 4");*/
  
  
function handler(){
 

    //get Ticket name:
  
  const name = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim()

  
  //pseudo code
  /*
   if any day ticket is selected:
   by clicking one day (eg. Monday), hide all other day
   show only the workshops that are on the selected day
   */

   
 
    
  
  if (name == "Erwachsenen Ticket" ){

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
      
   console.log("is checked montag:  "+ischecked("Montag"))
    if(ischecked("Montag")){
      console.log("show ws1");
      showProduct("Workshop 1");
      
    }
    else if(!ischecked("Montag")){
     hideProduct("Workshop 1");
     console.log("hide ws1");
    }
   
    if(ischecked("Dienstag")){
      showProduct("Workshop 2");
    }
    else{
      hideProduct("Workshop 2");
    }
   
   if(ischecked("Mittwoch")){
      showProduct("Workshop 3");
    }
    else{
      hideProduct("Workshop 3");
    }
   
   if(ischecked("Donnerstag") == 1){
      showProduct("Workshop 4");
    }
    else{
      hideProduct("Workshop 4");
    }
    //showProdWhenChecked("Montag", "Workshop 1");
    //showProdWhenChecked("Dienstag", "Workshop 2");
    //showProdWhenChecked("Mittwoch", "Workshop 3"); 
    //showProdWhenChecked("Donnerstag", "Workshop 4"); 
      
    
   }
    // if no day is selected, hide all Workshops
    if (ischecked("Montag")  && ischecked("Dienstag")  && ischecked("Mittwoch")  && ischecked("Donnerstag")  ){
       /* hideProduct("Workshop 1");
        hideProduct("Workshop 2");
        hideProduct("Workshop 3");
        hideProduct("Workshop 4");
        */
       
   }
    
    if (name == "Erwachsene Dauerkarte" ){
        //preselect all days
       markAsChecked("Montag");
       markAsChecked("Dienstag");
       markAsChecked("Mittwoch");
       markAsChecked("Donnerstag");
        // disable all days
       /*disableProd("Montag");
       disableProd("Dienstag");
       disableProd("Mittwoch");
       disableProd("Donnerstag");
       */
    }
    

    
    

}
  
  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      console.log("Node has been inserted: ", event.target);
      //Insert your code here
      init('customization2_attendee');
    
    }};
  
document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // 

 
