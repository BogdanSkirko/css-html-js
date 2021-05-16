// //  --створити масив з:
// //  - з 5 числових значень
// let num = [1, 3, 3.3, 4, 6];
// //  - з 5 стічкових значень
// let string = ['hi', 'hello', 'good', 'bad', 'nice'];
// //  - з 5 значень стрічкового, числового та булевого типу
// let all = ['he', 'she', 'it', 'you', 'I', 2, 4, 6, 7, 9, true, false, false, false, true];
// console.log(num);
// console.log(string);
// console.log(all);
// //  -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = []
// empty.push(3, 4, 5, 6, 7)
// console.log(empty);
// //  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 11; i++) {
//     document.write('<div>Lorem10</div>')
//
// }
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 11; i++) {
//     document.write('<div>Lorem10</div>', i)
//
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
//
// let im = 0
// while (im < 20) {
//     document.write('<h1>Hello</h1>')
//     im++
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0
// while (i < 20) {
//     document.write('<h1>Hello</h1>', i)
//     i++
// }
//
// // Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// for (let i = 0; i < 10; i++) {
//     console.log(number[i]);
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
//
// for (let i = 0; i < 10; i++) {
//     console.log(str[i])
//
// //  Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//     let nsb = ['q', 'w', 3, 4, 5, true, false, 'f', 'g', 'h']
//
//     for (let i = 0; i < 10; i++) {
//         console.log(nsb[i]);
//     }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//     let Mix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
//
//     for (let i = 0; i < Mix.length; i++)
//         if (typeof Mix[i] === "boolean") {
//             console.log(Mix[i])
//         }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//     let Mix1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
//     for (let i = 0; i < Mix1.length; i++)
//         if (typeof Mix1[i] === 'number') {
//             console.log(Mix1[i])
//         }
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//     let Mix2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
//     for (let i = 0; i < Mix2.length; i++)
//         if (typeof Mix2[i] === 'string') {
//             console.log(Mix2[i])
//         }
//
// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
//     let Empty = [];
//     Empty.push(true, false, true, 'how', 'what', 'who', 'why', 3, 4, 6);
//     for (let i = 0; i < 10; i++) {
//         console.log(Empty[i])
//     }
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
//     let Ten = [true, false, true, 'how', 'what', 'who', 'why', 3, 4, 6];
//     for (let i = 0; i < 10; i++) {
//         console.log(Ten[i], i)
//         document.write(Ten[i], i)
//     }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//     let Alot = [];
//     Alot.push(Alot.length = 100)
//     for (let i = 0; i < 100; i++) {
//         console.log(Alot[i], i);
//         document.write(Alot[i], i)
//     }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
//     for (let i = 2; i < 100; i = i + 2) {
//         console.log([i], i);
//         document.write([i], i);
//     }
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//     for (let i = 1; i < 100; i = i + 2) {
//         console.log(i);
//         document.write(1)
//     }
//
// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
//     for (let minutes = 0; minutes < 2; minutes++) {
//         for (let seconds = 1; seconds < 60; seconds++) {
//             console.log(minutes + ' Хвилин ' + seconds + ' секунд ')
//         }
//         if (minutes === 2 && seconds === 60) {
//             break
//         }
//     }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
//     for (let hours = 0; hours <= 2; hours++) {
//         for (let minutes = 0; minutes < 60; minutes++) {
//             for (let seconds = 0; seconds < 60; seconds++) {
//
//                  console.log(hours + 'годин' + minutes + 'хвилин' + seconds + 'секунд')
//
//                 if (hours === 2 && minutes === 20 && seconds === 0) {
//                     break;
//                 }
//                 {
//
//                     {
//
//                     }
//                 }
//             }
//         }
//
// }
// let abc = ['a', 'b', 'c']
// let numS = [1, 2, 3,]
// for (const num of numS) {
//     abc.push(num)
// }
// console.log(abc)
//
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1, 2, 3]
// for (let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }
//
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1, 2, 3]
// arr.push(4,5,6)
// console.log(arr);
// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let lang = ['js', 'css', 'jq']
// let first = lang.shift()
// console.log(first);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let lang = ['js', 'css', 'jq']
// let last = lang.pop()
// console.log(last);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
//     let numS = [1, 2, 3, 4, 5]
// numS.shift()
// numS.shift()
// numS.shift()
// console.log(numS);
// '- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].'
//  let numS = [1, 2, 3, 4, 5]
// numS.pop()
// numS.pop()
// numS.pop()
// console.log(numS);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let numS = [1, 2, 3, 4, 5]
// let num1 = numS.pop()
// let num2 = numS.pop()
// numS.push('a' , 'b' , 'c')
// numS.push(num1,num2)
// console.log(numS);
//
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// let numS = [1, 2, 3, 4, 5]
// let num1 = numS.shift()
// numS.unshift('a','b')
// numS.unshift(num1)
// let last = numS.pop()
// numS.push('c')
// numS.push(last)
// numS.push('e')
// console.log(numS);
// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//     let numS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < numS.length; i++)
// if ((numS[i] % 2) === 0 ){
//     console.log(numS[i]);
//
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let empty =[]
// for (const number of numbers) {
//
// }
// let end = numbers.push(empty)
//  console.log(numbers);
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let empty =[]

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let numbers = [2,17,13,6,22,31,45,66,100,-18]
// let i = 0
// 1. перебрати його циклом while
// let i = 0
// while (i < numbers.length){
//     console.log(numbers[i]);
//     i++
// }
// 2. перебрати його циклом for
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// while (i < numbers.length){
//     if (( numbers[i] % 2 ) === 1)
//     console.log(numbers[i]);
//     i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2) === 1)
//     console.log(numbers[i]);
//
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//  while (i < numbers.length) {
//      if ((numbers[i] % 2) === 0)
//          console.log(numbers[i]);
//      i++
//  }
//  6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2) === 0)
//         console.log(numbers[i]);
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 3) === 0)
//         numbers[i] = 'okten'
//         console.log(numbers[i]);
// }
//  8. вивести масив в зворотньому порядку.
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// for (let i = numbers.length; i >= 0; i--) {
//     console.log(numbers[i]);

// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу
// let first = []
// for (let i = 0; i < 100; i++) {
// first.push(i)
//     if ((first[i] % 2) === 0 )
//
//     console.log(first[i]);
// }
// // - заповнити його 50 непарними числами за допомоги циклу.
// let first = []
// for (let i = 0; i <= 101; i++) {
// first.push(i)
//     if ((first[i] % 2) === 1 )
//
//     console.log(first[i]);
// }

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 2; i < numbers.length  ; i=i+3) {
//     console.log(numbers[i]);

// }
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 2; i < numbers.length; i = i + 3) {
//     if ((numbers[i] % 2 ) === 0)
//     console.log(numbers[i]);

// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let neww = []
// for (let i = 2; i < numbers.length; i = i + 3) {
//     if ((numbers[i] % 2 ) === 0)
//     neww.push(numbers[i])
//         console.log(neww)
// }
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let numbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2) === 0)
//         console.log(numbers[i-1]);

//
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let numbers = [100,250,50,168,120,345,188]
// for (let i = 0; i < array.length; i++) {
//
// }