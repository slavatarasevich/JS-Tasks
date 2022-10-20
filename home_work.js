'use strict';

// читать про рекурсию, Set, Map, генераторы. экспорты/импорты

// ниже решение всех задач через РЕКУРСИЮ !

// Задача 1

let arr = [5, 5, 7, 3, 2, 3];


function summ(arr){
    let res = 0;
    if (arr.length === 1){
        return res += arr[0]
    } else{
       for (i = 0; i < arr.length -1; i++){
            res += arr[arr.length-1];
            arr.pop();
            return res + summ(arr)
       }
    } 
    return res
}

console.log(summ(arr));




//Задача 2

// const users = [
//   {
//     name: "Ihar",
//     children: [
//       {
//         name: "Alex",
//         children: [],
//       },
//       {
//         name: "Oleg",
//         children: [
//           {
//             name: "Olya",
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Katya",
//     children: [
//       {
//         name: "Kirill",
//         children: [
//           {
//             name: "Viktor",
//             children: [],
//           },
//         ],
//       },
//       {
//         name: "Liza",
//         children: [],
//       },
//     ],
//   },
// ];

// function getNames(users) {}

// getNames(users); // ['Ihar', 'Katya', 'Alex', 'Oleg', 'Olya', 'Kirill', 'Liza', 'Viktor']



//---------- решение-----------



// Ihar >> 
//         ALex,
//         Oleg>> 
//                Olya


// Katya >>
//          Kirill>>
//                  Viktor
//          Liza


// function getNames(obj) {
//     let newArr = [];
//     obj.forEach(elem=> {
//         newArr.push(elem.name)
//         newArr.push(elem.children[0].name)
//         newArr.push(elem.children[1].name)
//         newArr.push(elem.children[0].name[0].children[0].name)
//         newArr.push(elem.children[1].name[1].children[1].name)

//     }
//     )
//     return newArr
// }



// console.log(getNames(users));



// ------------ Задача 3 -----------

// const nums = [2, 4, 10, [12, 4, [999, 99], 4], [3, 2, 99], 0];

// function getMax(numbers) {}

// getMax(nums); // 999



//--------- решение ----------



// let nums = [2, 4, 10, [12, 4, [999, 99], 4], [3, 2, 99], 0];

// function getMax(numbers) {
// let newArr = [];
// numbers.forEach(elem => {
//     if (typeof elem === Array){
//        newArr.push(elem.slice(' ')) 
//        getMax(numbers)}
//     else
//     {
//         console.log(newArr.push(elem))
//     } 
    
// })
// console.log(newArr)
// return newArr
// }
// getMax(nums);




// let newArr = [];

// newArr.push(nums[3].slice(''));

// // console.log(nums, newArg)

// function parsAllNums(arr){
//     let newArr = [];
    
//     for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'number'){
//         newArr.push(arr[i]);
//     }
    
//     return console.log(newArr)
    
//     }
// }
// console.log(parsAllNums(nums));