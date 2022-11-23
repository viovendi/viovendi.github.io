
console.log('github code-!');

function startCustomization(){
    const observer = new MutationObserver((mutations, obs) => {
        const page = document.getElementsByClassName(
        'customization-booking-area-wrapper-page1'
        );
    
        if ($(page).is(':visible')) {
            console.log("page-1 visible");
            elementVisibleAction();
            obs.disconnect();
            return;
        }
    });
    
    observer.observe(document, {
        childList: true,
        subtree: true
    });
}
startCustomization();

function elementVisibleAction(){
    console.log('Start working widget integration.');
    console.log($('.customization-booking-area-wrapper'));
    
    addSeatScript();
    
}


/*
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('addEventListener');
    console.log(document.querySelectorAll('.customization-booking-area-wrapper'));
  });

$(window).on('load', function() {
    console.log('ready window!');
    console.log($('.customization-booking-area-wrapper'));
    console.log(this.find('.customization-booking-area-wrapper'));
});

$(document).ready(function(){
    console.log('doc ready!');
    console.log($('.customization-booking-area-wrapper'));
    console.log(this.find('.customization-booking-area-wrapper'));
});
*/


function addSeatScript(){
    console.log('addSeatScript');
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdn-eu.seatsio.net/chart.js";
    
    console.log(script);
    
    var div = document.createElement('div');
    div.id = 'chart';
    
    console.log(div);
    
    var wraper = $('.customization-booking-area-wrapper');
    
    console.log(wraper);
    wraper.append(div);
    wraper.append(script);
    
    console.log(seatsio);
    
    createSeats();
}


function createSeats(){
    console.log('createSeats');
    new seatsio.SeatingChart({
        divId: 'chart',
        workspaceKey: 'ef77668e-17cb-4bc3-b018-710cbb7d7469',
        event: 'e1477cf4-5bf5-c684-8f98-daa43c878877',
        session: 'continue',
        pricing: [
           {'category': 1, 'price': 30}, 
           {'category': 2, 'price': 40}, 
           {'category': 3, 'price': 50}
        ],
        priceFormatter: function(price) {
            return '$' + price;
        }
    }).render();
}
