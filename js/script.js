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

//  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// // for(const i in arr) {
// //     console.log(arr[i]);
// // }

// // for (let i = 0; i < 0;  ) {

// // }
// console.log(arr);
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = [1,2,3,4,5,6,7,8,9,11,12,13,14];

// let answer = 0;

// for(let i = 0; i < arr.length; i++) {
//    answer += arr[i] % 2 == 0 ? 1 : 0;
// }
// console.log(answer);

// let login = prompt('Введите логин');

// if (login == 'админ') {
//     let pass = prompt('Введите пароль', '');
// if (pass == 'я главный') {
//     alert('Здравствуйте');
// } else if (pass == '' || pass == null) {
//     alert('Отменено')
// } else {
//     alert('Неверный пароль');
// }
// } else if (login == '' || login == null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }

// let clock = prompt('Сколько сейчас времени, введи число от 1 до 24?');
// if (clock == 1) {
//     alert(`${clock} час ночи`);
// } else if (clock >= 2 && clock <=4) {
//     alert(`${clock} часа ночи`);
// } else if (clock >= 5 && clock <= 11) {
//     alert(`${clock} часов утра`);
// } else if (clock == 12) {
//     alert(`${clock} часов дня`);
// } else if (clock == 13) {
//     alert(`${clock - 12} час дня`);
// } else if (clock >= 14 && clock <= 16) {
//     alert(`${clock - 12} часа дня`);
// } else if (clock == 17) {
//     alert(`${clock - 12} часов дня`);
// } else if (clock >= 18 && clock <= 21 ) {
//     alert(`${clock - 12} часов вечера`);
// } else if (clock >= 22 && clock <= 24) {
//     alert(`${clock - 12} часов ночи`)
// }

// let name ;
// name = 'Паша';
// name = 122;
// alert(name);

// let name = ('123');

// alert(typeof(name));

// alert(typeof(typeof(777)));

// console.log(confirm(1));
// console.log(prompt('Как тебя завут'));
// console.log(3);

// let name = prompt('Как тебя зовут');
// console.log(name);
// let typeOfMyName = (name);
// console.log(typeof(typeOfMyName));

// let isHas = confirm('Вы тут');
// console.log(isHas);

// let name = (123);
// confirm(name);
// console.log(typeof(name));

// let name = prompt('задайте вопрос');
// console.log(prompt(name));

// confirm(console.log(typeof(123)));

// prompt(prompt('Задайте вопрос'));

// window.onload = () => {
//    let input =  document.querySelector('#input');input.oninput = function() {
//         let value = this.value.trim();
//         let list = document.querySelectorAll('.ul li');

//         if(value != '') {

//             list.forEach(elem => {
//                 if(elem.innerText.search(value) == -1) {
//                     elem.classList.add('hide');
//                 }
//             });

//         }   else {
//             list.forEach(elem => {
//                 elem.classList.remove('hide');
//             });
//         }

//         console.log(this.value);
//    }
// }

// let a = 'Сергей'

// confirm(a);
// console.log(typeof(a));

// let myName = prompt('Введите вопрос');
// console.log(prompt(myName));

// let sum ;
// sum = 0.1 + 0.2 ;
// console.log(sum);

// let name = prompt('Как тебя зовут');
// let nameFriend = prompt('Как зовут твоего друга');
// let howMuchApples = +prompt('Сколько у тебя яблок');
// let appleFriend = +prompt('А сколько яблок у твоего друга');
// let sum = howMuchApples + appleFriend;

// let answer = 'Значит ' + name + ' и ' + nameFriend + ' имеют ' +  sum + ' яблок! ';

// alert(answer)

// alert(`Значит  ${name}  и  ${nameFriend} имеют  ${sum} яблок!`);

// let num = 4;
// if ( num == '') {
//     console.log('Да');
// } else  if (num > 3) {
//     console.log('Нет');
// }

// let name = prompt('Введи цифру');

// switch (name) {
//     case '1':
//        console.log('Один');
//         break;
//     case '2':
//        console.log('два');
//         break;
//     case '3':
//         console.log('три');
//          break;
//     case '4':
//         console.log('четыре');
//         break;
//     case '5':
//         console.log('пять');
//         break;
// }

// let name = prompt('Введите имя');
//     switch (name) {
//         case 'маша':
//         case 'дима':
//         case 'антон':
//             console.log('7а');
//             break;
//         case 'Света':
//         case 'света':
//         case 'Леша':
//         case 'леша':
//             console.log('7б');
//             break;
//         default:
//             console.log('Ошибка ввода');
//     }

// let name = prompt('Введите число');
//     switch (name) {
//         case '1':
//             console.log(1);
//             break;
//         case '2':
//             console.log(2);
//             break;
//         case '3':
//             console.log(3);
//             break;
//         case '4':
//             console.log(4);
//             break;
//         case '5':
//             console.log(5);
//             break;

//         case '-1':
//             console.log(-1);
//             break;
//         case '-2':
//             console.log(-2);
//             break;
//         case '-3':
//             console.log(-3);
//             break;
//         case '-4':
//             console.log(-4);
//             break;
//         case '-5':
//             console.log(-5);
//             break;

//     }

// let num = 5;

// let sum = num === 5 ? 'Да' : 'Нет';
// console.log(sum);

// let num = 87;

// let sum = num > 8 ? 'Да' : 'Нет';
// console.log(sum);

// let num = 5;

// let sum = num <= 3 ? 'Да' : 'Нет';
// console.log(sum);

// let num = 5;

// let sum = num > 3 < 10 ? 'Да' : 'Нет';
// console.log(sum);

// for (let i = 20; i >= 1; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2) {
//         console.log(i);
//     }
//  }

// let answer;
// while (answer !== 'хватит') {
//     console.log('user:', answer);
//     answer = prompt('Ввод пользователя');
// }
// console.log('Операция завершена');

// let str = '';
// for (let i = 0; i < 10; i++) {
//     str += '0';
//     console.log(str);
// }

// function gitFive() {
//     console.log('gitFive');
//     return 7;
// }

// let res = gitFive();
// console.log(res);

// function sum(a, b) {
//     return a ** b;
// }

// let ras = sum(5, 8);
// console.log(ras);

// function  sayHi() {
//     console.log('Привет');
// }
// sayHi();

// function getFive() {
//     return 7 ;

// }

// let end = getFive() ;
// console.log(end);

// function sum(a,  b) {
//     return a ** b;
// }

// console.log(sum(2, 3));

// function showMessage() {
//     let message = 'Привет я JavaScript';
//     console.log(message);
//   }

//   showMessage();

// let userName = 'Вася';

// function showMessage() {
//     userName = 'Коля';
//     let message = 'Привет, ' + userName;
//     console.log(message);
// }

// showMessage();

// function showMessage(from, text) {
//     alert(from + ': ' + text);
// }
// showMessage('Аня', 'Привет!');
// showMessage('Аня', 'Как дела?');

// function showMessage(from, text) {
//     from = '*' + from + '*';
//     console.log(from + ': ' + text);
// }

// let from = 'Аня';
// showMessage(from, 'Привет');

// console.log(form);

// function showMessage(from, text = 'Текст не добавлен') {
//     console.log(from + ': ' + text);
// }

// showMessage('аня');

// function sum(a, b){
//     return a + b;
// }
// let result = sum(1, 2);
// console.log(result);

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }

// let age = prompt('Сколько вам лет?');

// if (checkAge(age) ) {
//     alert('Доступ получен');
// } else {
//     alert('Доступ закрыт');

// let count = 10;
// while (count) {
//     console.log(count);
//     count = count -1;
// }

// console.log('444');

// let answer;
// while (answer !== 'exit') {
//     console.log('user:', answer);
//     answer = prompt('Впиши фразу')
// }

// console.log('444');

//  let count = 0;
//  do {
//     console.log(count);
//     count = count -1;
//  }
// while (count > 0)

// console.log('444');

// for (let count = 10; count; count = count -1) {
//     console.log(count);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// console.log('1');
// if ('789') {
//     console.log('2');
// } else {
//     console.log('3');

// }
// console.log('123');

// alert('Привет');
// let name = prompt('Как тебя зовут');
// let nameFriend = prompt('Как зовут твоего друга');
// let apple = +prompt('Сколько у тебя яблок');
// let appleFriend = +prompt('Сколько яблок у твоего друга');
// let sum = apple + appleFriend;

// alert('Значит ' + name + ' и ' + nameFriend + ' имеют ' + sum + ' яблок! ');
// alert(`Значит ${name} и ${nameFriend} имеют ${sum} яблок!`);

/*
Экзамен № 2
 */

// runApp();

// function runApp() {
//     alert('Привет добро пожаловать в игравой автомат!');
//     while (true) {
//         let numberOfGame = chooseGame();
//         if (numberOfGame === null) {
//             break;
//         }
//         alert('Игра запускается...');
//         startGame(numberOfGame);
//     }
//     alert(`Пока, пока`);

// }

// function chooseGame() {
//    while (true) {
//         let userAnswer = prompt(`
//             Выбери игру!:
//             1 - угадалка;
//             2 - считалка;
//             3 - кликалка;
//             Для выхода нажми "выход"
//     `);

//     switch (userAnswer) {
//         case `угадалка`:
//         case `1`:
//             return 1;
//         case `считалка`:
//         case `2`:
//             return 2;
//         case `клиукалка`:
//         case `3`:
//             return 3;
//         case `выход`:
//             return none;
//         default:
//             alert(`не правельный ввод, попробуй еще раз = (`);
//     }
//    }

// }

// function startGame(numberOfGame) {
//     switch (numberOfGame) {
//         case 1:
//             runGuessGame();
//             break;
//         case 2:
//             runCalcGame();
//             break;
//         case 3:
//             runClickGame();
//             break;
//         default:
//             throwGameError();
//     }
// }

// function throwGameError() {
//     alert(`Критическая ошибка!`);

// }

// function runGuessGame() {
//     alert(`Игра "Угадалка"`);
//     alert(`
//     Я случайным образом загадаю число от 1 до 100.
//     Твоя задача его угадать за минимальное количество попыток.
//     После каждого твоего ввода я буду говорить больше твое число или меньше загаданого.
//     Начнем?
//     `);

