// Day 5 Part 1: Are you Broke?

let balance = 450.00;
let itemPrice = 235.86;
let itemPurchasing = "Kryptek Hunting Jacket";

if(balance <=itemPrice){
    balance-= itemPrice;
    console.log(`Purchasing for ${itemPurchasing}${itemPrice}, your new balance is$${balance}.`)
}else if(balance === itemPrice){
    console.log(`Are you sure you want to buy the${itemPurchasing}, you won't have money left for food.`);
}