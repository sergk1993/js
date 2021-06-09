// let age = 28;
// console.log(age);

// let age = 28;
// age = 29;
// console.log(age);

// let cat = 'Sam'; 
// let dog = cat; 
// alert(cat); //  Sam  
// alert(dog); //  Sam  
// cat = 'Murzik'; 
// alert(cat); // Murzik
// alert(dog); // Sam

// console.log(typeof('')) //string
// console.log(typeof(0)) // number
// console.log(typeof(123)) // number
// console.log(typeof('123')) // string
// console.log(typeof(typeof(777))) // 

// console.log(456545654456545654564645456545654564645456545654564645456545654564645456545654564645564645);

// let hello = 'hello';
// confirm(hello);
// console.log(typeof(hello));

// let yourGender = prompt('Кто ты');
// console.log(yourGender);

// console.log(prompt('Кто ты?'),confirm('Привет'));

// let sum = 999 * 999;
// console.log(sum);

// let sum = 999 ** 99;
// console.log(sum);

// let sum = 999 ** 999;
// console.log(sum);

// let sum = 0.1 + 0.4;
// console.log(sum);

// let sum = 0.1 + 0.2;
// console.log(sum);

// '4' + 5 // 45
// '4' - 5 // -1
// 5 + '4' // 54
// 5 - '4' // 1
// 8 * '4' // 32
// 8 / '4' // 2

// 'пп' + 2 + 3 //пп23
// '' + 2 + 3 // 23
// 2 + 3 + 'пп' //5пп
// '' - 3 + 2 // -1 как не очень понял
// '  3  ' + 2 //  3  2
// '  3  ' - 2 //  1

// NaN + 2 // nan
// NaN + NaN // nan
// NaN - NaN //nan
// null + 2 // 2
// null + null //0
// null - null //0
// undefined + 2 //NaN
// undefined + undefined //nan
// undefined - undefined //nan

// ' \n \t' - 2 // 

// alert ('Привет');
// let yourName = prompt('Как тебя зовут');
// let nameFriend = prompt('Как зовут твоего друга?');
// let apple = +prompt('Сколько у тебя яблок');
// let appleFriend = +prompt('А сколько яблок у твоего друга?');
// let sumApple = (apple + appleFriend);

// let res = alert(`Значит ${yourName} и ${nameFriend} имеют ${sumApple} яблок!`);


// 3 >='2' // true
// '3' >='2' // 
// false == 0 // true
// false === 0// false
// false === false //true
// null === null //true
// 'ваа' >='ббб' // true
// 'я' >='ббб' //true
// 'БББ' >= 'ааа' //true
// ' && '1'
// 1' && ''
// ' || '1'
// '1' || ''
// '1' && '2' || '3'
// '' && '2' || '3'
// '1' && '' || '3'
// '1' && '2' || ''
// 0 && 1 || 2 && 3 || 4 || 5 && 6 && 7
// 3 >=2 && 5 >=4
// 3 >=2 || 5 >=4
// 2 * 3 >=2 * 6
// 2 * 0 || 3 * 1
// '2' / 3 >=2
// null == 0
// NaN == 0
// NaN == NaN
// NaN === NaN
// 2 * 3 >=9 / 2 || 4 % 0 && 12 == 3 * 4 || null
// Infinity >=Infinity * 2
// alert() === alert()

// let name, admin;
// name = 'Джош';
// admin = name;
// alert(name);


// let yourName = "Ilya";

// alert( `hello ${1}` ); // ? hello 1

// alert( `hello ${"name"}` ); // ? hello name

// alert( `hello ${yourName}` ); //  hello ilya

// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// console.log(c,d);

// let a = 2;//4

// let x = 1 + (a *= 2);//5

// console.log(a, x);

