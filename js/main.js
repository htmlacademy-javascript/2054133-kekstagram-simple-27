// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  const fullMin = Math.ceil(min);
  const fullMax = Math.floor(max);
  return Math.floor(Math.random() * (fullMax - fullMin + 1) + fullMin);
}

//Получаем рандомное число для id и url

const INDEX_COUNT = 25;

//Генерируем рандомное число лайков

const likeCount = {
  min: 15,
  max: 200,
};

//Описание фотографии

const photoDescriptions = [
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
  description: getRandomElement(photoDescriptions),
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
