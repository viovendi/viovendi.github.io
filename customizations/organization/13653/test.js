 console.log('Start 11, QR CODE');
var href = window.location.href;
if(window.location.href.indexOf('booking-13653-34935') !== -1){
 console.log("works")


  function getEl(){
    return new Promise(function (resolve, reject) {
      var timerId = setInterval(function() {
        var el  = document.getElementsByClassName("customization-booking-area-wrapper-page4");
        if(el.length > 0){ 
          clearInterval(timerId);
          resolve(el)
        }           
      }, 1000);
    }
                      )
  };



  function getXMLHttpRequest (open) {

    XMLHttpRequest.prototype.open = function() {
      this.addEventListener("readystatechange", function() {

        if(this.__zone_symbol__xhrURL == "https://api.doo.net/v1/orders" ){
          //console.log(this)
          try {
            var res = typeof JSON.parse(this.responseText) != "undefined" ? JSON.parse(this.responseText): undefined;
          } catch (err) {}

          if(res != undefined && res._embedded){
            var orders = res._embedded.orders;
            getEl().then(function(result) {
              for(var i = 0; i < orders.length; i++){
                var attendees = orders[i].attendees;

                for(var j = 0; j < attendees.length; j++){
                  //console.log(attendees[j].ticket.checkin_link)

                  var img = document.createElement("img");
                  img.setAttribute('src', 'https://chart.googleapis.com/chart?chs=190x190&cht=qr&choe=UTF-8&chl='+attendees[j].ticket.checkin_link);
                  img.setAttribute('style','display: block;')
                                   
                  result[0].append(j+1, img);

                }
              }

            });

          }

        }
      }, false);
      open.apply(this, arguments);
    };
  };

  getXMLHttpRequest(XMLHttpRequest.prototype.open);
}
