import {generatePhotosArray} from './generate-data.js'

const picturesData = generatePhotosArray();
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCommentCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const body = document.querySelector('body');

function getBigPictureData (pictureData) {
  bigPictureImage.src = pictureData.url;
  bigPictureLikesCount.textContent = pictureData.likes;
  bigPictureDescription.textContent = pictureData.description;
}

function showBigPicture () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureCommentCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');

  getBigPictureData(picturesData[0]);
}

export {showBigPicture};
