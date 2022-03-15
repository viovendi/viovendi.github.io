var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

script.onreadystatechange = handlerQ;
script.onload = handlerQ;

head.appendChild(script);

const imageNameAndURL = [
  ['vertikal', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/2022_JH_Ausstellerbanner_Juni_160x600_DE.png'],
  ['horizontal', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/2022_JH_Ausstellerbanner_Juni_180x60_DE.png'],
  ['email', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/email.png'],
  ['instagrampost', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/instagrampost.png'],
  ['instagramstory', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/instagramstory.png'],
  ['facebook', 'https://viovendi.github.io/customizations/organization/14426/bannergenerator/2022_JH_Ausstellerbanner_Juni_468x60_DE.png']
];

function setTexts() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('#banner_img').get(0), 0, 0);
    ctx.fillStyle = "black";

    const value = $('#format_inp').val();

    if (value == 'horizontal') {
        ctx.fillText($('#halle_inp').val(), 25 - $('#halle_inp').val().length * 6, 43);
        ctx.fillText($('#stand_inp').val(), 46, 43);
    } else if (value == 'vertikal') {
        ctx.fillText($('#halle_inp').val(), 78 - $('#halle_inp').val().length * 6, 518);
        ctx.fillText($('#stand_inp').val(), 78 - $('#stand_inp').val().length * 7, 578);

    } else if (value == 'email') {
        ctx.fillText($('#halle_inp').val(), 78 - $('#halle_inp').val().length * 6, 518);
        ctx.fillText($('#stand_inp').val(), 78 - $('#stand_inp').val().length * 7, 578);
    } else if (value == 'instagrampost') {
        ctx.fillText($('#halle_inp').val(), 78 - $('#halle_inp').val().length * 6, 518);
        ctx.fillText($('#stand_inp').val(), 78 - $('#stand_inp').val().length * 7, 578);
    } else if (value == 'instagramstory') {
        ctx.fillText($('#halle_inp').val(), 78 - $('#halle_inp').val().length * 6, 518);
        ctx.fillText($('#stand_inp').val(), 78 - $('#stand_inp').val().length * 7, 578);
      
    } else if (value == 'facebook') {
        ctx.fillText($('#halle_inp').val(), 400 - $('#halle_inp').val().length * 6, 46);
        ctx.fillText($('#stand_inp').val(), 420, 46);
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
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d');
    canvas.width = $('#banner_img').width();
    canvas.crossOrigin = 'Anonymous';
    canvas.height = $('#banner_img').height();
    ctx.drawImage($('#banner_img').get(0), 0, 0);
    if (canvas.width > canvas.height) {
        ctx.font = "13pt Verdana";
    } else {
        ctx.font = "18pt Verdana";
    }
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
