//OID 12944

$(document).ready(function () {

        console.log("GTM starts git");

        function changeColorVeranstalter() {
                console.log("changeColorVeranstalter");
                var events = $('.event-article');
                events.each(function() {
                      var veranstalter =  $(this).find('div.event-article__event-info__details > div:nth-child(2) > div:nth-child(2)');
                      var text = veranstalter.text().trim();
                      if(text!="doo GmbH"){
                       $(this).find('.button').css({
                        "background-color": "#FAB908",
                        });
                       $(this).find('#event-article__date-container').attr('style', 'color: #FAB908 !important; border-right: 3px solid #FAB908');
                      }
                });   
        };
        function changeLinkVeranstalter() {
                console.log("changeColorVeranstalter");
                var events = $('.event-article');
                events.each(function() {
                        //todo
                      var veranstalter =  $(this).find('div.event-article__event-info__details > div:nth-child(3) > div:nth-child(3)');
                      console.log($(veranstalter));
                      var text = veranstalter.text().trim();
                      if(text){
                       $(this).find('.button').attr("href", text);
                      }
                });   
        };
        
        changeColorVeranstalter();
        changeLinkVeranstalter();

        console.log("git over");
});

