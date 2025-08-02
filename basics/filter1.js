// // // filter operation
// const newnum=[1,2,3,4,5,6,7,8,9,10]
// // const newuser=newnum.filter( (num) => num>4 )
// // console.log(newuser);
// const newuser=[];
// newnum.forEach( (num) =>{
//     if(num >4)
//         newuser.push(num)
// })
// console.log(newuser);

//map
const mynum=[1,2,3,4,5,6,7,8,9]
// const number=mynum.map( (num) => num+10)
// console.log(number);

// reduce
const number=mynum.reduce( (acc,num) => acc+num ,0)
console.log(number);
