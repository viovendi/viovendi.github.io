 console.log('Start working, Google Tag Manager - Git');
   var formValid;

  function handler(){
    formValid = false;
    
    $('.customization2_attendee_further-data_product-1').before('<span class="products_title">Auswahl der Praktiker Foren</span>')
    $(".customization2_attendee_edit-action_save").attr("disabled", true);
    $(".customization2_attendee_edit-action_save").before('<span class="btn_info_text">Bitte wählen Sie<br> jeweils einen Workshop aus</span>')


    function productAddTitle(shortName, title, index){
      $('.customization2_attendee_further-data_product').each(function(i, element){
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


    function disableProd(disable){
      $('.customization2_attendee_further-data_product').each(function(i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if(checkboxName.indexOf(disable) >= 0){
          checkbox.prop( "disabled", true )
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
              disableProd(disable)
            }
          }else if(!checkbox.is(':checked')){
            if(checkboxName.indexOf(shortName) >= 0){
              enableProd(disable)
            }
          }
        })
      })
    }


    function btnCheked(){
      var arr = ['WS 1.1 Führungskompetenz','WS 1.2 Update DGSVO und Datenschutz','WS 1.3 Product Display - Produkte im richtigen Licht präsentieren','WS 1.4 Social Media gewinnbringen einsetzen' ,'WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung','WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen','WS 2.3 Konfliktmanagement','WS 2.4 Ausbildung und Praktikum','WS 3.1 Recruiting mit Xing und LinkedIn','WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL','WS 3.3 Mitarbeiterbindung und -entwicklung','WS 3.4 Bargeldlose Zahlungsmethoden']
      var cheked = 0;

      $('.customization2_attendee_further-data_product').each(function(i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

        checkbox.change(function(){
          if(checkbox.is(':checked')){
            if(arr.indexOf(checkboxName) >= 0){
              cheked++
              console.log("+1")
              if(cheked==3){
                $(".customization2_attendee_edit-action_save").attr("disabled", false);
                $(".btn_info_text").hide()
                return false;
              }
            }
          }
        })
      })
    }

    function inputChecked (){
      $('.customization2_attendee_further-data_product').each(function(i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox');
        checkbox.change(function(){
          if(checkbox.is(':checked')){
            window.setTimeout(function(){
              $(".customization2_attendee_further-data_product").removeClass('show'); 
            }, 500);
          }
        });
      });
    }


    inputChecked()
    btnCheked()


    prodCheked("WS 1.1 Führungskompetenz", "WS 1.2 Update DGSVO und Datenschutz" )
    prodCheked("WS 1.1 Führungskompetenz", "WS 1.3 Product Display - Produkte im richtigen Licht präsentieren" )
    prodCheked("WS 1.1 Führungskompetenz", "WS 1.4 Social Media gewinnbringen einsetzen" )
    
    prodCheked("WS 1.2 Update DGSVO und Datenschutz", "WS 1.1 Führungskompetenz" )
    prodCheked("WS 1.2 Update DGSVO und Datenschutz", "WS 1.3 Product Display - Produkte im richtigen Licht präsentieren" )
    prodCheked("WS 1.2 Update DGSVO und Datenschutz", "WS 1.4 Social Media gewinnbringen einsetzen" )
    
    prodCheked("WS 1.3 Product Display - Produkte im richtigen Licht präsentieren", "WS 1.2 Update DGSVO und Datenschutz" )
    prodCheked("WS 1.3 Product Display - Produkte im richtigen Licht präsentieren", "WS 1.1 Führungskompetenz" )
    prodCheked("WS 1.3 Product Display - Produkte im richtigen Licht präsentieren", "WS 1.4 Social Media gewinnbringen einsetzen" )
    
    prodCheked("WS 1.4 Social Media gewinnbringen einsetzen", "WS 1.2 Update DGSVO und Datenschutz" )
    prodCheked("WS 1.4 Social Media gewinnbringen einsetzen", "WS 1.3 Product Display - Produkte im richtigen Licht präsentieren" )
    prodCheked("WS 1.4 Social Media gewinnbringen einsetzen", "WS 1.1 Führungskompetenz" )
    
    
    prodCheked("WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung", "WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen" )
    prodCheked("WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung", "WS 2.3 Konfliktmanagement" )
    prodCheked("WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung", "WS 2.4 Ausbildung und Praktikum" )
    
    prodCheked("WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen", "WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung" )
    prodCheked("WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen", "WS 2.3 Konfliktmanagement" )
    prodCheked("WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen", "WS 2.4 Ausbildung und Praktikum" )
    
    prodCheked("WS 2.3 Konfliktmanagement", "WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung" )
    prodCheked("WS 2.3 Konfliktmanagement", "WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen" )
    prodCheked("WS 2.3 Konfliktmanagement", "WS 2.4 Ausbildung und Praktikum" )
    
    prodCheked("WS 2.4 Ausbildung und Praktikum", "WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung" )
    prodCheked("WS 2.4 Ausbildung und Praktikum", "WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen" )
    prodCheked("WS 2.4 Ausbildung und Praktikum", "WS 2.3 Konfliktmanagement" )
    
    
    prodCheked("WS 3.1 Recruiting mit Xing und LinkedIn", "WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL" )
    prodCheked("WS 3.1 Recruiting mit Xing und LinkedIn", "WS 3.3 Mitarbeiterbindung und -entwicklung" )
    prodCheked("WS 3.1 Recruiting mit Xing und LinkedIn", "WS 3.4 Bargeldlose Zahlungsmethoden" )
    
    prodCheked("WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL", "WS 3.1 Recruiting mit Xing und LinkedIn" )
    prodCheked("WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL", "WS 3.3 Mitarbeiterbindung und -entwicklung" )
    prodCheked("WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL", "WS 3.4 Bargeldlose Zahlungsmethoden" )
    
    prodCheked("WS 3.3 Mitarbeiterbindung und -entwicklung", "WS 3.1 Recruiting mit Xing und LinkedIn" )
    prodCheked("WS 3.3 Mitarbeiterbindung und -entwicklung", "WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL" )
    prodCheked("WS 3.3 Mitarbeiterbindung und -entwicklung", "WS 3.4 Bargeldlose Zahlungsmethoden" )
    
    prodCheked("WS 3.4 Bargeldlose Zahlungsmethoden", "WS 3.1 Recruiting mit Xing und LinkedIn" )
    prodCheked("WS 3.4 Bargeldlose Zahlungsmethoden", "WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL" )
    prodCheked("WS 3.4 Bargeldlose Zahlungsmethoden", "WS 3.3 Mitarbeiterbindung und -entwicklung" )



    productAddTitle('1.', 'Workshop Panel I ▼', 1)
    productAddTitle('2.', 'Workshop Panel II ▼', 2)
    productAddTitle('3.', 'Workshop Panel III ▼', 3)

    productShow(1, 'WS 1.1 Führungskompetenz')
    productShow(1, 'WS 1.2 Update DGSVO und Datenschutz')
    productShow(1, 'WS 1.3 Product Display - Produkte im richtigen Licht präsentieren')
    productShow(1, 'WS 1.4 Social Media gewinnbringen einsetzen')
    
    productShow(2, 'WS 2.1 Neuigkeiten aus Steuerrecht und Buchführung')
    productShow(2, 'WS 2.2 Ideen und Konzepte für lokale Marketingkampagnen')
    productShow(2, 'WS 2.3 Konfliktmanagement')
    productShow(2, 'WS 2.4 Ausbildung und Praktikum')

    productShow(3, 'WS 3.1 Recruiting mit Xing und LinkedIn')
    productShow(3, 'WS 3.2 EBIT, ROI, Cash Flow - Das 1x1 der BWL')
    productShow(3, 'WS 3.3 Mitarbeiterbindung und -entwicklung')
    productShow(3, 'WS 3.4 Bargeldlose Zahlungsmethoden')
    
    $('.customization2_attendee_further-data_product').each(function(i, element){
          var productName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
          if(productName.indexOf("WS 1") >= 0){
            $(this).toggleClass('show')
          }

        });
    

    
      $('.customization2_attendee_edit-action_save').mouseover( function(){
    formValid = $("form").hasClass( "ng-valid" );
  } ) 

  }
  handler();


  $('.customization2_attendee_edit-action_save').on('click', function(){
    console.log(formValid)
    if(formValid){
      handler();    
    } 
  })

