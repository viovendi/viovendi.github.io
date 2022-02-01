$(document).ready(function () {

        console.log("GTM starts git");

        function changeColorVeranstalter() {
                console.log("changeColorVeranstalter");
                $('div.event-article__event-info__details > div:nth-child(2) > div:nth-child(2)').css({
                "background-color": "#FAB908",
                });
        };
        
        changeColorVeranstalter();
        
        console.log("git over");
});

