function getRandomFromRange (min, max) {
  let result = null;
  if (Number.isInteger(min) && Number.isInteger(max)) {
    if (min >= 0 && max >= 0 && min <= max) {
      result = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
  return result;
}

function getRandomArrayElement (array) {
  return array[getRandomFromRange(0, array.length - 1)];
}

function checkCommentLength (comment, maxCommentLength) {
  let isCommentFits = null;
  if (typeof comment === 'string' && typeof maxCommentLength === 'number') {
    isCommentFits = (comment.length <= maxCommentLength);
  }
  return isCommentFits;
}

checkCommentLength('safwaf', 123)

export {getRandomFromRange, getRandomArrayElement};
