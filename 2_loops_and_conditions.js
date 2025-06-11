const flag = true

if(!flag){
    console.log("Condition Satisfied");

}
else{
    console.log(flag);
    console.log("Condition Not Satisfied");
}

let i=0;
while(i < 5){
    // while loop will execute as long as the condition is true
    // if the condition is false, it will exit the loop
    console.log(i, "I am inside While Loop");
    i++;
    //console.log(i)
}

// do while loop
// do while loop will execute at least once even if the condition is false
let j = 0;
// it will check the condition after executing the loop
do{
    console.log(j, "I am inside Do While Loop");
    j++;
}while(j <=5);

for (let k = 0; k <=5; k++){
    // for loop will execute as long as the condition is true
    // if the condition is false, it will exit the loop
    console.log(k, "I am inside For Loop");
}


let required = true;
if(!required){
    console.log("Required is true");
} else{
    console.log("Required is false");
}
let n =0
// from 1 to 10 - print the common multiples value of of 2 and 5
for (let l = 1; l <= 100; l++) {
    if (l % 2 === 0 && l % 5 === 0) {
         n++;   
        console.log(l, "is a common multiple of 2 and 5");
    }
    // else {
    //     console.log(l, "is not a common multiple of 2 and 5");
    // }
   
    console.log("Current value of n:", n);
    if(n === 3){
        console.log("Exiting the loop");
        break; // exit the loop if n is equal to 3
    }
}