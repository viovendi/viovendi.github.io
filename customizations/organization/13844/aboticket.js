console.log('github code loaded')
$('.event-category').each(function(){
  
  $(this).find(".event-category__name customization-category-name").each(function() {
   console.log($(this).text());
  });
  
});
