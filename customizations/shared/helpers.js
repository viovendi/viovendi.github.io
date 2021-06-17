/*
"name": "Google Tag Manager JS Helpers",
"version": "1.0.0",
"author": "Stetsko Oleg",
*/

/*
How to Connect

As an external script in GTM
<script src="https://viovendi.github.io/customizations/shared/helpers.js"></script>
*/

function myHelpers(elements) {
  /*
   label - is the name of the field you want to get the (string: 'Branche (optional)' )
    for example  var field = $$('.customization2_attendee_further-data_custom-question').findField('Branche (optional)');

    Note: you are not required to use the entire field name only part of it
  */
  this.findField = function (lable) {
    this.lable = lable;
    this.field = null;

    elements.forEach((field) => {
      if (field.querySelectorAll('label p')[0].innerText.trim().includes(this.lable)) {
        this.field = field;
      }
    });
    return this.field;
  }
  this.findRadioGroup = function (lable) {
    this.lable = lable;
    this.field = null;

    elements.forEach((field) => {
      console.log(field.querySelectorAll('.vv-radio-group p')[0].innerText)
     /*if (field.querySelectorAll('.vv-radio-group p')[0].trim().includes(this.lable)) {
        this.field = field;
      }*/
    });
    return this.field;
  }
  return this
}

/*
 selector - is the CSS class of the parent input field that you want to change
 for example $$('.customization2_attendee_further-data_custom-question')
*/
function $$(selector) {
  const elements = document.querySelectorAll(selector);
  return new myHelpers(elements);
}