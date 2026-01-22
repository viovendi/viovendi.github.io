function run(ticket, handler) {
    ticket.find(".event-category__ticket-count").click(() => {
        ticket.find("p-overlay p-selectitem").click(e => {
            handler(parseInt($(target).text()) ?? 0);
        });
    });
}
