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
    if($('.power_talk').find('vv-additional-question-product:visible').length){
        $('.power_talk').find('vv-additional-question-product').hide();
    }else{
        $('.power_talk').find('vv-additional-question-product').show();
    }

})
$('.investment_forum h4').click(function(){
    if($('.investment_forum').find('vv-additional-question-product:visible').length){
        $('.investment_forum').find('vv-additional-question-product').hide();
    } else {
        $('.investment_forum').find('vv-additional-question-product').show();
    }

})


var field1 = $$('.customization2_attendee_further-data_custom-question').findField('Ankunft Datum (optional)');
$(field1).hide();