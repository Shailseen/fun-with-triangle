const inputBox = document.querySelectorAll(".input-box");
const areaBtn = document.querySelector("#area-btn");
const message = document.querySelector("#outPutBox");

function validateInputData(){
    if((Number(inputBox[0].value) <= 0) || (Number(inputBox[1].value) <= 0)){
        message.innerText = "Please enter valid data,Feilds can't be Negative, Zero Or Empty!!"
    }
    else
    calucatHypotaneous();
}
function calucatHypotaneous(){
    var base = Math.pow(Number(inputBox[0].value),2);
    var perpendicular = Math.pow(Number(inputBox[1].value),2);
    var sumOfSquaring = base + perpendicular;
    var hypotaneous = Math.sqrt(sumOfSquaring);
    hypotaneous = hypotaneous.toFixed(2);
    message.innerText = "Hypotaneous of a traingle: " + hypotaneous;
}
areaBtn.addEventListener("click",validateInputData)
