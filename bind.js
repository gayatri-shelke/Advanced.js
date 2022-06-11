// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       console.log( this.firstName + " " + this.lastName);
//     }
//   };
//   person.fullName()


// const person={
//     name:"gayatri",
//     age:19,
// }
// const person1={
//     name:'kajal',
//     age:20
// }
// const person2={
//     name:'pooja',
//     age:21,
// }
// function feature() {
//     console.log(`my name is${this.name}.and my age ${this.age}`);
        
//     }
// const add=feature.bind(person2);
// add()

let person={
    name:'gayu',
    age:19
}
let person1={
    name:'pooja',
    age:22
}
function detials(){
    console.log(`my name is ${this.name}.and age is ${this.age}`);
}
let person2=detials.bind(person1)
person2()