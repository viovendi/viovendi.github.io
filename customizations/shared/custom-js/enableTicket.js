function run(ticket, enable) {
    const dd = ticket.find("p-dropdown");
    if (enable) {
        dd.removeClass("p-disabled");
        dd.attr("disabled", null);
    } else {
        dd.addClass("p-disabled");
        dd.attr("disabled", true);
    }
}