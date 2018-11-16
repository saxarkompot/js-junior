var box;// создаем переменную в которой будем сохранять первое введенное число
var result = document.getElementById("result");
var clean = document.getElementById("clear");
var percent = document.getElementById("percent");
var minus = document.getElementById("minus");
var equalClicked;// создаем переменную которая подтверждает что знак "=" нажат
var box2;// создаем переменную для хранения второго введенного числа

function clickClear() {// если нажимаем кнопку "АС", то поле ввода очищается
    result.value = "";
}
clean.onclick = clickClear;




function clickButton() {// функция для обновления и отображения результата при клике на кнопку с цифрой

    if (result.value == "0" || result.value == "-0") {// если в окне результата только "0"
        result.value = "";     // то, чтобы к нему не добавлялся символ, стираем пустой строкой
    }
    /*если кнопка "равно" кликнута, то
при нажатии на кнопку с цифрой, 
цифры вводятся в обновленное окно результата
то результат больше не очищается, а дополняется*/
    if (equalClicked) {
        result.value = "";
        equalClicked = false;
    }
    /*если нажата не кнопка с символом "." или в окне результата найден символ "."
      то в окно результата помещается цифра кликнутой кнопки*/
    if (this.innerText != "." || result.value.indexOf(".") == -1) {
        result.value += this.innerText;
    }

    if (result.value == ".") { // если в окне результата только "."
        result.value = "0."; // то вместо точки помещаем "0."
    }

    box2 = result.value;// в переменную кладем введенное число
}

var arrayDigit = document.getElementsByClassName("digit");// массив из кнопок с цифрами
for (var i = 0; i < arrayDigit.length; i++) {// создаем цикл для клика на кнопки с цифрами
    arrayDigit[i].style.backgroundColor = "darkslategray";
    arrayDigit[i].style.color = "white";
    arrayDigit[i].onclick = clickButton;
}
var butPoint = arrayDigit["."]
var equalBtn = document.getElementById("equal");

var clickedOperator; // создаем переменную в которую вложен один из символов вычисления(+,-,*...)

var equal = function () {// функция для вычисления при нажатии на знак "="

    if (clickedOperator == "+") {//если нажат "+", 
        result.value = parseFloat(box) + parseFloat(result.value);//то содержимое окна результатов равно сумме первого и второго введенных чисел
        box = box2;//после чего первое введенное число заменяем вторым введенным,
    }              //и в дальнейшем при нажатии на "=", к итоговой сумме всегда прибавляем второе число
    if (clickedOperator == "-") {//если нажат "-"
        result.value = parseFloat(box) - parseFloat(box2);
        box = result.value; //после чего первое введеное число заменяем итоговым результатом,
    }                       //и в дальнейшем из него вычитаем второе число
    //операции с умножением и делением действуют по тому же принципу, соответственно
    if (clickedOperator == "x") {
        result.value = parseFloat(box) * parseFloat(result.value);
        box = box2;
    }
    if (clickedOperator == "÷") {
        result.value = parseFloat(box) / parseFloat(box2);
        box = result.value;
        if (box2 == 0) { // при делении на ноль
            result.value = "ERROR"; // в окне высветится слово "ERROR"
        }
    }
    equalClicked = true;// флаг, подтверждающий что кнопка "=" была кликнута
}
equalBtn.onclick = equal;

var operation = function () {// функция присвоения знака вычисления(оператора) 
    box = result.value;      // и сохранения первого введенного числа
    result.value = "";
    clickedOperator = this.innerText;
}

var arrayOperator = document.getElementsByClassName("operator");
for (var i = 0; i < arrayOperator.length; i++) {//создаем цикл для клика на кнопки с операторами
    arrayOperator[i].style.backgroundColor = "orange";
    arrayOperator[i].style.color = "white";
    arrayOperator[i].onclick = operation;

}
