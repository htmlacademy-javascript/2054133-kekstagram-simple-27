const getRandomIntInclusive = (min, max) => {
  const fullMin = Math.ceil(min);
  const fullMax = Math.floor(max);
  return Math.floor(Math.random() * (fullMax - fullMin + 1) + fullMin);
};


const getRandomElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];


export {getRandomIntInclusive, getRandomElement};
