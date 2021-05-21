// 1) створити функцію яка приймає масив та виводить його

function arr(favorite_numbers) {
    console.log(`${favorite_numbers}`)
}

arr('[1,2,3,4,5,7,8,9,Ten,Two]')

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function randArr(value, num) {
    const rArr = []
    for (let i = 0; i < value; i++) {
        rArr.push(Math.round(Math.random() * num))
    }
    console.log(rArr);
}

randArr(5, 33)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function createFun(array) {
    let min = array [0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}
let minimal = createFun([55, 0, 6])
console.log(minimal);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function createFun(array) {
    let max = array [0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
let minimal = createFun([55, 0, 6])
console.log(minimal);
// 5) створити функцію яка повертає найбільше число з масиву
function createfunction(array = []) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

let number = createfunction([1, 6, 10, 3123, 13234, 52, 1234, 23, 2134, 3])
console.log(number);
// 6) створити функцію яка повертає найменьше число з масиву
function createfunction(array = []) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min


}

let number = createfunction([1, 6, 10, 3123, 13234, 52, 1234, 23, 2134, 3])
console.log(number);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function arrNum (array =[]){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
return sum
}

let sumArr = arrNum([33,5,63,6325,123,534,645,3423])
console.log(sumArr);
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrAv (array =[]){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i] / array.length
    }
return sum
}

let sumArr = arrAv([2,4,6,8])
console.log(sumArr);
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let user = {
    name: 'Dima',
    age: 16,
    car: 'honda'
}
console.log(Object.values(user))

function ven(arr) {
    let arrays = []
        for (let val in arr) {
            arrays.push(val.values(user))
        }

    return ven
}
let end = ven(user)
console.log(end)
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function sum (){
    let suma = []
    let first = [6,2,3,4]
    for (let i = 0; i < first.length; i++) {
        const firstElement = first[i];

    }
    let second = [6,2,3,4]
    for (let i = 0; i < second.length; i++) {
        const secondElement = second[i];
        suma.push(first[i] + second[i])
    }
    return suma
}

let end = sum ()
console.log(end);
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
