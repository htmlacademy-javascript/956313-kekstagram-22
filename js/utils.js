function getRandomFromRange (min, max) {
  if (Number.isInteger(min) && Number.isInteger(max)) {
    if (min >= 0 && max >= 0 && min <= max) {
      return (Math.floor(Math.random() * (max - min + 1) + min));
    }
  }
  return null;
}

function getRandomArrayElement (array) {
  return array[getRandomFromRange(0, array.length - 1)];
}

function checkStringLength (comment, maxStringLength) {
  if (typeof comment === 'string' && typeof maxStringLength === 'number') {
    return (comment.length <= maxStringLength);
  }
  return null;
}

function isEscEvent (evt) {
  return evt.key === ('Escape' || 'Esc');
}

checkStringLength('safwaf', 123)

export {getRandomFromRange, getRandomArrayElement, isEscEvent};
