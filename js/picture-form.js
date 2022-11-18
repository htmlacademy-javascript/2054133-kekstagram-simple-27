import {resetScale} from './picture-scale.js';
import {clearEffect} from './picture-effect.js';
import {isEscapeKey} from './utils.js';
import {sendData} from './api.js';
import {openSuccessModal, openErrorModal} from './modal-message.js';

const uploadFileInput = document.querySelector('.img-upload__input');
const pageBody = document.querySelector('body');
const pictureEditor = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');
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
  pictureEditor.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  pristine.reset();
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  closeButton.removeEventListener('click', onCloseButton);
};

const openUserForm = () => {
  pictureEditor.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscKeyDown);
  closeButton.addEventListener('click', onCloseButton);
  description.addEventListener('keydown', (evt) => evt.stopPropagation());
};

function onCloseButton() {
  closeUserForm();
  resetUserFormValues();
}

function onDocumentEscKeyDown(evt) {
  const errorModal = document.querySelector('.error');
  if (isEscapeKey(evt)) {
    if(!errorModal) {
      evt.preventDefault();
      closeUserForm();
      resetUserFormValues();
    }
  }
}

const onSendDataSucces = () => {
  unBlockSubmitButton();
  openSuccessModal();
  closeUserForm();
  resetUserFormValues();
};

const onSendDataError = () => {
  unBlockSubmitButton();
  openErrorModal();
};

pcitureForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    blockSubmitButton();
    sendData(
      onSendDataSucces,
      onSendDataError,
      new FormData(evt.target)
    );
  }
});

uploadFileInput.addEventListener('change', () => {
  openUserForm();
});
