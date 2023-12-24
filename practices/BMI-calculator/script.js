

// BMI calculator 
// const inputSubmit = document.getElementById("submit-btn");
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputHeight = parseInt(document.getElementById("height").value);
    const inputWeight = parseInt(document.getElementById("weight").value);
    const results  = document.querySelector(".result");
    const error = document.querySelector(".error");
    const bmimessage = document.querySelector(".bmi");
    if(inputHeight == '' || inputHeight < 0 || isNaN(inputHeight)){
        error.innerHTML = `${inputHeight} please enter a valid height`
        results.innerHTML = '';
        bmimessage.innerHTML = ""
    }else if(inputWeight == '' || inputWeight < 0 || isNaN(inputWeight)){
        error.innerHTML = `${inputWeight} please enter a valid weight`
        results.innerHTML = '';
        bmimessage.innerHTML = ""
    }else {
       results.innerHTML = (inputWeight / ( (inputHeight * inputHeight) / 10000)).toFixed(2);
       bmimessage.innerHTML = "আপনার বিএমআই "
    }
    
})

