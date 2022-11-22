
console.log('github code');

$(document).ready(function(){
    console.log('ready doc!');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdn-eu.seatsio.net/chart.js";
    
    var div = document.createElement('div');
    div.id = 'chart';
    
    //var wrapper = document.getElementsByClassName('customization-booking-area-wrapper')[0];
    var wraper = document.querySelector('.customization-booking-area-wrapper');
    console.log(wraper);
    
    //wrapper.append(div);
    //wrapper.append(script);
    
    //div.onload = createSeats();
});


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
