console.log('github code loaded')
$('.event-category').each(function(){
  console.log("found category");
  console.log($(this).find("h3").text());
});
