"use strict";
/* inputs: array , number
   outputs: boolean
  Determine if there is a pair of numbers in InputArray where the average of the pair equals the
  target average
**/
function averagePair(nums, targetAvg) {

  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx < rightIdx) {

    let currentAverage = (nums[leftIdx] + nums[rightIdx]) / 2;

    if (currentAverage === targetAvg) return true;

    if (currentAverage > targetAvg){
        rightIdx--;
    } else {
      leftIdx++;
    }
  }
  return false;
}
