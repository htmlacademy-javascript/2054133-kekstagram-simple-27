import {isEscapeKey} from './utils.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const isModalOn = (evt) => evt.target.classList.contains('success__button') || evt.target.classList.contains('error__button') || evt.target.classList.contains('error') || evt.target.classList.contains('success');

const renderModalMessage = (modalElement) => {
  document.body.append(modalElement);
  document.addEventListener('click', onModalMessageOutsideClick);
  document.addEventListener('keydown', onModalMessageEscKeyDown);

  const removeModalMessage = () => {
    if(modalElement) {
      modalElement.remove();
    }
    document.removeEventListener('click', onModalMessageOutsideClick);
    document.removeEventListener('keydown', onModalMessageEscKeyDown);
  };

  function onModalMessageOutsideClick(evt) {
    if (isModalOn(evt)) {
      removeModalMessage();
    }
  }

  function onModalMessageEscKeyDown (evt) {
    if (isEscapeKey(evt)) {
      removeModalMessage();
    }
  }
};

const openErrorModal = () => {
  const errorModal = errorTemplate.cloneNode(true);
  renderModalMessage(errorModal);
};

const openSuccessModal = () => {
  const successModal = successTemplate.cloneNode(true);
  renderModalMessage(successModal);
};

export {openSuccessModal, openErrorModal};
