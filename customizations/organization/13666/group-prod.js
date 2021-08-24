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

$('.power_talk h4').click(function(e){
    $('.power_talk').find('vv-additional-question-product').toggle("slide", { direction: "right" }, 1000);
})
$('.investment_forum h4').click(function(){
    $('.investment_forum').find('vv-additional-question-product').toggle("slide", { direction: "right" }, 1000);
})