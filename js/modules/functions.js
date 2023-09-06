export const declensionNum = (num, words) => {
  const word = words[(num % 100 > 4 && num % 100 < 20) ?
    2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];

  return `${num} ${word}`;
};

export const digitNum = (num) => `0${num}`.slice(-2);
