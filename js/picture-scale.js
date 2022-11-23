const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_VALUE = 100;

const imageValueElement = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview').querySelector('img');
const imageScaleSmallerElement = document.querySelector('.scale__control--smaller');
const imageScaleBiggerElement = document.querySelector('.scale__control--bigger');

const scaleImage = (value) => {
  imagePreviewElement.style.transform = `scale(${value / 100})`;
  imageValueElement.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(imageValueElement.value, 10);
  if (currentValue > MIN_SCALE) {
    scaleImage(currentValue - SCALE_STEP);
  } else {
    scaleImage(currentValue);
  }
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(imageValueElement.value, 10);
  if (currentValue < MAX_SCALE) {
    scaleImage(currentValue + SCALE_STEP);
  } else {
    scaleImage(currentValue);
  }
};

imageScaleSmallerElement.addEventListener('click', onButtonSmallerClick);
imageScaleBiggerElement.addEventListener('click', onButtonBiggerClick);

const resetScale = () => {
  scaleImage(DEFAULT_VALUE);
};

export {resetScale};
