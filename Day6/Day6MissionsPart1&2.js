//Part 1: Traffic

let greenLight = "green";
let yellowLight = "yellow";
let redLight= "red";

let status = greenLight;
let emergencyVehicle= false;
let isIntersection= false;

if(isIntersection) {
    console.log("You can drive");
} else if (emergencyVehicle ||status === redLight){
    console.log("Do not drive");
} else if(status === greenLight){
    console.log("You can drive");
} else if (status === yellowLight){
    console.log("Prepare to stop");
}

//Part 2: Grades

let grade = 52;

if(grade < 30){
    console.log('FF');
} else if (grade > 30 && grade <=40){
    console.log('DD');
} else if (grade > 40 && grade <= 50){
  console.log('DC')
} else if (grade > 50 && grade<=60){
    console.log('CC');
} else if (grade > 60 && grade <=70){
    console.log('BC');
} else if (grade > 70 && grade <= 80){
    console.log('BB')
} else if (grade > 80 && grade <=90){
    console.log('AB');
} else{
    console.log('AA')
}