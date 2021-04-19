// Reduce Method

var numbers = [1,4,5,7,8,10];

var sum = number.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0);

console.log(sum)

// Array Chain Method

var classRoom = {
    grade: '3rd Grade',
    students: [
        { name:'James', score: 90}, { name: 'Jenny', score: 95}, { name: 'Zach', score: 87}, { name: 'Kate', score: 78},
    ]
};
let starStudents = classroom.students
    .filter(function(student){
    return student.score >= 80;
})
    .map(function(value){
    value.score += 5;
    return value;
})
.reduce(function(acc,val,index,array){
   const total = acc.sum + val.score;
  return {
    sum: total,
    arr: array,
  };
},{sum: 0, arr: []});

var studentAverage = starStudents.sum / starStudents.arr.length;

console.log(starStudents, studentAverage);


// Part 1: Sum

var odd = [5,7,11,13,29,17];
var even = [10,6,2,88,42,22,104];

var oddSum = odds.reduce(function(acc,val){
    return acc + val;
});

var evenSum = evens.reduce(function(acc,val){
    return acc + val;
});

console.log(evenSum + oddSum);

// Part 2 Filter Map Reduce

var states =['alaska', 'alabama', 'arkansas', 'missouri', 'texas', 'nevada', 'california'];

var filterStates = states.
filter(function(item){
    return item.charAt(0)==='a';
})
.map(function(item){
    return item.substr(0,3);
})
.reduce(function(acc,val){
    return acc + val;
});

console.log(filteredStates.length);