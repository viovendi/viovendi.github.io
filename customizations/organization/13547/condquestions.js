console.log("git");


//funktion to hide question
function hideQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label, p");

    if (label.text().trim().includes(name)) {
      $(item).hide();
    }
  });
}

function showQuestion(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label, p");
    if (label.text().trim().includes(name)) {
      $(item).show();
    }
  });
}

function hideQuestionExactWording(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label, p");

    if (label.text().trim().includes(name)) {
      $(item).hide();
    }
  });
}

function showQuestionExactWording(tag, name) {
  $(tag).each(function (i, element) {
    var item = $(this);
    var label = item.find("label, p");

    if (label.text().trim().includes(name)) {
      $(item).show();
    }
  });
}

function hideAll() {
  //First hide all questions:
  hideQuestion(".customization2_attendee_further-data_custom-question", "Organisation - Vertretung");
  hideQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer - Vertretung");
  hideQuestion(".customization2_attendee_further-data_custom-question", "Upload der unterschriebenen Vollmacht - Vertretung");
  hideQuestion(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer");
  hideQuestion(".customization2_attendee_further-data_custom-question", "Upload der unterschriebenen Vollmacht - Vertretung");

  //@Oleg: next question does not hide... I dont know why
  hideQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder?");

  hideQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie");
  $('.vv-mt-md').hide(); // grey text  "erlaubte Formate: PNG, JPG, PDF"
}


 function selectionChanged(selector) {
  // return new Promise(function (resolve, reject) {
    try {
      const element = document.querySelector(`.${selector}`);
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          const state = mutation.target.textContent;

          if (state.includes("1")) {
            console.log('1');
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

            $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();


          } else if (state.includes("2")) {
            console.log('2');
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

            $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();

          } else if (state.includes("3")) {
            console.log('3');
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

            $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();

          } else if (state.includes("4")) {
            console.log('4');
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

            $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();
          } else if (state.includes("5")) {
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
            showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

            $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').show();
            $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').show();
          } else if (state.includes("Bitte")) {
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
            hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

            $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
            $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();
          }
        });
      });

      observer.observe(element, {
        characterData: true,
        subtree: true,
        childList: true
      });
    } catch (error) {
      // reject(new Error(error));
    }
  // });
}



async function handler() {
  selectionChanged('customization2_attendee_further-data_custom-question_dropdown');
}



var insertionListener = function (event) {
  if (event.animationName === "nodeInserted") {
    console.log("noteInserted");

    var radioGroupGastorMitglied = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Sind Sie ein Gast oder ein stimmberechtigtes Mitglied?');

    hideAll();
    handler();
    
    if ($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().trim().includes('Stimmberechtigtes Mitglied')) {
          $('.customization2_attendee_further-data_custom-question-2').show();
          console.log('Stimmberechtigtes Mitglied');
          showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder?");
        } else if ($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().trim().includes('Gast')){
          //hideAll();
          showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder?");
          console.log('Gast');
        }


    // show 2 questions if 'Gast' or 'Stimmberechtigtes Mitglied' is clicked
    var inputs = $(radioGroupGastorMitglied).find('input');
    inputs.each(function (i, element) {
      $(element).change(function (input) {
        console.log("changed");
        //on change show these 2 questions
        if ($(input.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().trim().includes('Stimmberechtigtes Mitglied')) {
          $('.customization2_attendee_further-data_custom-question-2').show();
          console.log('show');
          showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder?");
        } else {
          //hideAll();
          showQuestion(".customization2_attendee_further-data_custom-question", "Kommen Sie zusätzlich als Vertreter für andere Mitglieder?");
          console.log('hide');
        }
      });
    });

    //Oleg: now this question should be shown, it works fine with the 'Mitgliedsnummer' but not with the other question

    //showQuestionExactWording(".customization2_attendee_further-data_custom-question", "Mitgliedsnummer (optional)");

    // show question 'Wie viele Mitglieder vertreten Sie?' if 'Ja' is selected; Hide everything if 'Nein' is selected
    var radioGroupVertreter = $$('.customization2_attendee_further-data_custom-question').findRadioGroup('Kommen Sie zusätzlich als Vertreter für andere Mitglieder?');
    var inputsVertreter = $(radioGroupVertreter).find('input');
    inputsVertreter.each(function (i, element) {
      $(element).change(function (input2) {
        if ($(input2.currentTarget).siblings('.customization2_attendee_further-data_custom-question_radio-line_label').text().trim().includes('Nein')) {
          //hide everything
          hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
          hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
          hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
          hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
          hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");
          hideQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie?");


          $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').hide();
          $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').hide();
          $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').hide();
          $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
          $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();
        } else {
          console.log('Ja');
          showQuestion(".customization2_attendee_further-data_custom-question", "Wie viele Mitglieder vertreten Sie?");

          // show 1-5 question depending on the selected number:
          var question = $$('.customization2_attendee_further-data_custom-question').findField('Wie viele Mitglieder vertreten Sie?');

          var dropDownQuestion = $(question).find('.customization2_attendee_further-data_custom-question_dropdown')

          $(dropDownQuestion[0]).change(function () {
            console.log("change")
            var state = dropDownQuestion.val().trim()
            console.log(state)
            if (state.includes("1")) {
              console.log('1');
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

              $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();


            } else if (state.includes("2")) {
              console.log('2');
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

              $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();

            } else if (state.includes("3")) {
              console.log('3');
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

              $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();

            } else if (state.includes("4")) {
              console.log('4');
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

              $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();
            } else if (state.includes("5")) {
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
              showQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

              $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').show();
              $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').show();
            } else if (state.includes("Bitte")) {
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 1");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 2");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 3");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 4");
              hideQuestion(".customization2_attendee_further-data_custom-question", "Vertretung 5");

              $('.customization2_attendee_further-data_custom-question-7').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-10').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-13').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-16').parent().find('.vv-mt-md').hide();
              $('.customization2_attendee_further-data_custom-question-19').parent().find('.vv-mt-md').hide();
            }

          })
        }
      });
    });
  }

}


handler()

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); //
