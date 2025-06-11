let a = 4
// var ....(let, const) ES6 
let b = 553.6

console.log(a, b);
console.log(typeof a, typeof b);

let c = "Vinod Kumbar"

//var c = "Vinod Kumbar"

let required = true

console.log(c, required);
console.log(c, !required);
console.log(typeof c, typeof required);

//null and undefined
let d = null
let e   = undefined
console.log(d, e);

console.log(typeof d, typeof e);

/*  var (let, const from ES6)
 let c = a+b : we cannot re-declare variable with let keyword but possible with var i.e var c = a+b.
 but we can reassign the value of c with let keyword i.e
  c = a+b  
  const - is like final keyword
*/

/*let c = a + b
console.log(c); */

 /*var c = a + b
console.log(c);8*/

c = a + b
console.log(c);

