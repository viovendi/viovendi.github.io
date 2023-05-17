  console.log('Start working, Google Tag Manager')
  var pathname = window.location.pathname;
  var eventId = pathname.split('/')[3];
  var formValid;
  var events = ['54641']

  function handler() {
      formValid = false;

      function getCategoryName() {
          var categoryName = $('.customization2_attendee-state_edit .customization3_attendee_ticket-category_title').text().trim();
          if (categoryName) {
              return categoryName;
          }
      }

      function getCode(eventId) {
          $.ajax({
              url: 'https://cs.doo.net/v1/integrations/tierpark/get-code',
              headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json',
              },
              type: 'post',
              data: JSON.stringify({
                  "event_id": eventId,
                  "event_category_name": getCategoryName()
              }),
              dataType: 'json',
              success: function (res) {
                  if (res.payload.tierpark_code) {
                      setTimeout(function () {
                          addCode(res.payload.tierpark_code, "QR-Code Nummer")
                      }, 7000);
                      addCode(res.payload.tierpark_code, "QR-Code Nummer")
                  }
              }
          });
      }

      function addCode(code, inputName) {

          var elements = document.querySelectorAll(".customization2_attendee-state_edit .customization2_attendee_further-data .customization2_attendee_further-data_custom-question");

          for (var i = 0; i < elements.length; i++) {
              var label = elements[i].querySelectorAll('.customization2_attendee_further-data_custom-question_label')[0].textContent.trim();
              if (label.indexOf(inputName) >= 0) {
                  var input = elements[i].querySelectorAll('.customization2_attendee_further-data_custom-question_input')[0]
                  input.value = code;
                  var event;
                  if (typeof (Event) === 'function') {
                      event = new Event('input'); // for Chrome
                  } else {
                      event = document.createEvent('Event');
                      event.initEvent('input', true, true); // for IE
                  }
                  input.dispatchEvent(event)
              }
          }

      };
     var categoryName = getCategoryName()
      if (categoryName == "Kinderkarten 4 bis 14 Jahre" || categoryName == "Erwachsenenkarten") {
          getCode(eventId);
      }

  }

  if (events.indexOf(eventId) != -1) {
      handler();
  }
  var insertionListener = function (event) {
      if (event.animationName === "nodeInserted") {
          console.log("Node has been inserted: ", event.target);
          if (events.indexOf(eventId) != -1) {
              handler();
          }
          $('.customization2_attendee_edit-action_save').mouseover(function () {
              formValid = $("form").hasClass("ng-valid");
          })
          $('.customization2_attendee_edit-action_save').on('click', function () {
              if (formValid) {
                  if (events.indexOf(eventId) != -1) {
                      handler();
                  }
              }
          });
      }
  }

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari