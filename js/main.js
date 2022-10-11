// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  const fullMin = Math.ceil(min);
  const fullMax = Math.floor(max);
  return Math.floor(Math.random() * (fullMax - fullMin + 1) + fullMin);
}

// Условия для возвращения случайного числа

function getPositiveRandomNumber(from, to) {

  if (!Number(from) || !Number(to)) {
    return NaN;
  }

  if (from < 0 || to < 0) {
    return 'Значения не могут быть меньше нуля';
  }

  if (from === to) {
    if(Number.isInteger(from) && Number.isInteger(to)) {
      return from;
    }
    return NaN;
  }

  if (from > to) {
    return getRandomIntInclusive(to, from);
  }

  return getRandomIntInclusive(from, to);
}

const MIN_NUMBER = 5.3;
const MAX_NUMBER = 5.3;

getPositiveRandomNumber(MIN_NUMBER, MAX_NUMBER);

console.log(getPositiveRandomNumber(MIN_NUMBER, MAX_NUMBER));

//Функция для проверки максимальной длины строки.

function checkMaxString(stroke, lenght) {
  if (stroke <= lenght) {
    return 'Слишком длинная строка';
  }
  return 'Ок';
}

checkMaxString(stroke, lenght);
