const previewImage = document.querySelector('.img-upload__preview').querySelector('img');
const slider = document.querySelector('.effect-level__slider');
const input = document.querySelector('.effect-level__value');
const pcitureForm = document.querySelector('.img-upload__form');

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
let choosenEffect = DEFAULT_EFFECT;

noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const onSliderChange = () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions(
    {range: {
      min: choosenEffect.min,
      max: choosenEffect.max,
    },
    start: choosenEffect.max,
    step: choosenEffect.step,});

  if (choosenEffect === DEFAULT_EFFECT) {
    slider.classList.add('hidden');
  }
};

const onChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  choosenEffect = EFFECTS.find((effect) => evt.target.value === effect.name);
  onSliderChange(choosenEffect);
};

const updateSlider = () => {
  if(choosenEffect === DEFAULT_EFFECT) {
    slider.classList.add('hidden');
  }
  previewImage.style.filter = '';
  previewImage.className = '';
  input.value = slider.noUiSlider.get();
  const effectValue = slider.noUiSlider.get();
  previewImage.style.filter = `${choosenEffect.style}(${effectValue}${choosenEffect.type})`;
  previewImage.classList.add(`effects__preview--${choosenEffect.name}`);
};

slider.noUiSlider.on('update', updateSlider);
pcitureForm.addEventListener('change', onChange);

const clearEffect = () => {
  choosenEffect = DEFAULT_EFFECT;
  input.value = choosenEffect.max;
  updateSlider();
};

export {clearEffect};

