console.log("Git start");

const einlasszeiten = [
    [690, "Ihr Einlass: 11:00 - 11:30"],
    [720, "Ihr Einlass: 11:30 - 12:00"],
    [750, "Ihr Einlass: 12:00 - 12:30"],
    [780, "Ihr Einlass: 12:30 - 13:00"],
    [810, "Ihr Einlass: 13:00 - 13:30"],
    [840, "Ihr Einlass: 13:30 - 14:00"],
    [870, "Ihr Einlass: 14:00 - 14:30"],
    [900, "Ihr Einlass: 14:30 - 15:00"],
    [930, "Ihr Einlass: 15:00 - 15:30"],
    [960, "Ihr Einlass: 15:30 - 16:00"],
    [990, "Ihr Einlass: 16:00 - 16:30"],
    [1020, "Ihr Einlass: 16:30 - 17:00"],
    [1050, "Ihr Einlass: 17:00 - 17:30"],
    [1080, "Ihr Einlass: 17:30 - 18:00"]
]

const rundgaenge = [
    [690, "Schlossrundgang: 11:30 Uhr"],
    [700, "Schlossrundgang: 11:40 Uhr"],
    [710, "Schlossrundgang: 11:50 Uhr"],
    [720, "Schlossrundgang: 12:00 Uhr"],
    [730, "Schlossrundgang: 12:10 Uhr"],
    [740, "Schlossrundgang: 12:20 Uhr"],
    [750, "Schlossrundgang: 12:30 Uhr"],
    [760, "Schlossrundgang: 13:40 Uhr"],
    [770, "Schlossrundgang: 13:50 Uhr"],
    [780, "Schlossrundgang: 13:00 Uhr"],
    [790, "Schlossrundgang: 13:10 Uhr"],
    [800, "Schlossrundgang: 13:20 Uhr"],
    [810, "Schlossrundgang: 13:30 Uhr"],
    [820, "Schlossrundgang: 13:40 Uhr"],
    [830, "Schlossrundgang: 13:50 Uhr"],
    [840, "Schlossrundgang: 14:00 Uhr"],
    [850, "Schlossrundgang: 14:10 Uhr"],
    [860, "Schlossrundgang: 14:20 Uhr"],
    [870, "Schlossrundgang: 14:30 Uhr"],
    [880, "Schlossrundgang: 14:40 Uhr"],
    [890, "Schlossrundgang: 14:50 Uhr"],
    [900, "Schlossrundgang: 15:00 Uhr"],
    [910, "Schlossrundgang: 15:10 Uhr"],
    [920, "Schlossrundgang: 15:20 Uhr"],
    [930, "Schlossrundgang: 15:30 Uhr"],
    [940, "Schlossrundgang: 15:40 Uhr"],
    [950, "Schlossrundgang: 15:50 Uhr"],
    [960, "Schlossrundgang: 16:00 Uhr"],
    [970, "Schlossrundgang: 16:10 Uhr"],
    [980, "Schlossrundgang: 16:20 Uhr"],
    [990, "Schlossrundgang: 16:30 Uhr"],
    [1000, "Schlossrundgang: 16:40 Uhr"],
    [1010, "Schlossrundgang: 16:50 Uhr"],
    [1020, "Schlossrundgang: 17:00 Uhr"],
    [1030, "Schlossrundgang: 17:10 Uhr"],
    [1040, "Schlossrundgang: 17:20 Uhr"],
    [1050, "Schlossrundgang: 17:30 Uhr"],
    [1060, "Schlossrundgang: 17:40 Uhr"],
    [1070, "Schlossrundgang: 17:50 Uhr"],
    [1080, "Schlossrundgang: 18:00 Uhr"],
    [1090, "Schlossrundgang: 18:10 Uhr"],
    [1100, "Schlossrundgang: 18:20 Uhr"],
    [1110, "Schlossrundgang: 18:30 Uhr"],
    
]

function disableRundgaengeBeforeEntry(entryTime) {
    for (let i = 0; i < rundgaenge.length; i++) {
        if (rundgaenge[i][0] <= entryTime) {
            uncheckProd(rundgaenge[i][1]);
            disableProd(rundgaenge[i][1]);
        } else {
            enableProd(rundgaenge[i][1]);
        }
    }
}

function disableProd(disable) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if (checkboxName.indexOf(disable) >= 0) {
            //checkbox.prop("disabled", true)
            $(".customization2_attendee_further-data_product:contains(" + disable + ")").hide()
        }
    });
}

function enableProd(disable) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()
        if (checkboxName.indexOf(disable) >= 0) {
            //checkbox.prop("disabled", false)
            $(".customization2_attendee_further-data_product:contains(" + disable + ")").show()
        }
    });
}

function uncheckProd(shortName) {
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()

        if (checkbox.is(':checked')) {
            if (checkboxName.indexOf(shortName) >= 0) {
                checkbox.trigger('click');
                console.log(checkboxName + "clicked / unchecked");
            }
        }
    }
    )
};

function isChecked(shortName) {
    var bool = false;
    $('.customization2_attendee_further-data_product').each(function (i, element) {
        var checkbox = $(this).find('.customization2_attendee_further-data_product_checkbox')
        var checkboxName = $(this).find('.customization2_attendee_further-data_product_name').text().trim()


        if (checkbox.is(':checked')) {
            if (checkboxName.indexOf(shortName) >= 0) {
                bool = true;
            }
        }
    })
    return bool;
}

function getCheckedEntryTime() {
    var checked;
    for (let i = 0; i < einlasszeiten.length; i++) {
        if (isChecked(einlasszeiten[i][1])) {
            checked = einlasszeiten[i][0];
        }
    }
    return checked;
}

function handler() {
    // Conditional Products
    $("div:not(.edit-booking__tab) .question-group:nth-of-type(2)").hide();


    $(".question-group:first-of-type .customization2_attendee_further-data_product").on('change', function () {
        $(".question-group:nth-of-type(2)").show();
        var rundgaengeAb = getCheckedEntryTime();
        disableRundgaengeBeforeEntry(rundgaengeAb);
    });


    // Wprding Changes
    $(".customization2_attendee_count").each(function () {
        $(this).text($(this).text().replace("Teilnehmer", "Person"));
    });

    $(".customization2_attendees_title").text("Persönliche Daten");
    $(".customization2_attendee_further-data_headline").text("Ticketbuchung");

    $(".customization2_attendee_contact-data_copy-link").hide();

    $(".customization2_attendee_further-data_product_value").hide();

    
}

handler();

var insertionListener = function (event) {
    if (event.animationName === "nodeInserted") {
        console.log("Node has been inserted: ", event.target);
        handler();
    }
}

document.addEventListener("animationstart", insertionListener, false);
document.addEventListener("MSAnimationStart", insertionListener, false);
document.addEventListener("webkitAnimationStart", insertionListener, false);
