//  1. Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения.
let d = 7;
console.log(d);           // Вывод значения переменной d
console.log(d ** 2);      // Вывод квадрата числа
console.log(d ** 3);      // Вывод куба числа

// 2. Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое.
// Программа должна выводить на экран новое значение.
let number = parseInt(prompt("Введите целое число:"));

if (number > 0) {
  number *= 2;  // Увеличение числа вдвое, если оно положительное
}

console.log("Новое значение:", number);

// 3. Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".
let number1 = parseInt(prompt("Введите первое целое число:"));
let number2 = parseInt(prompt("Введите второе целое число:"));

if (number1 > number2) {
  let sum = number1 + number2;
  console.log("Сумма чисел:", sum);
} else if (number1 < number2) {
  let product = number1 * number2;
  console.log("Произведение чисел:", product);
} else {
  console.log("Числа одинаковые");
}

// 4. Составьте программу, которая принимает с клавиатуры целое число и выводит на экран его квадрат – но только в том случае, если введенное число отрицательно. 
// В противном случае – на экран выводится сообщение "ошибка".
let num = parseInt(prompt("Введите целое число:"));

if (num < 0) {
  let square = num ** 2;
  console.log("Квадрат числа:", square);
} else {
  console.log("Ошибка");
}

// 5. Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете. 
// Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию.
// ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает)
let students = parseInt(prompt("Введите количество учеников в классе:"));
let chairs = parseInt(prompt("Введите количество стульев в кабинете:"));

if (students <= chairs) {
  console.log("Стульев хватает");
} else {
  console.log("Стульев не хватает");
}

// 6. Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке. 
// Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел – "финиш".
// вывод: старт, 1, … 9, финиш)
console.log("старт");

for (let i = 1; i <= 9; i++) {
  console.log(i);
}

console.log("финиш");

// 7. Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).
for (let i = 10; i <= 99; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }

// 8. Написать цикл, который выводит те числа из массива, которые больше или равны 15.
const numbers = [10, 25, 5, 18, 30, 12, 20, 15];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 15) {
    console.log(numbers[i]);
  }
}

// 9. Написать цикл, который выводит только нечетные числа 
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

// 10. Вывести только те значения массива, индекс которых кратен трем.
const array = [10, 25, 5, 18, 30, 12, 20, 15];

for (let i = 0; i < array.length; i++) {
  if (i % 3 === 0) {
    console.log(array[i]);
  }
}


