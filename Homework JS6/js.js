// 1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого.
const arr = [1, 4, 7, 9, 323, 534, 6, 13, 6, 986, 32, 896, 234, 787, 324, 4, 6, 89, 2, 1]

let arrsort =arr.sort((a,b) => {
    return a-b
})
console.log(arrsort);
//  b) відсортувати його від більшого до меншого.
let arrsort =arr.sort((a,b) => {
    return b-a
})
console.log(arrsort);
//  c) Відфілтрувати числа які є кратними 3.

let filter = arr.filter(value => {
    return !(value % 3)
})
console.log(filter);

//  d) Відфілтрувати числа які є більшими за 10.
let filter = arr.filter(value => {
    return !(value<=10)
})
console.log(filter);
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
let num = arr.forEach(index => {
    document.write(index)

})

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
let num = arr.map((value,) => {
    return value * 3
})
console.log(num);


//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
let num = arr.reduce((acc,currentValue) =>{
    return acc + currentValue

})

console.log(num);
// 2) Створити масив з 20 стрічок та:
let str = ['allo','zoo', 'cos','main','second','play','predictable','photo','veni','vidi','lose','good','bounty','boat','use','pain','pet','google','pool','fine']
//  a) Відсортувати його в алфавітному порядку
let sort = str.sort()
console.log(sort);
//  b) Відсортувати в зворотньому порядку
let sort = str.sort((a, b) => {
    if (a > b )
        return  - 1
})
console.log(sort);
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let more = str.filter(name => {
    return name.length > 4
})
console.log(more);
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let empty = []
let add = str.filter((value,array) => {
     empty.push(`Hello ${value}`)
     return value
})
console.log(empty);
// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [
   {name: 'vasya', age: 31, isMarried: false},
   {name: 'petya', age: 30, isMarried: true},
   {name: 'kolya', age: 29, isMarried: true},
   {name: 'olya', age: 28, isMarried: false},
   {name: 'max', age: 30, isMarried: true},
   {name: 'anya', age: 31, isMarried: false},
   {name: 'oleg', age: 28, isMarried: false},
   {name: 'andrey', age: 29, isMarried: true},
   {name: 'masha', age: 30, isMarried: true},
   {name: 'olya', age: 31, isMarried: false},
   {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

let sort = users.sort((prev,next) => prev.age - next.age)
console.log(sort);

let sort1 = users.sort((prev,next) => next.age - prev.age)
console.log(sort);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let sort = users.sort((prev, next) => {
    if ( prev.name.length < next.name.length ) return -1;
    if ( prev.name.length < next.name.length ) return 1;
});
console.log(sort);

let sort1 = users.sort((prev, next) => {
    if ( prev.name.length > next.name.length ) return -1;
    if ( prev.name.length > next.name.length ) return 1;
});
console.log(sort1);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)

const addId = users.map((a,b) => ({...a, id : b+1}))
console.log(addId);

// d) відсортувати його за індентифікатором

let sortId = addId.sort((prev,next)=> prev.id - next.id)
console.log(sortId);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let marAddHome = sortId.reduce((acc,user) =>
    user.isMarried ? [...acc, {...user, house : true}] : acc , []);
console.log(marAddHome);