console.log('github code loaded customization 13844/aboticket.js');

//hideNumberedAboTickets();
addListenerToAboTicket();


function addListenerToAboTicket() {
    $('.event-category').each(function () {
        if (isAboticket($(this))) {
            setNumberedAboTickets($(this).find("select").val());
            $(this).find("select").on('change', function () {
                setNumberedAboTickets($(this).val());
            });
        }
    });
}
function setNumberedAboTickets(amount) {
    console.log(amount)
    $('.event-category').each(function () {
        if (isAboticketNumbered($(this))) {
            $(this).find("select").val(amount).change();
        }
    });
}
function hideNumberedAboTickets() {
    $('.event-category').each(function () {
        if (isAboticketNumbered($(this))) {
            $(this).css('display', 'none');
        }
    });
}
function isAboticket(categoryElement) {
    var ticketname = getTicketName(categoryElement);
    return ticketname == 'Abo-Ticket';
}
function isAboticketNumbered(categoryElement) {
    var ticketname = getTicketName(categoryElement);
    return ticketname != 'Abo-Ticket' && ticketname.startsWith('Abo-Ticket:');
}
function getTicketName(categoryElement) {
    var ticketname = $(categoryElement).find("h3").text();
    ticketname = ticketname.replace(/(\r\n|\n|\r)/gm, "");
    ticketname = ticketname.replace(/\s/g, '');
    return ticketname;
}
