/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let score = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        {
          if (s[i + 1] === "V") {
            score += 4;
            i++;
          } else if (s[i + 1] === "X") {
            score += 9;
            i++;
          } else {
            score += 1;
          }
        }
        break;
      case "V":
        score += 5;
        break;
      case "X":
        {
          if (s[i + 1] === "L") {
            score += 40;
            i++;
          } else if (s[i + 1] === "C") {
            score += 90;
            i++;
          } else {
            score += 10;
          }
        }
        break;
      case "L":
        score += 50;
        break;
      case "C":
        {
          if (s[i + 1] === "D") {
            score += 400;
            i++;
          } else if (s[i + 1] === "M") {
            score += 900;
            i++;
          } else {
            score += 100;
          }
        }
        break;
      case "D":
        score += 500;
        break;
      case "M":
        score += 1000;
    }
  }

  return score;
};
