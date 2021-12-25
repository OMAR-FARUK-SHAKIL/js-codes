// let a = function(){
//     return arguments;
// }

// console.log(a('hi')); // [Arguments] { '0': 'hi' } 


// But when we use Arrow function: 

// let a = () => arguments;
// console.log(a("hi")); //Identifier 'a' has already been declared

// arguments can not read in arrow function


// what is the solution 
let a = (...n) => { return n }
console.log(a("Hi")); // [ 'Hi' ]
// it works perfectly.