# spagettoString

## How to install
```bash
npm i @henrikdk/spagettostring
````

## How to use
```javascript
const spagettoString = require('@henrikdk/spagettoString');

console.log(spagettoString.strReverse('Hej'));
//Output: "jeH"

console.log(spagettoString.strSort('Strawberries Raspberries Apple Blueberries Kiwifruit Passionfruit', "asc"));
//Output: "Apple Blueberries Kiwifruit Passionfruit Raspberries Strawberries"

console.log(spagettoString.strCompare('this apple is an beautifull apple', "apple"));
//Output: "2"
```

## Functions
### strReverse - reverse the string.
### strSort - Sort string by ascending or descending.
### strCompare - Find how many instances of a word exist in a string.