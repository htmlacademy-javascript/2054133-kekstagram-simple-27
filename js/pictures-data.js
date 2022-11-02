import {getRandomIntInclusive, getRandomElement} from './utils.js';
import {INDEX_COUNT, MAX_COMMENTS, likeCount, photoDescriptions} from './setup.js';

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(photoDescriptions),
  likes: getRandomIntInclusive(likeCount.min, likeCount.max),
  comments: getRandomIntInclusive(0, MAX_COMMENTS),
});

const getPictures = (element) => {
  const pictures = [];
  for (let i = 1; i <= INDEX_COUNT; i++) {
    pictures.push(element(i));
  }
  return pictures;
};

const userPictures = getPictures(createPicture);

export {userPictures};
