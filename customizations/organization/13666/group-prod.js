console.log($('.power_talk'))


$('vv-additional-question-product').each(function (index, value) {
    const prodName = $(this).find('label p').text().trim();
    if(prodName.includes('Power Talk')) {
        $(this).hide()
$('.power_talk').append($(this))
    }

    if(prodName.includes('Investment Forum')) {
        $(this).hide()
        $('.investment_forum').append($(this))
            }
});
