import {getRandomFromRange, getRandomArrayElement} from './utils.js'

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

function generateComments () {
  const COMMENT_COUNT = getRandomFromRange(1, 5);
  let comments = [];

  for (let i = 1; i <= COMMENT_COUNT; i++) {
    comments.push({
      id: i,
      avatar: 'img/avatar-' + getRandomFromRange(1, 6) + '.svg',
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    });
  }

  return comments;
}

function generatePhotos () {
  let photos = [];

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push({
      id: i,
      url: 'photos/' + i + '.jpg',
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomFromRange(15, 200),
      comments: generateComments(),
    })
  }

  return photos;
}

export {generatePhotos};
