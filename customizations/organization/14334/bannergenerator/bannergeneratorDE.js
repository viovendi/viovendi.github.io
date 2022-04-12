var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

script.onreadystatechange = handlerQ;
script.onload = handlerQ;

head.appendChild(script);

const imageNameAndURL = [
  ['vertikal', 'https://viovendi.github.io/customizations/organization/14334/bannergenerator/040122_BOE22_Ausstellerbanner_160x600_DE.png'],
  ['horizontal', 'https://viovendi.github.io/customizations/organization/14334/bannergenerator/040422_BOE22_Ausstellerbanner_468x60_DE.png'],
  ['email', 'https://viovendi.github.io/customizations/organization/14334/bannergenerator/040422_BOE22_Ausstellerbanner_180x60_DE.png'],
  ['instagrampost', 'https://viovendi.github.io/customizations/organization/14334/bannergenerator/040122_BOE22_Ausstellerbanner_1080x1080_DE.png'],
  ['instagramstory', 'https://viovendi.github.io/customizations/organization/14334/bannergenerator/040122_BOE22_Ausstellerbanner_1080x1350_DE.png'],
  ['facebook', 'https://viovendi.github.io/customizations/organization/14334/bannergenerator/040122_BOE22_Ausstellerbanner_1080x1350_DE.png']
];

function setTexts() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('#banner_img').get(0), 0, 0);
    ctx.fillStyle = "black";

    const value = $('#format_inp').val();

    if (value == 'horizontal') {
        ctx.fillText($('#halle_inp').val(), 65 - $('#halle_inp').val().length * 4, 31);
        ctx.fillText($('#stand_inp').val(), 65 - $('#stand_inp').val().length * 4, 49);
    } else if (value == 'vertikal') {
        ctx.fillText($('#halle_inp').val(), 110 - $('#halle_inp').val().length * 6, 515);
        ctx.fillText($('#stand_inp').val(), 110 - $('#stand_inp').val().length * 5, 555);
    } else if (value == 'email') {
        ctx.fillText($('#halle_inp').val(), 42 - $('#halle_inp').val().length * 4, 29);
        ctx.fillText($('#stand_inp').val(), 42 - $('#stand_inp').val().length * 4, 45);
    } else if (value == 'instagrampost') {
        ctx.fillText($('#halle_inp').val(), 330 - $('#halle_inp').val().length * 6, 993);
        ctx.fillText($('#stand_inp').val(), 745 - $('#stand_inp').val().length * 9, 993);
    } else if (value == 'instagramstory') {
        ctx.fillText($('#halle_inp').val(), 330 - $('#halle_inp').val().length * 6, 1233);
        ctx.fillText($('#stand_inp').val(), 745 - $('#stand_inp').val().length * 9, 1233);
    } else if (value == 'facebook') {
        ctx.fillText($('#halle_inp').val(), 330 - $('#halle_inp').val().length * 6, 1233);
        ctx.fillText($('#stand_inp').val(), 745 - $('#stand_inp').val().length * 9, 1233);
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
        ctx.font = "10pt Verdana";
    } else if (value == 'vertikal') {
        ctx.font = "13pt Verdana";
    } else if (value == 'email') {
        ctx.font = "7pt Verdana";
    } else if (value == 'instagrampost') {
        ctx.font = "26pt Verdana";
    } else if (value == 'instagramstory') {
        ctx.font = "26pt Verdana";
    } else if (value == 'facebook') {
        ctx.font = "26pt Verdana";
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
                $('#banner_img').attr("style", "width: 400px");
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