//     let targetNumber = generateRandomNumber(1, 100);
//     let attemptCount = 0;
//     while (true) {
//         attemptCount++;
//         let isCorrectAnswer = askGuessGameQuest(targetNumber);
//         if (isCorrectAnswer) {
//             break;
//         }
//     };
//     alert(`Тебе удалось угадать за ${attemptCount} попыток`);
// }

// function askGuessGameQuest(targetNumber) {
//     while (true) {
//         let userAnswer = +prompt('Попробуй угадать');
//         if (userAnswer === targetNumber) {
//             alert('Угадал');
//             return true;
//         }
//         if (userAnswer < targetNumber) {
//             alert('Слишком мало');
//             return false;
//         }
//         if (userAnswer > targetNumber) {
//             alert('Слишком много');
//             return false;
//         }
//         alert('Неверный ввод =(');
//     }
// }

// function generateRandomNumber(min, max) {
//     let constantForFloor = 1;
//     let rangeSize = max + constantForFloor - min;
//     let randomNumberInRange = Math.random() * rangeSize;
//     let randomNumber = min + randomNumberInRange;
//     let randomIntegerNumber = Math.floor(randomNumber);
//     return randomIntegerNumber;
// }

// function runCalcGame() {
//     alert(`Игра "Считалка"`);
//     alert(`
//     Я случайным образом буду давать задание по арифметеке.
//     Твоя задача правильно решить 5 примеров.
//     Начинаем?
//     `);
//     let correctAnswerCount = 0;
//     for (let i = 1; i <= 5; i++) {
//         let isCorrectAnswer = askCalcGameQuest();
//         if (isCorrectAnswer) {
//             correctAnswerCount++;
//         }
//     }
//     alert(`Правильных ответов: ${correctAnswerCount} из 5`);
// }

// function askCalcGameQuest(minNumber = 0, maxNumber = 20) {
//         let firstNumber = generateRandomNumber(minNumber, maxNumber);
//         let secondNumber = generateRandomNumber(minNumber, maxNumber);
//         let mathAction = generateRandomMathAction()
//         let userAnswer = +prompt(`${firstNumber} ${mathAction} ${secondNumber}`);
//         let correctAnswer = calcStringMathAction(firstNumber, mathAction, secondNumber);
//         let isCorrectAnswer = userAnswer === correctAnswer;
//         return isCorrectAnswer;
// }

// function calcStringMathAction(firstNumber, mathAction, secondNumber) {
//   switch (mathAction){
//     case '+':
//         return firstNumber + secondNumber;
//     case '-':
//         return firstNumber - secondNumber;
//     case '*':
//         return firstNumber * secondNumber;
//     default:
//         throwGameError();
//   }
// }

// function generateRandomMathAction() {
//     let randomNumber = generateRandomNumber(1, 3);
//     switch (randomNumber) {
//         case 1:
//             return '+';
//         case 2:
//             return '-';
//         case 3 :
//             return '*';
//         default:
//             throwGameError();
//     }
// }

// function runClickGame() {
//     alert(`Игра "Кликалка"`);
//     alert(`
//     Я случайным образом буду показывать 10 системных окон.
//     Твоя задача как можно скорее прикликать все.
//     При этом в окне confirm нужно нажимать "Отмена".
//     Начинаем?
//     `);
//     let errorCount = 0;
//     for (let i = 1; i <= 10; i++) {
//         let isCorrectAnswer = askClickGameQuest(); /* askClickGameQuest(); если то не будет работать у него в видео стояло это */
//         if (!isCorrectAnswer) {
//             errorCount++;
//         }
//     }
//     alert (`Ошибок: ${errorCount}`);
// }

// function askClickGameQuest(percentConfirm = 0.5) {
//     let isConfirm = Math.random() < percentConfirm;
//     if (isConfirm) {
//         let answerConfirm = confirm(`Нажми "отмена"`);
//         return !answerConfirm;
//     } else {
//         alert(`Просто нажми "ok"`);
//         return true;
//     }
// }

// let a = {
//     name: 'Sam',
//     lastName: 'Sasha',
//     age: 29,
//     dog: {
//         name: 'sharik',
//         age: 2,
//     }
// };
// a.count = 7;

// let b = a;

// a.name = '123';
// console.log(a);
// console.log(b);

// let one = 7;
// sum(one);
// console.log(one );

// function sum(a) {
//     a += 1;
//     console.log(a);
// }

// function sum(a) {
//     a.count += 1;
//     console.log(a.count);
// }

// const user = {
//     name: 'serg',
//     age: 28,
//     weight: '70 kg',
//     profession:' junior web developer',
// }

// console.log(user);

// const key = {
//     one: 2,
//     two: 3,
//     three: 4
// }

// let b = one + two  + three;

// console.log(b);

// const button = document.querySelector('button');
// const input = document.querySelector('.age');

// //Стрелочная функция работает как обычная функция

// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num < 60) {
//         console.log('welcome');
//     } else if (num > 60 && num < 100) {
//         console.log('Возвраст не помеха');
//     } else {
//         console.log('ты не пройдешь');
//     }

//     switch (num) {
//         case 15:
//             console.log('Еще год потерпи');
//             break;
//         case 16:
//             console.log('УУра можно');
//             break;
//         default:
//             console.log('ooook');
//     }
// }

// let b = prompt('введи число');
// console.log(b == 3 || b == 7);

// let inputIn = document.querySelector('.age');
// let btn = document.querySelector('button');

// btn.onclick = function () {
//     console.log('Работает');

//     // let b = inputIn.value;
//     // console.log(b * 2);
//     // inputIn.value = '';
// }

// let inputIn = document.querySelector('.age');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out')

// btn.onclick = function () {
//     let b = +inputIn.value;
//     console.log(b );
//     out.innerHTML = b + 10;
//     inputIn.value = '';

// }

// let a = 3;
// let b = 5;

// let sum = a + b;
// console.log(sum);

// let name = document.querySelector('.name');
// let lastName = document.querySelector('.last-name');
// let btn = document.querySelector('button')

// btn.onclick = function () {
//     console.log(`Hello ${name.value} ${lastName.value}`);
// }

// let name = document.querySelector('.name');
// let lastName = document.querySelector('.last-name');
// let btn = document.querySelector('button');

// btn.onclick = function () {
//     let a = +name.value;
//     let b = +lastName.value;
//     console.log(a + b);
// }

// let name = document.querySelector('.name');
// let btn = document.querySelector('button') ;

// btn.onclick = function () {
//     name.value = 'Hello';
//     console.log(name.value);
// }

// btn.onclick = function () {
//     let b = +inputIn.value;
//     console.log(b );
//     out.innerHTML = b + 10;
//     inputIn.value = '';

// }

// let name = document.querySelector('.name');
// let btn = document.querySelector('button') ;
// let div = document.querySelector('.out');

// btn.onclick = function () {
//     name.value = 'Hello';
//     div.style.borderBottom = '2px solid red'
//     console.log(name.value);
// }

// let firsInput = document.querySelector('.name');
// let lastInput = document.querySelector('.last-name');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function() {
//     let a =  +firsInput.value;
//     let b =  +lastInput.value;
//     let sum = a + b;
//     div.innerHTML = sum;

// }

// let firstIn = document.querySelector('.name');
// let button = document.querySelector('button');

// button.onclick = function () {
//     let
// }

// const button = document.querySelector('button');
// const input = document.querySelector('.name');

// //Стрелочная функция

// button.onclick = () => {
//     let num = +input.value;
//     if (num >=16 && num < 60) {
//         console.log('welcome');
//     } else if (num > 60){
//         console.log('Ты точно сюда');
//     } else {
//         console.log('Ты не пройдешь');
//     }

//     switch (num) {
//         case 15:
//             console.log('Еще год потерпи');
//             break;
//         case 16:
//             console.log('Ура можно');
//             break;
//         default:
//             console.log('okk');
//     }
// }

// let b = 3;

// console.log(b > 3 || b < 7);

// function f1 () {
//     let a = +document.querySelector('.i-1').value;
//     let out = document.querySelector('.out-1');

//     if (a == 4) {
//         out.innerHTML = true;
//     } else {
//         out.innerHTML = false;
//     }
// }

// document.querySelector('.b-1').onclick = f1;

// function f1 () {
//     let input = +document.querySelector('.name').value;
//     let outVisible = document.querySelector('.out');

//     if (input == 4) {
//         outVisible.innerHTML = true;
//     } else {
//         outVisible.innerHTML = false;
//     }
// }

// document.querySelector('.btn').onclick = f1;

// let a21 = 20;
// let a22 = 60;

// function f2 () {
//     let inputValue = +document.querySelector('.name').value;
//     let divValue = document.querySelector('.out');

//     if (inputValue > a22 && inputValue < a21) {
//         divValue.innerHTML = a21;
//     } else if (inputValue > a21) {
//         divValue.innerHTML = a22;

//     }
// }

// document.querySelector('.btn').onclick = f2;

// function f3 () {
//     let inputOne = +document.querySelector('.name').value;
//     let inpuetLast = +document.querySelector('.last-name').value;

//     if (inputOne > inpuetLast) {
//         console.log(inputOne);
//     } else if (inpuetLast > inputOne) {
//         console.log(inpuetLast);
//     }
// }

// document.querySelector('.btn').onclick = f3;

// function f4 () {
//     let input = +document.querySelector('.name').value;
//     let divOut = document.querySelector('.out');
//     if (input >= 18) {
//         divOut.innerHTML = 1;
//     } else {
//         divOut.innerHTML = 0;
//     }
// }

// document.querySelector('.btn').onclick = f4;

// function f5 () {
//     let input = +document.querySelector('.name').value;
//     let div = document.querySelector('.out');
//     if (input < 0) {
//         div.innerHTML = 'm';
//     } else if (input == 0) {
//         div.innerHTML = 0;
//     } else if (input >= 1) {
//         div.innerHTML = 1;
//     }

