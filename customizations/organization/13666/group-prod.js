console.log($('.power_talk'))


$('vv-additional-question-product').each(function (index, value) {
    const prodName = $(this).find('label p').text().trim();
    if(prodName.includes('vor Ort')) {
$('.power_talk_vor_ort').append($(this))
    }

    if(prodName.includes('online')) {
        $('.power_talk_online').append($(this))
            }
});
