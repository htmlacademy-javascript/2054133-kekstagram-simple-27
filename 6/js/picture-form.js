const uploadFileInput = document.querySelector('#upload-file');
const pageBody = document.querySelector('body');
const modalPictureEditor = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('#upload-cancel');
const description = document.querySelector('.text__description');
const pcitureForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(pcitureForm,{
  classTo: 'text',
  errorTextParent: 'text',
  errorTextClass: 'text__error',
}, false);

pcitureForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

const closeModal = () => {
  modalPictureEditor.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  pristine.reset();
};

const openModal = () => {
  modalPictureEditor.classList.remove('hidden');
  pageBody.classList.add('modal-open');
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const onModalEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

uploadFileInput.addEventListener('change', () => {
  openModal();
  document.addEventListener('keydown', onModalEscKeyDown);
  modalCloseButton.addEventListener('click', closeModal);
});

description.addEventListener('keydown', (evt) => evt.stopPropagation());
