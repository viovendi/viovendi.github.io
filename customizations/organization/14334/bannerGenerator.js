var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

script.onreadystatechange = handlerQ;
script.onload = handlerQ;

head.appendChild(script);

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
/*
After I added jQuery I add all the cusomizations
*/
function handlerQ() {
    console.log('jquery added');
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    generator();
}
function setupBannerImage(){
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d');
    canvas.width = $('#banner_img').width();
    canvas.crossOrigin='Anonymous';
    canvas.height = $('#banner_img').height();
    ctx.drawImage($('#banner_img').get(0), 0, 0);
    if(canvas.width>canvas.height){   
    ctx.font = "11pt Verdana";
    }else{
     ctx.font = "18pt Verdana";
       }
}
function setTexts(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('#banner_img').get(0), 0, 0);
    ctx.fillStyle = "black";
    console.log('format input value '+$('#format_inp').val());
    
    if(canvas.width>canvas.height){
        //quer
        ctx.fillText($('#halle_inp').val(), 235 , 45);
        ctx.fillText($('#stand_inp').val(), 260 , 45);
    }else{
        //hoch
        ctx.fillText($('#halle_inp').val(), 65, 465);
        ctx.fillText($('#stand_inp').val(), 80-$('#stand_inp').val().length*6, 535);
 }
}
function generator(){
    $(document).on('input change keyup paste', '#halle_inp', function() {
        setTexts()
    });
    $(document).on('input change keyup paste', '#stand_inp', function() {
        if($(this).val().length<11){
            setTexts();
        }
    });
    $(document).on('input change keyup paste', '#format_inp', function() {
        if($(this).val()=='hochkant'){
          $('#banner_img').attr('crossOrigin','Anonymous');
        $('#banner_img').attr("src","https://viovendi.github.io/customizations/organization/14334/CREATIVA-schmal.png");
            $('#banner_img').on('load',function(){
                setupBannerImage();
                setTexts()
            });  
        
        }
        if($(this).val()=='querformat'){
               
        $('#banner_img').attr('crossOrigin','Anonymous');
        $('#banner_img').attr("src","https://viovendi.github.io/customizations/organization/14334/CREATIVA-quer.png");
             $('#banner_img').on('load',function(){
                    setupBannerImage();
                    setTexts()
            });
        }
        // Social media banner
         if($(this).val()=='facebook'){
             console.log('facebook');
          $('#banner_img').attr('crossOrigin','Anonymous');
        $('#banner_img').attr("src","https://viovendi.github.io/customizations/organization/14334/facebook.png");
            $('#banner_img').on('load',function(){
                    setupBannerImage();
                    setTexts()
            });  
        
        }
    });
    setupBannerImage();
}

    function download() {
        var download = document.getElementById("download");
        
       // canvas.crossOrigin = "Anonymous";
        var image = canvas.toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
    }
