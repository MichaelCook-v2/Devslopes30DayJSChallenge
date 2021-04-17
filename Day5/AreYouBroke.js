// Day 5 Part 1: Are you Broke?

let balance = 450.00;
let itemPrice = 235.86;
let itemPurchasing = "Kryptek Hunting Jacket";

if(itemPrice <=balance){
    balance-= itemPrice;
    console.log(`Purchasing for ${itemPurchasing}${itemPrice}, your new balance is$${balance}.`);
}else if(balance === itemPrice){
    console.log(`Are you sure you want to buy the${itemPurchasing}, you won't have money left for food.`);
} else if{
    let priceDiffernce = itemPrice % balance;
    console.log("You are broke and cannot afford this item");
    console.log(`You need an additional $${priceDiffernce.toFixed(2)} to buy it!`);
}


//Part 2 Kilopounds

let kilograms = 25;

let kiloToPounds = 2.205;

let pounds = kilograms * kiloToPounds;

console.log(pounds);

