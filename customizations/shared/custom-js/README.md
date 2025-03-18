# Custom JS
A collection of up-to-date helpers for common customizations.

# Usage
1. Load jQuery.
2. Install the custom-js-loader using `$.getScript("https://viovendi.github.io/customizations/shared/custom-js/loader.js");`.
3. This will install the helper `custom_js`.
4. Now it can be used to load and use different helpers from this directory.



# Overview
Here is an overview of all helpers currently defined here.



## Loader
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Installs `custom_js` to dynamically load other helpers.
* Usage:
  * Getter style: `custom_js.tool_name(arg1, arg2, ...)`
  * Function style: `custom_js(tool_name, arg1, arg2, ...)`
* Returns: the data returned by the helper

#### Examples
```js
// Getter style (preferred way)
await custom_js.findQuestion("What is your Job Title?", attendee);

// Function style
await custom_js("findQuestion", "What is your Job Title?", attendee);
```



## Match
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Matches a string against a search pattern (not regex).
* Name: `match`
* Args:
  * `search` - the search pattern which is a string; it can contain the `{...}`-Ellipsis to signal any content on that place
  * `text` - the text to test our pattern against
* Returns: `boolean` - whether the test was successfull or not

#### Further Explanation
The search can be inversed by adding `!` at the beginning.

#### Examples
```js
await custom_js.match("I am a {...} and I want to {...}", "I am a bird and I want to fly"); // true

await custom_js.match("Roses are {...}", "I like roses"); // false
```



## Find Question
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Find a question on the attendee page using `match`.
* Name: `findQuestion`
* Args:
  * `question` - the search pattern
  * `attendee` - optional argument, uses a special attendee element instead of the whole document to search for the question; **recommended!**
* Returns: `jQuery object` - the question(s) which was (were) searched

#### Further Explanation
Since different types of questions have to be searched in different ways, there are also different ways of passing the `question` parameter.
* Additional questions: Normal passing
* Product groups: Add a `$` before the search pattern
* Default questions: These questions do not support any kind of search, make the argument like `.` + `<name of the question>`

Product groups can't be fetched if the question form is closed.

#### Examples
```js
await custom_js.findQuestion("What is your Job Title?");
await custom_js.findQuestion("Event Registration on {...}", attendee);
await custom_js.findQuestion("$Hotelbuchung am {...}", attendee);
await custom_js.findQuestion(".salutation", attendee);
```



## Conditional Questions
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

The so often used conditional questions customization.
Automatically adds all the needed listeners and logic.
* Name: `conditional`
* Args:
  * `attendee` - The attendee element on which to perform the setup
  * `structure` - The structure of conditional questions, explanation below

#### Further Explanation
The `structure` argument is an **Object**. The keys are the questions which should unlock further questions.
The values are the corresponding answers, which unlock further questions.

The unlocked questions may have 4 different formats:
1. It is as well conditional and can unlock further questions: the **same format** as described above should be used
2. It opens only one further question, which is not conditional: a **String** should be used
3. It opens multiple questions, which are all not conditional: an **Array of Strings** should be used
4. It opens further questions, but only some of them are conditional: those not conditional questions should have `null` as their value, all other same as `1.`

#### Examples
```js
await custom_js.conditional(attendee1, {
  "Organisation": {
    "I ask for trip organisation": {                                       // format 1
      "How do you plan to arrive?": {
        "Flight": "Airport",                                               // format 2
        "Train": {
          "Train Station": null,                                           // format 4
          "I have a BahnCard": {
            "Yes, {...}": ["BahnCard number", "BahnCard expiration date"]  // format 3
          }
        }
      }
    }
  }
});
```



## CSS
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Add a CSS stylesheet to the document and wait until it loads.
* Name: `css`
* Args:
  * `css` - stylesheet as a string
* Returns: the `load` event

#### Examples
```js
await custom_js.css(".custom_js_error { color: red; }");
```



