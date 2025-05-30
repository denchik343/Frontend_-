console.log("Hello World");
console.log(543);
console.log("543");

//var ключ. слово
var myName="John Doe";
console.log(myName);

//let ключ. слово
let myAge="30";
console.log(myAge);
myAge="31"//изменяем значение переменной
console.log(myAge);

//const ключ. слово
const myCity="New York";
console.log(myCity);
//myCity="Los Angeles";//ошибка: нельзя изменить значение константы
//console.log(myCity);
//типы данных
console.log(typeof myName); //string
console.log(typeof myAge);  //number

let stringValue = "Hello World"; //строка
let numberValue = 42;            //число
let floatValue =3.14;             //число с плавающей точкой
let booleanValue  = true;         //логическое значение
let nullValue = null;           //пустое значение
let underfinedValue;             //неопределённое значение

let objectValue = { name: "John", age: 30};//обьект
//работа с обьектами
console.log(objectValue); //1, 2, 3, 4, 5, John
console.log(objectValue.name); // John
console.log(objectValue["age"]); // 30

//рфбота с массивами
let arrayValue = [1, 2, 3, 4, 5, 'John'];
console.log(arrayValue);
console.log(arrayValue["5"]);
console.log("длина списка arrayvalue:", arrayValue.lenth );
console.log(arrayValue[0] + arrayValue[1]);
console.log(arrayValue[0] + arrayValue[1] + arrayValue[5]);