// The Mission Part 1: Digits

const sumOfNum = num =>{
    var sum = 0;
    while(num){
        sum += num % 10;
        num = math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfNum(456));

// Part 2: Root

const squareRoot = num =>{
    return Math.sqrt(num);
}

console.log(num, 25);

// Part 3: 

const squareNum = num => {
    let square = 1;
    let i = 0;

    while(true){
        square = ((num/ square)+ square)/ 2;

        if((square * square) === num || i === num +1) break;
        i+=1;
    }
    return square;
}
// const val = 5;
console.log(squareRoot(5));
console.log(squareNum(5));