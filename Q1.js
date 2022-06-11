// function add(a){
//     console.log(a);
// }
// sum=[1,3,4,5,6]
// add(...sum)


// function add(array){
//     console.log(array);
// }
// var array=[1,2,3,4]
// var array1=[...array,"mona",1]
// console.log(...array,...array1)



// array=['gayatri','kajal','pooja','khushboo']
// array.filter(function (e) {
//     if(e.includes('j')){
//         console.log(e);
//     }
    
// })



// let fs=require("fs")
// let n=require("readline-sync")
// dic={}
// i=1
// while(i<5){
//     let name=n.question("enter the name")
//     let surname=n.question("enter the surname")
//     dic[name]=surname
//     i++


// }
// fs.writeFileSync('data.json',JSON.stringify(dic,null,4))
// let data1=fs.readFileSync('data.json','utf8')
// data1.filter(function (e) {
//     if(e.includes('shelke')){
//         console.log(e);
//     }
    
// })


// var write=fs.appendFileSync("dat1.json",data)

// console.log(data1);

// console.log('7'+'3'+5);
// a='4'
// b='4'
// console.log('4'-2+7);


// function add(a,b,c) {
//     console.log(a+b+c);
    
// }
// let array=[5,4,3,2,5]

// add(...array)


// let a=new Promise((resolve,reject)=>{
//     var a='gayatri'
//     resolve(a)
//     reject(error)
    
// }).then((a)=>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// })
// const b=require('readline-sync')
// let a=new Promise((resolve,reject)=>{
//     let table=b.questionInt('enter the number')
//     i=1
//     while (i<=table){
//         j=1
//         d=[]
//         while(j<=10){
//             s=i*j
//             d.push(s)
//             j++;
//             return d
//         }
//         d.push(s)
//         i++;   
//         return d
// }
// // resolve (d)
// console.log(d)
// }).then((resolve)=>{
//     console.log(resolve);
// }).catch((error)=>{
//     console.log(error);
// })


// const a=require("readline-sync")
// const num=a.questionInt("enter the number")
// // const num1=a.questionInt("enter the number")

// i=1
// b=[]
// while(i<=num){
//     j=1
//     k=[]
//     while(j<=10){
//         c=i*j
//         k.push(c)
//         j=j+1
//     // b.push(k)

//     }b.push(k)
//     i++
// }console.log(b);

// a='1233'
// b=Number(a)
// console.log(b);
// var a=22
// function add() {
//     var a=22
//     console.log(a);
    
// }
// // console.log(a);
// add()


// function add(){
//     let a=20
//     console.log(a);
    
// }
// add()

// var a=10
// let a=20
// let b=30
// function add(){
//     console.log(b);
//     // const a=20
// }
// console.log(a)
// add()

// console.log(this);
// function add(){
//     console.log(this);
// }
// add()

// 'use strict'
 
// var a=[2,3,4,5,6]
// function add(...a) {
//     var sum=0
//     for (i of a){
//         sum=sum+i

//     }
//     console.log(sum);

    
// }
// add(2,4,5)


// function add(...a) {
//     console.log(a);
    
// }
// add(1,2,4,5,6)

// var array=[1,3,6,7,8]
// var array1=[4,5,6,9,12]
// var array2=[...array,...array1]
// console.log(array2);


// var a=[1,2,3,45]
// var [f,d,s,v,g]=a
// console.log(d);


// function f() {
//     return [1, 2];
//   }
  
//   let a, b;
//   [a, b] = f();
//   console.log(a); // 1
//   console.log(b); // 2

// function f() {
//     return [1,3]
    
// }
// let a,b
// [a,b]=f()
// console.log(b);

// const [a, ...b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // [2, 3]



// const [a,...b]=[1,3,5]
// console.log(b);


// const user = {
//     id: 42,
//     isVerified: true
// };

// const {id, isVerified} = user;

// console.log(id); // 42
// console.log(isVerified);

// const getRepeatedChars = (str) => {
//     const chars = {};
//    for (const char of str) {
//        chars[char] = (chars[char] || 0) + 1;
//    }
//    return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
// }

// getRepeatedChars("aabbkdndiccoekdczufnrz");


function StringReduction(str,read) { 

    // code goes here \
        return (str.split(read)).length - 1;

  
  }
     
  // keep this function call here 
  console.log(StringReduction(read('abcabc')));