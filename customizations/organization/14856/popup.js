console.log('GTM github!');


const headerText = '<h3>Einwilligung in die Veröffentlichung von personenbezogenen Daten für Veranstaltungen und Arbeitsgruppen bzw. anders bezeichneten Gremien bzw. Teilveranstaltungen des Bundesamtes für die Sicherheit der nuklearen Entsorgung im Rahmen der gesetzlichen Öffentlichkeitsbeteiligung per Livestream und Zoom (Vers. 005, Stand: 05/2022)</h3>';

const modalText1 = 'Die Teilnahme an Veranstaltungen, Arbeitsgruppen oder anders bezeichneten Formaten, die das Bundesamt für die Sicherheit der nuklearen Entsorgung (BASE), Wegelystraße 8, 10623 Berlin, im Rahmen der gesetzlichen Öffentlichkeitsbeteiligung gem. § 5 StandAG veranstaltet, erfolgt mittels Livestream und unter Einsatz des Videokonferenztools Zoom der Zoom Video Communication Inc., 55 Almaden Blvd., 6th Floor, San José, 95113 CA. Anbieter der Zoom-Instanz und Auftragsverarbeiter des BASE ist die Connect4Video GmbH, Nibelungenstraße 28, 65428 Rüsselsheim am Main, die Dienste für Videokommunikation anbietet und bei der Bundesnetzagentur als Betreiber öffentlich zugänglicher Telekommunikationsdienste gemeldet ist. Diese Ausgestaltung bietet Teilnehmern die Möglichkeit, sich entsprechend des gesetzlichen Auftrags des BASE nach § 5 StandAG aktiv an Veranstaltungen im Rahmen der Öffentlichkeitsbeteiligung zu beteiligen. Bei der aktiven Teilnahme am Livestream unter Einsatz des Videokonferenztools Zoom werden die nachfolgenden (besonderen) personenbezogenen Daten verarbeitet:';

const modalText2 = '-<strong> Benutzerdaten:</strong> Name oder Alias, Organisation (optional), E-Mail-Adresse, Passwort<br />-<strong> Meta-Daten</strong>  (Verkehrs- und Mediendaten): Host, Meeting-ID, Meetingtitel, Hashcode des Meetingpassworts, Meetingeinstellungen, tatsächliche Startzeit, tatsächliche Endzeit, geplante Zeit, geplante Dauer, Einstellungen für wiederkehrende Meetings (Typ und Dauer), Zeitzone des Hosts, tatsächliche Meetingdauer, Teilnehmerzahl, Teilnehmerliste, E-Mail-Adressen der Teilnehmer (sofern registrierte Teilnehmer), Umfragen, Einwahlnummer, IP-Adressen der Teilnehmer<br />- <strong>Meeting-Daten:</strong> Text-, Audio- und Videodaten unter Verwendung des Klarnamens und Zeitmarke der Wortmeldung oder des Redebeitrags; Politische Meinungsäußerungen; Teilnahme an Votings von Vorschlägen sowie Teilnahme an Wahlen von Arbeitsgruppen oder anders bezeichneten Gremien; Austausch von Dokumenten, Präsentationen und Screensharing der Teilnehmenden, auch für die Mitwirkung in Arbeitsgruppen oder anders bezeichneten Gremien; Protokollierung der Sitzungen von Arbeitsgruppen usw., ggf. unter Verwendung des Klarnamens und ggf. Organisation; Erstellung und Veröffentlichung von Mitschnitten und Inhalten des Livestreams und der Veranstaltungen durch das BASE; Erstellung eines Protokolls oder Wortprotokolls der Veranstaltung sowie der Inhalte aus den Präsentationen und Zusammenfassungen von Arbeitsgruppen usw. unter Verwendung des Klarnamens und ggf. Organisation';

