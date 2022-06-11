// const get_data=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let roll_no=[1,2,3,4,5,6,7]
//         resolve(roll_no)
//         // reject("error")
//     },2000);


// const { rejects } = require("assert");
// const { resolve } = require("path/posix");

// })

// const get_info=((indexdata)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout((indexdata) => {
//             let biodata={
//                 name:"gayatri",
//                 age:19
//             }
//             resolve(`my roll_no${indexdata}.my name is ${biodata.name}.and i am ${biodata.age}years old`)
            
//         }, 2000,indexdata);
//     })
// })


// async function add() {
//     const roll_no=await get_data
//     console.log(roll_no);
//     const biodata=await get_info(roll_no[1])
//     console.log(biodata);
// }
// add()
// get_data.then((roll_no)=>{
//     console.log(roll_no);
//     return get_info(roll_no[1])
//     }).then((yes)=>{
//         console.log(yes);

// }).catch((error)=>{
//     console.log(error);
// })

// async function add() {
    
//     console.log('komal');
//     console.log('Aayushi');

    
//     await console.log('gayu');
//     console.log('pradyna');
//     console.log('pooja');
    
// }
// add()


//     let a=5
//     let b=5
//     console.log(a);
//     console.log(b);
    
// }
// add()

// let result;
// result = ('8');
// console.log(result); // NaN


// async function add() {
//     console.log('hello');
//     console.log('gayatri');
//     await console.log('how are you');
//     console.log('i am fine');
//     console.log('and you');
    
// }
// add()


async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
console.log(result);
  }
  
  f();
  


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout((a,b) => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
// console.log(result);
//   }
  
// f();

// function first(name,age) {
//   console.log('hello');
  
// }
// function second() {
//   console.log("hii");
  
// }
// first('gayatri',second)


// const p1=(name,age)=>{
//   console.log(`my name is ${name}`)
//   age()
// }

// const p2=()=>{
//   console.log("hiii")
// }
// p1("jabeena",p2)

// function info(a) {
//   return new Promise(function(resolve,reject){
//     console.log('i am success');
//     setTimeout(() => {
//       if (a){
//         resolve("i m successful")
//       }
//       else{
//         reject("i m failed")
//       }
    
//     }, 2000);
//   })
// }
// info(false).then((result)=>{
//   console .log(result)
// }).catch((err)=>{
//   console .log(err)
// })
