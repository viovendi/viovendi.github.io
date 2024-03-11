# Custom JS
A collection of up-to-date helpers for common customizations.

# Usage
1. Load jQuery.
2. Install the custom-js-loader using `$.getScript("https://viovendi.github.io/customizations/shared/custom-js/loader.js");`.
3. This will install the function `async custom_js(name, ...args)`.
4. Now it can be used to load and use different helpers from this directory.


# Overview
Here is an overview of all helpers currently defined here.



## Loader ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
Installs the `custom_js` function to dynamically load other helpers.
* Args:
  * `name` - name of the helper
  * `...args` - comma separated arguments to pass to the helper
* Returns: the data returned by the helper

#### Examples
```js
await custom_js("findQuestion", "What is your Job Title?", true);
```



## Match ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
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



## Find Question ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
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

## Conditional Questions ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
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



## CSS ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
Add a CSS stylesheet to the document and wait until it loads.
* Name: `css`
* Args:
  * `css` - stylesheet as a string
* Returns: the loaded event

#### Examples
```js
await custom_js("css", ".error { color: red; }");
```



## Attendees ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
Peforms a event based functions on attendee elements.
This tool should be called on the booking page of the widget.
* Name: `attendees`
* Args:
  * `options` - object with following possible parameters:
    * `open` - called when the attendee is before editing his form
    * `close` - called when an attendee saves his data and the form closes, but still visible
    * `title` - called when the form is closed and collapsed
    * `remove` - called when the booker went back to ticket selection, removed a ticket and came back - one attendee should have disappeared from the booking page
    * The arguments passed to these functions are:
      * the attendee element as a DOM element
      * the index of attendee

#### Examples
```js
function startCustomization() {
  window.addEventListener("doo_page_loaded", async event => {
    if (event.detail.widget.page.name == "booking_registration_details") {
      await custom_js("attendees", {
        "open": (attendee, i) => applyDesign(attendee),
        "close": (attendee, i) => removeDescription(attendee)
      });
    }
  });
}
```



## None Checkbox ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
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
## {title} ({link to your profile for easier communication})
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
