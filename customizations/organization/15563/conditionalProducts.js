console.log("Git start");

const einlasszeiten = [
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
    [750, "Rundgang Villa Hammerschmidt: 12:30 Uhr"],
    [765, "Rundgang Villa Hammerschmidt: 12:45 Uhr"],
    [780, "Rundgang Villa Hammerschmidt: 13:00 Uhr"],
    [795, "Rundgang Villa Hammerschmidt: 13:15 Uhr"],
    [810, "Rundgang Villa Hammerschmidt: 13:30 Uhr"],
    [825, "Rundgang Villa Hammerschmidt: 13:45 Uhr"],
    [840, "Rundgang Villa Hammerschmidt: 14:00 Uhr *ENGLISCH*"],
    [855, "Rundgang Villa Hammerschmidt: 14:15 Uhr"],
    [870, "Rundgang Villa Hammerschmidt: 14:30 Uhr"],
    [885, "Rundgang Villa Hammerschmidt: 14:45 Uhr"],
    [900, "Rundgang Villa Hammerschmidt: 15:00 Uhr"],
    [915, "Rundgang Villa Hammerschmidt: 15:15 Uhr"],
    [930, "Rundgang Villa Hammerschmidt: 15:30 Uhr"],
    [945, "Rundgang Villa Hammerschmidt: 15:45 Uhr"],
    [960, "Rundgang Villa Hammerschmidt: 16:00 Uhr *ENGLISCH*"],
    [975, "Rundgang Villa Hammerschmidt: 16:15 Uhr"],
    [990, "Rundgang Villa Hammerschmidt: 16:30 Uhr"],
    [1005, "Rundgang Villa Hammerschmidt: 16:45 Uhr"],
    [1020, "Rundgang Villa Hammerschmidt: 17:00 Uhr"],
    [1035, "Rundgang Villa Hammerschmidt: 17:15 Uhr"],
    [1050, "Rundgang Villa Hammerschmidt: 17:30 Uhr"],
    [1065, "Rundgang Villa Hammerschmidt: 17:45 Uhr"],
    [1080, "Rundgang Villa Hammerschmidt: 18:00 Uhr"],
    [760, "Rundgang historische Gebäude BMZ: 12:40 Uhr"],
    [780, "Rundgang historische Gebäude BMZ: 13:00 Uhr *ENGLISCH*"],
    [800, "Rundgang historische Gebäude BMZ: 13:20 Uhr"],
    [820, "Rundgang historische Gebäude BMZ: 13:40 Uhr"],
    [840, "Rundgang historische Gebäude BMZ: 14:00 Uhr"],
    [860, "Rundgang historische Gebäude BMZ: 14:20 Uhr"],
    [880, "Rundgang historische Gebäude BMZ: 14:40 Uhr"],
    [900, "Rundgang historische Gebäude BMZ: 15:00 Uhr *AUDIODESKRIPTION*"],
    [920, "Rundgang historische Gebäude BMZ: 15:20 Uhr"],
    [940, "Rundgang historische Gebäude BMZ: 15:40 Uhr"],
    [960, "Rundgang historische Gebäude BMZ: 16:00 Uhr"],
    [980, "Rundgang historische Gebäude BMZ: 16:20 Uhr"],
    [1000, "Rundgang historische Gebäude BMZ: 16:40 Uhr"],
    [1020, "Rundgang historische Gebäude BMZ: 17:00 Uhr *ENGLISCH*"],
    [1040, "Rundgang historische Gebäude BMZ: 17:20 Uhr"],
    [1060, "Rundgang historische Gebäude BMZ: 17:40 Uhr"],
    [1080, "Rundgang historische Gebäude BMZ: 18:00 Uhr"],
    [760, "Rundgang Kanzlerbungalow: 12:40 Uhr"],
    [780, "Rundgang Kanzlerbungalow: 13:00 Uhr *ENGLISCH*"],
    [800, "Rundgang Kanzlerbungalow: 13:20 Uhr"],
    [820, "Rundgang Kanzlerbungalow: 13:40 Uhr"],
    [840, "Rundgang Kanzlerbungalow: 14:00 Uhr"],
    [860, "Rundgang Kanzlerbungalow: 14:20 Uhr"],
    [880, "Rundgang Kanzlerbungalow: 14:40 Uhr"],
    [900, "Rundgang Kanzlerbungalow: 15:00 Uhr *AUDIODESKRIPTION*"],
    [920, "Rundgang Kanzlerbungalow: 15:20 Uhr"],
    [940, "Rundgang Kanzlerbungalow: 15:40 Uhr"],
    [960, "Rundgang Kanzlerbungalow: 16:00 Uhr"],
    [980, "Rundgang Kanzlerbungalow: 16:20 Uhr"],
    [1000, "Rundgang Kanzlerbungalow: 16:40 Uhr"],
    [1020, "Rundgang Kanzlerbungalow: 17:00 Uhr *ENGLISCH*"],
    [1040, "Rundgang Kanzlerbungalow: 17:20 Uhr"],
    [1060, "Rundgang Kanzlerbungalow: 17:40 Uhr"],
    [1080, "Rundgang Kanzlerbungalow: 18:00 Uhr"]
]

function disableRundgaengeBeforeEntry(entryTime) {
    for (let i = 0; i < rundgaenge.length; i++) {
        if (rundgaenge[i][0] < entryTime + 30) {
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
    $(".question-group:nth-of-type(2)").hide();
    $(".question-group:nth-of-type(3)").hide();
    $(".question-group:nth-of-type(4)").hide();

    $(".question-group:first-of-type .customization2_attendee_further-data_product").on('change', function () {
        $(".question-group:nth-of-type(2)").show();
        $(".question-group:nth-of-type(3)").show();
        $(".question-group:nth-of-type(4)").show();
        var rundgaengeAb = getCheckedEntryTime();
        disableRundgaengeBeforeEntry(rundgaengeAb);
    });

    
    // Wprding Changes
    $(".customization2_attendee_count").each(function () {
        $(this).text($(this).text().replace("Teilnehmer", "Person"));
    });

    $(".customization2_attendees_title").text("Persönliche Daten");
    $(".customization2_attendee_further-data_headline").text("Ticketbuchung");
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