// "" + 1 + 0 // 10 
// "" - 1 + 0 // -1
// true + false //1 типа тру это 1 а фолс 0, 1+0=1
// 6 / "3"// 2
// "2" * "3" //6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 // 2
// "4px" - 2// NaN вот тут я тупанул 
// 7 / 0 // Infinity
// "  -9  " + 5 // -9 5
// "  -9  " - 5//  -14 
// null + 1 // 1
// undefined + 1 //NaN тут я ошибся
// " \t \n" - 2//

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 12

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// console.log(c, d);

// let a = 2;

// let x = 1 + (a *= 2);

// 5 > 4 //true
// "ананас" > "яблоко" //false
// "2" > "12" //true не понял как, сравнивает с первым числом то тру
// undefined == null// true
// undefined === null//false
// null == "\n0\n"// false (мой ответ не верный )
// null === +"\n0\n"//false (мой ответ не верный )

// let year = prompt('Год');
//     if (year < 2015) {
//         alert('Слишком мало');
//     } else if(year > 2015){
//         alert('Слишком много');
//     } else{
//         alert('Верно');
//     }

// let age = prompt('Возраст?', 18);

// if (age < 3) {
//     message = 'Здравствуй, малыш!';
//   } else if (age < 18) {
//     message = 'Привет!';
//   } else if (age < 100) {
//     message = 'Здравствуйте!';
//   } else {
//     message = 'Какой необычный возраст!';
//   }

//   alert( message );

// let nameFirm = prompt('Какое «официальное» название JavaScript?');
//     if (nameFirm == 'ECMAScript') {
//         alert('Верно!');    
//     } else {
//         alert('Не знаете? ECMAScript!');
//     }

// let num = prompt('Введите число');
//     if (num > 0){
//         alert(1);
//     } else if (num < 0) {
//         alert(-1);
//     } else{
//         alert(0);
//     }

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

// if (-1 || 0) alert( 'first' );//-1
// if (-1 && 0) alert( 'second' );//0
// if (null || -1 && 1) alert( 'third' );//-1


// let adminName = prompt('Кто там?');

// if (adminName == 'admin') {

//     let pass = prompt('Пароль', '');

//     if (pass == 'Я главный'){
//         alert('Здравствуйте');
//     } else if (pass == '' || pass == null) { 
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if ( adminName == '' || adminName == null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }
     
// let i = 0;

// for (i = 0; i < 3; i++) { // используем существующую переменную
//   alert(i); // 0, 1, 2
// }

// alert(i);

// const div = document.createElement('div');
// const header = document.createElement('h1');
// header.innerText = 'Learn Js';

// div.appendChild(header)
// document.body.appendChild(div)
// console.log(div)
// console.log(header)


// let start = prompt('Какое "официальное" название JavaScript?');

// if (start == 'ECMAScript') {
//     alert('Правильно');
// } else {
//     alert('Непрвильно');
// }


// let num = prompt('Введите число');
// if (num > 0) {
//     alert(1);
// } else if (num < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :
// '' ;

// if (age < 14 || age > 90);

// let hour = 2;



// let userAdmin = prompt('Кто там?', '');


// let helloMessageElement;

// let helloMessagediId = 'hello-message';
// helloMessageElement = document.getElementById(helloMessagediId);


// window.alert(helloMessageElement.value);

// let citiesId;
// citiesId = 'address';
// citiesId = document.getElementById()
// let citiesEl = 'cities';


// const mon = 'Понедельник';
// const tue = 'Вторник';
// const wed = 'Среда';
// const thu = 'Четверг';
// const fri = 'Пятница';

// const info = {
//     name: 'Сергей',
//     age: 28,
//     city: 'Казахстан',
//     isMAil: true
//     };

// console.log(info.name);

// info.name = 'sergo'
// console.log(info.name);


// function sayHello(name, age) {
//     return `Привет ${name} тебе ${age} лет`; 
// }
// const hiSerg = sayHello('Сергей', 28);

// console.log(hiSerg);

// const calculator = {
//     plus: function(a, b) {
//         return a**b;
//     },
//     minus: function() {

//     }
// }

// const summa = calculator.plus(10, 5);
// console.log(summa);


