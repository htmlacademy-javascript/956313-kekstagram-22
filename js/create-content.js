function createPictures (picturesData) {
  const picturesSection = document.querySelector('.pictures');
  const pictureTemplate =document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const userPictures = picturesData;

  userPictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__comments').textContent = picture.description;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    picturesSection.appendChild(pictureElement);
  });
}

export {createPictures};