const modalText3 = '-<strong> Chat-Daten:</strong> Verschriftlichung von Statements, Anmerkungen, Fragen mit Klarnamen via Chatfunktion und Zeitmarke der Wortmeldung oder des Redebeitrags, die für alle eingeloggten Teilnehmer sichtbar sind; Kommentierungsmöglichkeit von schriftlichen Beiträgen der Teilnehmer durch andere Teilnehmer unter Verwendung des Klarnamens und ggf. Organisation; Veröffentlichung der Chatbeiträge und Pinnwandeinträge unter Verwendung des Klarnamens<br /><br /> Bei der Teilnahme mittels Livestream und Zoom werden besondere Kategorien personenbezogener Daten gemäß Art. 9 Abs. 1 DSGVO, namentlich politische Meinungsäußerungen sowie Bild-, Ton- und Videoaufnahmen von Teilnehmern verarbeitet und auf den Internetseiten des BASE veröffentlicht. Rechtsgrundlage für diese Verarbeitung ist Art. 9 Abs. 2 lit. a) und e); Art. 7 DSGVO; §§ 5 Abs. 2 und 3 Stand AG <br />Bei der Nutzung der Zoom-Instanz werden lediglich die Benutzerdaten sowie die Meta-Daten an Zoom, auch in die USA, übertragen. Die Weitergabe der Daten an Zoom erfolgt durch Connect4Video im Rahmen eines Auftragsverarbeitungsverhältnisses zwischen Connect4Video als Auftragsverarbeiter und Zoom als Unterauftragsverarbeiter <br />Rechtsgrundlage für die Verarbeitung der Benutzerdaten sowie der Meta-Daten im Rahmen des Einsatzes von Zoom sowie deren Übermittlung an Zoom, auch in die USA, sind Artt. 6 Abs. 1 lit. a), 7, 28, 49 Abs. 1 lit. a) DSGVO; §§ 5 Abs. 2 und 3 StandAG.';

const modalText4 = 'Rechtsgrundlage für die Verarbeitung der Meeting-Daten sowie der Chat-Daten im Rahmen des Einsatzes von Zoom ist Artt. 6 Abs. 1 lit. a), 7, 28, 45 Abs.1 DSGVO; §§ 5 Abs. 2 und 3 StandAG sowie für die besonderen personenbezogenen Daten Art. 9 Abs. 2 lit. a) und e), 28; §§ 5 Abs. 2 und 3 StandAG.<br /> Zur Gewährleistung der gesetzlich vorgeschriebenen, umfassenden Öffentlichkeitsbeteiligung gibt das BASE Konferenzinhalte bzw. Livestream-Inhalte sowie Inhalte aus Arbeitsgruppen oder anders bezeichneten Formaten der Beteiligung an die Presse weiter. Dies beinhaltet auch die oben beschriebenen besonderen personenbezogenen Daten gemäß Art. 9 DSGVO. Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. a) und e); Art. 7, Art. 9 Abs. 2 lit. a) und e), DSGVO §§ 5 Abs. 2 und 3 StandAG.<br /><strong> Hiermit willige ich in die Verarbeitung<br />- meiner Benutzer-Daten sowie der Meta-Daten, auch in die USA, durch die Zoom Video Communication Inc. im Rahmen von Veranstaltungen des BASE im Rahmen Öffentlichkeitsbeteiligung mittels Livestream,<br />- der Meeting-Daten und Chat-Daten auf den Servern von connect4video in Europa bzw. des EWR und der Schweiz durch das BASE im Rahmen der Teilnahme an Veranstaltungen des BASE im Rahmen der Öffentlichkeitsbeteiligung mittels Livestream,<br />-	meiner (besonderen) personenbezogenen Daten, auch in Form der Veröffentlichung auf den Webseiten des BASE und der Weitergabe an die Presse – wie oben beschrieben –, durch das BASE, ein.</strong><br /><br />';

