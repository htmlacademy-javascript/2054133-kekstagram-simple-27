const imageInputValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview').querySelector('img');
const imageButtonScaleSmaller = document.querySelector('.scale__control--smaller');
const imageButtonScaleBigger = document.querySelector('.scale__control--bigger');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_VALUE = 100;

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  imageInputValue.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(imageInputValue.value, 10);
  let newValue = currentValue;
  if (newValue > MIN_SCALE) {
    newValue -= SCALE_STEP;
  }
  scaleImage(newValue);
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(imageInputValue.value, 10);
  let newValue = currentValue;
  if (newValue < MAX_SCALE) {
    newValue += SCALE_STEP;
  }
  scaleImage(newValue);
};

imageButtonScaleSmaller.addEventListener('click', onButtonSmallerClick);
imageButtonScaleBigger.addEventListener('click', onButtonBiggerClick);

const resetScale = () => {
  scaleImage(DEFAULT_VALUE);
};

export {resetScale};
