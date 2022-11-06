import {onButtonSmallerClick, onButtonBiggerClick, scaleImage} from './picture-scale.js';

const uploadFileInput = document.querySelector('#upload-file');
const pageBody = document.querySelector('body');
const modalPictureEditor = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('#upload-cancel');
const description = document.querySelector('.text__description');
const pcitureForm = document.querySelector('.img-upload__form');
const imageButtonScaleSmaller = document.querySelector('.scale__control--smaller');
const imageButtonScaleBigger = document.querySelector('.scale__control--bigger');

const pristine = new Pristine(pcitureForm,
  {
    classTo: 'text',
    errorTextParent: 'text',
  },
  false);

const closeModal = () => {
  modalPictureEditor.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  pristine.reset();
  document.removeEventListener('keydown', onModalEscKeyDown);
  scaleImage(100);
};

const openModal = () => {
  modalPictureEditor.classList.remove('hidden');
  pageBody.classList.add('modal-open');
};

const isEscapeKey = (evt) => evt.key === 'Escape';
function onModalEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const isValidate = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

uploadFileInput.addEventListener('change', () => {
  openModal();
  imageButtonScaleSmaller.addEventListener('click', onButtonSmallerClick);
  imageButtonScaleBigger.addEventListener('click', onButtonBiggerClick);
  document.addEventListener('keydown', onModalEscKeyDown);
  modalCloseButton.addEventListener('click', closeModal);
  description.addEventListener('keydown', (evt) => evt.stopPropagation());
  pcitureForm.addEventListener('submit', isValidate);
});
