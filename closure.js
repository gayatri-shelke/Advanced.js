// const outerfun=(a)=>{
//     let b=10
//     const innerfun=()=>{
//         console.log(a+b);
//     }
//     innerfun()
// }
// outerfun(5)



// const outerfun=(a)=>{
//     let b=10
//     const innerfun=()=>{
//         console.log(a+b);
//     }
//     return innerfun()
// }
// let inner=outerfun(5)
// // console.dir(inner);
// console.log(inner);
// inner()

// const out=(a)=>{
//     let b=10
//     const inner=()=>{
//         console.log(a+b);
//     }
//     inner()
//     // console.log(inner);
// }
// out(5)


// let out=(a)=>{
//     b=10
//     let inner=()=>{
//         console.log(a+b);
//     }
//     inner()
// }
// out(6)

let out=(a)=>{
    b=5
    let inner=()=>{
        console.log(a+b);
    }
    inner()
}
out(5)


// let innerfun=out(3)
// console.log(innerfun);
// innerfun()

// x=5;
// console.log(x);
// var x;

// function out(){
//     function inner(){
//         console.log("p");
//     }
//     return inner();
// }
// out()


// let now=new Date()
// now.setDate(11)
// console.log(now);
// console.log(now.getFullYear());