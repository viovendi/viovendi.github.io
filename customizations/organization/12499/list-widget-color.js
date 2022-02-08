$(document).ready(function () {

        console.log("GTM starts git");

        function changeColorVeranstalter() {
                console.log("changeColorVeranstalter");
                var events = $('.col-12.event-article__event-info')
                events.each(function() {
                      var veranstalter =  $(this).find('div.event-article__event-info__details > div:nth-child(2) > div:nth-child(2)');
                      console.log(veranstalter.text());
                });
                
                $('div.event-article__event-info__details > div:nth-child(2) > div:nth-child(2)').css({
                "background-color": "#FAB908",
                });
                
        };
        
        changeColorVeranstalter();
        
        console.log("git over");
});

