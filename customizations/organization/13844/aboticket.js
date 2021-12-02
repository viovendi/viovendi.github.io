console.log('github code loaded')
$('.event-category').each(function(){
  if(isAboticket($(this))){
    $(this).find("select").on('change', function() {
      console.log($(this).val());
    });
  }else{
  $(this).find("select").val(1);
  }
  
//  console.log("found category");
//  console.log($(this).find("h3").text());
});


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
