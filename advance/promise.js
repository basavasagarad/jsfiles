// const promisefour=new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username: "Basava",email:"basava@gmail.com"})
//         }else{
//             reject('Error:Something went wrong')
//         }
//     },1000)
// })
// promisefour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("either its resolved or rejected"))


// const One=new Promise(function(resolve,reject){
//    setTimeout(function(){
//         console.log("hello")
//         resolve()
//    },1000)
// })
// promiseFive.then(function(){
//     console.log("completed")
// })

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
          let error=true
        if(!error){
            resolve({username: "Basava",email:"basava@gmail.com"})
        }else{
            reject('Error:Something went wrong')
        }
    },1000)
})
async function consumepromisefie() {
try {
    const responce=await promiseFive
    console.log(responce)
    
} catch (error) {
    console.log(error);
    
}
}
consumepromisefie()