const modalText5 = 'Sofern Sie Ihre Einwilligung in die Verarbeitung dieser Daten nicht erteilen möchten, können Sie an Veranstaltungen mittels Livestream nicht teilnehmen.<br />Diese Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft ohne Nennung von Gründen in Textform (Post, E-Mail) widerrufen werden. Die E-Mail ist zu richten an datenschutzbeauftragter@bfe.bund.de. Durch einen Widerruf wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.<br /> Das BASE weist darauf hin, dass Informationen im Internet, insbesondere solche, die während des Live-streams verarbeitet werden, wie z.B. Chats, Votings, Protokolle oder politische Meinungsäußerungen, weltweit zugänglich sind, mit Suchmaschinen gefunden und mit anderen Informationen verknüpft werden können, woraus sich unter Umständen Persönlichkeitsprofile über eine Person erstellen lassen. <br />Ins Internet gestellte Informationen können problemlos kopiert und weiterverbreitet werden. Dies kann dazu führen, dass im Internet veröffentlichte Informationen auch nach ihrer Löschung auf der Ursprungs-Seite weiterhin andernorts aufzufinden sind.';

const buttonText = 'Ich willige ein';
const linkText = 'Einwilligungserklärung zum Herunterladen';
const linkSource = 'https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/BASE/Einwilligung+in+die+Vero%CC%88ffentlichung+von+personenbezogenen+Daten+V005-05-2022.pdf';

const popUp2headerText = '<h3>Einwilligung Bildnutzung Internet, Social Media</h3>';

const popUp2modalText1 = '<strong>Einwilligung<br /><br />zur Aufnahme und Veröffentlichung von<br />Bildmaterial<br /><br />durch das BASE<br /><br /></strong>';

const popUp2modalText2 = '<i>- Einwilligungserklärung für Teilnehmer im Rahmen von Veranstaltungen der Öffentlichkeitsbeteiligung -</i><br /><br />';

const popUp2modalText3 = 'Das Bundesamt für die Sicherheit der nuklearen Entsorgung (BASE) beabsichtigt im Rahmen der Öffentlichkeitsarbeit Foto- und Filmaufnahmen während der Durchführung der hybriden Veranstaltungen anzufertigen bzw. anfertigen zu lassen. <u>Die Einwilligung bezieht sich dabei auf Bildmaterial, bei dem ein Teilnehmer allein oder mit anderen Personen erkennbar abgebildet.</u> Die Aufnahme und Veröffentlichung des Bildmaterials erfolgen zu Zwecken der Berichterstattung und Dokumentation über Aktivitäten des BASE im Rahmen der räumlich unbeschränkten behördlichen Öffentlichkeitsarbeit. Die Veröffentlichung des Bildmaterials als Teil der Öffentlichkeitsarbeit des BASE bezieht sich dabei auf die folgenden Kanäle:<br /><br />-	in zur Öffentlichkeitsarbeit hergestellten Druckerzeugnissen des BASE<br />- im nicht öffentlich zugänglichen Intranet des BASE<br />- auf den Webseiten des BASE<br />- in öffentlich zugänglichen Social-Media-Kanälen des BASE (Twitter, Instagram)<br /><br /><u>Grundsätzlich wird das Bildmaterial mit dem Vor- und Nachnamen des/der abgebildeten Teilnehmer/s veröffentlicht. Dies gilt nicht für Veröffentlichungen in öffentlich zugänglichen Social-Media-Kanälen des BASE. Eine Veröffentlichung von Bildmaterial unter Namensnennung findet dort ausdrücklich nicht statt.</u><br /><br />Rechtsgrundlage der Verarbeitung der (besonderen) personenbezogenen Daten ist ihre Einwilligungserklärung gemäß Artt. 6 Abs. 1 lit. a), 9 Abs. 2 lit. a), 7 DSGVO.<br /><br />Zur Anfertigung des Bildmaterials setzt das BASE den datenschutzkonform beauftragten Dienstleister bundesfoto, Kurfürstendamm 15, 10719 Berlin, als Auftragsverarbeiter ein.<br /><br />';

