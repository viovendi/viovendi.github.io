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
 return  $(categoryElement).find("h3").text()=='Abo-Ticket';
}