// const title = document.querySelector('#title');
// const CLICKED_CLASS = 'clicked';

// function clickHandler() {
//    title.classList.toggle(CLICKED_CLASS);
// }

// function init(){
//     title.addEventListener('click', clickHandler);
// }

// init();



// const clockContainer = document.querySelector('.js-clock'),
//       clockTitle = clockContainer.querySelector('h1');

// function getTime() {
//     const date = new Date();
//     const minutes = date.getMinutes();
//     const hours = date.getHours();
//     const seconds = date.getSeconds();
//     clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
// }



// function init() {
//     getTime();
//     setInterval(getTime, 1000);
// }

// init();

// let age = prompt('Введите свой возраст'); 

// if (age <= 18 )  {
//      console.log('Вы еще молоды');
// } else if (age < 50) {
//      console.log('Вам нужно работать');
// } else if (age == 50) {
//      console.log('Вам нужно работать');
// } else if (age < 59) {
//      console.log('Вам скоро на пенсию');
// } else if (age == 59) {
//      console.log('Вам скоро на пенсию');
// } else if (age <= 150) {
//      console.log('Вы пенсионер');
// } else {
//      console.log('Ошибка');
// }  

// let age = Number(prompt('Введите свой возраст'));

// if (age > 0 && age <= 18) {
//      console.log('Вы еще молоды');
// } else if (age > 18 && age <=50) {
//      console.log('Вам нужно работать');
// } else if (age > 50 && age <=59) {
//      console.log('Вам скоро на пенсию');
// } else if (age > 59 && age <=150) {
//      console.log('Вы пенсионер');
// } else {
//      console.log('Что то пошло не так');
// }


// let watch = Number(prompt('Введите сколько сейчас времени от 0 до 24'));

// if (watch == 1) {
//      console.log('час ночи');
// } else if (watch >= 2 && watch <=4) {
//      console.log(`${watch} часа ночи`);
// } else if (watch >=5 && watch <= 11) {
//      console.log(`${watch} часов утра`);
// } else if (watch == 12) {
//      console.log('12 часов дня');
// } else if (watch == 13) {
//      console.log(`${watch -12} час дня `);
// } else if (watch >= 14 && watch <= 16) {
//      console.log(`${watch -12} часа дня`);
// } else if (watch == 17) {
//      console.log(`${watch -12} часов дня`);
// } else if (watch >=18 && watch <= 21) {
//      console.log(`${watch -12} часов вечера`);
// } else if (watch >= 22 && watch <= 24) {
//      console.log(`${watch -12} часов ночи`);
// } else {
//      console.log('Ошибка');
// }

//  let watch = Number(prompt('Введите промежуток времени от 0 до 24'));

// if (watch >= 5 && watch <= 11) {
//      console.log('Доброе утро');
// } else if (watch > 11 && watch <=17) {
//      console.log('Добрый день');
// } else if (watch > 17 && watch <=21) {
//      console.log('Добрый вечер');
// } else if (watch > 22 && watch <= 24) {
//      console.log('Доброй ночи');
// } else if (watch >= 0 && watch <= 4) {
//      console.log('Доброй ночи');
// } else {
//      console.log('Не верное число');
// }


// let balls = Number(prompt('Введите любую цифру от 0 до 10'));

// if (balls == 1) {
//      console.log('1 мяч');
// } else if (balls >=2 && balls <=4) {
//      console.log(`${balls} мяча`);
// } else if (balls >=5 && balls <= 10) {
//      console.log(`${balls} мячей`);
// } 

// let balls = Number(prompt('Введите колличество мячей')); // Полхо понял 
// let mod10 = balls % 10;
// let mod100 = balls % 100;

// if (mod10 == 0 || mod100 >= 5 && mod100 <= 19) {
//      console.log(`В зале лежало ${balls} мячей`);
// } else if (mod10 >= 2 && mod10 <=4) {
//      console.log(`В зале лежало ${balls} мяча`);
// } else if (mod10 == 1) {
//      console.log(`В зале лежало ${balls} мяча`);
// }