const popUp2modalText4 = 'Die untenstehenden <strong>Hinweise</strong> habe ich gelesen:<br /><br />•   Ich habe zur Kenntnis genommen, dass Informationen im <strong>Internet</strong> weltweit zugänglich sind, mit Suchmaschinen gefunden und mit anderen Informationen verknüpft werden können, woraus sich unter Umständen Profile (zum Beispiel Persönlichkeits-, Bewegungsprofile etc.) über mich erstellen lassen. Mir ist bewusst, dass ins Internet gestellte Informationen, einschließlich Fotos, problemlos kopiert und weiterverbreitet werden können und dass es spezialisierte Archivierungsdienste gibt, deren Ziel es ist, den Zustand bestimmter Internetseiten dauerhaft zu dokumentieren. Dies kann dazu führen, dass im Internet veröffentlichte Informationen auch nach ihrer Löschung auf der Ursprungsseite weiterhin andernorts aufzufinden und von Dritten verarbeitbar sind.<br /><br />•   Soweit ich in die Veröffentlichung in sog. <strong>sozialen Netzwerken</strong> (Social Media) einwillige, habe ich zur Kenntnis genommen, dass soziale Netzwerke Inhalte verbreiten, ohne dass das BASE auf die Anzahl oder Art der Verbreitungshandlungen durch Nutzer Einfluss hat. Durch Kommentierungen und anschließendes Teilen der ursprünglichen Veröffentlichung besteht die theoretische Möglichkeit, dass abgebildete Personen ungünstigen oder negativen Kommentaren ausgesetzt sind bzw. sein werden. Beim Einstellen in bestimmte Social Media Angebote (z. B. Facebook) kann nicht ausgeschlossen werden, dass eine vollständige Löschung der Fotos nicht möglich ist.<br /><br />•	Soweit sich aus dem Bildmaterial Hinweise auf <strong>besondere Kategorien personenbezogener Daten </strong>wie meine rassische oder ethnische Herkunft, politische Meinung, religiöse oder weltanschauliche Überzeugung, Gewerkschaftszugehörigkeit, Gesundheit oder sexuelle Orientierung ergeben (z. B. Hautfarbe, Kopfbedeckung, Anstecknadeln, Brille) oder das verarbeitete Bildmaterial biometrische Daten zur eindeutigen Identifizierung einer natürlichen Person beinhaltet, bezieht sich meine Einwilligung für die oben genannten Zwecke ausdrücklich auch auf diese Angaben.<br /><br />Mir ist bekannt, dass diese Einwilligungserklärung freiwillig erfolgt und ich sie jederzeit mit Wirkung für die Zukunft durch schriftliche Erklärung gegenüber dem BASE <strong>widerrufen</strong> kann. Der Widerruf kann erfolgen in Papierform an „Bundesamt für die Sicherheit der nuklearen Entsorgung, Behördlicher Datenschutzbeauftragter, z.Hd. Robin Heilmann, Wegelystraße 8, 10623 Berlin“ oder elektronisch per Email an die Emailadresse datenschutzbeauftragter@base.bund.de. Der Widerruf bewirkt, dass veröffentlichtes Bildmaterial der Person aus dem Internetauftritt des BASE entfernt und kein weiteres Bildmaterial der Person eingestellt wird. Zur Löschung von Bildmaterial im Internet einschließlich der sozialen Netzwerke wird ergänzend auf die obenstehenden Hinweise verwiesen. Bei Druckerzeugnissen bewirkt der Widerruf, dass in Neuauflagen der bereits gedruckten Erzeugnisse Bildmaterial der Person nicht mehr veröffentlicht wird. Durch einen Widerruf wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.<br /><br />Nähere Informationen zu meinen Rechten nach Art. 13 DSGVO finde ich in der Datenschutzerklärung der Veranstaltungen im Rahmen der Öffentlichkeitsbeteiligung des BASE.<br /><br /><br /><br />';

