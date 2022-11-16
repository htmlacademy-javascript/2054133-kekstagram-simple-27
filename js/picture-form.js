import {resetScale} from './picture-scale.js';
import {clearEffect} from './picture-effect.js';
import {isEscapeKey} from './utils.js';
import {sendData} from './api.js';
import {openSuccessModal, openErrorModal} from './modal-message.js';

const uploadFileInput = document.querySelector('.img-upload__input');
const pageBody = document.querySelector('body');
const modalPictureEditor = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('.img-upload__cancel');
const description = document.querySelector('.text__description');
const pcitureForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(pcitureForm,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'text__error',
  },
  true);

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуем..';
};

const resetUserFormValues = () => {
  uploadFileInput.value = '';
  description.value = '';
  resetScale();
  clearEffect();
};

const closeUserForm = () => {
  modalPictureEditor.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  pristine.reset();
  document.removeEventListener('keydown', onModalEscKeyDown);
};

const openUserForm = () => {
  modalPictureEditor.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeyDown);
  modalCloseButton.addEventListener('click', () => {
    closeUserForm();
    resetUserFormValues();
  });
  description.addEventListener('keydown', (evt) => evt.stopPropagation());
};

function onModalEscKeyDown(evt) {
  const errorPopup = document.querySelector('.error');
  if (isEscapeKey(evt)) {
    if(!errorPopup) {
      evt.preventDefault();
      closeUserForm();
      resetUserFormValues();
    }
  }
}

pcitureForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    blockSubmitButton();
    sendData(
      () => {
        unBlockSubmitButton();
        openSuccessModal();
        closeUserForm();
        resetUserFormValues();
      },
      () => {
        unBlockSubmitButton();
        openErrorModal();
      },
      new FormData(evt.target),
    );
  }
});

uploadFileInput.addEventListener('change', () => {
  openUserForm();
});

export {onModalEscKeyDown};
