// function student(firstName,lastName,subject) {
//     this. firstName=firstName;
//     this.lastName=lastName;
//     this.subject=subject;  
// }      
    
//     this.greet=function() {
//         console.log(`${this.firstName} ${this.lastName} ${this.subject}`);
        
    
// }

// let student1=new student("gayatri","shelke","science")
// student1.greet()
// greet.call(student1)



// function data(firstName,lastName,age) {
//     this. firstName=firstName;
//     this.lastName=lastName;
//     this.age=23;
// }
// let emp=new data("aarati","uike",23)
// emp.greet





// const youtube={
//     name:"gayatri",
//     age:19,
//     feature:function () {
//         console.log(`my name is ${this.name}.and my age is ${age}`);
        
//     }
// }

// const person = {
//     fullName: function() {
//       console.log( this.firstName + " " + this.lastName);
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "John Doe":
// //   person.fullName.call(person1);
//   person.fullName.call(person2);




// const person = {
//   fullName: function() {
//     console.log(this.firstName + " " + this.lastName);
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// const person2={
//   firstName:"gayatri",
//   lastName:"shelke"
// }

// // This will return "Mary Doe":
// person.fullName.apply(person1);

// person.fullName.apply(person2);

// function saySomething(message){
//   return this.name + " is " + message;
// }
        
// var person4 = {name:  "John"};
        

// console.log(saySomething.call(person4, ["awesome"]));




      
// Binds the displayDetails function to the person1 object
      
      