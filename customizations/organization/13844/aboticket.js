console.log('github code loaded customization 13844/aboticket.js');

//hideNumberedAboTickets();
addListenerToAboTicket();
addListenerToNumberTickets();


function addListenerToNumberTickets() {
    $('.event-category').each(function () {
        if (isAboticketNumbered($(this))) {
           $(this).find("select").on('change', function () {
                console.log('change detected on AboNumberTicket');
            });
        }
    });
}

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
           $(this).find("select option[value="+amount+"]").prop('selected',true).change();
           $(this).find("select").change();
            // $('.event-category__ticket-count').focus();
            // $('.event-category__ticket-count').trigger('focusout');
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
