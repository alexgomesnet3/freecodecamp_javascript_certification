function caseInSwitch(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha
  switch (val) {
    case 1:
      return (answer = "alpha");
      break;
    case 2:
      return (answer = "beta");
      break;
    case 3:
      return (answer = "gamma");
      break;
    case 4:
      return (answer = "delta");
      break;
    default:
      console.log("answer sem valor atribuido.");
      break;
  }
  // Altere apenas o código acima desta linha
  return answer;
}

caseInSwitch(1);
