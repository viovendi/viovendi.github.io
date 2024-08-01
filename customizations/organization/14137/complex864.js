console.log("COMPLEX-864")
console.log('GTM file connected');

/* disable

const requiredInputs = (id) => {
  const errorMessage = `<vv-show-errors _nghost-sqr-c37=""><div _ngcontent-sqr-c37="" class="error-relative">
<div _ngcontent-sqr-c37="">
  <div _ngcontent-sqr-c37="" style="font-size: .75rem;" class="error-text customization2_attendee_contact-data_company_error error-text--left no-wrap">Erforderlich</div><!---->
</div>
</div>
</vv-show-errors>`

  if (!$(`.customization2_attendee_further-data_custom-question-${id}`).find('input').val().trim().length) {
    $(`.customization2_attendee_further-data_custom-question-${id}`).find('vv-input').addClass('ng-invalid ng-dirty');

    $(`.customization2_attendee_further-data_custom-question-${id}`).find('vv-input').after(errorMessage)
    $('.customization2_attendee_edit-action').find('button').attr('disabled', true);
    $('.customization2_attendee_edit-action').find('.error-text ').detach();
    $('.customization2_attendee_edit-action').find('button').after('<span class="button-error-message error-text error-text--multiple">Bitte füllen Sie alle Felder aus.</span>');

  }else {
    $( `.customization2_attendee_further-data_custom-question-${id}`).find('vv-input').removeClass('ng-invalid ng-dirty');
    $(`.customization2_attendee_further-data_custom-question-${id}`).find('vv-show-errors').detach()
    $('.customization2_attendee_edit-action').find('button').attr('disabled', false);
  }
}
// Hide questions
$('.customization2_attendee_further-data_custom-question-2').hide();
$('.customization2_attendee_further-data_custom-question-2').find('span').detach();
$('.customization2_attendee_further-data_custom-question-4').hide();
$('.customization2_attendee_further-data_custom-question-4').find('span').detach();
$('.customization2_attendee_further-data_custom-question-5').hide();
$('.customization2_attendee_further-data_custom-question-5').find('span').detach();
$('.customization2_attendee_further-data_custom-question-6').hide();
$('.customization2_attendee_further-data_custom-question-6').find('span').detach();

var radioGroupYesNo = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Betreiben Sie einen eBay Shop');

// show question if 'Ja' is clicked
var inputs = $(radioGroupYesNo).find('input');
const error = `<vv-show-errors _nghost-sqr-c37=""><div _ngcontent-sqr-c37="" class="error-relative">
<div _ngcontent-sqr-c37="">
  <div _ngcontent-sqr-c37="" style="font-size: .75rem;" class="error-text customization2_attendee_contact-data_company_error error-text--left no-wrap">Erforderlich</div><!---->
</div>
</div>
</vv-show-errors>`
console.log('inputs');
console.log(inputs);
inputs.each(function (i, element) {
  $(element).change(function (input) {
    //on change show these 2 questions
    const option = $(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().trim();
    if (option.includes('Ja')) {
      $(`.customization2_attendee_further-data_custom-question`).find('input').on("keyup change", function(e) {
        $('.customization2_attendee_edit-action_save').attr('disabled', false);
        $('.error-text').detach();
      })
      $('.customization2_attendee_further-data_custom-question-2').show();
      $('.customization2_attendee_edit-action_save').on('click', () => {
        requiredInputs(2);
      });
    } else {
      console.log('hide!');
      $('.customization2_attendee_further-data_custom-question-2').hide();
    }
  });
});

//show 3 questions if product is checked, else hide
function productChecked(products) {
  $(products).each(function (i, element) {
    var product = $$('.customization2_attendee_further-data_product').findField(element);
    var input = $(product).find('input');
    input.change(function () {
      if (input.is(':checked')) {
        $('.customization2_attendee_further-data_custom-question-4').show();
        $('.customization2_attendee_further-data_custom-question-5').show();
        $('.customization2_attendee_further-data_custom-question-6').show();
        $(`.customization2_attendee_further-data_custom-question`).find('input').on("keyup change", function(e) {
          $('.customization2_attendee_edit-action_save').attr('disabled', false);
          $('.error-text').detach();
        })
        $('.customization2_attendee_edit-action_save').on('click', () => {
          requiredInputs(4);
          requiredInputs(5);
          requiredInputs(6);
        })

      }
      if (!input.is(':checked')) {
        $('.customization2_attendee_further-data_custom-question-4').hide();
        $('.customization2_attendee_further-data_custom-question-5').hide();
        $('.customization2_attendee_further-data_custom-question-6').hide();
      }
    });
  });
}

var workshopblockValue = ["Goodie-Paket"];
productChecked(workshopblockValue);


$('.customization2_attendee_edit-action_save').on('click', (e) => {
  console.log('click')
})
*/
