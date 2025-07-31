const mysym= Symbol("key1")
const jsuser={
    name:"Basava",
    age:23,
    // syntax to declare symbol
    [mysym]:"mykey1",
    Email:"d.bsagarad@gmail.com",
    isLoggedin:true
}
// ways to access the elements in an object
// console.log(jsuser.Email);
// console.log(jsuser["Email"])
// console.log(jsuser[mysym])
jsuser.greeting=function(){
    console.log("Hello user");  
}
jsuser.greeting2=function(){
    console.log(`Hello user ${this.name}`);  
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
