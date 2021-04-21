// Part 1
let words = ['ant', 'awkward', 'car', 'zebra'];
console.log(words.reverse());

// Part 2

let wordsReversedArray = [];
for(var i = words.length -1; i >= 0; 1-=) {
    wordsReversedArray.push(words[i]);
};
console.log(wordsReversedArray)

// Part 2

var nums = [2,3,4,5,5,7,8,9,10];

var evenNums = 0;
for (var i = 0; i < nums.length; i++){
    if (nums[i]% 2 === 0){
        evenNums += nums[i];
    }
} console.log(evenNums);