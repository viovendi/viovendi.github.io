console.log('Start working, Google Tag Manager')
 // var categoryName = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
  var pathname = window.location.pathname;
  var eventId = pathname.split('/')[3];

  console.log("pathname: "+pathname);
  console.log("event ID: "+ eventId);
  
function getTicketcategory(){
  var categoryName = $('.customization2_attendee-state_edit .customization2_attendee_title').text().trim();
  console.log("ticketcategory name: "+categoryName);
  switch (categoryName){
    case 'Tagesticket':
      return '10668_Test-Codes';
   case 'somethingEsel':
     return 'Test123--Codes';
    default:
      return 'error';
  }
}

  function getCode(eventId, key){
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
        if(res.aditus_code){
          setTimeout(function(){
            console.log("res.aditus_code :")
            addCode(res.aditus_code, "Aditus Code", key)
          }, 5000);
        } else if(res.payload) {
          console.log("res.payload :")
          console.log(res.payload.customCode)
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
    
    //mark Code as used
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
            console.log("success);         
        }
        else {
          console.log("no response :")
        }
      }
    });
   

  };

  getCode(eventId, getTicketcategory())


