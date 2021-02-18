import {isEscEvent} from './utils.js'

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCommentCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentCountElement = bigPicture.querySelector('.comments-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const body = document.querySelector('body');
let commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

function clearComments (comments) {
  while (comments.firstChild) {
    comments.removeChild(comments.firstChild);
  }
}

function createCommentElement (commentData) {
  let comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = commentData.avatar;
  comment.querySelector('.social__picture').alt = commentData.name;
  comment.querySelector('.social__text').innerText = commentData.message;
  return comment;
}

function createComments (commentsData) {
  clearComments(commentsList);
  let fragment = document.createDocumentFragment();
  commentsData.forEach(element => {
    fragment.appendChild(createCommentElement(element))
  });
  commentsList.appendChild(fragment);
}

function renderBigPictureData (pictureData) {
  bigPictureImage.src = pictureData.url;
  bigPictureLikesCount.textContent = pictureData.likes;
  bigPictureDescription.textContent = pictureData.description;
  bigPictureCommentCountElement.textContent = pictureData.comments.length;
  createComments(pictureData.comments);
}

function setupBigPicture (pictureData) {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureCommentCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');
  renderBigPictureData(pictureData);
}

bigPictureClose.addEventListener('click', function() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

});

document.addEventListener('keydown', function(evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

export {setupBigPicture};
