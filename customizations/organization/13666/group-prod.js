console.log($('.power_talk'))


$('vv-additional-question-product').each(function (index, value) {
    const prodName = $(this).find('label p').text();
    console.log(prodName)
});