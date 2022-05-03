
async function getPage(page) {
    var pages = {
      page1: "customization-booking-area-wrapper-page1",
      page2: "customization-booking-area-wrapper-page2",
      page3: "customization2_payment_title",
      page4: "customization-confirmation-label",
    };
    return new Promise(function (resolve, reject) {
      try {
        const element = document.querySelector("body");

        var observer = new MutationObserver(pageLoaded);

        function pageLoaded(mutations) {
          mutations.forEach((mutation) => {
            var classList = mutation.target.classList
              ? [...mutation.target.classList]
              : [];
            if (
              mutation.type === "childList" &&
              classList.indexOf(pages[page]) != -1
            ) {
              resolve({
                selector: document.querySelector("." + pages[page]),
                dataLayer: dataLayer,
              });
            }
          });
        }

        observer.observe(element, {
          characterData: true,
          subtree: true,
          childList: true,
        });
      } catch (error) {
        reject(new Error(error));
      }
    });
  }

  async function getCode(key) {
    return $.ajax({
      url: 'https://cs.doo.net/v1/integrations/custom-qr-codes/get-code?key=' + key,
      type: 'get',
      dataType: 'json',
    });
  }


  async function hendler() {
    if (document.readyState !== "loading") {
      console.log("document is already ready");

      await getPage("page2");
      console.log('custom codes')
      await getCode("88669_list1")

    }
  }

  hendler();