// }

// document.querySelector('.btn').onclick = f5;

// function f6 () {
//     let imput = +document.querySelector('.name').value;
//     let div = document.querySelector('.out');
//     if (imput % 2 == 0) {
//         console.log('Even');
//     } else if (imput % 2) {
//         console.log('odd');
//     }
// }

// document.querySelector('.btn').onclick = f6;

// function f7 () {
//     let inputOne = +document.querySelector('.name').value;
//     let inputLast = +document.querySelector('.last-name').value;

//     let div = document.querySelector('.out');
//     let sum = inputOne ** inputLast;
//     if (inputOne ** inputLast) {
//         div.innerHTML = sum;
//     }
// }

// document.querySelector('.btn').onclick = f7;

// function f8 () {
//     let select = +document.querySelector('.s-8').value;
//     let div = document.querySelector('.out');
//     // console.log(select + div);
//     switch (select) {
//         case 1:
//             div.innerHTML = 'one';
//             break;
//         case 2:
//             div.innerHTML = 'two';
//             break;
//         case 3:
//             div.innerHTML = 'three';
//             break;
//     }

// }

// document.querySelector('.btn').onclick = f8;

// function f9 () {
//     let input = +document.querySelector('.name').value;
//     let div = document.querySelector('.out');
//     if (input >= 1 && input <=32) {
//         div.innerHTML = 1;
//     } else if (input >= 33 && input <= 43) {
//         div.innerHTML = 2;
//     } else if (input >= 44 && input <= 64) {
//         div.innerHTML = 3;
//     } else {
//         div.innerHTML = 0;
//     }
// }

// document.querySelector('.btn').onclick = f9;

// function sel () {
//     let select = +document.querySelector('.s-100').value;
//     let div = document.querySelector('.out');
//     div.innerHTML = select  ;
// }

// document.querySelector('.btn').onclick = sel;

// function input1 () {
//     let inputValue = +document.querySelector('.name').value;
//     let div = document.querySelector('.out');
//     div.innerHTML = typeof(inputValue);
// }

// document.querySelector('.btn').onclick = input1;

// function input1 () {
//     let inputValue = +document.querySelector('.name').value;
//     document.querySelector('.out').innerHTML = inputValue;
// }

// document.querySelector('.btn').onclick = input1;

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('button').style.backgroundColor =
//     document.querySelector('#one').value;

// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('.out').innerHTML =
//     document.querySelector('#one').value;
// }

// document.querySelector('#btn-1').onclick = () => {
//     console.log(document.querySelector('#i2').value);
//     let myCheckbox = document.querySelector('#i2');
//     console.log(myCheckbox.checked);
//     if (myCheckbox.checked) {
//         console.log('Нажат');
//     }   else {
//         console.log('Не нажат');
//     }
// }

// document.querySelector('#btn-2').onclick = (event) => {
//     event.preventDefault();
//     // let text = document.querySelector('#two');
//     // console.log(text.value);
//     // text.value = 'one';
//     let form = document.querySelector('form');
//     console.log(form);
//     console.log(form.elements.two.value);
//     console.log(form.elements.three.value);
// }

// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.div').innerHTML = 123;

// }

// document.querySelector('.input').onclick = () => {
//     alert('Задачи');
// }

// document.querySelector('#btn').onclick = () => {
//     // console.log(document.querySelector('.input1').value);
//     let input2 = document.querySelector('.input1');
//     console.log(input2.checked);
//     if (input2.checked) {
//         console.log('Выделенно');
//     } else {
//         console.log('не выделенно');
//     }
// }

// document.querySelector('.btn').onclick = () => {
//     let input2 = document.querySelector('.input1');
//     if (input2.checked) {
//                 console.log(document.querySelector('.input1').value);
//             } else {
//                 console.log('не выделенно');
//             }
// }

// document.querySelector('.btn').onclick = () => {
//     let inputValue = document.querySelector('.input1').value;
//     document.querySelector('.div').innerHTML = inputValue;
//     console.log(inputValue);
// }

// document.querySelector('.btn').onclick = () => {
//     let input = document.querySelector('.input1');
//     let div = document.querySelector('.div');
//         if (input.checked) {
//             document.querySelector('.div').innerHTML = input.value;
//         } else {
//             document.querySelector('.div').innerHTML = 0;
//         }
// }

// document.querySelector('.btn').onclick = () => {
//     let input = document.querySelector('.input1').value;
//     console.log(input);
//     document.querySelector('.btn').style.backgroundColor = input;
// }

// document.querySelector('.btn').onclick = () => {
//     let inputOne = document.querySelector('.input1');
//     let inputTwo = document.querySelector('.input2');

//     let tempValue = inputOne.value;
//     inputOne.value = inputTwo.value;
//     inputTwo.value = tempValue;

// }

// document.querySelector('.btn').onclick = () => {
//     let input = document.querySelector('.input1').value;
//     document.querySelector('.div').innerHTML = input;
// }

//     document.querySelector('.input1').oninput = () => {
//     document.querySelector('.div').innerHTML = document.querySelector('.input1').value;
// }

// document.querySelector('.btn').onclick = () => {
//     let area = document.querySelector('.input1').value;
//     document.querySelector('.div').innerHTML = area;
// }

// document.querySelector('.btn').onclick = () => {
//     let section = document.querySelector('.sel').value;
//     document.querySelector('.div').innerHTML = section;
// }

// document.querySelector('.btn').onclick = (event) => {
//     event.preventDefault();
//     let inputOne = document.querySelector('.input1').value;
//     let pass = document.querySelector('.input2').value;
//     document.querySelector('.div').innerHTML =  inputOne + pass;
// }

// ПЕРЕПОВТОРЯЮ ВСЕ(ЗАКРЕПЛЯЮ) ----------------------------------------

// function f1 () {
//     let input = +document.querySelector('.one').value;
//     let div = document.querySelector('.div');
//     if (input == 4) {
//         div.innerHTML = true;
//     } else {
//         div.innerHTML = false;
//     }
// }

// document.querySelector('button').onclick = f1;

// let one = 4;
// let two = 5;

// function f2 () {
//     let div = document.querySelector('.div');
//     if (one < two) {
//         div.innerHTML = two;
//     } else if (two > one) {
//         div.innerHTML = two;
//     }
// }

// document.querySelector('button').onclick = f2;

// function f3 () {
//     let inputOne = +document.querySelector('.one').value;
//     let inputTwo = +document.querySelector('.two').value;
//     let div = document.querySelector('.div');

//     if (inputOne > inputTwo) {
//         div.innerHTML = inputOne;
//     } else if (inputTwo > inputOne) {
//         div.innerHTML = inputTwo;
//     }
// }

// document.querySelector('button').onclick = f3;

// function f4 () {
//     let inputOne = +document.querySelector('.one').value;
//     let div = document.querySelector('.div');
//     if (inputOne >= 18) {
//         div.innerHTML = 1;
//     } else if (inputOne < 18) {
//         div.innerHTML = 0;
//     }
// }

// document.querySelector('button').onclick = f4;

// function f5 () {
//     let inputOne = +document.querySelector('.one').value;
//     let div = document.querySelector('.div');
//     if (inputOne < 0) {
//         div.innerHTML = 'Первое Значение';
//     } else if (inputOne == 0) {
//         div.innerHTML = 'Второе значение';
//     } else if (inputOne > 0) {
//         div.innerHTML = 'Третье значение';
//     }
// }

// // document.querySelector('button').onclick = f5;

// Пока неочень понял почему сравнение с 0;

// const button = document.querySelector('button');
// let input = document.querySelector('.one');
// let div = document.querySelector('.div');

// button.onclick = () => {
//     if (input.value % 2 == 0) {
//         div.innerHTML = 'even'
//     } else {
//         div.innerHTML = 'odd';
//     }
// }

// document.querySelector('button').onclick = () => {
//     let inputOne = +document.querySelector('.one').value;
//     let inputTwo = +document.querySelector('.two').value;
//     let div = document.querySelector('.div');

//     let sum = inputOne ** inputTwo;
//     if (sum) {
//         div.innerHTML = sum;
// }
// }

// document.querySelector('button').onclick = () => {
//     let output = +document.querySelector('.sel').value;
//     let div = document.querySelector('.div');
//     switch (output) {
//         case 1:
//             div.innerHTML = 'one';
//             break;
//         case 2:
//             div.innerHTML = 'two';
//             break;
//         case 3:
//             div.innerHTML = 'three';
//             break;
//     }

// }

// document.querySelector('button').onclick = () => {
//     let inputOne = +document.querySelector('.one').value;
//     let div = document.querySelector('.div');
//     if (inputOne >= 1 && inputOne <= 32 ) {
//         div.innerHTML = 1;
//     } else if (inputOne >= 33 && inputOne <= 43 ) {
//         div.innerHTML = 2;
//     } else if (inputOne >= 44 && inputOne <= 64) {
//         div.innerHTML = 3;
//     } else {
//         div.innerHTML = 0;
//     }
// }

// document.querySelector('button').onclick = () => {
//     let sel = +document.querySelector('.sel').value;
//     let div = document.querySelector('.div');
//     div.innerHTML = sel;
// }

// document.querySelector('button').onclick = () => {
//     let inputOne = document.querySelector('.one');
//     let div = document.querySelector('.div');

//     div.innerHTML = typeof(inputOne.value);
// }

// document.querySelector('button').onclick = () => {
//     let input = document.querySelector('.one').value;
//     let div = document.querySelector('.div');

//     let a = input;
//     div.innerHTML = typeof(a);
// }

// document.querySelector('button').onclick = () => {
//     let inputOne = +document.querySelector('.one').value;
//     let inputTwo = +document.querySelector('.two').value;
//     let sel = document.querySelector('.sel').value;
//     let div = document.querySelector('.div');

//     switch (sel) {
//         case '+':
//             div.innerHTML = inputOne + inputTwo;
//             break;
//         case '-':
//             div.innerHTML = inputOne - inputTwo;
//             break;
//         case '*':
//             div.innerHTML = inputOne * inputTwo;
//             break;
//         case '/':
//             div.innerHTML = inputOne / inputTwo;
//             break;
//     }

