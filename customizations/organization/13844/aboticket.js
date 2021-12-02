console.log('github code loaded')
$('.event-category').each(function(){
  if(isAboticket($(this))){
    $(this).find("select").on('change', function() {
      setNumberedTickets($(this).val());
    });
  }
  
//  console.log("found category");
//  console.log($(this).find("h3").text());
});

function setNumberedTickets(amount){
  $('.event-category').each(function(){
  if(isAboticketNumbered($(this))){
  $(this).find("select").val(amount);
  }
});
  
}

function isAboticket(categoryElement){
  var ticketname= getTicketName(categoryElement);
 return  ticketname=='Abo-Ticket';
}
function isAboticketNumbered(categoryElement){
  var ticketname= getTicketName(categoryElement);
 return  ticketname!='Abo-Ticket'&&ticketname.startsWith('Abo-Ticket:');
}
function getTicketName(categoryElement){
  var ticketname= $(categoryElement).find("h3").text();
    ticketname = ticketname.replace(/(\r\n|\n|\r)/gm, "");
    ticketname=ticketname.replace(/\s/g,'');
 return  ticketname;
}
