let foo = ()=>{
    document.querySelector("h1").innerText = "Lee Morgan";

    let pOne = document.querySelector("p:first-of-type");
    let pTwo = document.querySelector(".secondPara");

    let temp = pOne.innerText;
    pOne.innerText = pTwo.innerText;
    pTwo.innerText = temp;
    button.removeEventListener("click", foo);
}

let button = document.querySelector("button");

button.addEventListener("click", foo);