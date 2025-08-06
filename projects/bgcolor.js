const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
buttons.forEach(function(button) {
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id==='pink') {
            body.style.backgroundColor='pink';
        } 
        if (e.target.id==='red') {
            body.style.backgroundColor=e.target.id;
        } 
        if (e.target.id==='Blue') {
            body.style.backgroundColor=e.target.id;
        } 
        if (e.target.id==='Green') {
            body.style.backgroundColor=e.target.id;
        } 
        
    });
});