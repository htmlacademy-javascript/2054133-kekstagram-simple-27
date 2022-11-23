const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

const fileChooserElement = document.querySelector('.img-upload__input');
const imagePreviewElement = document.querySelector('.img-upload__preview img');

fileChooserElement.addEventListener('change', () => {
  const userFile = fileChooserElement.files[0];
  const userFileName = userFile.name.toLowerCase();

  const matches = FILE_TYPES.some((format) => userFileName.endsWith(format));

  if (matches) {
    imagePreviewElement.src = URL.createObjectURL(userFile);
  }
});
