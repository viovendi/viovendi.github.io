
console.log('github code-!');

function startCustomization(){
    const observer = new MutationObserver((mutations, obs) => {
        const page = document.getElementsByClassName('customization-booking-area-wrapper-page1');
    
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
    addSeatScript();
}

/*
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
    
    var div = document.createElement('div');
    div.id = 'chart';
    
    var wraper = $('.customization-booking-area-wrapper > div');
    
    wraper.prepend(div);
    wraper.append(script);
    
    setTimeout(function(){
        createSeats();
    },500);
}

function createSeats(){
    console.log('createSeats');
    new seatsio.SeatingChart({
        divId: 'chart',
        workspaceKey: 'ef77668e-17cb-4bc3-b018-710cbb7d7469',
        event: 'f31042b2-4ac3-4c96-a1e5-43c1291fa709',
        session: 'continue',
        pricing: [
           {'category': 1, 'price': 30}, 
           {'category': 2, 'price': 40}, 
           {'category': 3, 'price': 50}
        ],
        priceFormatter: function(price) {
            return '$' + price;
        },
        onObjectSelected: function (object) {
            // add the selected seat id to the array
            console.log('onObjectSelected');
            console.log(object);
            selectedSeats.push(object.label);
        },
        onObjectDeselected: function (object) {
            // remove the deselected seat id from the array
            console.log('onObjectDeselected');
            console.log(object);
            
            var index = selectedSeats.indexOf(object.label);
            if (index !== -1) selectedSeats.splice(index, 1);
        }
    }).render();
}
