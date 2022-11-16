import {resetScale} from './picture-scale.js';
import {clearEffect} from './picture-effect.js';
import {isEscapeKey} from './utils.js';
import {sendData} from './api.js';
import {successModalMessage, errorModalMessage} from './modal-message.js';

const uploadFileInput = document.querySelector('.img-upload__input');
const pageBody = document.querySelector('body');
const modalPictureEditor = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('.img-upload__cancel');
const description = document.querySelector('.text__description');
const pcitureForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываем..';
};

const resetUserFormValues = () => {
  uploadFileInput.value = '';
  description.value = '';
  resetScale();
  clearEffect();
};

const openUserForm = () => {
  modalPictureEditor.classList.remove('hidden');
  pageBody.classList.add('modal-open');
};

const pristine = new Pristine(pcitureForm,
  {
    classTo: 'text',
    errorTextParent: 'text',
  },
  true);

const closeUserForm = () => {
  modalPictureEditor.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  pristine.reset();
  document.removeEventListener('keydown', onModalEscKeyDown);
};

function onModalEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserForm();
    resetUserFormValues();
  }
}

pcitureForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValidate = pristine.validate();
  if (isValidate) {
    blockSubmitButton();
    sendData(
      () => {
        unBlockSubmitButton();
        successModalMessage();
        closeUserForm();
        resetUserFormValues();
      },
      () => {
        unBlockSubmitButton();
        errorModalMessage();
        // closeUserForm();
        document.removeEventListener('keydown', onModalEscKeyDown);
      },
      new FormData(evt.target),
    );
  }
});

uploadFileInput.addEventListener('change', () => {
  openUserForm();
  document.addEventListener('keydown', onModalEscKeyDown);
  modalCloseButton.addEventListener('click', () => {
    closeUserForm();
    resetUserFormValues();
  });
  description.addEventListener('keydown', (evt) => evt.stopPropagation());
});

export {onModalEscKeyDown};
