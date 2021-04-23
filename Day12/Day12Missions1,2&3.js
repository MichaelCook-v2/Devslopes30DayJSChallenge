// Part 1: Objects

let cars = {Honda: 'CRV', Jeep: 'Wrangler', Ford:'F150', Chysler: 'Pacifica'}

for(let property in cars){
    return cars;
    if(property=== 'Ford'{
        delete cars[property];
        break;
    })
};
console.log(cars);

// Part 2: Keys Checker

let names = { John: 15, Mark: 17, Jennifer:18}
console.log(names.hasOwnProperty('John'));

// Part 3 Objects to Array

let names = { John: 15, Mark: 17, Jennifer:18}
console.log(names.hasOwnProperty('John'));

let students = { Jon: { age: 27, online: false},
Jack: { age: 32, online: true},
Jenn: { age: 48, online: false},
Liz: { age: 19, online: true}};

const objArray =(obj,key = []) =>{
    let newArray = keys || [];

    Object.keys(obj).reduce(function(acc, val){
        return acc.concat(val,obj[key],[]);
    }, []).map(function(item){
        if(typeof item === 'string'){
            newArray.push(item)
                } else {
                    objArray(item,newArray)
                }
            })
        return newArray;
        }
console.log(students)