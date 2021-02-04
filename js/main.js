'use strict'

function getRandomFromRange (min, max) {
  let result = null;
  if (Number.isInteger(min) && Number.isInteger(max)) {
    if (min >= 0 && max >= 0 && min <= max) {
      result = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
  return result;
}

function checkCommentLength (comment, maxCommentLength) {
  let isCommentFits = null;
  if (typeof comment === 'string' && typeof maxCommentLength === 'number') {
    isCommentFits = (comment.length <= maxCommentLength);
  }
  return isCommentFits;
}

const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Наташа',
  'Юлия',
  'Кирилл',
  'Саша',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Моё лучшее фото за всё время!',
  'Сморите! Получилась красота)',
  'Сейчас лучшее время, чтобы выложить фотографию.',
  'Зачем стараться, если никто не поставит лайк этому фото?',
  'Не могу придумать хорошее описание для этой фотографии. Есть идеи?',
  'Я у мамы фотограф!',
];

const PHOTOS_COUNT = 25;

function getRandomArrayElement (array) {
  return array[getRandomFromRange(0, array.length - 1)];
}

function generatePhoto () {
  return {
    id: '',
    url: '',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomFromRange(15, 200),
    comments: {
      id: '',
      avatar: 'img/avatar-' + getRandomFromRange(1, 6) + '.svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    },
  }
}

function generatePhotosArray () {
  let photos = new Array(PHOTOS_COUNT).fill(null).map(() => generatePhoto());
  for (let i = 0; i < photos.length; i++) {
    photos[i].id = i + 1;
    photos[i].url = 'photos/' + (i + 1) + '.jpg';
  }
  //id комментария
  return photos;
}

console.log(generatePhotosArray());
