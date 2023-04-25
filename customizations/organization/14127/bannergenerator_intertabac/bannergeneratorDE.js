var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

script.onreadystatechange = handlerQ;
script.onload = handlerQ;

head.appendChild(script);

const imageNameAndURL = [
  ['vertikal', 'https://viovendi.github.io/customizations/organization/14127/bannergenerator_intertabac/IT_Banner_Aussteller_160x600_D.png'],
  ['horizontal', 'https://viovendi.github.io/customizations/organization/14127/bannergenerator_intertabac/IT_Banner_Aussteller_468x60_D.png'],
  ['email', 'https://viovendi.github.io/customizations/organization/14127/bannergenerator_intertabac/2022_IT_Banner_Aussteller_180x60_D.png'],
  ['instagrampost', 'https://viovendi.github.io/customizations/organization/14127/bannergenerator_intertabac/IT_Banner_Aussteller_1080x1080_D.png'],
  ['instagramstory', 'https://viovendi.github.io/customizations/organization/14127/bannergenerator_intertabac/IT_Banner_Aussteller_1080x1350_D.png'],
  ['facebook', 'https://viovendi.github.io/customizations/organization/14127/bannergenerator_intertabac/IT_Banner_Aussteller_1080x1350_D.png']
];

function setTexts() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('#banner_img').get(0), 0, 0);
    ctx.fillStyle = "black";

    const value = $('#format_inp').val();

    if (value == 'horizontal') {
        ctx.fillText($('#halle_inp').val(), 400 - $('#halle_inp').val().length * 6, 45);
        ctx.fillText($('#stand_inp').val(), 435 - $('#stand_inp').val().length * 5, 45);
    } else if (value == 'vertikal') {
        ctx.fillText($('#halle_inp').val(), 78 - $('#halle_inp').val().length * 4, 512);
        ctx.fillText($('#stand_inp').val(), 78 - $('#stand_inp').val().length * 5, 572);
    } else if (value == 'email') {
        ctx.fillText($('#halle_inp').val(), 28, 43);
        ctx.fillText($('#stand_inp').val(), 49, 43);
    } else if (value == 'instagrampost') {
        ctx.fillText($('#halle_inp').val(), 510 - $('#halle_inp').val().length * 6, 1020);
        ctx.fillText($('#stand_inp').val(), 835 - $('#stand_inp').val().length * 9, 1020);
    } else if (value == 'instagramstory') {
        ctx.fillText($('#halle_inp').val(), 510 - $('#halle_inp').val().length * 6, 1225);
        ctx.fillText($('#stand_inp').val(), 835 - $('#stand_inp').val().length * 9, 1225);
    } else if (value == 'facebook') {
        ctx.fillText($('#halle_inp').val(), 510 - $('#halle_inp').val().length * 6, 1225);
        ctx.fillText($('#stand_inp').val(), 835 - $('#stand_inp').val().length * 9, 1225);
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
        ctx.font = "13pt Verdana";
    } else if (value == 'vertikal') {
        ctx.font = "13pt Verdana";
    } else if (value == 'email') {
        ctx.font = "13pt Verdana";
    } else if (value == 'instagrampost') {
        ctx.font = "22pt Verdana";
    } else if (value == 'instagramstory') {
        ctx.font = "22pt Verdana";
    } else if (value == 'facebook') {
        ctx.font = "22pt Verdana";
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
