const picturesElement = document.querySelector('.pictures');
const userTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userFragment = document.createDocumentFragment();

const createPictures = (pictures) => {
  pictures.forEach(({url, likes, comments}) => {
    const userElement = userTemplate.cloneNode(true);
    userElement.querySelector('.picture__img').src = url;
    userElement.querySelector('.picture__comments').textContent = comments;
    userElement.querySelector('.picture__likes').textContent = likes;
    userFragment.append(userElement);
  });

  picturesElement.append(userFragment);
};

export {createPictures};
