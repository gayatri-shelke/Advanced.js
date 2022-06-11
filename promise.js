// const get_data=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let roll_no=[1,2,3,4,5,6,7]
//         resolve(roll_no)
//         // reject("error")
//     },2000);

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
// get_data.then((roll_no)=>{
//     console.log(roll_no);
//     return get_info(roll_no[1])
//     }).then((yes)=>{
//         console.log(yes);

// }).catch((error)=>{
//     console.log(error);
// })

// async function f(){
//     let array=new Promise((resolve,reject)=>{
//         let a='true'
//         if (a==12){
//             resolve(a)
//         }
//         else{
//             reject(error)
//         }
//     }).then((a)=>{
//         await console.log(a);

//     }).catch((error)=>{
//         console.log('error');
//     })
// }
// f()


// function add() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             var a=1
//             if(a%2==0){
//                 resolve("your promise is resolve")
                
//             }
//             else{
//                 reject("reject promise")
//             }
            
//         }, 2000);
//     })
    
// }
// add().then((result)=>{
//     console.log('even');
// }).catch((error)=>{
//     console.log('odd');
// })

// var a=new set([1,2,3,2,1,5,8])
// console.log(a);


// let complete=true
// function promp(a,b){
//  return  new Promise(function(resolve,reject){
//      var c=a/b
//     if(c){
//         resolve(` i am successfull:${c}`)
//     }
//     else{
//         reject('i am failed')
//     }
// })
// }

// // its a methods

// promp(5,2).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// let resolvemetod=(result)=>{
// console.log(result);
// }
// let rejectmethod=(error)=>{
//     console.log(error);
// }
// promp(true).then(resolvemetod)
// promp(true).catch(rejectmethod)



// console.log(promp(false));

// let p1=new Promise(function(resolve,reject){
//     console.log('frist promise');
//     resolve('frist')
// })
// let p2=new Promise(function(resolve,reject){
//     console.log('second promise');
//     resolve('second')
// })
// Promise.all([p1,p2])


// async function test(){
//     console.log('2:messages');
//     const response=await fetch('https://www.geeksforgeeks.org/javascript-anonymous-functions/')
//     console.log('hello');
//     const student=await response.json()
//     return student
//     // await console.log('3:messages');
//     // console.log('4:messages');

// }
// console.log('1:messages');
// test()
// console.log('5:messages');