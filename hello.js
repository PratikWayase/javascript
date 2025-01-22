
// // explain this keyword
// // -  used to access properties and methods of an object
// // refers to the object to which it belongs.

// // use this keword in method

// const Person = {
//     name: "jgon",
//     age: 34,
//     adress: "xyx",
//     greet() {
//         console.log("hello i am " + this.name + "andi am" + this.age + "uears old");
//     }
// }
 
// Person.greet();

// // use this keyword in imlict binding

// const person2 = {
//     name: "kiwi",
//     age: 45,
//     greet() {
//         console.log(`hello ${this.name}, you are ${this.age} old`)
//     }
// }

// console.log(person2.greet())


{/*================= //================== */ }

// // arrow function
// inherit it from the surrounding context.
// Arrow functions do not have access to the arguments object, which is available in regular functions.

// // asunc arrow function
// const fetchData = async () => {
//     const data = await fetch("https://api.example.com/data")
//     return data.json();
// }

// // arrow function for object litersal
// const MakePerosn = (firstName, Lastname) => ({ first: firstName, last: Lastname });
// console.log(MakePerosn("pankaj", "thripahati"))

// // arrow function with single parameter

// const square = x => x = x;
// console.log(square(5))

{/*================= //================== */ }

// closure in javascirpt
//access to its own scope, the outer function’s variables, and global variables,
// even after the outer function has finished executing.
//Global variables can be made private within a function using closures,
// ensuring they cannot be accessed or modified directly from outside.
//ncapsulate private data and create public methods to interact with it.


// function Outer() {
//     let outerVar = "i am in outer scope";
//     function inner() {
//         console.log(outerVar)
//     }
//     return inner;
// }

// const closure = Outer();

// lexical scope in closure
// function’s scope is determined by where the function is defined,
//  not where it is executed. This allows inner functions to access variables
// from their outer function.

{/*================= //================== */ }

// // private valriblee in closure
// //ncapsulate variables, making them private to a specific function.
// //  This is commonly used in module patterns.

// function ocuter() {
//     //private varible
//     let count = 0;
//     return function () {
//         count++;
//         return count
//     }
// }
// const increment = ocuter();
// console.log(increment())

{/*================= //================== */ }

// // clsoure in settimeout
// //used in asynchronous programming.

// function CreateTimes() {
//     for (let i = 1; i <= 3; i++){
//         setTimeout(() => {
//             console.log(`timee ${i}`)
//         }, i * 1000)
//     }
// }
// CreateTimes();

{/*================= //================== */ }


// closure in IIFE
//encapsulate private state or create modules.

// const Couter = (function () {
//     let count = 0;
//     return {
//         increment: function () {
//             count++;
//             console.log(count)
//         },
//         reset: function () {
//             count = 0;
//             console.log("counter reset")
//         },
//     }
// })();

// Couter.increment();
// Couter.reset()