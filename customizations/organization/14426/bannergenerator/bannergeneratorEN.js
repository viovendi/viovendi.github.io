var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

script.onreadystatechange = handlerQ;
script.onload = handlerQ;

head.appendChild(script);

const imageNameAndURL = [
  ['vertikal', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/01_EN.png'],
  ['horizontal', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/02_EN.png'],
  ['email', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/030623_JH24_Ausstellerbanner_180x60_EN_SD.png'],
  ['instagrampost', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/030623_JH24_Ausstellerbanner_1080x1080_EN_SD.png'],
  ['instagramstory', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/030623_JH24_Ausstellerbanner_1080x1350_EN_SD.png'],
  ['facebook', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/030623_JH24_Ausstellerbanner_1080x1350_EN_SD.png']
];

function setTexts() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('#banner_img').get(0), 0, 0);
    ctx.fillStyle = "black";

    const value = $('#format_inp').val();

    if (value == 'horizontal') {
        ctx.fillText($('#halle_inp').val(), 337 - $('#halle_inp').val().length * 6, 47);
        ctx.fillText($('#stand_inp').val(), 390 - $('#stand_inp').val().length * 5, 47);
    } else if (value == 'vertikal') {
        ctx.fillText($('#halle_inp').val(), 78 - $('#halle_inp').val().length * 6, 494);
        ctx.fillText($('#stand_inp').val(), 76 - $('#stand_inp').val().length * 5, 565);
    } else if (value == 'email') {
        ctx.fillText($('#halle_inp').val(), 95 - $('#halle_inp').val().length * 6, 50);
        ctx.fillText($('#stand_inp').val(), 120, 50);
    } else if (value == 'instagrampost') {
        ctx.fillText($('#halle_inp').val(), 230 - $('#halle_inp').val().length * 6, 882);
        ctx.fillText($('#stand_inp').val(), 600 - $('#stand_inp').val().length * 9, 883);
    } else if (value == 'instagramstory') {
        ctx.fillText($('#halle_inp').val(), 230 - $('#halle_inp').val().length * 6, 965);
        ctx.fillText($('#stand_inp').val(), 580 - $('#stand_inp').val().length * 9, 965);
    } else if (value == 'facebook') {
        ctx.fillText($('#halle_inp').val(), 230 - $('#halle_inp').val().length * 6, 1055);
        ctx.fillText($('#stand_inp').val(), 580 - $('#stand_inp').val().length * 9, 1055);
    }
}

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

function setupBannerImage() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = $('#banner_img').width();
    canvas.crossOrigin = 'Anonymous';
    canvas.height = $('#banner_img').height();
    ctx.drawImage($('#banner_img').get(0), 0, 0);

    const value = $('#format_inp').val();
    
    if (value == 'horizontal') {
        ctx.font = "14pt Verdana";
    } else if (value == 'vertikal') {
        ctx.font = "17pt Verdana";
    } else if (value == 'email') {
        ctx.font = "10pt Verdana";
    } else if (value == 'instagrampost') {
        ctx.font = "44pt Verdana";
    } else if (value == 'instagramstory') {
        ctx.font = "50pt Verdana";
    } else if (value == 'facebook') {
        ctx.font = "50pt Verdana";
    };
}

function generator() {

    $(document).on('input change keyup paste', '#halle_inp', function () {
        setTexts()
    });
    $(document).on('input change keyup paste', '#stand_inp', function () {
        if ($(this).val().length < 11) {
            setTexts();
        }
    });
    $(document).on('input change keyup paste', '#format_inp', function () {

        for (let i = 0; i < imageNameAndURL.length; i++) {
            if ($(this).val() == imageNameAndURL[i][0]) {
                console.log(imageNameAndURL[i][0])
                $('#banner_img').attr('crossOrigin', 'Anonymous');
                $('#banner_img').attr("src", imageNameAndURL[i][1]);
                $('#banner_img').on('load', function () {
                    setupBannerImage();
                    setTexts()
                });
            }
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
