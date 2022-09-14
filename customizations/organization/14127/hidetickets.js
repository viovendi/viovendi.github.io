console.log("hide tickets");
$('.event-category').each(function() {
    console.log('i');
    console.log($( this ).find('.event-category__name')[0].text())
  });