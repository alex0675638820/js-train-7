//Завдання 1: Функція для створення символу
function createSymbol() {
  // Повернемо символ без опису
  return Symbol();
}

console.log("Завдання 1 ====================================");
console.log(createSymbol()); // Виведе Symbol()

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription(property) {
  // Створюємо символ symbol з описом property
  const symbol = Symbol(property);
  //Повертаємо опис символа symbol
  return symbol;
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription("My symbol")); // Виведе My symbol

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty(property) {
  // Створимо змінну sym яка дорівнює символу без опису
  const sym = Symbol();
  // Створимо пустий об'єкт
  const set = {};
  // Додамо властивість до об'єкту, ключем якої буде наш символ, а значенням буде аргумент property
  set[sym] = property;
  // Повертаємо об'єкт
  return `[sym]: ${set[sym]}` ;
}
console.log("Завдання 3 ====================================");
console.log(
  createSymbolProperty("Це властивість об'єкту з використанням символу")
); //Виведе { [Symbol()]: "Це властивість об'єкту з використанням символу" }

// Завдання 4. Перевіримо чи є символи унікальними
// Функція для створення двох символів з однаковим описом та порівнянням
function createAndCompareTwoSymbols(value) {
  // Створюємо два символи з однаковим описом value, та повертаємо результат порівняння двох символів
  let a1 = Symbol(value);
  let a2 = Symbol(value);
  return a1 === a2;
}

console.log("Завдання 4 ====================================");

console.log(createAndCompareTwoSymbols("My Symbol")); // Виведе false

// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {
  // Використовуємо Symbol.for() для створення нового символу symbol зі значенням key
  const symbol = Symbol.for(key);
  // Symbol.for() шукає символ в глобальному реєстру символів.
//    Якщо символ з таким ключем вже існує, він повертає його, в іншому випадку створює 
//    новий символ з даним ключем та додає його в реєстр

  // Повертаємо створений символ
  return symbol;
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  // Використовуємо оператор '===' для порівняння двох символів
	return (symbol1 === symbol2);
  }
  // Якщо два символи однакові, він поверне true, в іншому випадку - false
  console.log(compareSymbolsForKey());


console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 6: Використання Symbol.keyFor(sym)

// Функція getSymbolKey приймає символ як аргумент та повертає ключ, який був використаний для його створення
function getSymbolKey(symbol) {
  // Використовуємо Symbol.keyFor(sym) для отримання ключа, який був використаний для створення символу та повертаємо його
  return Symbol.keyFor(symbol);
}

console.log("Завдання 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(getSymbolKey(symbolForKey)); // Виводимо ключ символу. Виведе: myKey

// Завдання 7: Використання Symbol.toString

function useSymbolToStringTag() {
  // Створюємо пустий об'єкт myObject.
let myObject = {};
  // Встановлюємо властивість Symbol об'єкту myObject на значення "CustomObject".
  myObject[Symbol] = "CustomObject";
  // Повертаємо рядкове представлення myObject[Symbol].
return myObject;
}
 
console.log("Завдання 7 ====================================");
console.log(useSymbolToStringTag()); //Виведе CustomObject

// Завдання 8: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
  // Створюємо символ mySymbol зі значенням "mySymbol".
//    mySymbol[Symbol] = "mySymbol";
  // Отримуємо опис символу mySymbol в змінну symbolDescription за допомогою властивості description.
//   let symbolDescription = mySymbol.description;
  // Повертаємо symbolDescription
//   return symbolDescription;
}

console.log("Завдання 8 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol

// Завдання 9: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let rangeObject = {
	from: 1,
	to: 5,
  // Використовуємо Symbol.iterator для створення ітератора всередині об'єкта "myObject"
	[Symbol.iterator]() {
  // this.current присвоюємо this.from
  this.current = this.from;
  // Повертаємо this
  return this;
},
  // Створюємо метод "next" який визначає поведінку при кожній ітерації
next() {
  // Використовуйте if
if(this.current < this.to) {
  // Якщо current менше to, повертаємо об'єкт з властивістю "value",що містить поточне значення ,
  return {done: false, value: this.current++};
}
  // та не забуваємо збільшити індекс за допомогою інкремент, і "done" - false, означаючи, що ітерація ще не закінчена
else {
  // Якщо індекс вийшов за межі масиву ключів, повертаємо об'єкт з властивістю "done" - true, означаючи, що ітерація закінчена
 return{ done: true};
}
},
};

// Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта
function useSymbolIterator(obj) {

  // Проходимо крізь елементи об'єкта obj, використовуючи цикл "for...of"
for(let i of rangeObject){
  // Додаємо кожне значення до масиву "result"
const result = [] + i;
  // Повертаємо масив зі значеннями
  return result.value;
}
}

console.log("Завдання 9 ====================================");
console.log(useSymbolIterator(rangeObject)); //Виведе [ 1, 2, 3, 4, 5, 6 ]

// Завдання 10: Використання Symbol.iterator

// Оголошення об'єкта "myObject" з властивістю "category"
let myObject = {
  //Cтворюємо масив category
  category: [
    { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
    { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
    { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
    { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
    { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
  ],
  //Створюємо властивість currentIndex зі значенням 0, яка буде нашим лічильником в ітерації
// this.currentIndex = 0, 
  // Оголошення методу Symbol.iterator для об'єкта "myObject"
  [Symbol.iterator]() {
  //Повертаємо this
  return (this);
},
  // Оголошення методу "next" для ітерації
  next () {
  // Створюємо логічний оператор який буде перевіряти чи властивість об'єкту currentIndex менша ніж довжина масиву category

  //Створюємо змінну value якій присвоємо властивість name елемента масиву category з індексом currentIndex
let value = {categoryname, currentIndex};
  // Збільшимо currentIndex на одиницю
  
  // Повертаємо об'єкт з властивістю value значенням якої буде value,та прапорцем done: false
return currentIndex >= category.lenge ? {done: false, value: this.currentIndex++}: {done: true};
  //Якщо властивість об'єкту currentIndex більше або дорівнює довжині масиву category повертаємо об'єкт з прапорцем done: true, коли ітерація закінчена

  },
};

console.log("Завдання 10 ====================================");
console.log(useSymbolIterator(myObject)); //Виведе [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
//// останні три завдання зовсім не зрозумів. взагалі не зрозуміло чому і як. Надалі будемо виртатися до цієї теми з іншими прикладами?
