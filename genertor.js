// function* add() {
//     let i=1
//     while(true)
//     yield i++
//     // yield 2
//     // yield 3
    
// }
// let a=add()
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


let array=[[a,1],[b,2]]
d={}
for( i of array){
    for(j of array){
        d[i]=j
        console.log(d);

    }
    // console.log(d);
}
// console.log(d);