## Attendees
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Peforms event based functions on attendee elements.
This tool should be called on the booking page of the widget or in the booking portal.
The different functions are being called whenever an attendee element
changes its' state.
* Name: `attendees`
* Args:
  * `options` - **Object** with following possible parameters (different states in which an attendee element can be):
    * `open` - called when the attendee is editing his form
    * `close` - called when an attendee saves his data and the form closes, but still visible
    * `title` - called when the form is closed and collapsed
    * `remove` - called when the booker went back to ticket selection, removed a ticket and came back - one attendee should have disappeared from the booking page
    * The arguments passed to these functions are:
      * the attendee element as a **DOM element**
      * the internal and **unique ID** of the attendee element

#### Further Explanation
Whenever the state of an attendee element changes, the visuals
are being re-calculated on the client and some customizations such as
listeners for Conditional Questions or None Checkbox or any manually added
titles and descriptions will disappear. To prevent a difficult setup where
any change is tracked, it is recommended to use this tool instead, like shown
in the example below, which is a fail-safe solution.

#### Examples
```js
function startCustomization() {
  window.addEventListener("doo_page_loaded", async event => {
    if (event.detail.widget.page.name == "booking_registration_details") {
      await custom_js.attendees({
        "open": (attendee, id) => applyDesign(attendee),
        "close": (attendee, id) => removeDescription(attendee)
      });
    }
  });
}
```



## None Checkbox
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Puts a listener on a checkbox group which will enable and disable options if there is
a "no selection" option.
* Name: `noneCheckbox`
* Args:
  * `attendee` - The attendee element on which to perform the setup
  * `question` - The question to use
  * `none` - The "no selection" option

#### Examples
With this code:
```js
await custom_js.noneCheckbox(document, "Workshop{...}", "I am not {...}");
```
for this group:

<img height="120" alt="Checkbox group" src="https://github.com/viovendi/viovendi.github.io/assets/148325186/d9fdf492-2e2d-4c5d-a094-740b331041f1">

we receive the following result:

<img height="120" alt="Checkbox group some" src="https://github.com/viovendi/viovendi.github.io/assets/148325186/65bf5ed6-4391-43cc-a49d-8c270ebeaf38">
<img height="120" alt="Checkbox group none" src="https://github.com/viovendi/viovendi.github.io/assets/148325186/79b97f3e-7950-4c4c-9b0e-16de06d09c44">



## Question Handler
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Attach a handler to a question which is being called whenever the selection or input in that question is changed.
Currently supported question types are `dropdown`, `radio`, `checkboxes`, `text`, `phone` and `paragraph`.
It also supports product groups and default questions.
* Name: `questionHandler`
* Args:
  * `element` - a **jQuery object** of the question (retrieved from e.g. `findQuestion`)
  * `handler` - a function to call whenever a selection is being made

#### Examples
```js
const job = await custom_js.findQuestion("Jobtitle", attendee);
await custom_js.questionHandler(job, () => {
  console.log("'Jobtitle' input changed!");
});
```



## Answers Selector
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Sets a function for a question element which will fetch the answers.
Currently supported question types are `dropdown`, `radio`, `checkboxes`, `text`, `phone` and `paragraph`.
It also supports product groups and default questions.
* Name: `answersSelector`
* Args:
  * `element` - a jQuery element of the question
* Returns: a function, which when called returns an **Array of Strings** on the given question element
  * The array type is for compatibility with different internal tools which use this tool under the hood 
  * For `checkboxes` the array will have all the answers as array elements
  * For any other question type the array will always have one element; if no selection is made, that element will be an empty string `""`
  * To check if a selection has been made you can prove `answers.join("").length > 0`

#### Further Explanation
The return is a function, not the answer itself! To get the answers you have to first call the function.
This is optimal and reduces latency since the code checks for the question type only once.

All answers will be a one-element array if the question form is closed.

