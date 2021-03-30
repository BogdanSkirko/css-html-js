// // --створити масив з:
// // - з 5 числових значень
// let num = [1, 3, 3.3, 4, 6];
// // - з 5 стічкових значень
// let string = ['hi', 'hello', 'good', 'bad', 'nice'];
// // - з 5 значень стрічкового, числового та булевого типу
// let all = ['he', 'she', 'it', 'you', 'I', 2, 4, 6, 7, 9, true, false, false, false, true];
// console.log(num);
// console.log(string);
// console.log(all);
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = []
// empty.push(3,4,5,6,7)
// console.log(empty);
// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 11; i++)
// {
//   document.write('<div>Lorem10</div>' )
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 11; i++)
// {
//   document.write('<div>Lorem10</div>', i)
//
// }

/*
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
//
// let i = 0
// while (i<20)
// {
//   document.write('<h1>Hello</h1>')
//   i++
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0
// while (i<20)
// {
//   document.write('<h1>Hello</h1>', i)
//   i++
// }

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// for (let i = 0; i < 10; i++) {
//     console.log(number[i]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['q','w','e','r','t','y','u','i','o','p']
//
// for (let i = 0;i<10; i++){
//   console.log(str[i])
//
//  Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let nsb = ['q', 'w', 3, 4, 5, true, false, 'f','g','h']
//
// for (let i = 0; i <10; i++){
//     console.log(nsb[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let Mix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
//
// for (let i = 0; i < Mix.length; i++)
// if (typeof Mix[i] === "boolean"){
//     console.log(Mix[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let Mix1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
// for (let i = 0; i < Mix1.length; i++)
//     if (typeof Mix1[i] === 'number'){
//         console.log(Mix1[i])
//     }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let Mix2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
// for (let i = 0; i < Mix2.length; i++)
//     if (typeof Mix2[i] === 'string'){
//         console.log(Mix2[i])
//     }

