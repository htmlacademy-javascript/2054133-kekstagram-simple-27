const previewImage = document.querySelector('.img-upload__preview').querySelector('img');
const slider = document.querySelector('.effect-level__slider');
const input = document.querySelector('.effect-level__value');
const pictureForm = document.querySelector('.img-upload__form');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 1,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    type: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    type: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    type: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    type: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    type: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const onSliderChange = (effect) => {
  sliderContainer.classList.remove('hidden');
  slider.noUiSlider.updateOptions(
    {range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.max,
    step: effect.step,});
};

const changeEffect = (evt) => {
  chosenEffect = EFFECTS.find((effect) => evt.target.value === effect.name);
};

const onChangeForm = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  changeEffect(evt);
  onSliderChange(chosenEffect);
};

const getPreviewImageEffect = (effect) => {
  previewImage.style.filter = '';
  previewImage.className = '';
  const effectValue = slider.noUiSlider.get();
  previewImage.style.filter = `${effect.style}(${effectValue}${effect.type})`;
  previewImage.classList.add(`effects__preview--${effect.name}`);
};

const getSliderInputValue = () => {
  input.value = slider.noUiSlider.get();
};

const isDefaultEffect = (effect) => effect === DEFAULT_EFFECT;

const onChangeEffectSlider = () => {
  if(isDefaultEffect(chosenEffect)) {
    sliderContainer.classList.add('hidden');
  }
  getPreviewImageEffect(chosenEffect);
  getSliderInputValue();
};

slider.noUiSlider.on('update', onChangeEffectSlider);
pictureForm.addEventListener('change', onChangeForm);

const clearEffect = () => {
  chosenEffect = DEFAULT_EFFECT;
  input.value = chosenEffect.max;
  onChangeEffectSlider();
  document.querySelector('.effects__radio').checked = true;
};

export {clearEffect};