// }

// ЗАКОНЧИЛ ПОВТОРЕНИЕ ------------------------------------------

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
// }
// document.querySelector('#one').oninput = () => {
//     document.querySelector('.div').innerHTML = document.querySelector('#one').value;

// }

// document.querySelector('#btn-1').onclick = () => {
//     // console.log(document.querySelector('#i2').value);
//     let myCheckBox = document.querySelector('#i2');

//     if (myCheckBox.checked) {
//         console.log('Нажат');
//     } else {
//         console.log('Не нажат');
//     }
// }

//INPUT, RANGE, TEXTAREA, CHECKBOX---------------------------------------------

// document.querySelector('#btn-2').onclick = (event) => {
//     event.preventDefault();
//     // let text = document.querySelector('#two');
//     // console.log(text.value);
//     // text.value = 'one';
//     let form = document.querySelector('form');
//     console.log(form);
//     console.log(form.elements.two.value);
//     console.log(form.elements.three.value);
// }

// document.querySelector('.b-1').onclick = () => {
//     let task = 14
//     alert(task);
// }

// document.querySelector('.btn').onclick = () => {
//     let inputFirst = document.querySelector('.inputOne').value;
//     alert(inputFirst);
//     console.log(inputFirst);
// }

// document.querySelector('.btn').onclick = () => {
//   let box = document.querySelector('.check')
//   let inputOne = document.querySelector('.check').value;
//   let div = document.querySelector('.div');
//     if (box.checked) {
//         div.innerHTML = inputOne;
//         } else {
//             div.innerHTML = false;
//         }
// }

// document.querySelector('.btn').onclick =  () => {
//     let inputOne = document.querySelector('.check');
//     let div = document.querySelector('.div');
//     if (inputOne.checked) {
//         div.innerHTML = inputOne.value;
//     } else {
//         div.innerHTML = 0;
//     }
// }

// document.querySelector('.btn').onclick = () => {
//     let inputOne = document.querySelector('.check').value;
//     // console.log(inputOne);
//     let div = document.querySelector('.btn').style.backgroundColor = inputOne;

// }

// function f1 () {
//     let a = document.querySelector('.checkOne');
//     let b = document.querySelector('.checkTwo');

//     let tempValue = a.value;

//     a.value = b.value;
//     b.value = tempValue;
// }

// document.querySelector('.btn').onclick = f1;

// document.querySelector('.btn').onclick = () => {
//     let input = document.querySelector('.checkOne').value;
//     let div = document.querySelector('.div');

//     div.innerHTML = input;
// }

// document.querySelector('.checkOne').oninput = () => {
//     let input = document.querySelector('.checkOne').value;
//     let div = document.querySelector('.div');
//     div.innerHTML = input;
// }

// document.querySelector('.btn').onclick = () => {
//     let textArea = document.querySelector('.area').value;
//     let div = document.querySelector('.div');

//     div.innerHTML = textArea;
// }

// document.querySelector('.btn').onclick = () => {
//     let input = document.querySelector('.checkOne');
//     let textArea = document.querySelector('.area');
//     let div = document.querySelector('.div');

//     textArea.value = input.value;
//     input.textContent = input.value;
//     div.innerHTML = textArea.value;
//     input.value = '';
// }

// document.querySelector('.btn').onclick = () => {
//     let sel = document.querySelector('.sel').value;
//     let div = document.querySelector('.div');

//     div.innerHTML = sel;
// }

// document.querySelector('.btn').onclick = () => {
//     let inputText = document.querySelector('.checkOne').value;
//     let inputPas = document.querySelector('.checkPasw').value;
//     let div = document.querySelector('.div');
//     let text = `${inputText} ${inputPas}`;

//     div.innerHTML = text;
// }

// document.querySelector('.btn').onclick = (event) => {
//     event.preventDefault();
//     let inputText = document.querySelector('.checkOne').value;
//     let inputPas = document.querySelector('.checkPasw').value;
//     let div = document.querySelector('.div');
//     let text = `${inputText} ${inputPas}`;

//     div.innerHTML = text;
// }

//----------------------------------------------------------------

// ЦИКЛЫ

// Есть цикы
// for
//while

// for (старт; работает пока верно, счетчик)
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// // Пирбовляет по еденицы до 4 пятерку он не выводит

// for (let i = 0; i < 5; i = i + 2) {
//     console.log(i);
// }
// //Выведет 0 2 4 Прибовляет по двойке

// for (let i = 0; i < 5; i = i + 1) {
//     if (i == 4) break;
//         console.log(i);

// }

// document.querySelector  Примениться только к первому элементу (диву)

// let div = document.querySelectorAll('.one');
//     console.log(div);
// div.style.background = 'red';

// for (let i = 0; i < div.length; i = i + 1) {
//     div[i].style.background = 'red';
//     //Окрасит все дивы
//     div[i].onclick = two;
// }

// function two () {
//     console.log('work!!!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '4px solid black';
// }

// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// }

// let out = '';

// for (let i = 0; i < 10; i++) {
//     // out += i + ' '
//     if (i == 6) continue
//         out += i + ' ';

// }
// document.querySelector('#out').innerHTML = out;

// let out = '';
// function f1 () {
//     let div = document.querySelector('.div');

//     for (let i = 1; i < 51; i++ ) {
//         out += i + ' ';
//     }
//     div.innerHTML = out;
// }

// let button = document.querySelector('.btn').onclick = f1;

// let out = '';
// function f2 () {
//     let div = document.querySelector('.div');

//     for (let i = 2; i < 123; i = i + 2 ) {
//         out += i + ' ';
//     }
//     div.innerHTML = out;

// }

// document.querySelector('.btn').onclick = f2;

// let out = '';
// function f3 () {
//     let div = document.querySelector('.div');
//     for (let i = 25; i > 6; i--) {
//         out += i + ' ';
//     }
//     div.innerHTML = out;
// }

// document.querySelector('.btn').onclick = f3;

// let out = '';
// function f4 () {
//     let div = document.querySelector('.div');
//     for (let i = 77; i > 34; i = i - 3) {
//         out += i + '_';
//     }
//     div.innerHTML = out;
// }
// document.querySelector('.btn').onclick = f4;

// let out = '';
// function f5 () {
//     let div = document.querySelector('.div');
//     for (let i = 1; i < 18; i++ ) {
//         // out += i + '_';
//         if (i % 2) {
//             out += i + '_*';
//         } else {
//             out += i + '_**';
//         }
//     }
//     div.innerHTML = out;
// }

// document.querySelector('.btn').onclick = f5;

// function f6 () {
//     let input = document.querySelector('.inp');
//     document.querySelector('.div').innerHTML = '';
//     for (let i = 1; i < input.value; i++ ) {
//         document.querySelector('.div').innerHTML += '******' + '<br>';
//         if (i > 100)  {
//             break;
//         }
//     }
// }

// document.querySelector('.btn').onclick = f6;

// function f6 () {
//     document.querySelector('.div').innerHTML = '';
//     for (let i = 0; i < 6; i = i + 1) {

//         document.querySelector('.div').innerHTML += '***********' + '<br>';
//     }
// }

// document.querySelector('.btn').onclick = f6;

// let input = document.querySelector('.inp');
// let btn = document.querySelector('.btn');
// btn.onclick = () => {
//   let b = input.value;
//   while (b >= 0) {
//     console.log(b);
//     b--;
//   }
// }

// document.querySelector('.div').innerHTML = '';

// function f8 () {
//     let inputFirst = document.querySelector('.inputOne').value;
//     let inputSecond = document.querySelector('.inputTwo').value;
//     let div = document.querySelector('.div');

//     let out = '';
//     while (inputFirst <= inputSecond)  {
//         out += inputFirst + ' ';
//         inputFirst++;
//         div.textContent = out;
//     }
// }

// document.querySelector('.btn').onclick = f8;

// function f9 () {
//     let div = document.querySelector('.div');
//     let out = '';
//     for (let i = 1950; i <= 2000; i++ ) {
//         if (i % 2 === 0 ) {
//             out += i + ' ';
//             console.log('Все четные');
//         }
//         console.log(i);
//     }

//     div.innerHTML = out;

// }

// document.querySelector('.btn').onclick = f9;

// Правельный вариант
// function f9 () {
//     let div = document.querySelector('.div');
//     let out = '';
//     for (let i = 1950; i <= 2000; i = i + 2) {
//         // if (i % 2 === 0 ) {
//         //     out += i + ' ';
//         //     console.log('Все четные');
//         // }
//         console.log(i);
//     }

//     div.innerHTML = out;

// }

// document.querySelector('.btn').onclick = f9;

// let div = document.querySelector('.div');

// function f8 () {
//     for (let i = 0;i < div.length; i++) {
//         console.log(div[i]);
//     }
// }

// document.querySelector('.btn').onclick = f8;

// for (let i = 0; i < div.length; i = i + 1) {
//         div[i].style.background = 'red';

//         div[i].onclick = two;
//     }

/// ОТРАБОТКА ЦИКЛА (ПЕРВЫЙ УРОК);

// let out = '';
// function f1 () {
//     let div = document.querySelector('.div');
//     for (let i = 1; i <= 50; i++) {
//         out += i + ' ';
//         div.innerHTML = out;
//     }
// }
// document.querySelector('.btn').onclick = f1;

// let out = '';
// function f2 () {
//     let div = document.querySelector('.div');
//     for (let i = 0; i <= 122; i = i + 2) {
//         out += i + ' ';
//         div.innerHTML = out;
//     }
// }
// document.querySelector('.btn').onclick = f2;

// function f3() {
//     let out = ''
//     let div = document.querySelector('.div');
//     for (let i = 25; i >= 0; i--) {
//         out += i + ' ';
//         if (i == 6)  {
//             break;
//         }
//     div.innerHTML = out;
//     }
// }
// document.querySelector('.btn').onclick = f3;

