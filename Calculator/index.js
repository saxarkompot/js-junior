var box;// создаем переменную в которой будем сохранять первое введенное число
var result = document.getElementById("result");
var equalClicked;// создаем переменную которая подтверждает что знак "=" нажат
var box2;// создаем переменную для хранения второго введенного числа
function clickButton() {// функция для обновления и отображения результата при клике на кнопку с цифрой

    /*если кнопка "равно" кликнута, то
при нажатии на кнопку с цифрой, 
цифры вводятся в обновленное окно результата
то результат больше не очищается, а дополняется*/
    if (equalClicked) { 
        result.value = ""; 
        equalClicked = false;
        
    }

    result.value += this.innerText;// в окно результата помещается цифра кликнутой кнопки
    box2 = result.value;// в переменную кладем введенное число
}

var arrayDigit = document.getElementsByClassName("digit");// массив из кнопок с цифрами
for (var i = 0; i < arrayDigit.length; i++) {// создаем цикл для клика на кнопки с цифрами
    arrayDigit[i].onclick = clickButton;
}

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
        if (box2 == 0) {
            result.value = "ERROR";
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
    arrayOperator[i].onclick = operation;
}

