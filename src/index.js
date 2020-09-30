
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}

const array = []

exports.min = function min (array) {
  if (Array.isArray(array) === true && array.length > 0) {
    result = Math.min(...array);
    return result;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) === true && array.length > 0) {
    result = Math.max(...array);
    return result;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) === true && array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      result = sum / array.length;
    }
    return (result);
  } else {
    return 0;
  }
}
