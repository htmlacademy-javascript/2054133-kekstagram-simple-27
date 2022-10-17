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

getPositiveRandomNumber();

//Функция для проверки максимальной длины строки.

// const checkStringLength = (string, length) => string.length <= length;

// checkStringLength();

//Получаем рандомное число для id и url

const INDEX_COUNT = 25;

//Генерируем рандомное число лайков

const likeCount = {
  min: 15,
  max: 200,
};

//Описание фотографии

const photoDescription = [
  'Расслабься и смотри',
  'Кусочек самого лучшего путешествия',
  'Неплохая локация для съемок',
  'Просто оставлю это сдесь',
  'Иногда хочется просто хочется такой же обстановки',
  'Такие места вдохновляют',
  'Были тут?',
  'Об этом мечтает каждый',
  'Чего бы это не стоило',
  'У меня есть в запасе последний глоток тишины',
  'Всегда новые локации!',
  'Самый лучший день',
  'Путешествовать и жить гораздо интереснее, если следуешь внезапно возникающим импульсам',
  'На заставку',
  'Тут бывает и не такое',
  'Малая часть того, чем бы я хотел поделиться',
  'Это самое потрясающее место!',
  'Это не может быть правдой!',
  'Такого в наших краях не увидишь',
  'Без фильтра',
  'Ещё одни тёплые выходные',
  'Вся наша жизнь подчиняется природным ритмам',
  'Есть в жизни счастье',
  'Вперед исследовать!',
  'Мое любимое место',
];

const getRandomElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

// Число комментариев

const MAX_COMMENTS = 200;

// Создание объекта

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(photoDescription),
  likes: getRandomIntInclusive(likeCount.min, likeCount.max),
  comments: getRandomIntInclusive(0, MAX_COMMENTS),
});

// Создание массива из объектов

const getPictures = () => {
  const pictures = [];
  for (let i = 1; i <= INDEX_COUNT; i++) {
    pictures.push(createPicture(i));
  }
  return pictures;
};

getPictures();
