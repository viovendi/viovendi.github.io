
  console.log('Start working, Google Tag Manager,gj');
 function handler(){
   $('.customization2_booker_further-data_custom-question-1').css("display","none")
     //Hide all questions except the one needed
    for (i = 6; i < 21; i++) {
      $('.customization2_booker_further-data_custom-question-'+i+'').css("display","none")
    }
    for (i = 24; i < 36; i++) {
      $('.customization2_booker_further-data_custom-question-'+i+'').css("display","none")
    }
    $('.customization2_booker_further-data_custom-question-37').css("display","none")

    
     var ddPosition = $('.customization2_booker_further-data_custom-question-5 .customization2_booker_further-data_custom-question_dropdown')
     
     ddPosition.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        		$('.customization2_booker_further-data_custom-question-9').css("display","none")
                $('.customization2_booker_further-data_custom-question-10').css("display","none")
                $('.customization2_booker_further-data_custom-question-11').css("display","none")
        if (state == "Bezirksleiter" || state == "E-Business" ||state == "Landesgeschäftsführer" ||state == "Geschäftsleitung" ||state == "KSC"||state == "Logistik"||state == "Merchant"|| state =="Regionaleinkaufsleiter"|| state == "Regionalleiterin" || state == "Bereichseinkaufsleiter" ){
        	$('.customization2_booker_further-data_custom-question-7').css("display","block")
         	$('.customization2_booker_further-data_custom-question-20').css("display","none")
          	$('.customization2_booker_further-data_custom-question-8').css("display","none")
         	$('.customization2_booker_further-data_custom-question-6').css("display","none")
        }
       else if (state == "Konzerneinkaufsleiter" || state == "Internationaler Geschäftsführer" || state == "Vorstand" || state == "Orga-Team"){
        	$('.customization2_booker_further-data_custom-question-7').css("display","none")
         	$('.customization2_booker_further-data_custom-question-20').css("display","none")
          	$('.customization2_booker_further-data_custom-question-8').css("display","none")
         	$('.customization2_booker_further-data_custom-question-6').css("display","none")
        }
        switch (state) {
        case "Marktmanager":
            $('.customization2_booker_further-data_custom-question-7').css("display","block")
            $('.customization2_booker_further-data_custom-question-20').css("display","none")
          	$('.customization2_booker_further-data_custom-question-8').css("display","none")
          	$('.customization2_booker_further-data_custom-question-6').css("display","none")
            break;
     	case "Gebietsleiter":
      		$('.customization2_booker_further-data_custom-question-7').css("display","block")
         	$('.customization2_booker_further-data_custom-question-20').css("display","none")
          	$('.customization2_booker_further-data_custom-question-8').css("display","none")
         	$('.customization2_booker_further-data_custom-question-6').css("display","none")
     		break;
        case "Sonstige (z.B. Mitarbeiter der Zentralen)":
       		console.log("sons")
         	$('.customization2_booker_further-data_custom-question-7').css("display","block")
            $('.customization2_booker_further-data_custom-question-20').css("display","none")
          	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            $('.customization2_booker_further-data_custom-question-6').css("display","block")
            break;
         
       }
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
     }
    )
     var ddLand = $('.customization2_booker_further-data_custom-question-7 .customization2_booker_further-data_custom-question_dropdown')
     ddLand.change(function(){
        var Position = $('.customization2_booker_further-data_custom-question-5 .customization2_booker_further-data_custom-question_dropdown')
        var statePositionLand = Position.val().replace(/^\s+|\s+$/g, "")
        
       if (statePositionLand == "Marktmanager") {
       	var stateLand = ddLand.val().replace(/^\s+|\s+$/g, "")
        
        switch (stateLand) {
            case "DE":
              	$('.customization2_booker_further-data_custom-question-8').css("display","block")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	
              break;
            case "AT":
                $('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","block")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "CH":
            	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","block")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "CZ":
            	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","block")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "LU":
            	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","block")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "NL":
            	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","block")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "RO":
            	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","block")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;  
            case "SE":
            	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","block")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "SK":
            	$('.customization2_booker_further-data_custom-question-8').css("display","none")
            	$('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","block")
            	$('.customization2_booker_further-data_custom-question-9').css("display","none")
              	$('.customization2_booker_further-data_custom-question-10').css("display","none")
              	$('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;          
        
     }}
      else if (statePositionLand == "Gebietsleiter"){
         var stateLand = ddLand.val().replace(/^\s+|\s+$/g, "")
         switch (stateLand) {
            case "DE":
       			$('.customization2_booker_further-data_custom-question-8').css("display","block")
             break;
       }}
       
       else if (statePositionLand == "Bezirksleiter" ||statePositionLand ==  "E-Business" || statePositionLand == "Landesgeschäftsführer" ||statePositionLand ==  "Geschäftsleitung" || statePositionLand == "KSC"||statePositionLand ==  "Logistik"|| statePositionLand == "Merchant"|| statePositionLand == "Regionaleinkaufsleiter"||statePositionLand == "Regionalleiterin") {
               /* $('.customization2_booker_further-data_custom-question-9').css("display","none")
                $('.customization2_booker_further-data_custom-question-10').css("display","none")
                $('.customization2_booker_further-data_custom-question-11').css("display","none")
                $('.customization2_booker_further-data_custom-question-12').css("display","none")
            	$('.customization2_booker_further-data_custom-question-13').css("display","none")
            	$('.customization2_booker_further-data_custom-question-14').css("display","none")
            	$('.customization2_booker_further-data_custom-question-15').css("display","none")
            	$('.customization2_booker_further-data_custom-question-16').css("display","none")
            	$('.customization2_booker_further-data_custom-question-17').css("display","none")
            	$('.customization2_booker_further-data_custom-question-18').css("display","none")
            	$('.customization2_booker_further-data_custom-question-19').css("display","none")*/
        }
     })
    
     var ddGebiet = $('.customization2_booker_further-data_custom-question-8 .customization2_booker_further-data_custom-question_dropdown')
     ddGebiet.change(function(){
       var ddPos = $('.customization2_booker_further-data_custom-question-5 .customization2_booker_further-data_custom-question_dropdown')
     
       	var state = ddPos.val().replace(/^\s+|\s+$/g, "")
       if ( state == "Gebietsleiter") {
       		console.log("gebietsleiter, darum nichts machen")
         
       }
        else {                
       	var stateGebiet = ddGebiet.val().replace(/^\s+|\s+$/g, "")
       
                    
        switch (stateGebiet) {
            case "Nord":
              $('.customization2_booker_further-data_custom-question-9').css("display","block")
              $('.customization2_booker_further-data_custom-question-10').css("display","none")
              $('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "Mitte":
              $('.customization2_booker_further-data_custom-question-9').css("display","none")
              $('.customization2_booker_further-data_custom-question-10').css("display","block")
              $('.customization2_booker_further-data_custom-question-11').css("display","none")
              break;
            case "Süd":
              $('.customization2_booker_further-data_custom-question-9').css("display","none")
              $('.customization2_booker_further-data_custom-question-10').css("display","none")
              $('.customization2_booker_further-data_custom-question-11').css("display","block")
              break;
     }
        }
     }
                      )
    
    
     var ddArrival = $('.customization2_booker_further-data_custom-question-23 .customization2_booker_further-data_custom-question_dropdown')
     ddArrival.change(function(){
       	var stateArrival = ddArrival.val().replace(/^\s+|\s+$/g, "")
        switch (stateArrival) {
            case "Flugzeug":
              $('.customization2_booker_further-data_custom-question-24').css("display","block")
              $('.customization2_booker_further-data_custom-question-25').css("display","block")
              $('.customization2_booker_further-data_custom-question-26').css("display","none")
              $('.customization2_booker_further-data_custom-question-27').css("display","block")
              $('.customization2_booker_further-data_custom-question-28').css("display","none")
              $('.customization2_booker_further-data_custom-question-29').css("display","block")
              $('.customization2_booker_further-data_custom-question-30').css("display","block")
              $('.customization2_booker_further-data_custom-question-31').css("display","block")
              $('.customization2_booker_further-data_custom-question-32').css("display","none")
              $('.customization2_booker_further-data_custom-question-33').css("display","block")
              $('.customization2_booker_further-data_custom-question-34').css("display","none")
              $('.customization2_booker_further-data_custom-question-35').css("display","block")
              break;
            case "PKW":
              $('.customization2_booker_further-data_custom-question-24').css("display","none")
              $('.customization2_booker_further-data_custom-question-25').css("display","none")
              $('.customization2_booker_further-data_custom-question-26').css("display","none")
              $('.customization2_booker_further-data_custom-question-27').css("display","none")
              $('.customization2_booker_further-data_custom-question-28').css("display","none")
              $('.customization2_booker_further-data_custom-question-29').css("display","none")
              $('.customization2_booker_further-data_custom-question-30').css("display","none")
              $('.customization2_booker_further-data_custom-question-31').css("display","none")
              $('.customization2_booker_further-data_custom-question-32').css("display","none")
              $('.customization2_booker_further-data_custom-question-33').css("display","none")
              $('.customization2_booker_further-data_custom-question-34').css("display","none")
              $('.customization2_booker_further-data_custom-question-35').css("display","none")
              break;
            case "Bahn":
              $('.customization2_booker_further-data_custom-question-24').css("display","block")
              $('.customization2_booker_further-data_custom-question-25').css("display","none")
              $('.customization2_booker_further-data_custom-question-26').css("display","block")
              $('.customization2_booker_further-data_custom-question-27').css("display","none")
              $('.customization2_booker_further-data_custom-question-28').css("display","block")
            	
              	document.querySelector(".customization2_booker_further-data > vv-additional-questions > div:nth-child(28) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select").selectedIndex = "1";
            
            	
            	
              $('.customization2_booker_further-data_custom-question-29').css("display","block")
              $('.customization2_booker_further-data_custom-question-30').css("display","block")
              $('.customization2_booker_further-data_custom-question-31').css("display","none")
              $('.customization2_booker_further-data_custom-question-32').css("display","block")
              $('.customization2_booker_further-data_custom-question-33').css("display","none")
              $('.customization2_booker_further-data_custom-question-34').css("display","block")
            
            		document.querySelector(".customization2_booker_further-data > vv-additional-questions > div:nth-child(34) > vv-additional-question-dropdown > div > vv-simple-select > label > div > select").selectedIndex = "1";
            
              $('.customization2_booker_further-data_custom-question-35').css("display","block")
              break;
     }}
                      )
    
    var ddRoom = $('.customization2_booker_further-data_custom-question-36 .customization2_booker_further-data_custom-question_dropdown')
     ddRoom.change(function(){
       	var stateRoom = ddRoom.val().replace(/^\s+|\s+$/g, "")
        
        switch (stateRoom) {
            case "Doppelzimmer":
            	$('.customization2_booker_further-data_custom-question-37').css("display","block")
            break;
            case "Einzelzimmer":
            	$('.customization2_booker_further-data_custom-question-37').css("display","none")
            break;
        }
     }
                   )
    
  
 }
  handler();

//document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari

  