// function f4 () {
//     let out = '';
//     let div = document.querySelector('div');
//     for (let i = 77; i >= 0; i = i - 3) {
//         if (i == 32) {
//             break;
//         }
//         out += i + '_';
//         div.innerHTML = out;

//     }
// }
// document.querySelector('.btn').onclick = f4;

// function f5 () {
//     let out = '';
//     let div = document.querySelector('.div');
//     for (let i = 1; i <= 17; i++) {
//         out += i + '_';
//         if (i % 2) {
//             out += '*';
//         } else {
//             out += '**';
//         }
//     }
//     div.innerHTML = out;
// }
// document.querySelector('.btn').onclick = f5;

// let p = 0;
// let div = document.querySelector('.div');
// let out = '';
// function f6() {
//     while (p < 3) {
//         let p1 = 0;
//         while (p1 < 6) {
//             out += '*';
//             p1++;
//         }
//         out += '<br>';
//         p++;
//     }
//     div.innerHTML = out;
// }

// document.querySelector('.btn').onclick = f6;

// function f7() {
//     let out = '';
//     let div = document.querySelector('.div');
//     let input = +document.querySelector('.inputOne').value;

//     for (let i = input; i >= 0; i--) {
//         out += i + ' ';
//         div.innerHTML = out;
//     }
// }
// document.querySelector('.btn').onclick = f7;

// function f8() {
//     let inputFirst = document.querySelector('.inputOne').value;
//     let inputSecond = document.querySelector('.inputTwo').value;
//     let div = document.querySelector('.div');

//     let out = '';
//     while (inputFirst <= inputSecond) {
//         out += inputFirst +  ' ';
//         inputFirst++;
//         div.textContent = out;

//     }
// }

// document.querySelector('.btn').onclick = f8;

// function f9() {
//     let inputFirst = document.querySelector('.inputOne').value;
//     let inputSecond = document.querySelector('.inputTwo').value;
//     let div = document.querySelector('.div');
//     let out = '';
//     if (inputFirst >= inputSecond) {
//         let temp = inputFirst;
//         inputFirst = inputSecond;
//         inputSecond = temp;
//     }

//     while (inputFirst <= inputSecond) {
//         out += inputFirst + ' ';
//         inputFirst++;
//         div.innerHTML = out;

//     }

// }

// document.querySelector('.btn').onclick = f9;

// function f9() {
//     let divOut = document.querySelector('.div');
//     let div = document.getElementsByTagName('div');
//     for (let i = 0; i < div.length; i = i + 1 ) {
//         div[i].style.background = 'orange';

//     }
// }

// document.querySelector('.btn').onclick = f9;

// ВЛОЖЕННЫЕ ЦИКЛЫ
// let div = document.querySelector('.div');
// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 3; k++) {
//         div.innerHTML += '*';
//     }
//     div.innerHTML += '_';
// }

// let div = document.querySelector('.div');
// for (let i = 1; i <= 3; i++) {
//     for (let k = 0; k < 1; k++) {
//         div.innerHTML += i + '<br>';
//     }
//     div.innerHTML += '*_*_*_' + '<br>';
// }

// let div = document.querySelector('.div');
// for (let i = 0; i < 4; i++) {
//     for (let k = 0; k < 3; k++) {
//         div.innerHTML += '*_';
//     }
//     div.innerHTML += '<br>';

// }

// let div = document.querySelector('.div');
// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 6; k++) {
//         if (k % 2 == 0) {
//             div.innerHTML += '1';
//         } else {
//             div.innerHTML += '0';

//         }
//     }
//     div.innerHTML += ' <br>';
// }

// let q = 1;
// let out = '';
// let div = document.querySelector('.div');

// for (let i = 0; i < 8; i++) {
//     for (let k = 0; k < 8; k++) {
//         if (k < q) {
//             out += '*';
//         }
//     }
//     q++;
//     out += '<br>';
//     div.innerHTML = out;

// }

// let q = 5;
// let out = '';
// let div = document.querySelector('.div');

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 5; k++) {
//         if (k < q) {
//             out += '* '
//         }
//     }
//     q--;
//     out += '<br>';
//     div.innerHTML = out;
// }

// let q = 1;
// let out = '';
// let div = document.querySelector('.div');

// for (let i = 0; i < 6; i++) {
//     for (let k = 1; k <= 5; k++) {
//         if (k < q) {
//             out += k + ' ';
//         }
//     }
//     q++;
//     out += '<br>';
//     div.innerHTML = out;
// }

// let div = document.querySelector('.div');
// let out = '';

// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 5; k++) {
//         out += '*';
//     }
//     out += '<br>';
//     div.innerHTML = out;
// }

// let div = document.querySelector('.div');
// let q = 5;
// let out = '';

// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 5; k++) {
//         if (k < q) {
//             out += '*';
//         }
//     }
//     q--;
//     out += '<br>';
//     div.innerHTML = out;
// }

// Плохо понял

// let div = document.querySelector('.div');
// let q = 6;
// let q2 = 10;
// let out = '';

// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 12; k++) {
//         if (k < q || k > q2) {
//             out += '_ ';
//         } else {
//             out += '*';

//         }
//     }
//     q--;
//     q2--;
//     out += '<br>';
//     div.innerHTML = out;
// }

// let div = document.querySelector('.div');
// let out = '';
// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k <= i; k++ ) {
//         div.innerHTML += '* ';
//     }
//     div.innerHTML += '<br>';
// }
// for (let i = 0; i < 2; i++) {
//     for (let k = 2; k > i; k-- ) {
//         div.innerHTML += '* ';
//     }
//     div.innerHTML += '<br>';
// }

// let div = document.querySelector('.div');
// for (let i = 1; i < 10; i++) {
//     for (let k = 0; k <= 10; k++) {
//         div.innerHTML += `${i}*${k}=${i * k}<br>`;
//     }
//     div.innerHTML += '<hr>';
// }

// let div = document.querySelector('.div');
// function f1 () {
// let a1 = 1;
//     div.innerHTML = a1;
// }

// document.querySelector('.btn').onclick = f1;

// let a2 = 89;
// function f2 () {
//     return a2;
// }

// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.div').innerHTML = f2 ();
// }

// let a2 = 89;
// function f3 (a , b ) {
//     return a + b;
// }

// document.querySelector('.btnOne').onclick = () => {
//     document.querySelector('.div').innerHTML = f3 (4, 5);
// }

// document.querySelector('.btnTwo').onclick = () => {
//     document.querySelector('.div').innerHTML = f3 (8, 10);
// }

// function f4 (age) {
//     return 2021 - age;
// }
// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.div').innerHTML = f4(1993);
// }

// function f5(name) {
//     return 'Hello ' +  name;
// }

// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.div').innerHTML = f5('сергей');
// }

// function f6 (a, b) {
//     return  (Math.random() * (a - b) + b);
// }
// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.div').textContent = f6(1, 7);
// }

// function f7 (str) {
//     return str.trim();
// }
// document.querySelector('.btn').onclick = () => {
//       document.querySelector('.div').textContent = f7(` HELLO  `);
// }

// function f8 (a) {
//     if (a % 2 === 0) {
//         // document.querySelector('.div').textContent = 'true';
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }
// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.div').textContent = f8(8);
// }

// function f8(a, b) {
//     if (a > b) {
//         console.log('Болше A');
//         return a;
//     } else if (b > a) {
//         console.log('Болше B');
//         return b;
//     } else {
//         console.log('Равное');
//         return a, b;
//     }
// }
// document.querySelector('.btn').onclick = () => {
//     document.querySelector('.div').textContent = f8(7, 7);
// }

// for while-----------------------------------------------------

// let k = 0;
// for (let i = 0; i < 6; i++) {
//     console.log(i);
// } while (k < 5) {
//     k++
//     console.log('k ' + k);
// }

//найти числа от 0 до 10
// let sum = 0;
// let p = 0;
// while (p <= 4) {
//     sum = sum + p;
//     p++;
// }
// console.log('sum = ' + sum);

// let out = document.querySelector('.div');
// p = 0;
// let outStr = '';
// let flag = 3;

// while (p < 4) {
//     let p1 = 0;
//     while (p1 < 4) {
//         if (p1 < flag) {
//             outStr += '&nbsp';
//         } else {
//             outStr += '*';
//         }
//         p1++;
//     }
//     flag--;
//     outStr += '<br>';
//     p++;
// }

// out.innerHTML = outStr;

// let number = 0;
// function f1 () {
//     while (number < 50) {
//         number++
//         document.querySelector('.div').innerHTML += `${number} `;
//     }
// }
// document.querySelector('.btn').onclick = f1;

// let number = 0;
// function f2() {
//     while (number < 50) {
//         number++;
//         if (number % 2 == 0) {
//             document.querySelector('.div').innerHTML += `${number} `;
//         }
//         console.log(number);
//     }
// }
// document.querySelector('.btn').onclick = f2;

// let num = 26;
// function f3() {
//     while (num > 7) {
//         num--;
//        console.log(num);
//     }
// }

// document.querySelector('.btn').onclick = f3;

// let out = '';
// let num = 0;
// let div = document.querySelector('.div');
// function f5() {
//     while (num < 17) {
//         num++;
//         out = num + '_' + '*';
//         div.innerHTML += out;
//     }
// }
// document.querySelector('.btn').onclick = f5;

// let num = 0;
// let out = '';
// let div = document.querySelector('.div');
// function f6() {
//     while (num < 3) {
//         let num1 = 0;
//         while (num1 < 6) {
//             num1++;
//             div.innerHTML = out;
//             out += '*';

//         }
//         out += '<br>';
//         num++;
//         div.innerHTML = out;
//     }
// }

// document.querySelector('.btn').onclick = f6;

//НЕправильно
// let div = document.querySelector('.div');
// let out = '';
// function f7 () {
//     let num = 1;
//     let inputValue = +document.querySelector('.input').value;
//     while (inputValue > num) {
//         inputValue--;
//         div.innerHTML += inputValue + ' ';
//         console.log(num);
//     }
// }

// document.querySelector('.btn').onclick = f7;

