// Part 1: Taxes

var item1 = 10;
var item2 = 10;
var item3 = 9.99;
var item4 = 10.03;
var item5 = 19.50;
var item6 = 18.98;

var itemTotal = 10 + 10 + 9.99 + 10.03 + 19.50 + 18.98;
var discountCoupon = itemTotal * .25;
var priceAfterDiscount = itemTotal - discountCoupon;
var taxes = priceAfterDiscount * .0775;
var finalPrice = priceAfterDiscount + taxes;

console.log(itemTotal);// $78.50
console.log(discountCoupon.toFixed(2)); // $19.63
console.log(priceAfterDiscount.toFixed(2)); // $58.88
console.log(taxes.toFixed(2)); // $4.56
console.log(finalPrice.toFixed(2)); // $63.44

// Part 2: Area

let triangleWidth = 45;
let triangleLength = 65;
let areaOfTriangle = triangleWidth * triangleLength;

console.log(areaOfTriangle);

// Advanced Mission

