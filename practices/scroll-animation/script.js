
window.addEventListener("scroll",()=> {
    let container2 = document.querySelector(".container2")
    let contentPosition = container2.getBoundingClientRect().top;
    let sceenPositon = window.innerHeight / 2;
    if(contentPosition < sceenPositon){
        let section2 = document.querySelector(".sec-2")
        section2.classList.add("show");
    }else {
        let section2 = document.querySelector(".sec-2")
        section2.classList.remove("show");
    }

})