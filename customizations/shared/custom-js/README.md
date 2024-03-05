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
  * `dom` - optional argument, returns a raw DOMElement if `true` or jQuery object if omitted
* Returns: the question which was searched

#### Examples
```js
await custom_js("findQuestion", "What is your Job Title?");

await custom_js("findQuestion", "Event Registration on {...}", true);
```

## Conditional Questions ([Dmitry](https://github.com/Dmitry-the-Werkstudent))
The so often used conditional questions customization.
Automatically adds all the needed listeners and logic.
* Name: `conditional`
* Args:
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
await custom_js("conditional", {
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
