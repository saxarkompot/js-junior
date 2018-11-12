var box;
var result = document.getElementById("result");
var equalClicked;
function clickButton() {
    if(equalClicked){
    result.value = "";
}
    result.value += this.innerText;
}
var arrayDigit = document.getElementsByClassName("digit");
for (var i = 0; i < arrayDigit.length; i++) {
    arrayDigit[i].onclick = clickButton;
    
}


var plus = document.getElementById("sum");
var equalBtn = document.getElementById("equal");
var clickedOperator;

var equal = function () {
    if (clickedOperator == "+")
        result.value = parseInt(box) + parseInt(result.value);
    if (clickedOperator == "-")
        result.value = parseInt(box) - parseInt(result.value);
    if (clickedOperator == "x")
        result.value = parseInt(box) * parseInt(result.value);
    equalClicked = true;
}
equalBtn.onclick = equal;


var operation = function () {
    box = result.value;
    result.value = "";
    clickedOperator = this.innerText;
}

var arrayOperator = document.getElementsByClassName("operator");
for (var i = 0; i < arrayOperator.length; i++) {
    arrayOperator[i].onclick = operation;
}

