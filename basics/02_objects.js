//singleton

const tinder={}
tinder.id="134ab"
tinder.name="Basava"
tinder.isLoggedin=true
// // console.log(tinder)
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

//objects in array
// object destructuring
const strc={
    name:"basava",
    work:"Fresher",
    Shift:"Normal"
}
const {work}=strc
// here we accesed object element without using dot operator
console.log(work)