const popUp2modalText5 = '<strong>Ich habe die Einwilligungserklärung gelesen und stimme der dort beschriebenen Verarbeitung meiner personenbezogenen Daten zu.</strong>';

const popUp2buttonText = 'Zustimmen';

  function addPopUp(){
    if($('#checkboxModal').length < 1){
       $('<div id="checkboxModal" class="modal"><div class="modal-content"><div class="modal-head">'+headerText+'</div><div class="modal-body"><p>'+modalText1+'</p><p>'+modalText2+'</p><p>'+modalText3+'</p><p>'+modalText4+'</p><p>'+modalText5+'</p></div><div class="modal-footer"><button class="accept-button" id="accept" disabled>'+buttonText+'</button></div></div>').insertBefore( ".customization-booking-area-wrapper-page2" );
      // move popup to checkbox
      var offset = $('.popup').offset();
      var positionPopup = offset.top - $('#checkboxModal .modal-content').outerHeight() - 35;

      $('#checkboxModal .modal-content').css({top: positionPopup});
    }
  }

  function addPopUp2(){
    if($('#checkboxModal2').length < 1){
       $('<div id="checkboxModal2" class="modal"><div class="modal-content"><div class="modal-head">'+popUp2headerText+'</div><div class="modal-body"><p>'+popUp2modalText1+'</p><p>'+popUp2modalText2+'</p><p>'+popUp2modalText3+'</p><p>'+popUp2modalText4+'</p><p>'+popUp2modalText5+'</p></div><div class="modal-footer"><button class="accept-button" id="accept2" disabled>'+popUp2buttonText+'</button></div></div>').insertBefore( ".customization-booking-area-wrapper-page2" );
      // move popup to checkbox
      var offset = $('.popup').offset();
      var positionPopup = offset.top - $('#checkboxModal2 .modal-content').outerHeight() - 35;

      $('#checkboxModal2 .modal-content').css({top: positionPopup});
    }
  }


  function addClass(){
    $('.customization2_attendee .vv-checkbox__label-text').each(function(){
      var textLabel = $(this).text().trim();
      var textTofind = 'Einwilligung zur Veröffentlichung personenbezogener Daten';

      if(textLabel == textTofind){
        $(this).closest('label').addClass('popup');
        $('.popup').after('<p><a href="'+linkSource+'" target="_blank" class="checkbox-link">'+linkText+'</a></p>');
        return false
      }
    });
  }

  // add class to checkbox
  function init(){
    addClass();
    if(!$('.popup input').is(':checked')){
       $('.popup').addClass('unchecked');
    }
    popupClick();
  }
  init();


  function popupClick(){

    $('.popup' ).on('click', function(e){
      if($(this).hasClass('unchecked')){
        e.preventDefault();
        addPopUp();
        checkScroll();
      }else{
        $('.popup').addClass('unchecked');
      }
    });
  }


  // check scroll inside the pop-up
  function checkScroll(){
    if( $('#checkboxModal').length > 0 ){
      $('#checkboxModal .modal-body').scroll(function(){
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          $('#checkboxModal .accept-button').attr('disabled', false);
          clickAcceptButton();
        }
      });  
    }else if( $('#checkboxModal2').length > 0 ){
      $('#checkboxModal2 .modal-body').scroll(function(){
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          $('#checkboxModal2 .accept-button').attr('disabled', false);
          clickAcceptButton();
        }
      });
    }
    
  }


  function clickAcceptButton(){
     $('#accept').on('click', function(){
      $('#checkboxModal').hide();
      $('#checkboxModal').remove();

      $('.popup').removeClass('unchecked');
      $('.popup input').trigger('click');

    });
    
    $('#accept2').on('click', function(){
      console.log($('#checkboxModal2'))
      $('#checkboxModal2').hide();
      $('#checkboxModal2').remove();

    });
  }

    var insertionListener = function(event) {
    if (event.animationName === "nodeInserted") {
      console.log('edit');
      init();
    }
  }

  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); //
