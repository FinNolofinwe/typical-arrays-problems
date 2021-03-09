
exports.min = function min (array) {
  if (!array.length) { 
  let arr = array.sort((a, b) => a - b);
  return arr[0];
  } else {
  return 0;
}
}

exports.max = function max (array) {
  if (!array.length) { 
    let arr = array.sort((a, b) => a - b).reverse();
  return arr[0];
  } else {
  return 0;
}
}

exports.avg = function avg (array) {
  if (!array.length) {
    let sum = 0;
    for (i = 0; i <= array.length - 1; i++) {
      sum = i++;
      return sum / array.length;
    }
  } else {
    return 0;
  }
}


