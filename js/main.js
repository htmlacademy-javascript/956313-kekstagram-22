// Случайное целое число из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль

function getRandomFromRange (min, max) {
  let result = null;
  if (Number.isInteger(min) && Number.isInteger(max)) {
    if (min >= 0 && max >= 0 && min <= max) {
      result = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
  return result;
}

// Проверка максимальной длины комментария

function checkCommentLength (comment, maxCommentLength) {
  let isCommentFits = null;
  if (typeof comment === 'string' && typeof maxCommentLength === 'number') {
    isCommentFits = (comment.length <= maxCommentLength);
  }
  return isCommentFits;
}

getRandomFromRange(0, 0);

checkCommentLength('fd', 200);
