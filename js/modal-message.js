import {isEscapeKey} from './utils.js';
import {onModalEscKeyDown} from './picture-form.js';

const picturesContainer = document.querySelector('.pictures');
const messageFragment = document.createDocumentFragment();
const isModalOn = (evt) => evt.target.classList.contains('success__button') || evt.target.classList.contains('error__button') || evt.target.classList.contains('error') || evt.target.classList.contains('success');

const removeModalMessage = () => {
  const successModal = document.querySelector('.success');
  const errorModal = document.querySelector('.error');
  if(successModal) {
    successModal.remove();
  }
  else if(errorModal) {
    errorModal.remove();
    document.addEventListener('keydown', onModalEscKeyDown);
  }
  picturesContainer.removeEventListener('click', onModalMessageClick);
  document.removeEventListener('keydown', onModalMessageEscKeyDown);
};

function onModalMessageClick(evt) {
  if (isModalOn(evt)) {
    removeModalMessage();
  }
}

export function onModalMessageEscKeyDown (evt) {
  if (isEscapeKey(evt)) {
    removeModalMessage();
  }
}

const errorModalMessage = () => {
  const messageErrorTemplate = document.querySelector('#error').content;
  const element = messageErrorTemplate.cloneNode(true);
  messageFragment.append(element);
  picturesContainer.append(messageFragment);
  picturesContainer.addEventListener('click', onModalMessageClick);
  document.addEventListener('keydown', onModalMessageEscKeyDown);
};

const successModalMessage = () => {
  const messageSuccessTemplate = document.querySelector('#success').content;
  const element = messageSuccessTemplate.cloneNode(true);
  messageFragment.append(element);
  picturesContainer.append(messageFragment);
  picturesContainer.addEventListener('click', onModalMessageClick);
  document.addEventListener('keydown', onModalMessageEscKeyDown);
};

export {successModalMessage, errorModalMessage};
