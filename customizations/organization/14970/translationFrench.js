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
  
  // Countries
  changeTextTo(".vv-single-select-option", "Afghanistan", "Afghanistan");
changeTextTo(".vv-single-select-option", "Ägypten", "Egypte");
changeTextTo(".vv-single-select-option", "Alandinseln", "Iles Aland");
changeTextTo(".vv-single-select-option", "Albanien", "Albanie");
changeTextTo(".vv-single-select-option", "Algerien", "Algérie");
changeTextTo(".vv-single-select-option", "Amerikanisch-Ozeanien", "Océanie américaine");
changeTextTo(".vv-single-select-option", "Amerikanisch-Samoa", "Samoa américaine");
changeTextTo(".vv-single-select-option", "Amerikanische Jungferninseln", "Îles Vierges américaines");
changeTextTo(".vv-single-select-option", "Andorra", "Andorre");
changeTextTo(".vv-single-select-option", "Angola", "Angola");
changeTextTo(".vv-single-select-option", "Anguilla", "Anguille");
changeTextTo(".vv-single-select-option", "Antarktis", "antarctique");
changeTextTo(".vv-single-select-option", "Antigua und Barbuda", "Antigua-et-Barbuda");
changeTextTo(".vv-single-select-option", "Äquatorialguinea", "Guinée Équatoriale");
changeTextTo(".vv-single-select-option", "Argentinien", "Argentine");
changeTextTo(".vv-single-select-option", "Armenien", "Arménie");
changeTextTo(".vv-single-select-option", "Aruba", "Aruba");
changeTextTo(".vv-single-select-option", "Aserbaidschan", "Azerbaïdjan");
changeTextTo(".vv-single-select-option", "Äthiopien", "Ethiopie");
changeTextTo(".vv-single-select-option", "Australien", "Australie");
changeTextTo(".vv-single-select-option", "Bahamas", "Bahamas");
changeTextTo(".vv-single-select-option", "Bahrain", "Bahreïn");
changeTextTo(".vv-single-select-option", "Bangladesch", "Bangladesh");
changeTextTo(".vv-single-select-option", "Barbados", "Barbade");
changeTextTo(".vv-single-select-option", "Belarus", "Biélorussie");
changeTextTo(".vv-single-select-option", "Belgien", "Belgique");
changeTextTo(".vv-single-select-option", "Belize", "Belize");
changeTextTo(".vv-single-select-option", "Benin", "Bénin");
changeTextTo(".vv-single-select-option", "Bermuda", "Bermudes");
changeTextTo(".vv-single-select-option", "Bhutan", "Bhoutan");
changeTextTo(".vv-single-select-option", "Bolivien", "Bolivie");
changeTextTo(".vv-single-select-option", "Bonaire, Sint Eustatius und Saba", "Bonaire, Sint Eustatius et Saba");
changeTextTo(".vv-single-select-option", "Bosnien und Herzegowina", "Bosnie Herzégovine");
changeTextTo(".vv-single-select-option", "Botsuana", "Botsuana");
changeTextTo(".vv-single-select-option", "Bouvetinsel", "Bouvine");
changeTextTo(".vv-single-select-option", "Brasilien", "Brésil");
changeTextTo(".vv-single-select-option", "Britische Jungferninseln", "Îles de jeune fille britannique");
changeTextTo(".vv-single-select-option", "Britisches Territorium im Indischen Ozean", "Territoire britannique dans l'océan Indien");
changeTextTo(".vv-single-select-option", "Brunei Darussalam", "Brunei Darussalam");
changeTextTo(".vv-single-select-option", "Bulgarien", "Bulgarie");
changeTextTo(".vv-single-select-option", "Burkina Faso", "Burkina Faso");
changeTextTo(".vv-single-select-option", "Burundi", "Burundi");
changeTextTo(".vv-single-select-option", "Chile", "Chili");
changeTextTo(".vv-single-select-option", "China", "Chine");
changeTextTo(".vv-single-select-option", "Cookinseln", "Les Îles Cook");
changeTextTo(".vv-single-select-option", "Costa Rica", "Costa Rica");
changeTextTo(".vv-single-select-option", "Curaçao", "Curacao");
changeTextTo(".vv-single-select-option", "Dänemark", "Danemark");
changeTextTo(".vv-single-select-option", "Demokratische Republik Kongo", "République Démocratique du Congo");
changeTextTo(".vv-single-select-option", "Demokratische Volksrepublik Korea", "République Populaire Démocratique de Corée");
changeTextTo(".vv-single-select-option", "Deutschland", "Allemagne");
changeTextTo(".vv-single-select-option", "Dominica", "Dominique");
changeTextTo(".vv-single-select-option", "Dominikanische Republik", "République Dominicaine");
changeTextTo(".vv-single-select-option", "Dschibuti", "Jituti");
changeTextTo(".vv-single-select-option", "Ecuador", "Equateur");
changeTextTo(".vv-single-select-option", "El Salvador", "Le Salvador");
changeTextTo(".vv-single-select-option", "Elfenbeinküste", "Côte d'Ivoire");
changeTextTo(".vv-single-select-option", "Eritrea", "Érythrée");
changeTextTo(".vv-single-select-option", "Estland", "Estonie");
changeTextTo(".vv-single-select-option", "Falklandinseln", "les îles Falkland");
changeTextTo(".vv-single-select-option", "Färöer", "Feroeicien");
changeTextTo(".vv-single-select-option", "Fidschi", "Fidji");
changeTextTo(".vv-single-select-option", "Finnland", "Finlande");
changeTextTo(".vv-single-select-option", "Frankreich", "France");
changeTextTo(".vv-single-select-option", "Französisch-Guayana", "Guayana française");
changeTextTo(".vv-single-select-option", "Französisch-Polynesien", "Polynésie française");
changeTextTo(".vv-single-select-option", "Französische Süd- und Antarktisgebiete", "Zones du sud et de l'Antarctique français");
changeTextTo(".vv-single-select-option", "Gabun", "Gab");
changeTextTo(".vv-single-select-option", "Gambia", "Gambie");
changeTextTo(".vv-single-select-option", "Georgien", "Géorgie");
changeTextTo(".vv-single-select-option", "Ghana", "Ghana");
changeTextTo(".vv-single-select-option", "Gibraltar", "Gibraltar");
changeTextTo(".vv-single-select-option", "Grenada", "Grenade");
changeTextTo(".vv-single-select-option", "Griechenland", "Grèce");
changeTextTo(".vv-single-select-option", "Grönland", "Groenland");
changeTextTo(".vv-single-select-option", "Guadeloupe", "Guadeloup");
changeTextTo(".vv-single-select-option", "Guam", "Guam");
changeTextTo(".vv-single-select-option", "Guatemala", "Guatemala");
changeTextTo(".vv-single-select-option", "Guernsey", "Guernesey");
changeTextTo(".vv-single-select-option", "Guinea", "Guinée");
changeTextTo(".vv-single-select-option", "Guinea-Bissau", "Guinée-Bissau");
changeTextTo(".vv-single-select-option", "Guyana", "Guyane");
changeTextTo(".vv-single-select-option", "Haiti", "Haïti");
changeTextTo(".vv-single-select-option", "Heard und McDonaldinseln", "Îles entendues et McDonald");
changeTextTo(".vv-single-select-option", "Honduras", "Honduras");
changeTextTo(".vv-single-select-option", "Hong Kong S.A.R., China", "Hong Kong S.A.R., Chine");
changeTextTo(".vv-single-select-option", "Indien", "Inde");
changeTextTo(".vv-single-select-option", "Indonesien", "Indonésie");
changeTextTo(".vv-single-select-option", "Irak", "Irak");
changeTextTo(".vv-single-select-option", "Iran", "L'Iran");
changeTextTo(".vv-single-select-option", "Irland", "Irlande");
changeTextTo(".vv-single-select-option", "Island", "Islande");
changeTextTo(".vv-single-select-option", "Isle of Man", "île de Man");
changeTextTo(".vv-single-select-option", "Israel", "Israël");
changeTextTo(".vv-single-select-option", "Italien", "Italie");
changeTextTo(".vv-single-select-option", "Jamaika", "Jamaïque");
changeTextTo(".vv-single-select-option", "Japan", "Japon");
changeTextTo(".vv-single-select-option", "Jemen", "Yémen");
changeTextTo(".vv-single-select-option", "Jersey", "Jersey");
changeTextTo(".vv-single-select-option", "Jordanien", "Jordan");
changeTextTo(".vv-single-select-option", "Kaimaninseln", "Quai");
changeTextTo(".vv-single-select-option", "Kambodscha", "Cambodge");
changeTextTo(".vv-single-select-option", "Kamerun", "Cameroun");
changeTextTo(".vv-single-select-option", "Kanada", "Canada");
changeTextTo(".vv-single-select-option", "Kap Verde", "Cap-Vert");
changeTextTo(".vv-single-select-option", "Kasachstan", "Kazakhstan");
changeTextTo(".vv-single-select-option", "Katar", "Qatar");
changeTextTo(".vv-single-select-option", "Kenia", "Kenya");
changeTextTo(".vv-single-select-option", "Kirgisistan", "Kirghizistan");
changeTextTo(".vv-single-select-option", "Kiribati", "Kiribati");
changeTextTo(".vv-single-select-option", "Kokosinseln (Keeling)", "Îles de noix de coco (Keeling)");
changeTextTo(".vv-single-select-option", "Kolumbien", "Colombie");
changeTextTo(".vv-single-select-option", "Komoren", "Comor");
changeTextTo(".vv-single-select-option", "Kongo", "Congo");
changeTextTo(".vv-single-select-option", "Kroatien", "Croatie");
changeTextTo(".vv-single-select-option", "Kuba", "Cuba");
changeTextTo(".vv-single-select-option", "Kuwait", "Koweit");
changeTextTo(".vv-single-select-option", "Laos", "Laos");
changeTextTo(".vv-single-select-option", "Lesotho", "Lesotho");
changeTextTo(".vv-single-select-option", "Lettland", "Lettonie");
changeTextTo(".vv-single-select-option", "Libanon", "Liban");
changeTextTo(".vv-single-select-option", "Liberia", "Libéria");
changeTextTo(".vv-single-select-option", "Libyen", "Libye");
changeTextTo(".vv-single-select-option", "Liechtenstein", "Liechtenstein");
changeTextTo(".vv-single-select-option", "Litauen", "Lituanie");
changeTextTo(".vv-single-select-option", "Luxemburg", "Luxembourg");
changeTextTo(".vv-single-select-option", "Macau S.A.R., China", "Macau S.A.R., Chine");
changeTextTo(".vv-single-select-option", "Madagaskar", "Madagascar");
changeTextTo(".vv-single-select-option", "Malawi", "Malawi");
changeTextTo(".vv-single-select-option", "Malaysia", "Malaisie");
changeTextTo(".vv-single-select-option", "Malediven", "Maldives");
changeTextTo(".vv-single-select-option", "Mali", "Mali");
changeTextTo(".vv-single-select-option", "Malta", "Malte");
changeTextTo(".vv-single-select-option", "Marokko", "Maroc");
changeTextTo(".vv-single-select-option", "Marschallinseln", "Îles de maréchal");
changeTextTo(".vv-single-select-option", "Martinique", "Martinique");
changeTextTo(".vv-single-select-option", "Mauretanien", "Mauritanie");
changeTextTo(".vv-single-select-option", "Mauritius", "Maurice");
changeTextTo(".vv-single-select-option", "Mayotte", "Mayotte");
changeTextTo(".vv-single-select-option", "Mexiko", "Mexique");
changeTextTo(".vv-single-select-option", "Mikronesien", "Micronésie");
changeTextTo(".vv-single-select-option", "Monaco", "Monaco");
changeTextTo(".vv-single-select-option", "Mongolei", "Mongolie");
changeTextTo(".vv-single-select-option", "Montenegro", "Monténégro");
changeTextTo(".vv-single-select-option", "Montserrat", "Montserrat");
changeTextTo(".vv-single-select-option", "Mosambik", "Mozambique");
changeTextTo(".vv-single-select-option", "Myanmar", "Myanmar");
changeTextTo(".vv-single-select-option", "Namibia", "Namibie");
changeTextTo(".vv-single-select-option", "Nauru", "Nauru");
changeTextTo(".vv-single-select-option", "Nepal", "Népal");
changeTextTo(".vv-single-select-option", "Neukaledonien", "Nouvelle Calédonie");
changeTextTo(".vv-single-select-option", "Neuseeland", "Nouvelle-Zélande");
changeTextTo(".vv-single-select-option", "Nicaragua", "Nicaragua");
changeTextTo(".vv-single-select-option", "Niederlande", "Pays-Bas");
changeTextTo(".vv-single-select-option", "Niger", "Niger");
changeTextTo(".vv-single-select-option", "Nigeria", "Nigeria");
changeTextTo(".vv-single-select-option", "Niue", "Niue");
changeTextTo(".vv-single-select-option", "Nördliche Marianen", "Marianen du Nord");
changeTextTo(".vv-single-select-option", "Nordmazedonien", "Macédoine du Nord");
changeTextTo(".vv-single-select-option", "Norfolkinsel", "Norfolkinsel");
changeTextTo(".vv-single-select-option", "Norwegen", "Norvège");
changeTextTo(".vv-single-select-option", "Oman", "Oman");
changeTextTo(".vv-single-select-option", "Österreich", "L'Autriche");
changeTextTo(".vv-single-select-option", "Osttimor", "Timor oriental");
changeTextTo(".vv-single-select-option", "Pakistan", "Pakistan");
changeTextTo(".vv-single-select-option", "Palästinensische Gebiete", "Territoires palestiniens");
changeTextTo(".vv-single-select-option", "Palau", "Palaos");
changeTextTo(".vv-single-select-option", "Panama", "Panama");
changeTextTo(".vv-single-select-option", "Papua-Neuguinea", "Papouasie Nouvelle Guinée");
changeTextTo(".vv-single-select-option", "Paraguay", "Paraguay");
changeTextTo(".vv-single-select-option", "Peru", "Pérou");
changeTextTo(".vv-single-select-option", "Philippinen", "Philippines");
changeTextTo(".vv-single-select-option", "Pitcairn", "Pitcairn");
changeTextTo(".vv-single-select-option", "Polen", "Pologne");
changeTextTo(".vv-single-select-option", "Portugal", "le Portugal");
changeTextTo(".vv-single-select-option", "Puerto Rico", "Porto Rico");
changeTextTo(".vv-single-select-option", "Republik Korea", "République de Corée");
changeTextTo(".vv-single-select-option", "Republik Moldau", "République de Moldavie");
changeTextTo(".vv-single-select-option", "Réunion", "Réunion");
changeTextTo(".vv-single-select-option", "Ruanda", "Rwanda");
changeTextTo(".vv-single-select-option", "Rumänien", "Roumanie");
changeTextTo(".vv-single-select-option", "Russische Föderation", "Fédération Russe");
changeTextTo(".vv-single-select-option", "Salomonen", "Salomons");
changeTextTo(".vv-single-select-option", "Sambia", "Zambie");
changeTextTo(".vv-single-select-option", "Samoa", "Samoa");
changeTextTo(".vv-single-select-option", "San Marino", "Saint Marin");
changeTextTo(".vv-single-select-option", "São Tomé und Príncipe", "São Tomé et Príncipe");
changeTextTo(".vv-single-select-option", "Saudi-Arabien", "Arabie Saoudite");
changeTextTo(".vv-single-select-option", "Schweden", "Suède");
changeTextTo(".vv-single-select-option", "Schweiz", "Suisse");
changeTextTo(".vv-single-select-option", "Senegal", "Sénégal");
changeTextTo(".vv-single-select-option", "Serbien", "Serbie");
changeTextTo(".vv-single-select-option", "Seychellen", "les Seychelles");
changeTextTo(".vv-single-select-option", "Sierra Leone", "Sierra Leone");
changeTextTo(".vv-single-select-option", "Simbabwe", "Zimbabwe");
changeTextTo(".vv-single-select-option", "Singapur", "Singapour");
changeTextTo(".vv-single-select-option", "Sint Maarten", "SINT MARATIN");
changeTextTo(".vv-single-select-option", "Slowakei", "Slovaquie");
changeTextTo(".vv-single-select-option", "Slowenien", "Slovènie");
changeTextTo(".vv-single-select-option", "Somalia", "Somalie");
changeTextTo(".vv-single-select-option", "Spanien", "Espagne");
changeTextTo(".vv-single-select-option", "Sri Lanka", "Sri Lanka");
changeTextTo(".vv-single-select-option", "St. Barthélemy", "Saint-Barthélemy");
changeTextTo(".vv-single-select-option", "St. Helena", "Saint-Hélène");
changeTextTo(".vv-single-select-option", "St. Kitts und Nevis", "Saint-Kitts et Nevis");
changeTextTo(".vv-single-select-option", "St. Lucia", "Sainte Lucie");
changeTextTo(".vv-single-select-option", "St. Martin", "Saint-Martin");
changeTextTo(".vv-single-select-option", "St. Pierre und Miquelon", "St. Pierre et Miquelon");
changeTextTo(".vv-single-select-option", "St. Vinzent und die Grenadinen", "Saint-Vinzent et les Grenadines");
changeTextTo(".vv-single-select-option", "Südafrika", "Afrique du Sud");
changeTextTo(".vv-single-select-option", "Sudan", "Soudan");
changeTextTo(".vv-single-select-option", "Südgeorgien und die Südlichen Sandwichinseln", "Géorgie du Sud et îles Sandwich du Sud");
changeTextTo(".vv-single-select-option", "Südsudan", "Soudan du sud");
changeTextTo(".vv-single-select-option", "Suriname", "Suriname");
changeTextTo(".vv-single-select-option", "Svalbard und Jan Mayen", "Svalbard et Jan Mayen");
changeTextTo(".vv-single-select-option", "Swasiland", "Swasiland");
changeTextTo(".vv-single-select-option", "Syrien", "Syrie");
changeTextTo(".vv-single-select-option", "Tadschikistan", "Tadjikistan");
changeTextTo(".vv-single-select-option", "Taiwan", "Taïwan");
changeTextTo(".vv-single-select-option", "Tansania", "Tanzanie");
changeTextTo(".vv-single-select-option", "Thailand", "Thaïlande");
changeTextTo(".vv-single-select-option", "Togo", "Toogo");
changeTextTo(".vv-single-select-option", "Tokelau", "Tokelau");
changeTextTo(".vv-single-select-option", "Tonga", "Tonga");
changeTextTo(".vv-single-select-option", "Trinidad und Tobago", "Trinité-et-Tobago");
changeTextTo(".vv-single-select-option", "Tschad", "Tchad");
changeTextTo(".vv-single-select-option", "Tschechische Republik", "République tchèque");
changeTextTo(".vv-single-select-option", "Tunesien", "Tunisie");
changeTextTo(".vv-single-select-option", "Türkei", "Turquie");
changeTextTo(".vv-single-select-option", "Turkmenistan", "Turkménistan");
changeTextTo(".vv-single-select-option", "Turks- und Caicosinseln", "îles Turques-et-Caïques");
changeTextTo(".vv-single-select-option", "Tuvalu", "Tuvalu");
changeTextTo(".vv-single-select-option", "Uganda", "Ouganda");
changeTextTo(".vv-single-select-option", "Ukraine", "Ukraine");
changeTextTo(".vv-single-select-option", "Ungarn", "Hongrie");
changeTextTo(".vv-single-select-option", "Uruguay", "Uruguay");
changeTextTo(".vv-single-select-option", "Usbekistan", "Ouzbékistan");
changeTextTo(".vv-single-select-option", "Vanuatu", "Vanuatu");
changeTextTo(".vv-single-select-option", "Vatikanstaat", "Vatican");
changeTextTo(".vv-single-select-option", "Venezuela", "Venezuela");
changeTextTo(".vv-single-select-option", "Vereinigte Arabische Emirate", "Emirats Arabes Unis");
changeTextTo(".vv-single-select-option", "Vereinigte Staaten", "États-Unis");
changeTextTo(".vv-single-select-option", "Vereinigtes Königreich", "Royaume-Uni");
changeTextTo(".vv-single-select-option", "Vietnam", "Vietnam");
changeTextTo(".vv-single-select-option", "Wallis und Futuna", "Valais et Futuna");
changeTextTo(".vv-single-select-option", "Weihnachtsinsel", "L'île de noël");
changeTextTo(".vv-single-select-option", "Westsahara", "Sahara occidental");
changeTextTo(".vv-single-select-option", "Zentralafrikanische Republik", "République centrafricaine");
changeTextTo(".vv-single-select-option", "Zypern", "Chypre");
  
  
  // Other
  changeTextTo(".vv-button-text-blue", "Abweichende Rechnungsadresse angeben", "Indiquer une adresse de facturation différente");
  changeTextTo(".vv-single-select-option", "Bitte auswählen", "Veuillez sélectionner");
  changeTextTo(".vv-button", "Auswahl bearbeiten", "Modifier la sélection");
  changeTextTo(".vv-button", "Teilnehmerdaten anzeigen", "Afficher les données des participants");

  document.querySelectorAll(".vv-selection-input__value").forEach((el) => {
    if (el.innerText === "Bitte auswählen") {
      el.innerText = "Veuillez sélectionner";
    }
    
    if (el.innerText === "Frankreich") {
      el.innerText = "France";
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
