const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const Height=parseInt(document.querySelector('#Height').value);
    const Weight=parseInt(document.querySelector('#Weight').value);
    const results=document.querySelector('#results');
    if(Height==='' || Height<0 || isNaN(Height)){
        results.innerHTML=`please enter a valid height ${Height}`
    }else 
    if(Weight===''|| Weight<0|| isNaN(Weight)){
        results.innerHTML=`please enter valid weight ${Weight}`
    }
    else{
        const bmi=(Weight / ((Height * Height) / 10000)).toFixed(2);
      results.innerHTML=`<span>${bmi}</span>`
    
    if(bmi<18.6){
        results.innerHTML=`<span>${bmi} : Under Weight</span>`;
    }
    else if(bmi<18.6 || bmi>24.9){
        results.innerHTML=`<span>${bmi} : Normal Range</span>`
    }
     else(bmi>24.9)
        results.innerHTML=`<span>${bmi} :Over Weight</span>`
}
});