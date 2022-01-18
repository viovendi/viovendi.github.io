var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

script.onreadystatechange = handlerQ;
script.onload = handlerQ;

head.appendChild(script);


/*
After I added jQuery I add all the cusomizations
*/
function handlerQ() {
    console.log('jquery added');
    generator();
}

function generator(){
  var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
    canvas.width = $('img').width();
    canvas.crossOrigin = "Anonymous";
    canvas.height = $('img').height();
    ctx.drawImage($('img').get(0), 0, 0);
    ctx.font = "18pt Verdana";
    $(document).on('input', '#halle_inp', function() {
        //redraw image
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage($('img').get(0), 0, 0);
        //refill text
        ctx.fillStyle = "black";
        ctx.fillText($(this).val(), 65, 465);
    });
    $(document).on('input change keyup paste', '#stand_inp', function() {
        //redraw image
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.drawImage($('img').get(0), 0, 0);
        //refill text
        ctx.fillStyle = "black";
        ctx.fillText($(this).val(), 60, 530);
    });
    //$('button').click(function() {
        //console.log(ctx.getImageData(50, 50, 100, 100));
    //});
    function download() {
        var download = document.getElementById("download");
        var image = document.getElementById("canvas").toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
    }
}
