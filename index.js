'use strict'

// 5 elements get 1000w times (~ 60ms);
module.exports = (arr) => {
  let n = -1;
  const length = arr.length;
  if (!length) throw Error('Must have item in: ', arr);
  return () => {
    n = (n + 1) % length;
    return arr[n]
  }
}