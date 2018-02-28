# Today's Kata

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

### Resources Used

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_charcodeat

Props to Brent Williams for telling me to subtract 96 from the charcode value.