// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"

let elem = document.getElementById('content');
console.log(elem);
//     b) отримує текст з блоку з id "rules"

let text = document.getElementById('rules');
console.log(text);

//     c) замініть текст параграфа з id 'content' на будь-який інший

let parag = document.getElementById('content');
parag.innerText = 'Let it be';
console.log(parag);


//     d) замініть текст параграфа з id 'rules' на будь-який інший

let rules1 = document.getElementById('rules');
rules1.innerText = 'Let it be';
console.log(rules1);

// e) змініть кожному елементу колір фону на червоний

let first = document.getElementsByTagName('p')
for (const pElement of first) {
    pElement.style.backgroundColor = 'red';
}

let second = document.getElementsByTagName('div')
for (const divElements of second) {
    divElements.style.backgroundColor = 'red';
}
let third = document.getElementsByTagName('li')
for (const liElements of third) {
    liElements.style.backgroundColor = 'red';
}


  // f) змініть кожному елементу колір тексту на синій

let first = document.getElementsByTagName('p')
for (const pElement of first) {
    pElement.style.color = 'blue'
}

let second = document.getElementsByTagName('div')
for (const divElements of second) {
    divElements.style.color = 'blue'
}
let third = document.getElementsByTagName('li')
for (const liElements of third) {
    liElements.style.color = 'blue'
}

 // g) отримати весь список класів елемента з id=rules і вивести їх в console.log

let allclass = document.getElementById('rules')
console.log(allclass);

// //     h) отримати всі елементи з класом fc_rules

let allelements = document.getElementsByClassName('fc_rules')
console.log(allelements);

  // h) отримати всі елементи з класом fc_rules

let redcolor = document.getElementsByClassName('fc_rules')
for (let allcolor of redcolor) {
    allcolor.style.color = 'red'
}

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Вставити цей блок на сторінку
for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `Імя : ${user.name} <br> Вік: ${user.age} <br> Статус: ${user.status} <br> Адреса: ${user.address}`
    userDiv.style.border = '3px'
    userDiv.style.borderStyle = 'solid'
    document.body.appendChild(userDiv)
}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let divAdres = document.createElement('div')
    divAdres.innerHTML = `Адреса : ${user.address}`
    divAdres.style.border = '3px'
    divAdres.style.borderStyle = 'solid'
    document.body.appendChild(divAdres)
    console.log(divAdres);

}


