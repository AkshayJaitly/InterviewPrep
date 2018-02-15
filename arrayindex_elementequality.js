function indexEqualsValueSearch(arr) {
  let can = -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let i = Math.floor((start + end) / 2);
    if (arr[i] >= i) {
      if (arr[i] === i) {
        can = arr[i];
      }
      end = i - 1;
    } else {
      start = i + 1;
    }
  }

  return can;
}