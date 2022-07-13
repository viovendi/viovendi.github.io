console.log("Git Start");

function hideCat(catName) {
    console.log("Hide" + catName);
    $('.customization-booking-area-wrapper .event-categories li:visible').each(function () {
        var currentCat = $(this).find('.event-category__name').text().replace(/^\s+|\s+$/g, "");
        if (currentCat === catName && !$(this).closest('li').hasClass('hidden')) {
            $(this).closest('li').addClass('hidden');
        }
    });
}

function showCat(catName) {
    console.log("Hide" + catName);
    $('.customization-booking-area-wrapper .event-categories li').each(function () {
        var currentCat = $(this).find('.event-category__name').text().replace(/^\s+|\s+$/g, "");
        if (currentCat === catName && $(this).closest('li').hasClass('hidden')) {
            $(this).closest('li').removeClass('hidden');
        }
    });
}

function handler() {
    var id = null;
    function stop_checking() {
        cancelAnimationFrame(id);
    }

    function checking() {
        id = requestAnimationFrame(checking);
        if ($('.event-categories').length > 0) {
            /*
              calling a functions 
            */
            hideCat('Warteliste');
            checkCat();

            //stop_checking();
        }
    }
    checking();

    /*
    hideCat('Warteliste');
    checkCat();
    */

    function checkCat() {
        var catArr = [];
        var i = 0;

        $('.customization-booking-area-wrapper .event-categories li:visible').each(function () {

            var catName = $(this).find('.event-category__name').text().replace(/^\s+|\s+$/g, ""),
                openBooked = $(this).find('.event-category__amount--sold').length;

            if (catName != '') {
                var catObj = {};
                catObj.name = catName;
                catObj.booked = openBooked;

                catArr[i] = catObj;
                i++;
            }

        });

        var bookItem = 0;
        for (var j = 0; j < catArr.length; j++) {
            bookItem = bookItem + catArr[j].booked;
        }

        if (bookItem == catArr.length) {
            showCat('Warteliste');
        }

    }

}
handler();
//Insert here, what should run once
//
var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        handler();
    }
}
document.addEventListener("animationstart", insertionListener, false); // standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 