#### Examples
```js
const job = await custom_js.findQuestion("Jobtitle", attendee);
const selector = await custom_js.answersSelector(job);
await custom_js.questionHandler(job, () => {
  const answer = selector().join("");
  console.log("'Jobtitle' input changed to", answer);
});
```



## Sub Required
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Makes a question act as it would be required instead of optional.
If the question is hidden, it is ignored.
Useful in combination with `conditional`.
* Name: `subRequired`
* Args:
  * `attendee` - the attendee to perform this action on 
  * `text` - text to display when the selection has to be made 
  * `...required` - a list of question names to fetch with `findQuestion`

#### Examples
```js
await custom_js.conditional(attendee, {
  "Jobtitle": {
    "other": "What is your Jobtitle?"
  }
});
await custom_js.subRequired(attendee, "Fill out this field", "What is your Jobtitle?");
```
This snippet makes a conditional question setup for the "Jobtitle" question,
and if "other" is selected, the text field "What is your Jobtitle?" appears -
the question is made to bahave like other required questions:
* the gray info "(optional)" will be hidden
* red text will appear if nothing is entered
* the "Save" and "Book now" buttons will not work: When clicked and the question is empty, the question will
  be scrolled into view, just like any other required questions would do.
* etc.



## Booker
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Peforms event based functions on the booker element.
This tool should be called on the booking page of the widget or in the booking portal.
The different functions are being called whenever the booker element changes its' state.
* Name: `booker`
* Args:
  * `options` - **Object** with following possible parameters (different states in which an attendee element can be):
    * `open` - called when the booker is editing his form
    * `close` - called when an booker saves his data and the form closes, but still visible
    * `title` - called when the form is closed and collapsed
    * The single argument passed to these functions is:
      * the booker element as a **DOM element**

#### Further Explanation
Practically the same as the `attendees` customization, just for the booker.

#### Examples
```js
function startCustomization() {
  window.addEventListener("doo_page_loaded", async event => {
    if (event.detail.widget.page.name == "booking_registration_details") {
      await custom_js.booker({
        "open": booker => moveQuestions(booker),
        "close": booker => renameTitle(booker)
      });
    }
  });
}
```



## Info
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Get info about an event.
* Name: `info`
* Returns: Event ID, Organization ID and Language

#### Further Explanation
Returns data in a JSON with multiple formats:
* Short lowercase: `oid`, `eid` and `lang`
* Short uppercase: `OID` and `EID`
* Long: `organizerId`, `eventId`, `locale` and `language`

#### Examples
```js
const { oid, eid, lang } = await custom_js.info();
const { organizerId, eventId, locale } = await custom_js.info();
```



## Page
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Simplify the custom page loading event subscription which waits for the content to load.
* Name: `page`
* Args:
  * `callback` - A function which receives `customEvent.detail`

#### Further Explanation
Usually it is simple enough to subcribe to the `doo_page_loaded` event,
however during navigation, some of the pages are loaded asynchornously
and the event is fired before the HTML is ready. This helper solves this
problem and waits for the page to finish loading before executing the callback.

#### Examples
```js
custom_js.page(loaded => {
  const page = loaded.widget.page.name;
  if (page == "booking_ticket_selection") {
    // ...
  }
});

```



## Find Ticket
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Find a ticket using `match`.
* Name: `findTicket`
* Args:
  * `name` - the search pattern for the name of a ticket
* Returns: `jQuery object` - the ticket if found or else an empty object.

#### Examples
```js
await custom_js.findTicket("Anmeldung Aussteller");

await custom_js.findTicket("Übernachtung am {...}");
```



## Ticket Handler
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Attach a handler to a ticket which is being called whenever the user clicks the ticket selection.
* Name: `ticketHandler`
* Args:
  * `element` - a **jQuery object** of the ticket (retrieved from e.g. `findTicket`)
  * `handler` - a function to call whenever a selection is being made

