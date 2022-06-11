var array=[1,2,3,4,2,3,1,7,1,8]
var a=[...new Set (array)]
console.log(a);

// b=[]
// for (i of array){
//     if (!b.includes(i)){
//         b.push(i)
//     }

// }
// console.log(b);


// b=[]
// for (i of array){
//     count=0
//     for(j of array){
//         if(i==j){
//             count+=1

//         }
//     }
//     if(count>=2){
//         if(!b.includes(i)){
//             b.push(i)
//         }
//     }
// }
// console.log(b);






// let array=[1,0,2,0,3,0,4,0,5]
// let i=1
// let b=[]
// let c=[]
// while(i<array.length){
//     if(array[i]>1){
//        b.push(array[i])
//     }
//     else{
//         c.push(array[i])
//     }
//     i++
// }
// console.log(b + " " + c);



// var array=[1,2,3,4,5,6,7,8,9,1]
// var b=[]
// let a=array.filter((e)=>{
//     // return e>5

// })
// console.log(a);

// var dict={0:1,0:2,1:2,1:3,2:6}
// console.log([...new WeakSet(dict)]);



// const pets = new WeakSet();
// const cat = {name: "fluffy"};
// const dog = {name: "badger"};

// pets.add(cat);
// pets.add(dog);
// console.log(pets);



