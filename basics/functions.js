// syntax to declare function
function calculatecarprice(val1,val2, ...arr){
    return val1,val2,arr
}
// console.log(calculatecarprice(100,200,300,5000))
const user={
    name:"Basava",
    age:23
}
function a(anyobject){
    console.log(`the username is ${anyobject.name} and the age is ${anyobject.age}`);
    
}
a(user)

//accesing array
const arr1=[1,2,3,4]
function getanarr(getanarr){
    return getanarr[2]
}
console.log(
 getanarr(arr1));