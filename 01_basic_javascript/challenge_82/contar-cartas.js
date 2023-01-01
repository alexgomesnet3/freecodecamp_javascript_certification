let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      return (count <= 0) ? `${count} Hold` : `${count} Bet`;
      break;
    case 7:
    case 8:
    case 9:
      return (count <= 0) ? `${count} Hold` : `${count} Bet`;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--
      return (count <= 0) ? `${count} Hold` : `${count} Bet`;
      break;
  }
  return "Change Me";
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');