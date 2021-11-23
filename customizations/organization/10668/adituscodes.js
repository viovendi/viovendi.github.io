console.log('Start working, Google Tag Manager')
 // var categoryName = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
 // var pathname = window.location.pathname;
 // var eventId = pathname.split('/')[3];

  

  
function getTicketcategory(){
  var categoryName = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
  console.log("ticketcategory name: "+categoryName);
  switch (categoryName){
   //Testcode
   // case 'Tagesticket':
   //   return '10668_Test-Codes';
    
    case 'Tagesticket':
     return '10668_Test-Codes';
     //return '10668-day-tickets-c1';
    
    case 'Tagesticket ermäßigt':
     return '10668-day-tickets-c1';
    
    case 'Nachmittagticket':
     return '10668-afternoon-tickets-c2';
    
    case 'VIP Tagesticket':
     return '10668-day-tickets-c1';
    
    case 'Eintrittskartengutschein einlösen':
     return '10668-day-tickets-c1';
    
    case 'Presseticket':
     return '10668-day-tickets-c1';
    
    case 'Ausstellerausweis':
     return '10668-exhibitors-c3';
    
    case 'Auf- und Abbauausweis':
     return '10668-setup-c4';
    
    default:
      return 'error';
  }
}

  function getCode(key){
    $.ajax({
      url: 'https://cs.staging1.doo.net/v1/integrations/custom-qr-codes/get-code?key='+key,
      
     // headers: {
       // 'Accept': '*/*',
       // 'Content-Type': 'application/json',
     // },
           
      type: 'get',
      /*data: JSON.stringify({
        "event_id": eventId,
        "event_category_name": categoryName
      }),*/
      //dataType: 'json',
      success: function (res) {
       // -------i think this can be deleted----
        if(res.aditus_code){
          setTimeout(function(){
            console.log("res.aditus_code :")
            addCode(res.aditus_code, "Aditus Code", key)
          }, 5000);
         // ---------------
        } else if(res.payload) {
          console.log("res.payload :")
          console.log(res.payload.customCode)
         
         // TODO - i have no idea why addCode is called 2 times, 1x with timeout
          setTimeout(function(){
            addCode(res.payload.customCode, "Aditus Code", key)
          }, 5000);
          addCode(res.payload.customCode, "Aditus Code", key)
        } else {
          console.log("no response :")
          addCode("no response", "Aditus Code", key)
        }
      }
    });
  }


  function addCode(code, inputName, key) {

    var elements = document.querySelectorAll(".customization2_attendee_further-data_custom-question");

    for (var i = 0; i < elements.length; i++) {
      var label = elements[i].querySelectorAll('.customization2_attendee_further-data_custom-question_label')[0].textContent.trim();
      if(label.indexOf(inputName) >= 0){
        var input = elements[i].querySelectorAll('.customization2_attendee_further-data_custom-question_input')[0]
        input.value = code;
        var event;
        if(typeof(Event) === 'function') {
          event = new Event('input'); // for Chrome
        }else{
          event = document.createEvent('Event');
          event.initEvent('input', true, true); // for IE
        }
        input.dispatchEvent(event)
      }
    }
    
    // mark Code as used
    $.ajax({
      url: 'https://cs.staging1.doo.net/v1/integrations/custom-qr-codes/mark-code-as-used',
      headers: {
        //'Accept': '*/*',
        'Content-Type': 'application/json',
      },
      type: 'post',
      data: JSON.stringify({
        "customCode": code,
        "key": key,
      }),
      //dataType: 'json',
      success: function (res) {
        if(res){
         // maybe do something more than console.log...
            console.log("success");         
        }
        else {
          console.log("no response : ")
        }
      }
    });
   

  };

  getCode(getTicketcategory())


