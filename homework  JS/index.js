// //- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let one = 'Hello'
let two = 'owu'
let three = 'com'
let four = 'ua'
let five = '1'
let six = '10'
let seven = '-999'
let eight = '123'
let Pi = '3.14'
let ten = '2.7'
let eleven = '16'
let twelve = true
let thirteen = false
// // Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(Pi);
console.log(ten);
console.log(eleven);
console.log(twelve);
console.log(thirteen);

alert(one);
alert(two);
alert(three);
alert(four);
alert(five);
alert(six);
alert(seven);
alert(eight);
alert(Pi);
alert(ten);
alert(eleven);
alert(twelve);
alert(twelve);
alert(thirteen);

document.write(one);
document.write(two);
document.write(three);
document.write(four);
document.write(five);
document.write(six);
document.write(seven);
document.write(eight);
document.write(Pi);
document.write(ten);
document.write(eleven);
document.write(twelve);
document.write(thirteen);
// //- Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
one = 'Helloworld';
two = 'okten';
three = 'ua';
four = 'eu';
five = 'Spain';
six = 'England';
seven = 'Scotland';
eight = 'Usa';
Pi = '3.1454654645';
ten = '10';
eleven = '11';
twelve = false;
thirteen = true;
// //Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(Pi);
console.log(ten);
console.log(eleven);
console.log(twelve);
console.log(thirteen);

alert(one);
alert(two);
alert(three);
alert(four);
alert(five);
alert(six);
alert(seven);
alert(eight);
alert(Pi);
alert(ten);
alert(eleven);
alert(twelve);
alert(twelve);
alert(thirteen);

document.write(one);
document.write(two);
document.write(three);
document.write(four);
document.write(five);
document.write(six);
document.write(seven);
document.write(eight);
document.write(Pi);
document.write(ten);
document.write(eleven);
document.write(twelve);
document.write(thirteen);
// //- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let yourname = prompt('Ваше ім*я?');
let fathername = prompt('Ім*я Вашого батька');
let UserAge = prompt('Ваш Вік?');
// // Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
console.log(yourname);
console.log(fathername);
console.log(UserAge);

// // Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let info = (yourname + fathername + UserAge);
document.write(info);
// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

let UserAge1 = parseInt(prompt('Скільки тобі років?'));
let UserMonth = parseInt(prompt('Місяць народження?'));
let UserDate = parseInt(prompt('День народження?'));
console.log(UserAge1);
console.log(UserMonth);
console.log(UserDate);
//За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
let UserAge2 = parseInt(prompt('Скількі тобі років?'));
let UserMonth2 = parseInt(prompt('місяць НАродження?'));
let UserDate2 = parseInt(prompt('День народження?'));
let FavoriteNumber = parseInt(prompt('Улюблене число?'));
console.log(UserAge2 + UserMonth2 + UserDate2 + FavoriteNumber);
// // За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
let UserAge3 = parseFloat(prompt('Скількі тобі років?'));
let UserMonth3 = parseFloat(prompt('місяць НАродження?'));
let UserDate3 = parseFloat(prompt('День народження?'));
console.log(UserAge3);
console.log(UserMonth3);
console.log(UserDate3);
// // Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
let result = (UserAge3 + UserMonth3 + UserDate3);
console.log(result);
//- За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
let Pi10 = parseFloat(prompt('Число Пі?'));
let Pi2 = parseFloat(prompt('Пі*2?'));
let Pi3 = parseFloat(prompt('Пі*3?'));


console.log(Math.round(Pi10 + Pi2 + Pi3));


//  - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25

let Question = prompt("Скільки днів в році?");
let Question2 = prompt('Скільки місяців взимку?');

console.log(Math.pow(Question, Question2));

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 >= 6);
console.log(5 === 6);
console.log(10 === 10);
console.log(10 >= 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(10 != 10);
console.log(123 > 123);
console.log(123 === 123);
