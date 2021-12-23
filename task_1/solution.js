function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    // создайте переменную message
    let messege;
    // присвойте переменной message значение переменной productName
    messege = productName;
    // добавьте в конец переменной message пробел
    const a = ' ';
    messege = messege + a;
    // добавьте в конец переменной message текст 'за'
    messege = messege + 'за';
    // добавьте в конец переменной message пробел
    messege = messege + a;
    // добавьте в конец переменной message значение переменной productPrice
    messege = messege + productPrice;
    // добавьте в конец переменной message пробел
    messege = messege + a;
    // добавьте в конец переменной message текст 'теперь в корзине!'
    messege = messege + 'теперь в корзине!';
    // выведите переменную message в консоль
    console.log(messege.toString);
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    // создайте переменную newValue
    let newValue;
    // присвойте ей значение oldValue
    newValue = oldValue;
    // увеличьте значение newValue на 1
    newValue ++;
    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    let newSum = oldSum + difference;
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    let newSumText;
    let text = ' ₽';
    newSumText = newSum + text;
    // замените склеивание, используемое в newSum Text на шаблонную строку
    let templateString = '${newSum} ₽';
    // Конец решения задания №1.3.

    return newSumText;
}

