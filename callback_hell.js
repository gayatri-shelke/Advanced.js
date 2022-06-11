// const getinfo=()=>{
// setTimeout(() => {
//     console.log("hello");
//     let roll_no=[1,2,3,4,5]
//     console.log(roll_no);
//     setTimeout((roll_no) => {
//         const biodata={
//             name:"gayatri",
//             age:19
//         }
//         console.log(`my roll_no is ${roll_no}.my name is ${biodata.name}. and i am ${biodata.age}yeras old`);
//         setTimeout((name) => {
//             biodata.gender='female'       
//             console.log(`my roll_no is ${roll_no}.my name is ${biodata.name}. and i am ${biodata.age}yeras old.i am an gayatri ${biodata.gender}`);



//         }, 2000,biodata.name);
//     },2000,roll_no[1]);
    
// }, 2000);

// }
// getinfo()

// setTimeout(handler:any,timeout?:long,argument:...any)


function add(a,callback) {
    console.log('hii');
    // callback()
    
}
function sum() {
    console.log('hello');

    
}
add(4,sum)