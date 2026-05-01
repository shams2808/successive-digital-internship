//var user = {
//    name: "Shamit",
//    age: 20,
//    hobbies: ["coding", "gaming", "music"]
//};
//function printUser(u) {
//    var n = u.name;
//    var a = u.age;
//
//    console.log("Name: " + n);
//    console.log("Age: " + a);
//    for (var i = 0; i < u.hobbies.length; i++) {
//        console.log("Hobby: " + u.hobbies[i]);
//    }
//}
const user={                                                    //const instead of var as const cant't be reassigned and better scoping
    name : "Shamit",
    age : 20,
    hobbies : ["coding", "gaming", "music"]
};
const printUser = ({name, age, hobbies}) => {                   //destructuring in parameter
    console.log(`Name: ${name}`)                                //arrow functions for conciseness
    console.log(`Age: ${age}`)                                  //template literals and placeholders for better readability
    hobbies.forEach(hobby => console.log(`Hobby: ${hobby}`));   //foreach for concise iterating
    };
printUser(user);


//function add(a, b) {
//    if (a === undefined) {
//        a = 0;
//    }
//    if (b === undefined) {
//        b = 0;
//    }
//    return a + b;
//}
const add = (a=0,b=0) => a + b;                                 //default parameters and arrow function which makes it concise
console.log(add(1,2));                                          //1+2=3
console.log(add(undefined, 2));                                 //undefined(a=0)+2=2
console.log(add(1));                                            //1+(b=0)=1


//function createCounter() {
//    var count = 0;
//
//    return function() {
//        count = count + 1;
//        console.log(count);
//    };
//}
//var counter = createCounter();
//counter();
//counter();
//counter();
function createCounter(){                                      
    let count = 0;                                             //let has better scoping than var
    return function inner(){
        count++;
        console.log(count);
    };
}
const c1 = createCounter();
c1();
c1();
c1();


//var numbers = [1, 2, 3, 4];
//var doubled = numbers.map(function(x) {
//    return x * 2;
//});
//console.log(doubled);
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(number => number * 2);               //used map to make it concise, better readability and understanding
console.log(doubled);