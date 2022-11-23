import {resetScale} from './picture-scale.js';
import {clearEffect} from './picture-effect.js';
import {isEscapeKey} from './utils.js';
import {sendData} from './api.js';
import {openSuccessModal, openErrorModal} from './modal-message.js';

const uploadElement = document.querySelector('.img-upload__input');
const pageBodyElement = document.querySelector('body');
const pictureEditorElement = document.querySelector('.img-upload__overlay');
const closeButtonElement = document.querySelector('.img-upload__cancel');
const descriptionElement = document.querySelector('.text__description');
const pcitureFormElement = document.querySelector('.img-upload__form');
const submitButtonElement = document.querySelector('.img-upload__submit');

const pristine = new Pristine(pcitureFormElement,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'text__error',
  },
  true);

const unBlockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикуем..';
};

const resetUserFormValues = () => {
  uploadElement.value = '';
  descriptionElement.value = '';
  resetScale();
  clearEffect();
};

const closeUserForm = () => {
  pictureEditorElement.classList.add('hidden');
  pageBodyElement.classList.remove('modal-open');
  pristine.reset();
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  closeButtonElement.removeEventListener('click', onCloseButton);
};

const openUserForm = () => {
  pictureEditorElement.classList.remove('hidden');
  pageBodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscKeyDown);
  closeButtonElement.addEventListener('click', onCloseButton);
  descriptionElement.addEventListener('keydown', (evt) => evt.stopPropagation());
  pristine.validate();
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

const onSendDataSuccess = () => {
  unBlockSubmitButton();
  openSuccessModal();
  closeUserForm();
  resetUserFormValues();
};

const onSendDataError = () => {
  unBlockSubmitButton();
  openErrorModal();
};

pcitureFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    blockSubmitButton();
    sendData(
      onSendDataSuccess,
      onSendDataError,
      new FormData(evt.target)
    );
  }
});

uploadElement.addEventListener('change', () => {
  openUserForm();
});
