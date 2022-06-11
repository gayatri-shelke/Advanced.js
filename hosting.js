
// add(2,4)
// let add=( (a,b) =>{
//     c=a+b
//     console.log(c);
    
// })

// x=5;
// console.log(x);
// const x;


// Math.max(1,2,3);  // Will return 3

// console.log(Math.max(1,4,17,7,9));


// var a = 'Geeks for Geeks'
// var array = a.split("for");
// console.log(array);


// this.x = 9;    // 'this' refers to global 'window' object here in a browser
// const module = {
//   x: 81,
//   getX: function() { return this.x; }
// };
// array=['gayatri','kajal','pooja','khushboo']
// array.filter(function (e) {
//     if(e.includes('j')){
//         console.log(e);
//     }
    
// }
// module.getX();
// //  returns 81

// const retrieveX = module.getX;
// retrieveX();
// //  returns 9; the function gets invoked at the global scope

// //  Create a new function with 'this' bound to module
// //  New programmers might confuse the
// //  global variable 'x' with module's property 'x'
// const boundGetX = retrieveX.bind(module);
// boundGetX();


// x=5
// console.log(x);
// var x;

// const obj = { a: 1, b: 2 }
// const obj1 = {c:3,d:5 }
// const shallowClone = { ...obj,...obj1 }
// console.log(shallowClone);


function Person(name) {
    var object = {};
    object.name = name;
    object.age = 26;
    return object;
   }
   var object = new Person("Alex");
console.log(object);  