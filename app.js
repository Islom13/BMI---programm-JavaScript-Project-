function imt() {

    var userName = document.querySelector('#name');
    var userWeight = document.querySelector('#weight');
    var userHeight = document.querySelector('#height');
    var result = document.querySelector('.result');

    var weight = (parseFloat(userWeight.value));
    var height = (parseFloat(userHeight.value)) / 100;

    var imtCalculate = (weight / (Math.pow(height, 2))).toFixed(2);

    if (imtCalculate <= 16) {
        result.textContent = " Ваш ИМТ равен: " + userName.value + " " +
            imtCalculate + " Выраженный дефицит массы тела ";

    } else if (imtCalculate > 16 && imtCalculate < 18.5) {
        result.textContent = " Ваш ИМТ равен: " + userName.value + " " +
            imtCalculate + " Недостаточная (дефицит) масса тела ";

    } else if (imtCalculate > 18.5 && imtCalculate < 25) {
        result.textContent = " Ваш ИМТ равен: " + userName.value + " " +
            imtCalculate + " Норма ";

    } else if (imtCalculate > 25 && imtCalculate < 30) {
        result.textContent = " Ваш ИМТ равен: " + userName.value + " " +
            imtCalculate + " Избыточная масса тела (предожирение) ";

    } else if (imtCalculate > 30 && imtCalculate < 35) {
        result.textContent = " Ваш ИМТ равен: " + userName.value + " " +
            imtCalculate + " Ожирение первой степени ";

    } else if (imtCalculate > 35 && imtCalculate < 40) {
        result.textContent = " Ваш ИМТ равен: " + userName.value + " " +
            imtCalculate + " Ожирение второй степени ";

    } else if (imtCalculate > 40) {
        result.textContent = " Ваш ИМТ равен: " + userName.value + " " +
            imtCalculate + " Ожирение третьей степени (морбидное) ";
    }
}