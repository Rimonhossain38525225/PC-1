const inputEl = document.getElementById("inputEl")


function removeme() {
    inputEl.value = '' ;
}

function calculate(value) {
    inputEl.value += value;
}

function result() {
    let a =  inputEl.value
    // console.log(typeof a)
    if( a.startsWith('/') || a.startsWith('*')){
        let b =inputEl.value = "please a valid number"
        inputEl.style.color = "red"
        return b;
    }else {
        let b =  eval(a)
        inputEl.value = b
    }
}