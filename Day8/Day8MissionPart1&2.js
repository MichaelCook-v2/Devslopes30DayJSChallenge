var fruit = ['apple', 'banana', 'orange', 'strawberry'];

let noOrangeArray =fruit.splice(fruit,2);
console.log(fruit);

let popArray= fruit.pop();

console.log(fruit);

let addPear = fruit.unshift('Pear');
console.log(fruit);

fruit.length = 0;
console.log(fruit);

// Part 2: Colorful


var colors = ['blue', 'red', 'green', 'yellow', 'black', 'white'];

var moreColors = ['purple', 'magenta', 'pink'];

var removeRedGreenYellow = colors.splice(1,3);
console.log(colors);

var evenMoreColors =colors.concat(moreColors);
console.log(evenMoreColors);

var colorsToUpper = colors.map(colors=>colors.toUpperCase());
console.log(colorsToUpper);