#### Examples
```js
const ticket = await custom_js.findTicket("Anmeldung Teilnehmer");
await custom_js.ticketHandler(ticket, () => {
  console.log("'Ticket' clicked!");
});
```



## Ticket Selector
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Sets a function for a ticket element which will fetch the current ticket amount.
* Name: `ticketSelector`
* Args:
  * `ticket` - a **jQuery object** of the ticket
* Returns: a function, which when called returns an **Integer** of the ticket amount

#### Further Explanation
The return is a function, not the amount itself! To get the amount you have to first call the function.

#### Examples
```js
const ticket = await custom_js.findTicket("Anmeldung Teilnehmer");
const selector = await custom_js.ticketSelector(ticket);
await custom_js.ticketHandler(ticket, () => {
  console.log("Selected tickets:", selector());
});
```



## Enable Ticket
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Enables/disables the ticket selection.
* Name: `enableTicket`
* Args:
  * `ticket` - a **jQuery object** of the ticket
  * `enable` - a **Boolean**
    * `true` - enable the ticket selection
    * `false` - disable the ticket selection

#### Further Explanation
Enables/disables the dropdown button. If some tickets have already been selected, their amount doesn't change by calling this helper.

#### Examples
```js
const ticket = await custom_js.findTicket("Anmeldung Teilnehmer");
if (/* some condition */) {
  await custom_js.enableTicket(ticket, false);
}
```



## Set Ticket
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Sets the ticket selection to a given value.
* Name: `setTicket`
* Args:
  * `ticket` - a **jQuery object** of the ticket
  * `value` - an **Integer** specifying the amount of tickets

#### Further Explanation
Select an amount for the given ticket. If that amount is not allowed (not present in the dropdown), the selection is not changed.

#### Examples
```js
const ticket = await custom_js.findTicket("Anmeldung Teilnehmer");
await custom_js.setTicket(ticket, 1);
```



## Wait For Create
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Wait until an element appears.
* Name: `waitForCreate`
* Args:
  * `selector` - a function, which returns a **jQuery object** of the searched element
  * `parent` - an optional **jQuery object** of the parent of the searched element for efficiency, can be `null`
* Returns: a **jQuery object** of the searched element

#### Further Explanation
Wait until an element appears in DOM using a MutationObserver. The appearing of the element doesn't mean it is visible, rather it means, that the element has been created in the HTML.

#### Examples
```js
const ticket = await custom_js.waitForCreate(async () => await custom_js.findTicket("Anmeldung Teilnehmer"));
```



## Wait For Delete
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Wait until an element disappears.
* Name: `waitForDelete`
* Args:
  * `selector` - a function, which returns a **jQuery object** of the searched element
  * `parent` - an optional **jQuery object** of the parent of the searched element for efficiency, can be `null`

#### Further Explanation
Wait until an element disappears in DOM using a MutationObserver. The disappearing of the element doesn't mean it is hidden, rather it means, that the element has been deleted from the HTML.

#### Examples
```js
await custom_js.waitForDelete(async () => await custom_js.findTicket("Ticket Begleitperson"));
```



---
# Contribution
When adding a new helper, remember following these steps:
1. Create the file in this directory
2. The entrance function should be called `run`:

```js
// something.js
async function run(a, b) {
  // perform job or call some other functions
  // keep all sub-functions or variables needed for one run
  // inside this `run()` function
}
// keep all shared variables outside
// and name them `custom_js_<helper>_<variable>` to reduce the chance of name collisions
```
3. All functions and variables needed for one run are **to be kept inside the `run()` function**
4. Add a new entry in this README:

```md
## {title}
> by {link to your profile for easier communication}

{description}
* Name: `{name of the file wihtout ".js"}`
* Args:
  * `{argument name}` - {explanation}
  * {...}
* Returns: {some value and explanation of the return type, can leave out if nothing is returned}

#### Further Explanation
{optional explanation}

#### Examples
{some examples}

{4 new lines}
```

---
# TODO
* Answer setters - set a given answer for a question