// let i = 0;
// //постфикс инкремент
// console.log(++i); // прибавляет элемент на один
// // постфикс дикримент
// console.log(--i); // высчитывает элемент на один 
// // префикс инкримент 
// console.log(i++); // сначала выводит ноль и потом + один

// let i = 10;
// while(i > 0){
//     i--;
//     console.log(i);
// }

// цикл do while 

// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i < 5);


// let i = 5;
// do{
//     i--; 
//     console.log(i);
// }while(i > 0)

// цикл for

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// напишите цикл на подсчет факториала числа 5 (1 * 1 * 2 * 3 * 4 * 5 * 6) 120;

// let num = Number(prompt('Введите число для подсчет факториала'));
// let res = 1;
// for(let i = 1; i <= num; i++) {
//     res = res * i;
//     console.log(res);
// }

// let num = Number(prompt('Введите число для подсчет факториала'));
// let res = 1;
// let i = 1;
// while (i <= num) {
//     res = res * i;
//     console.log(res);
//     i++
// }


// let num = Number(prompt('Введите число для подсчет факториала'));
// let res = 1;
// let i = 1;
// do {
//     res = res * i;
//     console.log(res);
//     i++
// } while (i <= num);


// функцуия 

// function hello() {
//     console.log('helo world');
// }
// hello();

// function hello(x) {
//     return `hello ${x}`;
// }
// console.log(hello('people'));
// console.log(hello('friend'));
// console.log(hello('Max'));

// x это аргумен функции для передачи данных

// более акуратный код 

// function hello(x) {
//     let res = `heello ${x}`;
//     return res;
// }
// console.log(hello('people'));
// console.log(hello('friend'));
// console.log(hello('Max'));

// что бы не писать много аргументов 
// нужно поставить троеточие

// function hello(...x) {
//     let res = `heello ${x}`;
//     return res;
// }
// console.log(hello('people', ' how are you' , ' bay'));
// console.log(hello('friend'));
// console.log(hello('Max'));


// let num = Number(prompt('Введите число'));
// let str = '';
// for(let i = 0; i < num; i++) {
//      str = str + '*';
//     console.log(str);
// }


// let num = Number(prompt('Введите число'));
// let str = '';
// for(let i = 0; i < num; i++){
//     if (i == 0) {
//        str += '*';
//     } else {
//         str = '_' + str;
//     }
//     console.log(str);
// }

// let num = Number(prompt('Введите число'));
// let str = '';   
// for(let i = 0; i < num; i++) {
//     for(let j = 0; j < num - i; j++){
//         str = str + ' ';
//     }
//     for(let j = 0; j < i * 2 + 1; j++){
//         str = str + '*';
//     }
//     console.log(str);
//     str = '';
// }

// let num = 5;
// let str = '';   
// let int = 0;
// for(let i = 0; i < num * 2 - 1; i++) {
//     if (int < num) {
//        for(let j = 0; j < num - i; j++){
//             str = str + ' ';
//         }
//         for(let j = 0; j < i * 2 + 1; j++){
//             str = str + '*';
//         }
//         console.log(str);
//     } else {
//         for(let j = 0; j < i - num + 1; j++){
//             str = str + ' ';
//         }
//         for(let j = 0; j < 2 * (num * 2 - i) - 3; j++){
//             str = str + '*';
//         }
//         console.log(str);
//     }
//     str = '';  
//     int++;
// }

// const usersObj = {
//     '1': {
//         name: 'Max',
//         age: 28,
//     },
//     '2': {
//         name: 'Lena',
//         age: 25,
//     }
// }

// for(const i in usersObj){
//     // console.log(i);
//     for(const key in usersObj[i]){
//         // console.log(key);
//         if('Max' == usersObj[i][key]){
//             for(const keyUser in usersObj [i]){
//                 console.log(usersObj[i][keyUser]);
//             }
//         }
//     }
// }


                                 