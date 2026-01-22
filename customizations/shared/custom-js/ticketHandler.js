function run(ticket, handler) {
    ticket.find(".event-category__ticket-count").click(() => {
        ticket.find("p-overlay p-selectitem").click(e => {
            handler(parseInt($(e.target).text()) ?? 0);
        });
    });
}
