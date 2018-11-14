var box;// создаем переменную в которой будем сохранять первое введенное число
var result = document.getElementById("result");
var equalClicked;// создаем переменную которая подтверждает что знак "=" нажат
var box2;// создаем переменную для хранения второго введенного числа
function clickButton() {// функция для обновления и отображения результата при клике на кнопку с цифрой
    /* 
    if (equalClicked) { 
        result.value = "";  - видимо из-за изменений эта функция уже не нужна
        }
    */
    result.value += this.innerText;
    box2 = result.value;
}

var arrayDigit = document.getElementsByClassName("digit");// массив из кнопок с цифрами
for (var i = 0; i < arrayDigit.length; i++) {// создаем цикл для клика на кнопки с цифрами
    arrayDigit[i].onclick = clickButton;
}

var equalBtn = document.getElementById("equal");
var clickedOperator; // создаем переменную в которую вложен один из символов вычисления(+,-,*...)

var equal = function () {// функция для вычисления при нажатии на знак "="

    if (clickedOperator == "+") {//если нажат "+", 
        result.value = parseInt(box) + parseInt(result.value);//то содержимое окна результатов равно сумме первого и второго введенных чисел
        box = box2;//после чего первое введенное число заменяем вторым введенным,
    }              //и в дальнейшем при нажатии на "=", к итоговой сумме всегда прибавляем второе число
    if (clickedOperator == "-") {//если нажат "-"
        result.value = parseInt(box) - parseInt(box2);
        box = result.value; //после чего первое введеное число заменяем итоговым результатом,
    }                       //и в дальнейшем из него вычитаем второе число
                            //операции с умножением и делением действуют по тому же принциу, соответственно
    if (clickedOperator == "x") {
        result.value = parseInt(box) * parseInt(result.value);
        box = box2;
    }
    if (clickedOperator == "÷") {
        result.value = parseInt(box) / parseInt(box2);
        box = result.value;
    }
    //equalClicked = true;  - видимо из-за изменений эта функция уже не нужна

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