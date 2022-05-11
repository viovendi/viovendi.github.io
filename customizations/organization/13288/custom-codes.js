  async function getCode(key) {
      return $.ajax({
          url: 'https://cs.doo.net/v1/integrations/custom-qr-codes/get-code?key=' + key,
          type: 'get',
          dataType: 'json',
      });
  }


  function markCodeAsUsed(code, key) {
      $.ajax({
          url: 'https://cs.doo.net/v1/integrations/custom-qr-codes/mark-code-as-used',
          headers: {
              'Content-Type': 'application/json',
          },
          type: 'post',
          data: JSON.stringify({
              "customCode": code,
              "key": key,
          }),
      })
  }

  function addCode(code, input) {
      let event;
      input.value = code
      if (typeof (Event) === 'function') {
          event = new Event('input'); // for Chrome
      } else {
          event = document.createEvent('Event');
          event.initEvent('input', true, true); // for IE
      }
      input.dispatchEvent(event)
      return input.value;
  }


  async function hendler() {
      if (document.readyState !== "loading") {
          console.log("document is already ready");
          //   const code = await getCode("13288")13879
          const code = await getCode("TEST")
          const qrCode = $$('.customization2_attendee_further-data_custom-question').findField('QR-Code Nummer');
          const {
              customCode
          } = code.payload
          const input = $(qrCode).find('input')[0]


          const result = addCode(customCode, input)
          if (result) {
              console.log(result)
                markCodeAsUsed(customCode, 'TEST')
          }

      }
      $('.customization2_attendee_further-data_headline').hide()
      const qrCode = $$('.customization2_attendee_further-data_custom-question').findField('QR-Code Nummer');
      $(qrCode).hide()
  }

  var insertionListener = function (event) {
      if (event.animationName === "nodeInserted") {
          hendler();
      }
      if (event.animationName === "nodeInserted2") {
          console.log("nodeInserted2")
        $( "p:contains('QR-Code Nummer')" ).hide()
    }
  }


  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari