console.log("list.js")

const url = window.location.href;

// code migrated from GTM COMPLEX-240 for list widget list-14269-2638
if(url.includes("list-14269-2638") && url.includes("attribute_names=Forst")){
    console.log("list-14269-2638 + Forst");
    const stylesForst = `
        .col-md-4.col-sm-6.dates-filter{
          display:none;
        }
    `;
    const styleSheetForst = document.createElement('style');
    styleSheetForst.type = 'text/css';
    styleSheetForst.innerText = stylesForst;
    head.appendChild(styleSheetForst);

}else if (url.includes("list-14269-2638")) {
    // code migrated from GTM COMPLEX-240 for list widget list-14269-2638
    console.log("list-14269-2638");
    const styles = `
      vv-single-select-dropdown vv-single-select-option:nth-child(1) .vv-single-select-option--extended{
        font-size:  0;
    }
    
    vv-single-select-dropdown vv-single-select-option:nth-child(1) .vv-single-select-option--extended:after{
        content: 'Marktauswahl';
        font-size: 14px;
        line-height: 22px;
    }
    
    /* Google Tag Manager (Hornbach List Widget list-14269-2638, COMPLEX-240 checkout page) */
    
    .customization-booking-area-wrapper-page1:before{
        content: "Bitte wählen Sie ihr gewünschtes Zeitfenster";
        font-size: 18px;
        font-weight: 700;
        color: #434652;
        line-height: 3;
        }
    
    .customization-booking-area-wrapper-page2 .customization2_summary_headline{
       font-size: 0px;  
    }
    
    .customization-booking-area-wrapper-page2 .customization2_summary_headline:before{
      content: "GEBUCHTER TERMIN";
      font-size: 18px;
      line-height: 26px;
      font-weight: 400;
    }
    
    .event-info__details, 
    .event-info__address .customization-event-info-address-label, 
    .event-info__address .customization-event-info-address-label + div,
    .event-info__address .customization-event-info-contact {
      display: none;
    }
    
    .customization-event-info-contact-label {
      font-size: 0px;
    }
    
    .customization-event-info-contact-label:before{
        content: 'Kontakt';
        font-size: 18px;
    } 
    
    .customization-booking-area-wrapper-page4 .customization-client-portal-description span{
        font-size: 0px;
    }
    
    .customization-booking-area-wrapper-page4 .customization-client-portal-description span:after{
        content: 'Alle Informationen und Dokumente findest Du im Buchungsportal:';
        font-size: 14px;
    }
    
    
    .customization-booking-area-wrapper-page4 .customizatiom-client-portal-description {
    text-indent: -9999px;
    line-height: 0;
    display: block;
    }
    
    
    .customization-booking-area-wrapper-page4 .customizatiom-client-portal-description:after {
    text-indent: 0;
    display: block;
    line-height: normal;
    content: 'Alle Informationen und Dokumente findest Du im Buchungsportal:';
    }
    
    .ew-confirmation__text-paragraph a {
        font-size: 0;
    }
    
    .ew-confirmation__text-paragraph a:before{
        content: 'Dein Buchungsportal';
        font-size: 14px;
        line-height: 22px;
    }
    
    
    
    vv-single-select-dropdown vv-single-select-option:nth-child(1) .vv-single-select-option--extended{
        font-size:  0;
    }
    
    vv-single-select-dropdown vv-single-select-option:nth-child(1) .vv-single-select-option--extended:after{
        content: 'Marktauswahl';
        font-size: 14px;
        line-height: 22px;
    }
      `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    head.appendChild(styleSheet);
    
    console.log('Google Tag Manager (trigger Hornbach List Widget COMPLEX-240 first page)');
    
    /*
    GTM customizations for the cross organizational list widget COMPLEX-240 first page
    */
    
    var textToReplace = 'Alle Veranstaltungsorte';
    var textReplacement = 'Marktauswahl';
    //var element = document.querySelector('.col-6 .vv-selection-input__value')
    var element = document.querySelector('.vv-selection-input__value')
    var replaceText = function() {
      if (element.textContent.trim() === textToReplace) {
        element.childNodes.forEach(function(node){
          if (node.textContent.trim() === textToReplace) {
            node.textContent = textReplacement;
          } 
        })
      }
    }
    
    observer = new MutationObserver(replaceText);
    observer.observe(element, { characterData: true, subtree: true, childList: true });
    
    replaceText();

    var timestamp = new Date().getTime();
    $.getScript('https://viovendi.github.io/customizations/organization/14269/hidefirstpage.js?t='+ timestamp);
    /******************************* END of GTM code **************************************************/

}


function run(){
    $("li.ng-star-inserted").each(function() {
    var title = $($(this)).find(".event-article__event-info__title").text()
    if(title.includes("Schüler@HORNBACH")){
        if($('#464413').length == 0){
        var but = $($(this)).find(".button:not(#464413)");
        $(but).after('<a class="button" id="464413" target="_blank" href="https://jobs.hornbach.com/Germany/content/Schueler-bei-HORNBACH/?locale=de_DE">Mehr Infos</a>');
        $(but).hide();
        }
    }
});
}

var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
 //   console.log("Node has been inserted: ", event.target);    
    run(); 
  }
}
document.addEventListener("animationstart", insertionListener, false); 
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
