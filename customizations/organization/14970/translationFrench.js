console.log("translating");

function changeTextTo(selector, originalText, newText) {
  $(selector).each(function () {
    if ($(this).text().trim() == originalText) {
      $(this).text(newText);
    }
  });
}

function hideDefaultOption(selector, originalText) {
  $(selector).each(function () {
    if ($(this).text().trim() == originalText) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

function handler2() {
  changeTextTo(".vv-button-text-blue", "Abweichende Rechnungsadresse angeben", "Indiquer une adresse de facturation différente");
  changeTextTo(".vv-single-select-option", "Bitte auswählen", "Veuillez sélectionner");
  changeTextTo(".vv-button", "Auswahl bearbeiten", "Modifier la sélection");
  changeTextTo(".vv-button", "Teilnehmerdaten anzeigen", "Afficher les données des participants");

  document.querySelectorAll(".vv-selection-input__value").forEach((el) => {
    if (el.innerText === "Bitte auswählen") {
      el.innerText = "Veuillez sélectionner";
    }
  });

  addEventListener("click", (e) => {
    if (e.target.classList.contains("vv-single-select-option")) {
      let selectContainer = e.target.closest(".vv-selection");
      let valueElement = selectContainer.getElementsByClassName(
        "vv-selection-input__value"
      )[0];
      valueElement.innerText = e.target.textContent.trim().replace("<br>", "");
    }
  });
}

/*
PAGE 4
*/
const observer = new MutationObserver((mutations, obs) => {
  const page4 = document.getElementsByClassName(
    "customization-booking-area-wrapper-page4"
  );
  if ($(page4).is(":visible")) {
    console.log($(".notice__booking-id").text());
    console.log("page 4 visible");
    var ticketID = $(".notice__booking-id span").text();
    $(".notice__booking-id").text("Numéro de réservation: " + ticketID);
    obs.disconnect();
    return;
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});


/*
PAGE 1
*/
const observer1 = new MutationObserver((mutations, obs) => {
  const page1 = document.getElementsByClassName(
    "customization-booking-area-wrapper-page1"
  );

  if ($(page1).is(":visible")) {
    translateMWST();
    obs.disconnect();
    return;
  }
});

observer1.observe(document, {
  childList: true,
  subtree: true,
});

function translateMWST() {
  const observerMwStText = new MutationObserver((mutations, obs) => {
    const mwstText = $("ew-selection__sum-title").next();
    var mwstTextValue = $(".customization-order-sum").find(
      "span:not([class])"
    )[0];
    if ($(mwstTextValue).is(":visible")) {
      // console.log('mwstText visible');
      $(mwstTextValue)
        .contents()
        .filter(function () {
          return this.nodeType == 3;
        })[0].nodeValue = "TVA incluse (";
      observerNoMwStText.observe(document, {
        childList: true,
        subtree: true,
      });
      obs.disconnect();
      return;
    }
  });

  observerMwStText.observe(document, {
    childList: true,
    subtree: true,
  });

  const observerNoMwStText = new MutationObserver((mutations, obs) => {
    var mwstTextValue = $(".customization-order-sum").find(
      "span:not([class])"
    )[0];
    if (!$(mwstTextValue).is(":visible")) {
      //    console.log('mwst not visible')
      observerMwStText.observe(document, {
        childList: true,
        subtree: true,
      });
      obs.disconnect();
      return;
    }
  });

  observerNoMwStText.observe(document, {
    childList: true,
    subtree: true,
  });
  
}

handler2();

var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted: ", event.target);

    handler2();

    $("customization2_attendee_view-action_edit").on("click", function () {
      console.log("clicked");
    });
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
