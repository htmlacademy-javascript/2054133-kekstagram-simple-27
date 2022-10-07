// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function returnsNumber(from,to) {
  if (!Number.isInteger(from) || !Number.isInteger(from)) {
    return NaN;
  }

  else if (from < 0 || to < 0) {
    return 'Значения не могут быть меньше нуля';
  }

  else if (from === to && from >= 0 && to >= 0) {
    return from;
  }

  else if (from > to) {
    from = from + to;
    to = from - to;
    from = from - to;
  }

  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

const min = 'fs';
const max = -1;

returnsNumber(min,max);
console.log(returnsNumber(min,max));


//Функция для проверки максимальной длины строки.

function checksMaxString(stroke,lenght) {
  if (stroke <= lenght) {}
  else {}
}

checksMaxString(stroke,lenght);
