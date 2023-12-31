// ++++++++++++++++++++++++reduce+++++++++++++++++
// const num1 = [1,2,3,4,5,6,7,8]
// const total = num1.reduce((a,b)=>a+b,0)

// console.log(total)
// console.log(1+2+3+4+5+6+7+8)

const button = document.querySelector("button")
function createCard(num) {
    // find and create Element 
    const maincard = document.getElementsByClassName("card")[0]
    const cardContainer = document.querySelector(".card-container");

    const card = document.createElement("div");
    const cardTitle = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardH2 = document.createElement("h2");
    const p = document.createElement("p");
    const span1 = document.createElement("span")

    // set all class 
    card.setAttribute("class","card");
    cardTitle.setAttribute("class","card-title");
    cardBody.setAttribute("class","card-body");

    // set text node and others Element
    span1.appendChild(document.createTextNode(" ♥ ♥"))
    cardH2.appendChild(document.createTextNode(`card ${num}`));
    p.appendChild(document.createTextNode(` I Love You ${num}`));
    p.appendChild(span1)
    cardBody.appendChild(p);
    // cardTitle.appendChild(cardH2);
    // card.appendChild(cardTitle);
    card.appendChild(cardBody);
    cardContainer.insertBefore(card,maincard)
}

let count = 2
button.addEventListener("click", () => {
    button.style.display = "none"
    setInterval(() => {
        createCard(count++)
    },500);

})




// function pageScroll() {
//     window.scrollBy(0,50); // horizontal and vertical scroll increments
//     scrolldelay = setTimeout(pageScroll(),100); // scrolls every 100 milliseconds
// }