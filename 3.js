// Задание 1
// Напишите функцию, которая принимает три числовых аргумента: number, min, max.
// Функция проверяет, находится ли число number в диапазоне чисел от min до max.
// 1 вариант решения: с помощью логического И в условии.
// *2 вариант решения: с помощью логического ИЛИ в условии.


let number = +prompt('Введите число');
let min = +prompt('Введите минимальное число');
let max = +prompt('Введите максимальное число');

function isMinOrMax (number, min, max){
   
    if (number > min && number < max){
        console.log(`Число ${number} находится в диапазоне чисел от ${min} до ${max}`);
    } else {
       console.log(`Не находится`);
    }

}

isMinOrMax(number, min, max);




// Задание 2

// Есть объект с именами и заработными платами инженеров:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.


const engineers = {
Den: 1000,
Matt: 5000,
Steve: 2000
}
for (let name in engineers) {
    console.log( `Заработная плата ${name} составляет ${engineers[name]} рублей.`);
}





// Задание 3


// Создать массив из 5 элементов.

// Используя цикл for, вывести каждый второй элемент массива в консоль.

let array = [5, 55, 65, 75, 85];

for (i = 2; i < array.length; i += 2){
    console.log(array[i]);
}





// Задание 4


// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

for (i = 0; i < numbers.length; i++){
    console.log(`Индексу ${i} соответствует число ${numbers[i]} `)
}

// Задание 5

// Дан массив объектов, например:

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.


let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];


for(let item of questions){
    item.usersAnswer = null;
}




// Задание 6


// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]


// 1) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).


let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let sum = 0;

for(let item of numbers){
    sum += item;
}

console.log(sum);



// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.


let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let sum = 0;
for(i = 2; i < numbers.length; i += 2){
    sum += numbers[i];
}

console.log(sum);


// 3) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.


let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let max = numbers[0];

for(let item of numbers){
    if(item > max){
    max = item;}
}

console.log(max);


// 4) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.


let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

let max = 70;

for (i = 0; i < numbers.length; i++){
    if(numbers[i] === 70){
    console.log(i);}
}






// Задание 7

// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.


let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

let arrPositives = [];
for(let item of arr){
    if(item > 0){
        arrPositives.push(item);
    }
}

console.log(arrPositives);






// Задание 8


// Написать функцию, которая принимает массив (array) и число (num).

// Функция должна создать новый массив из элементов массива array, и в этом новом массиве должны содержаться только элементы, больше и равные (>=) значению num.

let array = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let num = -1;
newArray = [];

function arrFunc (array, num){
    for(item of array){
        if (item >= num){
            newArray.push(item);
        }
    }
    console.log(newArray);
}

arrFunc(array, num);


// Задание 9

// Существует массив пользователей, например:

// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.


const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

for (let item of users){
    if (item.age > 15){
        console.log(item.name);
    }
}





// Задание 10*

// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):

// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]

// Вывести этот массив в консоль.

// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

//РЕШЕНИЕ



let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

let newArr = []

for(let word of vegetables){
    newArr.push({word});
}

for (let item of newArr){
    item.length = item.word.length;
}

console.log(newArr);

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

//РЕШЕНИЕ



let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

let newArr = []

for(let word of vegetables){
    newArr.push({word});
}

for (let item of newArr){
    item.length = item.word.length;
}

for (let i = 0; i < newArr.length; i++){
    console.log(`${newArr[i].word} - ${newArr[i].length}`);
}


