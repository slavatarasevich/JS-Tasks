// ------------ 1.1


let arr = ["red", "gray", "green", "green", "gray", "gray"];
let obj = {};
let counter = 1;

function itemCounter(arr){
    arr.forEach(element => {
        obj[element] = arr.indexOf(element) + 1;
    }); 
};

itemCounter(arr);
console.log(obj);

// itemCounter(["red", "gray", "green", "green", "gray", "gray"]); // {red: 1, gray: 3, green: 2}



// ------------- 1.2



let arr = [4, 6, 1, 2, -8, 7];
function summ(arr) { // через reduce
return arr.reduce((a,b)=> a + b)
}
console.log(summ(arr));

// summ([4, 6, 1, 2, -8, 7]) // 12




// -------------- 1.3 (не получилась)



let arr = [4, 6, 0, 6, 4, 6];

function summToFirstZeroElem(arr) { // сумма до первого нуля в массиве , через reduce
   return arr.reduce((a,b) => {

    while (b != 0){
        return a + b;}
    if (b = 0) break; // НЕ ПРИДУМАЛ КАК ОСТАНОВИТЬ ИТЕРАЦИЮ КОГДА b ПРИНИМАЕТ 0
    }
)

console.log(summToFirstZeroElem(arr));
// summToFirstZeroElem([4, 6, 1, 0, 2, -8, 7]) // 11










// вторая часть

// Разместить на странице несколько картинок. При клике на любую картинку,
// она плавно становится на бэкграунд всей страницы,
// а тег картинки получает уникальные css свойства (чтобы было понятно, что сейчас эта картинка
// является выбранным элементом(например бордер появляется жирный или чет еще)).
// При перезагрузке страницы последнее выбранное
// состояние должно сохраниться, реализовать через LocalStorage.
