// const perone=(a,b)=>{
//     console.log("hello");
//     b()
// }
// const perTwo=()=>{
//     console.log("priya");
// }
// perone("gayatri",perTwo)
// // perTwo()



// const getinfo=()=>{
//     setTimeout(() => {
//         console.log("hello");
//         setTimeout(() => {
//             console.log("geting roll no");
//             let roll_no=[1,2,3,4,5]
//             console.log(roll_no);
//             setTimeout((roll_no) => {
//                 const biodata={
//                     name:"gayatri",
//                     age:12,
//                 }
//                 console.log(`my roll_no is ${roll_no}.my is name ${biodata.name}. my age is ${biodata.age}`);
                
//             }, 3000);
            
//         }, 3000,roll_no[1]);
        
//     },3000);
// }
// getinfo()


// function add(age,name) {
//     console.log(age,name);
//     sum(23)
//     function sum(a) {
//         console.log(a);
        
//     }
    
// }
// add(19,'gayatri')

// const d=(a,b)=>{
//     return a+b

// }
// // console.log(d(2,4));
// const b=(a,b)=>{
//     return Math.abs(a-b)

// }
// const c=((num1,num2,operator)=>{
//     return operator(num1,num2)
// })
// console.log(c(2,4,d));
// console.log(c(2,5,b));


// function fun(params) {
//     setTimeout(() => {
//         console.log('hello');
        
//     }, 2000);
//     fun2()
    
// }
// function fun1(params) {
//     setTimeout(() => {
//         console.log('gayatri');
        
//     }, 2000);
//     fun()
    
// }
// function fun2(params) {
//     setTimeout(() => {
//         console.log('hii');
        
//     }, 2000);
    
// }
// fun1()



// // const add = (x, y) => x + y;

// // add(2, 4); // 6



// let x = 2;

// const add = (y) => {
//   x += y;
// };

// add(4); // x === 6 (the first time)




// function add(x) {
//     return(x+5)
    
// }
// function next(callback) {
//    return callback(4)
    
// }
// console.log(next(add));

// var arr = [10, 20, 30]; 

// var result = arr.filter(function(elem){
//     return elem < 20;
// })
// console.log(result)


// var array=[11,12,34,45,67,89]
// var array1=array.filter((e)=>{
//     return array<12
// })
// console.log(array1);

// var array=[1,2,33,12,11,56]
// var array1=array.map((e)=>{
    
// })


let a=2
let b=3
function add(a,b) {
    return a+b
    
}
function sub(a,b) {
    return a-b
    
}
function fun(a,b,callback) {
    // callback (a,b)
    console.log(callback(a,b));
    
}
fun(a,b,add)
