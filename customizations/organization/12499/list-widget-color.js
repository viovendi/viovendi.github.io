$(document).ready(function () {

        console.log("GTM starts git");

        function changeColorVeranstalter() {
                console.log("changeColorVeranstalter");
                var events = $('.col-12.event-article__event-info')
                events.each(function() {
                      var veranstalter =  $(this).find('div.event-article__event-info__details > div:nth-child(2) > div:nth-child(2)');
                      var text = veranstalter.text().trim();
                      if(text!="doo GmbH"){
                       veranstalter.css({
                        "background-color": "#FAB908",
                        });              
                      }
                });   
        };
        
        changeColorVeranstalter();
        
        console.log("git over");
});

