const sum = (...args) => {
  const param = [...args];
  return param.reduce((a, b) => a + b, 0);
}
