let colors = document.getElementById("colorPicker");
let colorsList = document.getElementById("pick");
let body = document.getElementById("bdy");


let changeBackground = () => {
    body.style.backgroundColor = colorsList.value; 
}
colorsList.addEventListener("click", changeBackground);