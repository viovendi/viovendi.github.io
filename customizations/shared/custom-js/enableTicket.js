function run(ticket, enable) {
    const dd = ticket.find(".event-category__ticket-count p-select");
    if (enable) {
        dd.removeClass("p-disabled");
        dd.attr("disabled", null);
    } else {
        dd.addClass("p-disabled");
        dd.attr("disabled", true);
    }
}
