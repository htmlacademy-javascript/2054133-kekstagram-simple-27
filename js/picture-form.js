import {resetScale} from './picture-scale.js';
import {clearEffect} from './picture-effect.js';

const uploadFileInput = document.querySelector('#upload-file');
const pageBody = document.querySelector('body');
const modalPictureEditor = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('#upload-cancel');
const description = document.querySelector('.text__description');
const pcitureForm = document.querySelector('.img-upload__form');

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
  uploadFileInput.value = '';
  resetScale();
  clearEffect();
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
  document.addEventListener('keydown', onModalEscKeyDown);
  modalCloseButton.addEventListener('click', closeModal);
  description.addEventListener('keydown', (evt) => evt.stopPropagation());
  pcitureForm.addEventListener('submit', isValidate);
});
