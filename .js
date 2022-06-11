// let get_all=new Promise(function (resolve,reject) {
//     console.log("frist hello");
//     resolve("frist hello ")
// })
// let get_a=new Promise(function (resolve,reject) {
//     console.log("second hello");
//     resolve("second hello")
    
// })
    
// Promise.all(get_all,get_a).then().catch()
// console.log("frist");




function get(a,b) {
    return  new Promise(function (resolve,reject) {
        var c=a+b
        if (a,b){
            resolve(`i am sucess ${c}`)
        }
        else{
            reject('no')
        }
        
    })
}

get(3,4).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})


// complete().then()
// complete().catch()