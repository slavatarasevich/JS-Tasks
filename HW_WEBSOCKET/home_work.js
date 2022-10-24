'use strict';

// сделать так, чтобы код ниже работал
//----------НЕ СДЕЛАЛ----------------

// let obj = {
//     [5]: 5,
//     plus(x){
//     return this + x
//     },
//     minus (y){
//     return this - y
// }


// const value = (5).plus(2).minus(3);
// console.log(value); // 4

//------------------------------------------------------------------------------------------

// что сломалось? почему в консоли 10 раз 10 ?
// 1) требуется, четко объяснить, что произошло - прочитал много объяснений, но все еще пока укладывается в голове, может на занятии ты объяснишь лучше...
// 2) сделать так, чтобы в консоли было от 0 до 9 МИНИМУМ ДВУМЯ способами! по хорошему ТРЕМЯ и более!

// условия:
// 1) не убирать setTimeout
// 2) результат в консоли должен быть как на скрине
// 3) цифру 10 и 100 менять тоже нельзя

// 1)

// console.log("start");
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }
// console.log("end");

//2)

// console.log("start");

// for(var i = 1; i < 10; i++) {
//     setTimeout(function (i) {
//       console.log(i);
//     }, 100, i);
//   }
// console.log("end");



//--------- WEBSOCKET-----------


// let socket = new WebSocket("wss://socketsbay.com/wss/v2/2/demo/");
// socket.onopen = function() {
//     console.log("[open] Соединение установлено");
//     // console.log("Отправляем данные на сервер");
//     // socket.send('');
// };

// socket.onmessage = function(event){
//  console.log('Получаем данные с сервера');
//  console.log(event.data);
//  createAndUpdate(event.data);
// }

// function createAndUpdate(update)
// {
//  document.querySelector('.TV').style.color = 'white';
//  document.querySelector('.TV').style.paddingTop = '10px';
//  document.querySelector('.TV').innerHTML = update;
// }

// socket.onclose = function(event) {
//     if (event.wasClean) {
//         console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//     } else {
//         console.log('[close] Соединение прервано');
//     }
// };


// socket.onerror = function(error) {
//     console.log(`[error] ${error.message}`);
// };

// document.querySelector('button').addEventListener('click', function closeConnection(){
//     socket.close();
//     console.log('connection is closed')
// });


