// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(a,b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Условия для возвращающия случайного числа

function getPositiveRandomNumber(from, to) {
  if (!Number.isInteger(from) || !Number.isInteger(from)) {
    return NaN;
  }

  if (from < 0 || to < 0) {
    return 'Значения не могут быть меньше нуля';
  }

  if (from === to) {
    return from;
  }

  if (from > to) {
    return getRandomIntInclusive(to, from);
  }

  return getRandomIntInclusive(from, to);
}

const MIN_NUMBER = 44;
const MAX_NUMBER = 1;

getPositiveRandomNumber(MIN_NUMBER, MAX_NUMBER);

//Функция для проверки максимальной длины строки.

function checkMaxString(stroke, lenght) {
  if (stroke <= lenght) {
    return 'Слишком длинная строка';
  }
  return 'Ок';
}
