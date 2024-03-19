# Custom JS
A collection of up-to-date helpers for common customizations.

# Usage
1. Load jQuery.
2. Install the custom-js-loader using `$.getScript("https://viovendi.github.io/customizations/shared/custom-js/loader.js");`.
3. This will install the function `async custom_js(name, ...args)`.
4. Now it can be used to load and use different helpers from this directory.


# Overview
Here is an overview of all helpers currently defined here.



## Loader
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Installs the `custom_js` function to dynamically load other helpers.
* Args:
  * `name` - name of the helper
  * `...args` - comma separated arguments to pass to the helper
* Returns: the data returned by the helper

#### Examples
```js
await custom_js("findQuestion", "What is your Job Title?", true);
```



## Match
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Matches a string against a search pattern (not regex).
* Name: `match`
* Args:
  * `search` - the search pattern which is a string; it can contain the `{...}`-Ellipsis to signal any content on that place
  * `text` - the text to test our pattern against
* Returns: `boolean` - whether the test was successfull or not

#### Examples
```js
await custom_js("match", "I am a {...} and I want to {...}", "I am a bird and I want to fly"); // true

await custom_js("match", "Roses are {...}", "I like roses"); // false
```



## Find Question
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Find a question on the attendee page using `match`.
* Name: `findQuestion`
* Args:
  * `question` - the search pattern
  * `attendee` - optional argument, uses a special attendee element instead of the whole document to search for the question; recommended!
* Returns: the question which was searched

#### Examples
```js
await custom_js("findQuestion", "What is your Job Title?");

await custom_js("findQuestion", "Event Registration on {...}", attendee);
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
The `structure` argument is an object. The key is the question which should unlock further questions.
The value is each answer, which unlocks further questions.

The unlocked questions may have 4 different formats:
1. It is as well conditional and can unlock further questions; the same format as described above should be used
2. It opens only one further question, which is not conditional; a String should be used
3. It opens multiple questions, which are all not conditional; an Array of String should be used
4. It opens further questions, but only some of them are conditional; those not conditional questions should have `null` as their value

#### Examples
```js
await custom_js("conditional", attendee1, {
  "Organisation": {
    "I ask for trip organisation": {                                      // format 1
      "How do you plan to arrive?": {
        "Flight": "Airport",                                              // format 2
        "Train": {
          "Train Station": null,                                          // format 4
          "I have a BahnCard": {
            "Ja, {...}": ["BahnCard number", "BahnCard expiration date"]  // format 3
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
* Returns: the loaded event

#### Examples
```js
await custom_js("css", ".error { color: red; }");
```



## Attendees
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Peforms event based functions on attendee elements.
This tool should be called on the booking page of the widget.
The different functions are being called whenever an attendee element
changes its' state.
* Name: `attendees`
* Args:
  * `options` - object with following possible parameters (different states in which an attendee element can be):
    * `open` - called when the attendee is editing his form
    * `close` - called when an attendee saves his data and the form closes, but still visible
    * `title` - called when the form is closed and collapsed
    * `remove` - called when the booker went back to ticket selection, removed a ticket and came back - one attendee should have disappeared from the booking page
    * The arguments passed to these functions are:
      * the attendee element as a DOM element
      * the internal and unique ID of the attendee element

#### Further Explanation
Whenever the state of an attendee element changes, the visuals
are being re-calculated on the client and some customizations such as
listeners for Conditional Questions or None Checkbox or any manually added
titles and descriptions will disappear. To prevent a difficult setup where
any change is tracked instead it is recommended to use this tool like shown
in the example below, which is a fail-safe solution.

#### Examples
```js
function startCustomization() {
  window.addEventListener("doo_page_loaded", async event => {
    if (event.detail.widget.page.name == "booking_registration_details") {
      await custom_js("attendees", {
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
await custom_js("noneCheckbox", document, "Workshop{...}", "I am not {...}");
```
for this group:

<img height="120" alt="Checkbox group" src="https://github.com/viovendi/viovendi.github.io/assets/148325186/d9fdf492-2e2d-4c5d-a094-740b331041f1">

we receive the following result:

<img height="120" alt="Checkbox group some" src="https://github.com/viovendi/viovendi.github.io/assets/148325186/65bf5ed6-4391-43cc-a49d-8c270ebeaf38">
<img height="120" alt="Checkbox group none" src="https://github.com/viovendi/viovendi.github.io/assets/148325186/79b97f3e-7950-4c4c-9b0e-16de06d09c44">




## Question Handler
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Attach a handler to a question which is being called whenever the selection or input in that question
is changed. Currently supported question types are `dropdown`, `radio`, `checkboxes`, `text` and `paragraph`.
* Name: `questionHandler`
* Args:
  * `element` - a jQuery element of the question (retrieved from e.g. `findQuestion`)
  * `handler` - a function to call whenever a selection is being made

#### Examples
```js
const job = await custom_js("findQuestion", "Jobtitle", attendee);
await custom_js("questionHandler", job, () => {
  console.log("'Jobtitle' input changed!");
});
```



## Answers Selector
> by [Dmitry](https://github.com/Dmitry-the-Werkstudent)

Sets us a function for a question element which will fetch the answers.
Currently supported question types are `dropdown`, `radio`, `checkboxes`, `text` and `paragraph`.
* Name: `answersSelector`
* Args:
  * `element` - a jQuery element of a question
* Returns: a function, which when called returns an array of answers on the given question element
  * The array type is for compatibility with different internal tools which use this tool under the hood 
  * For `checkboxes` the array will have all the answers as array elements
  * For any other question type the array will always have one element; if no selection is made, that element will be an empty string `""`
  * To check if a selection has been made you can prove `answers.join("").length > 0`

#### Further Explanation
The return is a function, not the answer itself! To get the answers you have to first call the function.
This is optimal and reduces latency since the code checks for the question type only once.

#### Examples
```js
const job = await custom_js("findQuestion", "Jobtitle", attendee);
const selector = await custom_js("answersSelector", job);
await custom_js("questionHandler", job, () => {
  console.log("'Jobtitle' input changed to", selector());
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
await custom_js("conditional", attendee, {
  "Jobtitle": {
    "other": "What is your Jobtitle?"
  }
});
await custom_js("subRequired", attendee, "Fill out this field", "What is your Jobtitle?");
```
This snippet makes a conditional question setup for the "Jobtitle" question,
and if "other" is selected, the text field "What is your Jobtitle?" appears -
the question is made to bahave like other required questions:
* the gray info "(optional)" will be hidden
* red text will appear if nothing is entered
* the "Save" button will not work
* etc.


# Contribution
When adding a new helper, remember following these steps:
1. Create the file in this directory
2. The entrance function should be called `run`:

```js
// something.js
async function run(a, b) {
  // perform job or call some other functions
}
```
3. Add a new entry in the overview of this README:

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