// function f8(a, b) {
// let i = a;
//     while (i <= b) {
//         document.querySelector('.div').innerHTML += `${i} `;
//         i++;
//     }
// }

// document.querySelector('.btn').onclick = () => f8(3, 23);

// function f9(a, b) {
//     let i = b;
//     while (i >= a) {
//         document.querySelector('.div').innerHTML += `${i} `;
//         i--;
//     }
// }

// document.querySelector('.btn').onclick = () => f9(3, 23);

// function f10(a, b, c) {
//     let i = b;
//     while (i >= a) {
//         document.querySelector('.div').innerHTML += `${i} `;
//         i -= c;
//     }
// }

// document.querySelector('.btn').onclick = () => f10(3, 45, 4);

// function f11() {
//     let sum = 0;
//     let i = 0;

//     while (i <= 20) {
//         i++;
//         sum += i;
//         document.querySelector('.div').innerHTML += `${sum} `;
//     }
// }
// document.querySelector('.btn').onclick = () => f11();

// function f12(a, b) {
//     if (b > a) {
//         let sum = a;

//         while (a <= b) {
//             a++;
//             sum += a
//             document.querySelector('.div').innerHTML += `${sum} `;
//         }
//     } else {
//         document.querySelector('.div').innerHTML = `false`;
//     }
// }
// document.querySelector('.btn').onclick = () => f12(2, 9);

// function f13(a, b) {
//     if (b > a) {
//         let sum = a;
//         while (b >= a) {
//             a++;
//             sum *= a;
//             document.querySelector('.div').innerHTML += `${sum} `;
//         }
//     } else {
//         document.querySelector('.div').innerHTML = `false `;
//     }
// }

// document.querySelector('.btn').onclick = () => f13(2, 9);

// function f14() {
//     let money = 333;
//     let days = 1;
//     while (money <= 1000000) {
//         money *= 2;
//         days++;
//         if (money >= 1000000) {
//             document.querySelector('.div').innerHTML = `На ${days} день у тебя будет больше или равно 1000000`;
//             break;
//         }
//     }
// }

// document.querySelector('.btn').onclick = () => f14();

// function f15(a, b) {
//     while (a <= b) {
//         if (a % 2 === 0) {
//             document.querySelector('.div').innerHTML += `0 `;
//         } else {
//             document.querySelector('.div').innerHTML += `${a} `;
//         }
//         a++;
//     }
// }
// document.querySelector('.btn').onclick = () => f15(2, 12);

// function f16() {
//     let i = 0;
//     while (i < 6) {
//         // let k = 0;
//         if (i % 2 == 0) {
//             document.querySelector('.div').innerHTML += '*';
//         }
//         // while(k < 2) {
//         //     k++
//         //     document.querySelector('.div').innerHTML += '*';
//         // }

//         i++
//         document.querySelector('.div').innerHTML += '*'+'<br>';
//     }
// }

// document.querySelector('.btn').onclick = () => f16();

// function f17() {
// let i = 10;
// let k = 1;

//     while (i > 0) {
//         document.querySelector('.div').innerHTML += `${i} `;
//         document.querySelector('.div').innerHTML += `${k} `;
//         i--;
//         k++;
//     }
// }
// document.querySelector('.btn').onclick = f17;

// function f18() {
//     let i = 0;
//     do {
//         document.querySelector('.div').innerHTML += `${i} `;
//         i++;
//     } while (i <= 100);
// }
// document.querySelector('.btn').onclick = f18;

// function f19() {
//     let i = 1;
//     let quantity = 5;

//     do {
//         quantity = quantity + (quantity / 100 * 30);
//         if (quantity > 132) {
//             document.querySelector('.div').innerHTML = ` Через ${i} дней михалыча побьют все`;
//             break;
//         }
//         i++;
//     }
//     while (i < 30);
// }

// document.querySelector('.btn').onclick = f19;

// РАБОТА С DOM----------------------------------------------------

// let div = document.querySelector('.div');
// function f1() {
//     div.style.width = '150px';
//     div.style.height = '20px';

// }

// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// function f2() {
//     div.classList.add('newClass');

// }

// document.querySelector('.btn').onclick = f2;

// function f3() {
//     div.classList.remove('newClass');
// }

// document.querySelector('.btnTwo').onclick = f3;

// let div = document.querySelector('.div');
// function f4() {
//     this.classList.toggle('div')
// }

// document.querySelector('.btn').onclick = f4;

// let div = document.querySelector('.div');
// function f2() {
//     div.classList.toggle('css');
// }

// document.querySelector('.btn').onclick = f2;

//РАБОТА С МАССИВАМИ -----------------------------------------

// const arr1 = ['string', 1, true];
// console.log(arr1);

// const arr2 = ['string', 1, true];
// document.querySelector('.div').innerHTML = arr2;

// const a = [2, 'hello', 17, 34, 'privet'];
// document.querySelector('.div').innerHTML = a.length;

// let div = document.querySelector('.div');
// const a = [2, 'hello', 17, 34, 'privet'];
// div.innerHTML = `${a[0]}<br>${a[4]}<br>${a[9]} `

// let div = document.querySelector('.div');
// let sum = 0;
// const a = [2, 'hello', 17, 34, 'privet'];
// sum += sum + a[0] + a[2] + a[3];
// div.innerHTML = sum;

// let div = document.querySelector('.div');
// const arr6 = ['Yaroslav', 'Scorpio', 24, 'October'];
// div.innerHTML = arr6;

// let b = ['one', 1, 2, 'two'];
// b.push('hi', ' foo', 'bar');
// document.querySelector('.div').innerHTML = b;;

// let b = ['one', 1, 2, 'two'];
// b[2] = 3.14;
// b[3] = 17;
// b[5] = 5;
// console.log(b);
// document.querySelector('.div').innerHTML = b;

// let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let div = document.querySelector('.div');
// div.innerHTML = `${arr9[2]} ${arr9[6]}`;
// console.log(arr9);

// const arr10 = [,'1-й',,,'5-й',,,,,'10-й'];
// let div = document.querySelector('.div');
// console.log(arr10);
// div.innerHTML = arr10;

// const c = [77, 88, 99, 66, 'hello'];
// let a = c[0];
// c[0] = c[c.length - 1];
// c[c.length - 1] = a;
// console.log(c);

// const d = ['y', 4, 22, 'o'];
// let div = document.querySelector('.div');
// let out = '';
// for (let i = 0; i < d.length; i++) {
//   out += d[i] + '-';
//   div.innerHTML = out;
// }

// const e = [1, 2, 3, 'hello', 66];
// e.reverse();
// console.log(e);

// const e = [1, 2, 3, 'hello', 66];

// for (let i = e.length -1 ; i >= 0; i--) {
//  document.querySelector('.div').innerHTML += e[i] + ' ';
// }

// 14 task

// repeat--------------------------------------------

// let out = '';
// function f1() {
//   let a = [ 4, 2 , 1];
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum = sum + `${a[0]} ${a[1]} ${a[2]}`;
//   }
//   document.querySelector('.div').innerHTML = sum;
// }
// document.querySelector('.btn').onclick = f1;

// ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ В МАССИВЕ

// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');
// let arr = [];

// function f1() {
//   let inpVal = inp.value;
//   if (inpVal !== '') {
//     arr.push(inpVal);
//     div.textContent = arr;
//     console.log(arr);
//     inp.value = '';
//   } else {
//     div.innerHTML = 'Введите число';
//   }
// }
// document.querySelector('.btn').onclick = f1;

// function f2() {
//     arr.pop();
//     div.innerHTML = arr;
// }
// document.querySelector('.btn2').onclick = f2 ;

// function f3() {
//   arr.shift();
//   div.innerHTML = arr;
// }
// document.querySelector('.btn3').onclick = f3;

// function f4() {
//     let inpVal = inp.value;
//     arr.unshift(inpVal);
//     div.textContent = arr;
//     inp.value = '';
// }
// document.querySelector('.btn4').onclick = f4;

// let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
// let inputFirst = document.querySelector('.input1');
// let inputSecond = document.querySelector('.input2');
// let div = document.querySelector('.div');
// function f1() {
//   let val1 = inputFirst.value;
//   let val2 = inputSecond.value;
//   if (val1 !== '' && val2 !== '') {
//     arr5.splice(val1, val2);
//     div.innerHTML = arr5;
//   } else {
//     div.textContent = 'Введите число';
//   }
//   inputFirst.value = '';
//   inputSecond.value = '';
// }

// document.querySelector('.btn').onclick = f1;

// let arr6 = ['Yaroslav', 'Scorpio', 24, 'October'];
// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function f1() {
//   let inpVal = inp.value;
//   let arrVal = arr6.length;
//   if (inpVal !== '') {
//     arr6.push(inpVal);
//     div.innerHTML = `${arr6} ${arrVal} `;
//     // for (let i = 0; i < arr6.length; i++) { // Плохо работает
//     //   arr6[arr6.length - 1] = inpVal;
//     //   div.innerHTML = `${arr6} ${arrVal} `;
//     // }

//   } else {
//     div.innerHTML = 'Введите число';
//   }
// }

// document.querySelector('.btn').onclick = f1;

// let arr7 = ['one', 1, 2, 'two', 43, 12, 90, 'hello', 'October', 385];
// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function f1() {
//   let newArr = [];
//   for (let i = 0; i < arr7.length - 1; i++) {
//     newArr[i] = arr7[i];
//   }
//   arr7 = newArr;
//   div.innerHTML = newArr;
// }
// document.querySelector('.btn').onclick = f1;

// let arr7 = ['one', 1, 2, 'two', 43, 12, 90, 'hello', 'October', 385];
// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function f1() {
//   let newArr = [];
//   let inpVal = inp.value;
//   newArr[0] = inpVal;
//   for (let i = 0; i < arr7.length; i++) {
//     newArr.push(arr7[i]);

//   }
//   arr7 = newArr;
//   div.innerHTML = arr7;
// }
// document.querySelector('.btn').onclick = f1;

// let arr10 = [2,4, 6, 8, 10, 'hello'];
// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function f1() {
// arr10.reverse();
// div.append(arr10);
// }

