import {shuffle} from './utils.js';

const picturesContainer = document.querySelector('.pictures');
const userTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userFragment = document.createDocumentFragment();

const createPictures = (pictures) => {
  shuffle(pictures);
  pictures.forEach(({url, likes, comments}) => {
    const userElement = userTemplate.cloneNode(true);
    userElement.querySelector('.picture__img').src = url;
    userElement.querySelector('.picture__comments').textContent = comments;
    userElement.querySelector('.picture__likes').textContent = likes;
    userFragment.append(userElement);
  });

  picturesContainer.append(userFragment);
};

export {createPictures};
