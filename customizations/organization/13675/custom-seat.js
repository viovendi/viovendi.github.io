
console.log('github code');

var wrapper = document.getElementsByClassName('customization-booking-area-wrapper');
console.log(wrapper);

var wrapper1 = document.getElementsByClassName('customization-booking-area-wrapper-page1')[0];
console.log(wrapper1);


var div = document.createElement('div');
div.id = 'chart';
wrapper.appendChild(div);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://cdn-eu.seatsio.net/chart.js";
wrapper.appendChild(script);

script.onload = createSeats;
//script.onreadystatechange = createSeats;

function createSeats(){
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
