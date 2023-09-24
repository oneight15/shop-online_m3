export const declensionNum = (num, words) => {
  const word = words[(num % 100 > 4 && num % 100 < 20) ?
    2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];

  return `${num} ${word}`;
};

export const digitNum = (num) => `0${num}`.slice(-2);

export const createList = (numItem, classItem) => {
  const paginationList = document.createElement('ul');

  for (let i = 0; i < numItem; i++) {
    const paginationItem = document.createElement('li');
    paginationItem.classList.add(classItem);
    paginationItem.textContent = i + 1;

    paginationList.append(paginationItem);
  }

  return paginationList;
};

