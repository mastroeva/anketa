'use strict'

let firstName = prompt ('Ваша фамилия?');
while (!isNaN(firstName)) {
    if (!isNaN(firstName)) {
        prompt ('Неправильно значение! Введите свою фамилию занаво')
    }
    firstName = prompt ('Ваша фамилия?');
};

let name =  prompt ('Ваше имя?');
while (!isNaN(name)) {
    if (!isNaN(name)) {
        prompt ('Неправильно значение! Введите своё имя занаво')
    }
    firstName = prompt ('Ваше имя?');
};

let dadName = prompt ('Ваше отчество?');
while (!isNaN(dadName)) {
    if (!isNaN(dadName)) {
        prompt ('Неправильно значение! Введите своё отчество занаво')
    }
    firstName = prompt ('Ваше отчество?');
};

let age = prompt ('Ваш возраст?');
while (!Number(age)) {
    if (!Number(age)) {
        prompt ('Неправильно значение! Введите свой возварст занаво')
    }
    age = prompt ('Ваш возраст?');
};

let gender = confirm ('Ваш пол - мужской?');
let q = gender ? 'Мужской' : 'Женский';

let pens;
if (gender === 'Мужской' && age > 60 || gender === 'Женский' && age > 50) {
    pens = 'Да'
} else {
    pens = 'Нет'
}

alert (
    `Ваше ФИО: ${firstName} ${name} ${dadName}
    Ваш возраст: ${age}
    Ваш возвраст в днях: ${age * 365} 
    Через 5 лет вам будет: ${+age + 5}
    Ваш пол: ${q}
    Вы на пенсии: ${pens}`
);




