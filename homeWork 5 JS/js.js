// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
class Own {
    constructor(ram, pow, name) {
        this.ram = ram;
        this.pow = pow;
        this.name = name;
    }

// В кожного компютера має бути метод включання.
// ===
    power() {
        console.log(`${this.name} is poweron`)
    }
}

// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
class LapTop extends Own {
    constructor(ram, pow, name, mon = 17) {
        super(ram, pow, name);
        this.mon = mon

// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

        this.battary = Math.round(this.pow / (this.mon * this.ram) * 1000)
    }
}

const lenovo = new LapTop(1024, 200, 'Lap',)
lenovo.power()
console.log(lenovo);
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.

class miniLap extends LapTop {
    constructor(ram, pow, name, mon = 17, weigth, battary) {
        super(ram, pow, name, mon = 17);
        this.weigth = weigth;
        this.battary = battary;
    }
}

const miniLenovo = new miniLap(1024, 200, 'miniLen', 15, 3, 6)
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
if (miniLenovo.weigth > 2 && miniLenovo.battary < 4) {
    console.log('Помилка')
} else {
    miniLenovo.power()
    console.log(miniLenovo)
}
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class basePk extends Own {
    constructor(ram, pow, name, gamename, fps) {
        super(ram, pow, name);
        this.gamename = gamename
        this.fps = this.pow / this.ram

    }

    powerGame() {
        console.log(`На даний момент в грі ${this.gamename} нас ${this.fps} fps`)
    }
}

const ligthPk = new basePk(8888, 300, 'Game', 'Dota2')
ligthPk.powerGame()
console.log(ligthPk)

// Компютер можна апгрейдити.

// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
if (ligthPk.pow < 300) {
    ligthPk.pow = 300
    console.log(`Зменшувати потужність процесора не можна!!!`)
}
if (ligthPk.pow > 300 * 1.1) {
    ligthPk.pow = 300
}
console.log(ligthPk.pow)
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
if (ligthPk.ram < 1024) {
    ligthPk.ram = 1024
    console.log(`Зменшувати оперативку не можна!!!`)
}
if (ligthPk.ram > 1024 * 2) {
    ligthPk.ram = 1024
}
console.log(ligthPk.ram)

// Від базового ПК необхідно зробити ігровий ПК.
class games extends basePk {
    constructor(ram, pow, name, gamename, fps) {
        super(ram, pow, name);
        // Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
        this.fps = ligthPk.fps * 2
        this.gamename = gamename

    }

}

const legion = new games(4096, 600, 'gamer', 'Wall2',)
// При запуску однієї гри потужніть процесора має падати на 0.1%.
legion.pow = legion.pow * 0.99
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
if (legion.pow < 500 && legion.ram < 8) {
    console.log(`на цьому відрі ігри не запускаються `)
}
legion.powerGame()
console.log(legion)

