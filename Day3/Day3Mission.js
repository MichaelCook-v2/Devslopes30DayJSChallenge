// Trunscate Strring
let welc = "welcome";
let hello = "hello,";
let d = "disaster";

let welcTruncated = welc.substring(0,4);
let helloTruncated = hello.substring(0,6);
let dTruncated = d.substring(0,1);

console.log(welcTruncated);
console.log(helloTruncated);
console.log(dTruncated);

// Char Builder
var person = "Michael";
var vehicleType = "Jeep";
var petName = "Lilly";
var city = "Tampa Bay";
var state = "Florida";
var region = "South"
var hunting = "Bow";
var food = "Brownie";


var meltdown = person[1] + vehicleType[1] + petName[3] + city[2] + state[5] + region[1] + hunting[-1] + food[3];

console.log(meltdown);
