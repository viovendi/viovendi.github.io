console.log('github code loaded customization 13844/aboticket.js');
if(checkURL("92849")){
    	setTimeout(() => {
    	hideOverDueTickets();
       //  hideNumberedAboTickets();
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
            var d = new Date(dateParts[2], dateParts[1], dateParts[0]);
            
            if(d<new Date()){
                $(this).css('display', 'none');
                console.log(d.toString()+' ist schon vorbei');
            }
            else console.log(d.toString()+' ist noch nicht vorbei');
        }
    });
}

function addListenerToNumberTickets() {
    $('.event-category').each(function () {
        if (isAboticketNumbered($(this))) {
            $(this).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {  
                console.log('change detected on AboNumberTicket');
            });
        }
    });
}

function addListenerToAboTicket() {
    $('.event-category').each(function () {
        if (isAboticket($(this))) {
            setNumberedAboTickets($(this).find("select").val());
            $(this).on("DOMSubtreeModified", ".vv-selection-input__value.m-ellipsis", function () {
                setNumberedAboTickets($(this).text().trim());
            });
        }
    });
}	

function setNumberedAboTickets(amount) {

    console.log(amount);

    const updateTicket = async ticket=>{
        
        await  $(ticket).find(".vv-selection-input__control").click();
	console.log($(ticket).find(".vv-single-select-option"));
	    
	await  $(ticket).find(".vv-single-select-option").each(el => {
            //console.log(el.text());
	    console.log(el);
	});
     //   await  $(this).find(".vv-single-select-option").find(el => 
     //       el.textContent.trim()==amount).click();
  	
        return
    }	
    const run = async (tickets) =>{
     await tickets.get().reduce(async (memo, ticket) => {
		    await memo;
            if (isAboticketNumbered($(ticket))) 
		    await updateTicket(ticket);
	    }, undefined); 
    }	

    run($('.event-category'));
    
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
