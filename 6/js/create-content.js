const picturesSection = document.querySelector('.pictures');
const pictureTemplate =document.querySelector('#picture')
  .content
  .querySelector('.picture');

function createPictureElement (elementData) {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = elementData.url;
  pictureElement.querySelector('.picture__comments').textContent = elementData.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = elementData.likes;
  return pictureElement;
}

function createPictures (picturesData) {
  const picturesSectionFragment = document.createDocumentFragment();
  picturesData.forEach((picture) => {
    picturesSectionFragment.appendChild(createPictureElement(picture));
  });
  picturesSection.appendChild(picturesSectionFragment);
}

export {createPictures};
