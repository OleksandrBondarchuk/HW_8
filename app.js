// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Найти сумму и количество положительных элементов. +
// Найти минимальный элемент массива и его порядковый номер.+/+
// Найти максимальный элемент массива и его порядковый номер.+/+
// Определить количество отрицательных элементов.  +
// Найти количество нечетных положительных элементов.+
// Найти количество четных положительных элементов.+
// Найти сумму четных положительных элементов.+
// Найти сумму нечетных положительных элементов.+
// Найти произведение положительных элементов.
// Найти наибольший среди элементов массива, остальные обнулить.

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
console.log(arr);

let min = arr[0],
  max = min,
  minIndexNumber = 0,
  maxIndexNumber = 0,
  sumPositiveNumber = 0,
  countPositiveNumber = 0,
  countNegativeNumber = 0,
  evenPositiveNumber = 0,
  evenNegativeNumber = 0,
  sumEvenPositiveNumber = 0,
  sumEvenNegativeNumber = 0,
  multiplicationPositiveNumber = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndexNumber = i;
  }
  if (arr[i] < min) {
    min = arr[i];
    minIndexNumber = i;
  }
  if (arr[i] >= 0) {
    sumPositiveNumber = sumPositiveNumber + arr[i];
    countPositiveNumber = countPositiveNumber + 1;
    multiplicationPositiveNumber = multiplicationPositiveNumber * arr[i];

    if (i % 2 === 0) {
      sumEvenPositiveNumber = sumEvenPositiveNumber + arr[i];
      evenPositiveNumber++;
    } else {
      sumEvenNegativeNumber = sumEvenNegativeNumber + arr[i];
      evenNegativeNumber++;
    }
  } else if (arr[i] <= 0) {
    countNegativeNumber = countNegativeNumber + 1;
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < max) {
    arr[i] = 0;
  }
}

console.log("Сумма положительных элементов: " + sumPositiveNumber);
console.log("Количество положительных элементов: " + countPositiveNumber);
console.log("Min значение:" + min);
console.log("Min порядковый номер: " + minIndexNumber);
console.log("Max значение:" + max);
console.log("Max порядковый номер: " + maxIndexNumber);
console.log("Количество отрицательных элементов: " + countNegativeNumber);
console.log("Количество четных положительных элементов: " + evenPositiveNumber);
console.log(
  "Количество НЕчетных положительных элементов: " + evenNegativeNumber
);
console.log("Cуммa четных положительных элементов: " + sumEvenPositiveNumber);
console.log("Cуммa НЕчетных положительных элементов: " + sumEvenNegativeNumber);
console.log(
  "Произведение положительных элементов: " + multiplicationPositiveNumber
);
console.log("Наибольший среди элементов массива, остальные обнулены: " + arr);
