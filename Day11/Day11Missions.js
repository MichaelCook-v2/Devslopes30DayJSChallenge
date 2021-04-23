const numbers =(two,oneHundred)=>{
    for(let index=two; index <=oneHundred; index++)
    if(index % 2 ===0){
        console.log(index);
    }
}; numbers(2,100);

const numbers =(two,oneHundred)=>{
    for(let index=two; index <=oneHundred; index+=2)
    if(index % 2 ===0){
        console.log(index);
    }
}; numbers(2,100);