function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}


/* 
// pseudocode
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/


/*
  Add written explanation of your solution here
  I need to make an isPalindrome function that returns either true or false. n\
  When the input string is the same forwards and backwards, I should return true. n\
  That means that if the input string is the same after I reverse it, n\
  I should return true. For instance, "mom" in reverse is also "mom", n\
  and "racecar" in reverse is also "racecar", so my solution should return \n
  true for these cases. "hi" in reverse is "ih", so my solution should return n\
  false for this case.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: mom");
  console.log("=>", reverseString("mom"));

  console.log("Expecting: ih");
  console.log("=>", reverseString("hi"));
  }

module.exports = isPalindrome;
