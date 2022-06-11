let mobile=function (model_no) {
    //in
    this.model=model_no
    this.price=300
    
}
var samsung=new mobile('galaxy')
var nokia=new mobile('3310')

mobile.prototype.colour='pink'
console.log(samsung.colour);


// let mobile=function (model) {
//     this.model=model
//     this.price=300 
    
// }
// var samsung=new mobile('galaxy')
// console.log(samsung);

// let mobile=function(name) {
//     this.name=name
//     this.age=19
    
// }
// var nokia=new mobile('galaxy')
// mobile.prototype.colour='pink'
// console.log(nokia);


// console.log(nokia.colour);


// function Add(name,Surname) {
//     this.a=name
//     this.b=Surname
    
// }
// let e=new Add('gayatri','shelke')
// console.log(e);


// const value1 = 900719925124740998n;

// // Adding two big integers
// const result1 = value1 + 1n;
// console.log(result1); // "900719925124740999n"

// const value2 = 900719925124740998n;

// // Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2); 


// let a = 'JavaScript';

// a += ' tutorial';  // a = a + ' tutorial';
// console.log(a);


// function dectobinary(n) {
//     let binarynum=new Array(23)
//     let i=0
//     while(n>0){
//         binarynum[i]=n%2;
//         n=Math.floor(n/2)
//         i++
//     }
//     for(let j=i-1;j>=0;j--)
//     console.log(binarynum[j]);
    
// }
// let n=17
// dectobinary(n)


// const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

// const num=([...new Set(numbers)])
// console.log(num);

// var number=[1,2,3,4,5,1,2,3,9,89]
// var num=([...new Set(number)])
// console.log(num);
// [2, 3, 4, 5, 6, 7, 32]


// const result = void(1 + 1);
// console.log(result);

