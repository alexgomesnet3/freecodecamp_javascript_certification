
function countdown(n){
    if (n < 1) {
    return [];
  } else {
    const myArray = countdown(n - 1);
      myArray.unshift(n);
      return myArray;
  }
}