// document.querySelector('.btn').onclick = f1;

// let arr11 = [0, 2, 3, 7, 8, 5, 11];
// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function f1() {
//   let inpVal = +inp.value;
//   div.innerHTML = arr11.indexOf(inpVal);
// }

// document.querySelector('.btn').onclick = f1;

// let arr13 = ['one', 1, 2, 'two', 43, 12, 90, 'hello', 'October', 385];
// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function f1() {
//   let newArr = [];
//   for (let i = arr13.length - 1; i >= 0; i--) {
//    newArr.push(arr13[i]);
//   }
//   arr13 = newArr;
//   div.append(arr13);
// }

// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function random(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// function f4() {
//   let inpVal = +inp.value;
//   if (inp.value !== '') {
//     let arrNew = [];
//     for (let i = inpVal; i >= 0; i--) {
//       arrNew.push(random(0, 100));
//     }
//     div.innerHTML = arrNew;
//     inp.value = '';
//   } else {
//     div.innerHTML = 'Введите число';
//   }
// }
// document.querySelector('.btn').onclick = f4;

// const arr15 = ['one', 1, 2, 'two', 43, 12, 90, 'hello', 'October', 385];

// let div = document.querySelector('.div');

// function f1() {
//   let newArr = [];
//   for (let i = 0; i < arr15.length; i++) {
//     if (i % 2 === 0) {
//       newArr.push(arr15[i])
//       div.innerHTML = newArr;
//     }
//   }

// }

// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// let arr1 = ['one', 1, 2, 'two', 43, 12, 90, 'hello', 'October', 385];
// let arr2 = [0, 2, 3, 7, 8, 5, 11];

// function f1() {
//   let allArr = arr1.concat(arr2);
//   div.innerHTML = allArr;
// }
// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// let arr1 = ['one', 1, 2, 'two', 43, 12, 90, 'hello', 'October', 385];
// let arr2 = [0, 2, 3, 7, 8, 5, 11];
// function f1() {
//   for (let i = 0; i < arr2.length; i ++) {
//     arr1.push(arr2[i]);
//     div.innerHTML = arr1;
//   }
// }
// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// let arr18 = [3, 5, 7, 11, 12, 13, 14];
// let inp = document.querySelector('.input1');

// function f1() {
//   let inpVal = +inp.value;
//   if (inp.value !== '') {
//     div.innerHTML = arr18.includes(inpVal);
//   } else {
//     div.innerHTML = 'Введите число';
//     inp.value = '';
//   }
// }

// document.querySelector('.btn').onclick = f1;

// let arr1 = [3, 0, 45, 22, 123, -485, 98, 34];
// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');

// function f1() {
//   let inpVal = +inp.value;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === inpVal) {
//       div.innerHTML = 'true';
//       break;
//     } else {
//       div.innerHTML = 'Числа не существует';
//       inp.value = '';
//     }
//   }
// }
// document.querySelector('.btn').onclick = f1;

// let arr20 = ['one', 1, 2, 'two', 43, 12, 90, 'hello', 'October', 385];
// let div = document.querySelector('.div');
// function f1() {
//   div.innerHTML = arr20.join('');
// }

// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');
// let newArr = [];

// function f1() {
//   let inpVal = inp.value;
//   if (inpVal !== '') {
//     newArr.push(inpVal);
//     div.innerHTML = newArr;
//     console.log(newArr);
//   } else {
//     div.innerHTML = 'Введите число';
//   }
// }
// document.querySelector('.btn').onclick = f1;

// Двумерные массивы-------------------------------

// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//     for (let k = 0; k < c.length; k++) {
//       if (a[i][k] === 51){
//         console.log(a[i][k]);
//       }
//     }
// }

// let div = document.querySelector('.div');
// let out = '';
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//   for (let k = 0; k < c.length; k++) {
//     out += `${a[i][k]} `;
//     div.innerHTML = out;
//   }
// }

// let div = document.querySelector('.div');
//  const a = [
//     [1, 2, 3],
//     ["a", "b", "c"],
//     [4, 5, 51, 6],
//     ["d", "e", "f"],
//     [7, 8, 9],
//   ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//   for (let k = 0; k < c.length; k++) {
//       if (a[i][k] === 3 ) {
//         div.innerHTML = a[i][k];
//       }
//   }
// }

// let div = document.querySelector('.div');
// const a = [
//       [1, 2, 3],
//       ["a", "b", "c"],
//       [4, 5, 51, 6],
//       ["d", "e","h1", "f"],
//       [7, 8, 9],
//     ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//     for(let k =0; k < c.length; k++) {
//       if (a[i][k] == 'h1') {
//         div.innerHTML = a[i][k];
//       }
//     }
// }

// let div = document.querySelector('.div');
// const a = [
//       [1, 2, 3],
//       ["a", "b", "c"],
//       [4, 5, 51, 6],
//       ["d", "e","h1", "f"],
//       [7, 8, 9],
//     ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//     for (let k = 0; k < c.length; k++) {
//       if (a[i][k] === 'e') {
//         div.innerHTML = a[i][k];
//       }
//     }
// }

// let div = document.querySelector('.div');
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   div.innerHTML = a[2];
// }

// let div = document.querySelector(".div");
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// function f1() {
//   for (let i = 0 ; i < a.length; i++) {
//     let c = a[i];
//     for (let k = 0; k < c.length; k++) {
//       if (a[i][k] % 2 == 0) {
//           div.innerHTML += a[i][k] + ' ';
//       }
//     }
//   }
// }
// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//   div.innerHTML += a[i][0] + ' ' + '<br>' ;
// }

// let div = document.querySelector('.div');
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// function f1() {
//   for (let i = 0; i < a.length; i++ ) {
//     let c = a[i];
//       for (let k = 0; k < c.length; k++) {
//         if (a[i][k] % 2 !== 0) {
//           div.innerHTML += a[i][k] + ' ';
//         }
//       }
//   }
// }
// document.querySelector('.btn').onclick = f1;

// let div = document.querySelector('.div');
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//     for (let k = 0; k < c.length; k++) {
//         if (typeof a[i][i] === 'number' ) {
//           div.innerHTML += a[i][k] + ' ';
//         }
//     }
// }

// let div = document.querySelector('.div');
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   div.innerHTML += a[i].length + ' ';
// }

// let div = document.querySelector('.div');
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, -51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//     for (let k = 0; k < c.length; k++) {
//       if (a[i][k] > 0) {
//         div.innerHTML += a[i][k]  + ' ';
//       }
//     }
// }

