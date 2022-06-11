// creating a class
class Person {
    constructor(name,surname) {
      this.name = name;
      this.surname=surname
    }
  }
  
  // creating an object
  const person1 =  new Person('John','shelke');
  // const person2 =new  Person('Jack');
  
  console.log(person1); // John
  // console.log(person2.surname); // Jack

// class add{
// constructor(){

// }
// }

// (function(params) {
//   console.log('hello');
// })()


// class user{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
// }
// var user1=new user('gayatri',19)
// // var user2=new user('19')
// console.log(user1);
// // console.log(user2);



class user{
  constructor(name,age){
    this.name=name
    this.age=age
  }
}
var user1=new user('gayatri',19)
console.log(user1);