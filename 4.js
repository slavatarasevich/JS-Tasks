// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.

// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

// Примеры результатов вызова функции:

// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

//РЕШЕНИЕ

let sumFunction = (a, b) => {
   
    if (typeof a === 'string' || b === '!string'){
        console.log('введенные данные не являются числами');
    }else if (typeof a === 'object' || typeof b === 'object'){
        console.log('введенные данные не являются числами');
    } else if (a == null || b == null){
        console.log('введите два параметра');
    } else if(a === null && b === null){
        console.log('введите два параметра');
    } else {
        let sum = a + b;
        return sum
    }
   
}

console.log(sumFunction(2,1));




// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"


// function square(a) {
//   console.log(a * a)
// }

// square(10) // 100

// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

//РЕШЕНИЕ

function square(a) {
    if (a == null){
        console.log('Uncaught Error: Функция "square" не может быть вызвана без аргумента');
    } else {
        console.log(a * a);
    }
 
}

square();





// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.

// Написать функцию в стрелочном синтаксисе.

//РЕШЕНИЕ

let yourNumber = +prompt('введите ваш номер от 1 до 10');

if (yourNumber > 0 && yourNumber <= 10){

    let randomNumber = (min,max) => Math.floor(Math.random() * (max - min)) + min;
    let rNumb = randomNumber(1,11);
    
    let guessNumber = (number) => {
        if (number === rNumb){
            console.log('Вы угадали число');
        } else{
            console.log(`Вы не угадали, ваше число - ${number}, а выпало число ${rNumb}`);
        }
    }
    
    guessNumber(yourNumber);

} else{
    console.log('Вы ввели число не из диапазон 1..10, попробуйте еще раз')
}





// Задание 4

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


//РЕШЕНИЕ

let a = +prompt('Введите число для сравнения элементов массива');
let arr = [5, 4, 3, 8, 0];
let newArr = [];
let filterFor = (array, a) => {
for (let element of array){
    if(element >= a){
        newArr.push(element);
    }
}
return console.log(newArr)
}

filterFor(arr, a);





// Задание 5

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

//РЕШЕНИЕ

let copyArr = arr =>  newArr = arr.map(item => item);





// Задание 6

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

//РЕШЕНИЕ

const objectWithNumbers = { a: 10, b: 20, c: 'string', d: 12};

let count = 0;

let sumObjectValues = obj => {
    
    for(let property in obj){
        if(typeof obj[property] === 'number')
        count += obj[property];
    }
    return count
}

sumObjectValues(objectWithNumbers);

console.log(count);