// Случайное целое число из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль

function getRandomFromRange (min, max) {
  let result = null;
  if (Number.isInteger(min) && Number.isInteger(max)) {
    if (min > 0 && max > 0 && min < max) {
      result = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
  return result;
}

// Проверка максимальной длины комментария

function checkCommentLength (comment, maxCommentLength) {
  let isCommentFits = false;

  if (comment.length <= maxCommentLength) {
    isCommentFits = true;
  }

  return isCommentFits;
}

getRandomFromRange(0, 9);

checkCommentLength('sjdfeiugksufhksdufhsdkuhfskfhjk', 200);
