let sum = 10 + 5;
 console.log("сумма", sum);

let differents = 5 - 3;
console.log("разность", differents);

let difference = 5 * 3;
console.log("произведение", difference);

let quoyient = 5 / 3;
console.log("частное", quoyient);

let quo = 5 % 3;
console.log("остаток деления на 3", quo);

let expoutatition = 5 ** 3;
console.log("возведение в степень", expoutatition);

let isEqual = (5 == 5)
console.log("равенство", isEqual);

let isStrictEqual = (5 === 5)
console.log("строгое равенство", isStrictEqual);

let isNotEqual = (5 != 3)
console.log("неравенство", isNotEqual);

let isNotEqual1 = (5 !== 3)
let isNotEqual2 = (5 !== 3)
console.log("строгое неравенство", isNotEqual1);
console.log("строгое неравенство", isNotEqual2);

let isLess = (5 > 3)
console.log("меньше", isLess);

let isGreaterofEqual = (5 >= 3)
console.log("больше или равно", isGreaterofEqual);

let isNotGreaterofEqual = (5 <= 3)
console.log("меньше или равно", isNotGreaterofEqual);

// Условные конструкции
let age = -5

if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

let userAge = 16

if (userAge >= 0 && userAge < 18){
    console.log("Вы несовершеннолетний");
} else if (userAge >= 18 && userAge <= 50) {
    console.log("Вы совершеннолетний, молодой человек");
} else if (userAge > 50 && userAge < 120){
    console.log("Вы пенсионер");
} else {
    console.log("Некоректный формат")
}



     
