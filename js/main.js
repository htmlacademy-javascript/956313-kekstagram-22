// Случайное целое число из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль

function getRandomFromRange (min, max) {
  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (min > max) {
    let swap = min;
    mim = max;
    max = swap;
  }

  let random = Math.floor(Math.random() * (max - min + 1) + min);

  return random;
}

// Проверка максимальной длины комментария

function checkCommentLength (comment, maxCommentLength) {
  let isCommentFits = false;

  if (comment.length <= maxCommentLength) {
    isCommentFits = true;
  }

  return isCommentFits;
}
