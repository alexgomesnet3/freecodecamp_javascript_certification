function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
      return [];
    } else {
    const numeros = rangeOfNumbers(startNum, endNum - 1);
    numeros.push(endNum);
    return numeros;
  }
};