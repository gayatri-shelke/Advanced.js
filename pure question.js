// var x=10
// function add(x,y) {
//     console.log(x+1);
//     return x+1
    
// }
// add(10)
// add(12)

// x=6
// console.log(x);
// var x;

// var a='3'
// var b=2
// console.log(a-b);

// let array=[1,2,3,4,4]
// for(i in array){
//     console.log(array[i]);
// }


// const a=require('readline-sync')
// const n=a.questionInt('enter the number')
// let value=0
// // let i=0
// let binary=0
// // let n=101
// while(n){
//     let last_digits=n%10
//     n=Math.floor(n/10)
//     value+=last_digits*binary
//     binary=binary*2
// }


// console.log(value);

// function binary(n){
//     let add=0
//     let info=1
//     while(n){
//         let last_digit=n%10;
//         n=Math.floor(n/10);
//         add+=last_digit*info;
//         info=info*2;
//     }
//     console.log(add)
//     }
// let a=01
// binary(a)



// let name=['gayatri','neha','devyani']
// let sum=name.map((name)=>name.length)
// console.log(sum);



// let age=[12,34,56,25,15,13]
// let a=age.filter((age)=>{
//     // return age>15
// })
// console.log(a[i])
let array=[1,2,34,56,6]
let a=array.map((a)=>{
    console.log(a);

})



// let array=[1,2,3,4]
// let add=array.reduce((a,b)=>{
//     return a+b
// })
// console.log(add);

// function  add() {
//     console.log('hii');
//     console.log('hello');
//     console.log('gayatri');
    
// }
// add()



// function ope(params) {
//     console.log('hello');
//     setTimeout(() => {
//         console.log('how are you');
        
//     }, 2000);
//     console.log('neha');
// }
// ope()

// let dict={
//     name:'gayatri',
//     age:19
// }
// let dict1={
//     name:'neha',
//     age:22
// }
// function add() {
    


// console.log(`my name is ${this}`);
// }
// let a=add.bind(dict)
// a()
// console.log(this)


// console.log(`${this.dict.name}`);


// function callback() {
//     console.log('hii')
    
// }
// function callback1() {
//     console.log('hello');
//     callback()
    
// }
// function callback2() {
//     console.log('how are you');
    
// }
// callback1(callback)

// const d=(a,b)=>{
//     return a+b

// }
// // console.log(d(2,4));
// const b=(a,b)=>{
//     return Math.abs(a-b)

// }
// const c=((a,b,operator)=>{
//     return operator(a,b)
// })
// console.log(c(2,4,d));
// console.log(c(2,5,b));




// const fs=require("fs")

// var my_dict={name:"gayatri",
// age:23,
// student:"science"}
// var data=JSON.stringify(my_dict)
// fs.writeFileSync("pooja.json",JSON.stringify(my_dict, null,4));




// async function add(a,b) {
//     console.log('hii');
//     c= await a+b
//     console.log(c);
//     console.log('hello');     
// }
// add(2,3)


    // let binarynum=[1,2,3,4,5,17]
    //     let i=0;
    //     while (n>0){
    //         binarynum[i]=n%2
    //         n=Math.floor(n/2);
    //         i++;
    
    //     }
    //     for(let j=i-1;j>=0;j--){
    //         console.log(binarynum[j])
    //     }
    // }
    // let a=17;
    // decimal(a)

// const a=require("readline-sync")
// const b=a.questionInt('enter the number')
// var dict={}
// var i=0
// while (i<b){
//     let name=a.question('enter the name')
//     let age=a.questionInt('enter the age')
//     dict[name]=age
//     i++
// }
// console.log(dict);


// let array=[1,2,3,1,4,5,3,2]
// d=[]
// let i=0
// while(i<array.length){
//     if(!d.includes(array)){
//         d.push(array)

//     }
//     i++
//     // console.log(array);
// }
// console.log(d);




// function saySomething(message){
//     return this.name + " is " + message;
//   }
          
//   var person4 = {name:  "John"};
          
//   console.log(saySomething.apply(person4, ["awesome"]));
//   console.log(person4);


// const newSet = new Set([4, 5, 6, 7]);
// console.log(newSet);// Outputs Set {4,5,6,7}

// const newSet2 = new WeakSet([3, 4, 5]); //Throws an error


// let obj1 = {message:"Hello world"};
// const newSet3 = new WeakSet([obj1]);
// console.log(newSet3.has(obj1)); 


// function* genFunc(){
//   yield 3;
//   yield 4;
// }
// console.log(genFunc());


// function* iteratorFunc() {
//   let count = 0;
//   for (let i = 0; i < 2; i++) {
//       count++;
//       yield i;
//   }
//   return count;
// }

// let iterator = iteratorFunc();
// console.log(iterator.next()); // {value:0,done:false}
// console.log(iterator.next()); // {value:1,done:false}
// console.log(iterator.next());