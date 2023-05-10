"use strict";

//Перше завданя
// Розрахувати суму перших N елементів послідовності. N вказує користувач
// (наприклад n=4 , 1+2+3+4)
function sequenceSum(n) {
  n >= 0;
  if (n == 1) return 1;
  return n + sequenceSum(n - 1);
}
function sequenceSum2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Друге завдання
// 2.1 Створити об'єкт client який містить наступні властивості: id, ім'я, прізвище, стать, номер кредитної картки, кошти, рівень картки (базова, pro, diamond ...)
// 2.2 Створити об'єкт банку, який має назву, контактні дані.
// 2.3 У банку створити властивість cardLevels, значення якої буде Мапою, в якій ключами будуть назви рівнів карток, а значенням - об'єкти з властивостями знижки, кешбеку та кредитного ліміту
// 2.4 Створити функцію яка буде повертати стрінгу з усіма даними користувача та даними, пов'язаними з його кредитною карткою
// 2.4* Якщо в банку немає рівня кредитної картки користувача (можливо вони його видалили) то використовувати значення знижки, кешбеку та кредитного ліміту як для базової картки

// Третє завдання
// 3.1 Створити масив з числами на 20+ елементів.
// 3.2 Вивести в консоль всі елементи з парними індексами
// 3.3 Вивести в консоль всі неперані числа
// 3.4 Вивести індекси всіх негативних чисел ( якщо таких немає то додати 1 - 2 для перевірки)
// 3.5 Порахувати кількість 0 в масиві чисел

const arrWithNumbers = [
  76, 30, -93, -12, 11, -92, 73, -73, 9, -42, -55, -24, 65, 52, -2, -90, -74,
  -21, 60, -42, 4, 11, 22, 33,
];

function showEvenIndex([...arrWithNumbers]) {
  console.log([...arrWithNumbers] % 2 !== 0);
}
// Четверте завдання
// 4 Створити класи:
// - Книжка (автор, назва, рік видання, видавництво)
// - Електронна книжка (автор, назва, рік видання, видавництво, формат книжки, електронний номер)

class Book {
  constructor(author, bookname, publishingYear, publisher) {
    this.author = author;
    this.bookname = bookname;
    this.publishingYear = publishingYear;
    this.publisher = publisher;
  }
}

class electronicBook extends Book {
  constructor(
    author,
    bookname,
    publishingYear,
    publisher,
    bookFormat,
    idNumber
  ) {
    super(author, bookname, publishingYear, publisher);
    this.bookFormat = bookFormat;
    this.idNumber = idNumber;
  }
}

// П`яте завдання
// Написати функцію, яка виводить в консоль числа від  1 до n, где n — це ціле число, яки функція приймає. Функція також має наступні вимоги:
// вивід рядка fizzbuzz замість чисел, кратних 3 та 5.
// вивід рядка  fizz замість чисел, кратних  3;
// вивід рядка  buzz замість чисел, кратних  5;

function fizzBuzz(n) {
  if (n <= 0){
    throw new RangeError('Число не може рівнятись 0, або бути негативним');
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }
  if (n % 3 === 0) {
    return "fizz";
  }
  if (n % 5 === 0) {
    return "buzz";
  }
  for (let i = 1; i < n; i++) {
    return n;
  }
}

// Шосте завдання
// 6. Ви отримуєте з сервера наступну структуру:
// const serverResponse = {
//     data: {
//         data: [
//             {
//                 id: 0,
//                 name: 'John',
//                 lastName: 'Doe'
//             },
//             {
//                 id: 1,
//                 name: 'Jane',
//                 lastName: 'Doe'
//             },
//             {
//                 id: 2,
//                 name: 'Admin',
//                 lastName: 'Tiranovich'
//             },
//             {
//                 id: 3,
//                 name: 'User',
//                 lastName: 'Undefinovich'
//             },
//         ]
//     }
// }

// За допомогою деструктурізації:
// - створити змінну users з масиву  користувачів, що знаходиться в об'єкту serverResponse
// - створити окремі змінні для 2 та 3 користувача

const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: "John",
        lastName: "Doe",
      },
      {
        id: 1,
        name: "Jane",
        lastName: "Doe",
      },
      {
        id: 2,
        name: "Admin",
        lastName: "Tiranovich",
      },
      {
        id: 3,
        name: "User",
        lastName: "Undefinovich",
      },
    ],
  },
};

const { data: users } = serverResponse;
