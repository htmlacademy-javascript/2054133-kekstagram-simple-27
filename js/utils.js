const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

export {isEscapeKey, shuffle};
