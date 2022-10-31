const uploadFileInput = document.querySelector('#upload-file');
const pageBody = document.querySelector('body');
const modalPictureEditor = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('#upload-cancel');

const isEscapeKey = (evt) => evt.key === 'Escape';

const closeModal = () => {
  modalPictureEditor.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  uploadFileInput.value = '';
};

const openModal = () => {
  modalPictureEditor.classList.remove('hidden');
  pageBody.classList.add('modal-open');
};

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


