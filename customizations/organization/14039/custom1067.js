console.log("git custom-1067 neubourg");


  function productAddTitle(shortName, title, index, attendee){
   var products = attendee.find('.customization2_attendee_further-data_product')
    products.each(function(i, element){
      var productName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      if(productName.indexOf(shortName) >= 0){
        $(this).before('<span class="products_ws products_ws_'+index+'">'+title+'</span>');
        return false;
      }

    });
  }

  function productShow(index, shortName){
    $('.products_ws_'+index).click(function(){
      $('.customization2_attendee_further-data_product').each(function(i, element){
        var productName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if(productName.indexOf(shortName) >= 0){
          $(this).toggleClass('show')
        }

      });
    }) 
  }

  function disableProd(disable, names){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      if(checkboxName.indexOf(disable) >= 0){
        checkbox.prop( "disabled", false )
      }else if(names.indexOf(checkboxName)>= 0){
        checkbox.prop( "disabled", true )
      }
    });
  }

  function enableProd(disable, names){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      if(names.indexOf(checkboxName)>= 0){
        checkbox.prop( "disabled", false )  
      }
    });
  }


  function prodCheked(shortName, names){
    $('.customization2_attendee_further-data_product').each(function(i, element) {
      var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
      var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
      checkbox.change(function(){
        if(checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
            disableProd(checkboxName, names)
          }
        }else if(!checkbox.is(':checked')){
          if(checkboxName.indexOf(shortName) >= 0){
            enableProd(checkboxName, names)
          }
        }
      })
    })
  }


  var formValid;
  function handler(){
    formValid = false;
    var female = ['Antonia', 'Birgit', 'Christiane', 'Diana', 'Elke', 'Franziska', 'Gisela', 'Heike', 'Ida', 'Judith'];
    var male = ['Albert', 'Bernd', 'Christoph', 'Dirk', 'Emil', 'Felix', 'Gerhard', 'Hannes', 'Ingolf', 'Jens'];
    
   var attendee = $('.customization2_attendee-state_edit');

    //add product Title
    productAddTitle('Antonia','Themen am Samstag ↓', 1, attendee)
    productAddTitle('Albert','Themen am Sonntag ↓', 2, attendee)

    /*
     to show product for Samstag
  */
    productShow(1, 'Antonia')
    productShow(1, 'Birgit');
    productShow(1, 'Christiane');
    productShow(1, 'Diana');
    productShow(1, 'Elke');
    productShow(1, 'Franziska');
    productShow(1, 'Gisela');
    productShow(1, 'Heike');
    productShow(1, 'Ida');
    productShow(1, 'Judith');

    /*
     if product cheked for Samstag
  */  
    prodCheked('Antonia', female);
    prodCheked('Birgit', female);
    prodCheked('Christiane', female);
    prodCheked('Diana', female);
    prodCheked('Elke', female);
    prodCheked('Franziska', female);
    prodCheked('Gisela', female);
    prodCheked('Heike', female);
    prodCheked('Ida', female);
    prodCheked('Judith', female);

    /*
     if product cheked for Sonntag
  */
    prodCheked('Albert', male);
    prodCheked('Bernd', male);
    prodCheked('Christoph', male);
    prodCheked('Dirk', male);
    prodCheked('Emil', male);
    prodCheked('Felix', male);
    prodCheked('Gerhard', male);
    prodCheked('Hannes', male);
    prodCheked('Ingolf', male);
    prodCheked('Jens', male);

    /*
     to show product for Sonntag
  */
    productShow(2, 'Albert')
    productShow(2, 'Bernd');
    productShow(2, 'Christoph');
    productShow(2, 'Dirk');
    productShow(2, 'Emil');
    productShow(2, 'Felix');
    productShow(2, 'Gerhard');
    productShow(2, 'Hannes');
    productShow(2, 'Ingolf');
    productShow(2, 'Jens');
    $('.customization2_attendee_further-data_product_checkbox').change(function(){
          $('vv-text .customization2_summary_item_price').each(function(i, element) {
      if($(this).text().trim().indexOf('Kostenlos') >= 0 ){
        $(this).hide();
      }
      })
    })

  }
  // debugger;
  handler();

  

  var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      handler();
    }
  }


  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari






