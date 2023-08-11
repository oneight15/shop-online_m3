'use strict';

const declensionNum = (num, words) => {
  return words[(num % 100 > 4 && num % 100 < 20) ?
    2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
};

const timer = deadline => {
  const timerBlockHour = document.querySelector('.timer__number_hour');
  const timerBlockMin = document.querySelector('.timer__number_min');
  const timerBlockSec = document.querySelector('.timer__number_sec');
  const timerBlockDay = document.querySelector('.timer__number_day');

  const getTimeRemaning = () => {
    const dateStop = new Date(deadline).getTime();

    const dateNow = Date.now();

    const timeRemaning = dateStop - dateNow;

    const seconds = Math.floor(timeRemaning / 1000 % 60);
    const minutes = Math.floor(timeRemaning / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaning / 1000 / 60 / 60 % 24);
    const day = Math.floor(timeRemaning / 1000 / 60 / 60 / 24);

    return {timeRemaning, seconds, minutes, hours, day};
  };

  const start = () => {
    const timer = getTimeRemaning();

    timerBlockDay.textContent = timer.day + declensionNum(timer.day, ['день', 'дня', 'дней']);

    if (timer.hours < 10) {
      timerBlockHour.innerHTML = '0' + timer.hours + declensionNum(timer.hours, ['час', 'часа', 'часов']);
    } else {
      timerBlockHour.textContent = timer.hours + declensionNum(timer.hours, ['час', 'часа', 'часов']);
    }

    if (timer.minutes < 10) {
      timerBlockMin.innerHTML = '0' + timer.minutes + declensionNum(timer.minutes, ['минута', 'минуты', 'минут']);
    } else {
      timerBlockMin.textContent = timer.minutes + declensionNum(timer.minutes, ['минута', 'минуты', 'минут']);
    }

    if (timer.seconds < 10) {
      timerBlockSec.innerHTML = '0' + timer.seconds + declensionNum(timer.seconds, ['секунда', 'секунды', 'секунд']);
    } else {
      timerBlockSec.textContent = timer.seconds + declensionNum(timer.seconds, ['секунда', 'секунды', 'секунд']);
    }

    const interbalId = setTimeout(start, 1000);

    if (timer.timeRemaning <= 0) {
      clearTimeout(interbalId);
      timerBlockDay.textContent = '0';
      timerBlockHour.textContent = '0';
      timerBlockMin.textContent = '00';
      timerBlockSec.textContent = '00';
    }

    timer.remove();
  };

  start();
};

const timerElem = document.querySelector('.timer');
const deadline = timerElem.dataset.deadline;

console.log();

timer(deadline);