// let div = document.querySelector('.div');
// let out = '';
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, -51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = a.length -1 ; i >= 0; i-- ) {
//   out += a[i] + '<br>';
//   div.innerHTML = out;
// }

// let div = document.querySelector('.div');
// let out = '';
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, -51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = a.length -1 ; i >= 0; i-- ) {
//   let c = a[i];
//   for (let k = c.length - 1; k >= 0; k--) {
//     out += a[i][k] + ' ';
//     div.innerHTML = out;
//   }
//     out += '<br>';
// }

// let div = document.querySelector('.div');
// let out = '';
// const a = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, -51, 6],
//   ["d", "e", "h1", "f"],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   let c = a[i];
//     for (let k = c.length -1 ; k >= 0; k--) {
//         out += a[i][k] + ' ';
//         div.innerHTML = out;
//     }
//     out += '<br>';
// }

// let div = document.querySelector('.div');
// let out = '';
// let chessBoard = [
//   chessRow1 = [1,0,1,0,1,0,1,0],
//   chessRow2 = [0,1,0,1,0,1,0,1],
//   chessRow3 = [1,0,1,0,1,0,1,0],
//   chessRow4 = [0,1,0,1,0,1,0,1],
//   chessRow5 = [1,0,1,0,1,0,1,0],
//   chessRow6 = [0,1,0,1,0,1,0,1],
//   chessRow7 = [1,0,1,0,1,0,1,0],
//   chessRow8 = [0,1,0,1,0,1,0,1]
// ]

// for (let i = 0; i < chessBoard.length; i++ ) {
//   let c = a[i];
//  out += chessBoard[i] + ' ';
//  div.innerHTML = out
// }
// out += '<br>';

//Ассоциативные массивы --------------------------------------------------
// const a1 = {
//   3: "hello",
//   one: "hi",
// };
// let divOut = document.querySelector('.div');
// // let out = '';
// function f1() {
//   "use strict";
//   for (let key in a1) {
//     // out += `${key} -- ${a1[key]} <br>`;
//     // divOut.innerHTML = out;
//     divOut.innerHTML += `${key} -- ${a1[key]} <br>`;
//   }
// }
// document.querySelector(".btn").onclick = f1;

// let a1 = {
//   one: 15,
//   two: 16,
//   five: 20,
// };
// let div = document.querySelector('.div');
// for (let key in a1) {
//   div.innerHTML =  +  a1.two;
// }

// let a2 = {
//   3: "hello",
//   one: "hi",
//   testt: "vodoley",
//   ivan: "ivanov",
// };

// let div = document.querySelector(".div");
// let out = "";
// for (let key in a2) {
//   if (a2[key].length > 4) {
//     out += `${a2[key]} <br>`;
//     div.innerHTML = out;
//   }
// }

// let a3 = {
//   3: "hello",
//   one: "hi",
//   test: "vodoley",
//   ivanko: "ivanov",
// };
// let div = document.querySelector(".div");
// for (let key in a3) {
//   if (key.length > 4) {
//     div.innerHTML += `${key} <br>`;
//   }
// }

// let a4 = {
//   3: 'hello',
//   one: 4,
//   test: 'vodoley',
//   ivan: 6
// };
// let div = document.querySelector('.div');
// for (let key in a4) {
//   if (typeof a4[key] == 'number') {
//     div.innerHTML += `${a4[key]} <br>`;
//   }
// }

// let a5 = {
//   a: 7,
//   z: 4,
//   45: 12,
//   f: 6,
// };
// let div = document.querySelector(".div");
// let sum = 0;
// for (let key in a5) {
//   sum += a5[key];
//   div.innerHTML = sum;
// }

// let a6 = {
//   name: 'Pol',
//   age: 24,
//   sex: 'male',
//   height: 188
// };
// let div = document.querySelector(".div");
// for (let key in a6) {
//   div.innerHTML += `${key}: ${a6[key]} <br>`;
// }

// let inp1 = document.querySelector(".input1");
// let inp2 = document.querySelector(".input2");

// let div = document.querySelector(".div");

// let a7 = {
//   name: "Serg",
//   sex: "male",
// };
// function f1() {
//   let inpVal1 = inp1.value;
//   let inpVal2 = inp2.value;
//   let out = '';
//   if (inpVal1 !== '' && inpVal2 !== '') {
//     a7[inpVal1] = inpVal2;
//     for (let key in a7) {
//       out += `${key}: ${a7[key]} <br>`;
//     }
//   } else {
//     out += 'Введите символы';
//   }
//   inp1.value = '';
//   inp2.value = '';
//   div.innerHTML = out;
// }
// document.querySelector('.btn').onclick = f1;

// let inp3 = document.querySelector(".input3");
// function f2() {
//   let out = '';
//   let inpVal3 = inp3.value;
//   if (inpVal3 !== '') {
//     delete a7[inpVal3];
//     for (let key in a7) {
//       out += `${key}: ${a7[key]} <br>`;
//     }
//   } else {
//     out = 'Введите символы ';
//   }
//   inp3.value = '';
//   div.innerHTML = out;
// }

// document.querySelector('.btn2').onclick = f2;

// let inp4 = document.querySelector(".input4");

// function f3 () {
//   let inpVal4 = inp4.value;
//   let out = '';
//   if (inpVal4 !== '') {
//     for (let key in a7 ) {
//         if (a7[key] == inpVal4) {
//           delete a7[key];
//         }
//     }
//     for (let key in a7) {
//       out += `${key}: ${a7[key]} <br>`;
//     }
//   } else {
//     out = 'Введите символы';
//   }
//   div.innerHTML = out;
// }

// document.querySelector('.btn3').onclick = f3;

// let inp5 = document.querySelector(".input5");

// function f5 () {
//   let inpVal5 = inp5.value;
//   if (a7[inpVal5]) {
//     div.innerHTML = 'true';
//     console.log(true);
//   } else {
//     div.innerHTML = 'false';
//     console.log(false);
//   }
// }
// ocument.querySelector('.btn4').onclick = f5;

//SET -----------------------------------------------------

// let a = new Set();
// a.add(1);
// a.add(2);
// a.add(3);
// console.log(a);

// let a = new Set();
// function f1(arr) {
//   a.add(arr);
//   console.log(a);
// }

// document.querySelector('.btn').onclick = () => {
//   f1(document.querySelector('.input1').value);
// };

// let inp = document.querySelector('.input1');
// let a = new Set();
// function f1(arr) {
//   a.add(arr);
//   console.log(a);
// }

// document.querySelector('.btn').onclick = () => {
//   f1(document.querySelector('.input1').value);
// };

// function f2(del) {
//   if (inp.value !== '') {
//     a.delete(del);
//     console.log(a);
//   } else {
//     alert('Введите число');
//   }
// }
// document.querySelector('.btn2').onclick = () => {
//     f2(document.querySelector('.input1').value)
// };

// let div = document.querySelector('.div');
// let inp = document.querySelector('.input1');
// let a = new Set();
// function f1(arr) {
//   if (inp.value !== '') {
//     a.add(arr);
//     console.log(a);
//   } else {
//     alert('Введите число');
//   }
// }

// document.querySelector('.btn').onclick = () => {
//   f1(document.querySelector('.input1').value);
// };

// function f2(del) {
//   if (inp.value !== '') {
//     a.delete(del);
//     console.log(a);
//   } else {
//     alert('Введите число');
//   }
// }
// document.querySelector('.btn2').onclick = () => {
//     f2(document.querySelector('.input1').value);
// };

// function f3(check) {
//     if (inp.value !== '') {
//       let val = a.has(check);
//       console.log(a);
//       return val;
//     } else {
//       alert('Введите число');
//     }
// }

// document.querySelector('.btn3').onclick = () => {
//  let res = f3(document.querySelector('.input1').value);
//  console.log(res);
// }
// function f4() {
//   let size = a.size;
//   div.innerHTML = size
// }
// document.querySelector('.btn3').onclick = f4;

// let div = document.querySelector('.div');
// let a6 = [3, 4, 3, 2, 4, 56, 1, 23];

// function f1(sum) {
//   let a = new Set(sum);
//   let size = a.size;
//   div.innerHTML = size;
// }

// document.querySelector('.btn').onclick = () => {
//   f1(a6);
// };

// MAP FILTER ---------------------------------------------------

// let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

// let arr = a1.map(function(items) {
//   return items * 2;
// });
// console.log(arr);

// let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
// let a1_res = a1.map((item, index) => {
//   return item * 2 ;
// });
// console.log(a1_res);

// let a2 = [2,3,4,5,10,11,12];

// let a2_res = a2.map((index) => {
//   return index ** 2;
// });
// console.log(a2_res);

// let div = document.querySelector('.div');
// let a3 = [4,"3",6,7,"12",34,"56",78,90,11];

// let a3_res = a3.map((item) => {
//   return +item;
// });

// div.innerHTML = a3_res;

// let div = document.querySelector('.div');
// let a4 = [4,"3",6,7,"12",34,"56",78,90,11]
// let c = [];

// let b = a4.map((item) => {
//   if (typeof item === 'number') {
//     c.push(item)
//   }
// });
// div.innerHTML = c;

// let div = document.querySelector('.div');
// let b1 = [3, 14, 15, 92];
// let arr = [];
// let a = b1.filter((el) => {
//   if (el % 2 == 0) {
//     arr.push(el);
//   }
// });

// div.innerHTML = arr;

// let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];
// let div = document.querySelector('.div');
// let arr = [];
// let a = b6.map((el) => {
//     if (typeof el === 'number') {
//       arr.push(el);
//     }
// });
// div.innerHTML = arr;

// let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];
// let div = document.querySelector('.div');
// let arr = [];
// let a = b7.filter((el) => {
//   if (typeof el === 'string') {
//     arr.push(el);
//   }
// });

// div.innerHTML = arr;

// let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];
// let div = document.querySelector('.div');
// let arr = [];

// let a = b8.filter((el, index) => {
//   if (el % 2 == 0 && typeof el === 'number') {
//     arr.push(index);
//   }
// });
// div.innerHTML = arr;

// let div = document.querySelector('.div');
// let b9 = [3, "hello", 4, "world", 5, "hi"];
// let arr = [];
// let arr2 = [];
// let b = b9.filter((el) => {
//   if (typeof(el) === 'number') {
//     arr.push(el);
//     div.innerHTML += arr;
//     return el;
//   }
//   if (typeof(el) === 'string') {
//       arr2.push(el);
//       div.innerHTML += arr2;
//       return el;
//     }
// });

//JOIN, SPLIT, FOREACH------------------------------------------------------

// let a = 'heello, hi, mahai';
// console.log(a.split(','));

// let b = [1, 2, 3];
// console.log(b.join('-'));

// АКАРДЕОН ---------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//   const accordions = document.querySelectorAll('.accordion');

//   accordions.forEach(el => {
//     el.addEventListener('click', (e) => {
//       const self = e.currentTarget;
//       const control = self.querySelector('.accordion__control');
//       const content = self.querySelector('.accordion__content');

//       self.classList.toggle('open');
//     });
//   });
// });

// Учебник learn.javascript.ru
//Переменные -----------------------------------------

// const name = 'Джон';
// const admin =  name;
// alert(name);

// const ourPlanet;
// const currentUserSite;

// Типы данных
// (`` Шаблонные строки)

// let name = "Ilya";

// alert( `hello ${1}` ); // ? hello 1

// alert( `hello ${"name"}` ); // ? hello name

// alert( `hello ${name}` ); // ? hello Ilya

// alert, prompt, confirm -----------------------------------------

// result = prompt(title, [default]);
// Квадратные скобки в синтаксисе [...]

// Квадратные скобки вокруг default в описанном выше синтаксисе означают, что параметр факультативный, необязательный.

// let userName =  prompt(`Введите имя`);
// alert(`Ваще имя ${userName} `);

//Преобразование типов -------------------------------------------
// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// Базовые операторы, математика ----------------------------------------------

// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // false неправильно 1
// 6 / "3" // 2
// "2" * "3" //6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 // $45
// "4" - 2 //2
// "4px" - 2 // nan
// 7 / 0 // 0 неправильно infinoty
// "  -9  " + 5 // -9 5
// "  -9  " - 5//-14
// null + 1 // null непрвильно 1
// undefined + 1// undefined неправильно NaN
// " \t \n" - 2 // ? -2

// Операторы сравнения ---------------------------------------

// let wichNameJs = prompt(`Какое официальное название JavaScript?`);
// if (wichNameJs !== 'ECMAScript') {
//   alert('Не знаете? ECMAScript! ');
// } else {
//   alert('Верно');
// }

// let numberOfPrompt = prompt(`Введите число`);

// if (numberOfPrompt > 0) {
//   alert(1);
// } else if (numberOfPrompt < 0) {
//   alert(-1);
// } else if (numberOfPrompt == 0){
//   alert(0);
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let login = prompt('Введи слово')
// let message = (login == 'Сотрудник') ? 'Привет':
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина':
// '';
// alert( message );

// функции-стрелки ----------------------

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//    () => { alert("Вы согласились."); },
//    () => { alert("Вы отменили выполнение."); }
// );

// While for
// let i = 0;
// while (++i < 5) alert( i ); /// 4

// let i = 0;
// while (i++ < 5) alert( i ); // 5

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i < 3) {
//   i++;
//   console.log(i);
// }


// let outputVal;
// do {
//   outputVal = prompt('Введите число больше 100')
// } while (outputVal <= 100 && outputVal);

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let k = 2; k < i; k++ ) {
    if (i % k == 0) continue nextPrime;
  }
  console.log(i);
}