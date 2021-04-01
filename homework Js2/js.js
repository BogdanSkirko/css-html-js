// // --створити масив з:
// // - з 5 числових значень
let num = [1, 3, 3.3, 4, 6];
// // - з 5 стічкових значень
let string = ['hi', 'hello', 'good', 'bad', 'nice'];
// // - з 5 значень стрічкового, числового та булевого типу
let all = ['he', 'she', 'it', 'you', 'I', 2, 4, 6, 7, 9, true, false, false, false, true];
console.log(num);
console.log(string);
console.log(all);
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty = []
empty.push(3, 4, 5, 6, 7)
console.log(empty);
// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 11; i++) {
    document.write('<div>Lorem10</div>')

}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 11; i++) {
    document.write('<div>Lorem10</div>', i)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

let im = 0
while (im < 20) {
    document.write('<h1>Hello</h1>')
    im++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i = 0
while (i < 20) {
    document.write('<h1>Hello</h1>', i)
    i++
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < 10; i++) {
    console.log(number[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']

for (let i = 0; i < 10; i++) {
    console.log(str[i])

//  Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
    let nsb = ['q', 'w', 3, 4, 5, true, false, 'f', 'g', 'h']

    for (let i = 0; i < 10; i++) {
        console.log(nsb[i]);
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
    let Mix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]

    for (let i = 0; i < Mix.length; i++)
        if (typeof Mix[i] === "boolean") {
            console.log(Mix[i])
        }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
    let Mix1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
    for (let i = 0; i < Mix1.length; i++)
        if (typeof Mix1[i] === 'number') {
            console.log(Mix1[i])
        }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
    let Mix2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', false, false, false, false, false, true, true, true, true, true,]
    for (let i = 0; i < Mix2.length; i++)
        if (typeof Mix2[i] === 'string') {
            console.log(Mix2[i])
        }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    let Empty = [];
    Empty.push(true, false, true, 'how', 'what', 'who', 'why', 3, 4, 6);
    for (let i = 0; i < 10; i++) {
        console.log(Empty[i])
    }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    let Ten = [true, false, true, 'how', 'what', 'who', 'why', 3, 4, 6];
    for (let i = 0; i < 10; i++) {
        console.log(Ten[i], i)
        document.write(Ten[i], i)
    }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    let Alot = [];
    Alot.push(Alot.length = 100)
    for (let i = 0; i < 100; i++) {
        console.log(Alot[i], i);
        document.write(Alot[i], i)
    }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    for (let i = 2; i < 100; i = i + 2) {
        console.log([i], i);
        document.write([i], i);
    }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    for (let i = 1; i < 100; i = i + 2) {
        console.log(i);
        document.write(1)
    }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

    for (let minutes = 0; minutes < 2; minutes++) {
        for (let seconds = 1; seconds < 60; seconds++) {
            console.log(minutes + ' Хвилин ' + seconds + ' секунд ')
        }
        if (minutes === 2 && seconds === 60) {
            break
        }
    }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

    for (let hours = 0; hours <= 2; hours++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            for (let seconds = 0; seconds < 60; seconds++) {
                if (hours === 2 && minutes === 20 && seconds === 0) {
                    break;
                }
                {
                    document.write(hours + 'годин' + minutes + 'хвилин' + seconds + 'секунд')
                    {

                    }
                }
            }
        }
    }
}