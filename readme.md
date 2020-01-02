# spagettoString
Is a small package that revovles around modifying, check and create complicated strings for ease of actions.

## How to install
```bash
npm i @henrikdk/spagettostring
````

## How to use
```javascript
const spagettoString = require('@henrikdk/spagettoString');

spagettoString.strReverse('Hej');
//Output: "jeH"

spagettoString.strSort('Strawberries Raspberries Apple Blueberries Kiwifruit Passionfruit', "asc");
//Output: "Apple Blueberries Kiwifruit Passionfruit Raspberries Strawberries"

spagettoString.strCompare('this apple is an beautifull apple', "apple");
//Output: "2"
```

## Functions
- strReverse - Reverse the string.
- strSort - Sort string by ascending or descending.
- strCompare - Find how many instances of a word exist in a string.