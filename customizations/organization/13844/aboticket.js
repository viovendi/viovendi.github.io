console.log('github code loaded')
$('.event-category').each(function(){
  if(isAboticket($(this))){
   // $(this).find("select")
  }else{
  $(this).find("select").val(1);
  }
  
//  console.log("found category");
//  console.log($(this).find("h3").text());
});


function(categoryElement) isAboticket{
 return  $(categoryElement).find("h3").text()=='Abo-Ticket';
}
