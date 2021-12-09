console.log('github code loaded customization 13844/aboticket.js');
if(checkURL("92849")){
    setTimeout(() => {
         hideOverDueTickets();
         hideNumberedAboTickets();
         addListenerToAboTicket();
         addListenerToNumberTickets();
                     }, 200);
    
}

function checkURL(word){
    var path = window.location.pathname;
    return path.includes(word);
}
function hideOverDueTickets(){
    $('.event-category').each(function () {
        var description = $(this).find(".customization-category-description").text();
        if(description.length>0){
            var dateParts = description.split('.');
            var d = new Date(dateParts[2]-1, dateParts[1]-1, dateParts[0]-1);
            console.log(d.toString());
            if(d<new Date())$(this).css('display', 'none');
            else console.log('valides Datum');
        }
    });
    
}
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
           $(this).find("select").val(amount);
            $(this).find("select").get(0).dispatchEvent(new Event('change'))
          /*  $(this).find("select option[value="+amount+"]").click();
           $(this).find("select").change();
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            addCode($(this).find("select").get(0));
            addCode($(this).find("select option[value="+amount+"]").get(0));

           */
            // $('.event-category__ticket-count').focus();
            // $('.event-category__ticket-count').trigger('focusout');
        }
    });
}
function addCode(input) {
  let event;
    if(typeof(Event) === 'function') {
      event = new Event('input'); // for Chrome
    }else{
      event = document.createEvent('Event');
      event.initEvent('input', true, true); // for IE
    }
    input.dispatchEvent(event)
    return input.value;
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
