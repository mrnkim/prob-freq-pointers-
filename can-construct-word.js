"use strict";
// add whatever parameters you deem necessary & write doc comment
/**
 * Inputs: two strings - word, letters(all lowercased,  no space, no punctuation)
 * Output: boolean
 *
 * <Test Case>
 * 'aa', 'abc' => false
 * 'abc', 'abccc' => true
 * 'abccc', 'abc' => false
 *
 *
 * create frequency counter for both input strings - word, letters
 * looping over the word's freqeuncy counter
 *  - if key of the counter does not exist in letters counter => return false
 *  - if a count of the key is higher than the count of the same key in letters counter => returns false
 * otherwise, returns true
 */

function getCounter(str) {
  let counter = {}; //{a:1, b:1}
  for (let char of str) {
    let curr = counter[char] || 0; //
    curr += 1;
    counter[char] = curr;
  }
  return counter;
}

function canConstructWord(word, letters) {
  let wordCounter = getCounter(word);
  let lettersCounter = getCounter(letters);

  for (let char in wordCounter) {
    if (!(char in lettersCounter)) {
      return false;
    }

    if (wordCounter[char] > lettersCounter[char]) {
      return false;
    }
  }
  return true;
}
