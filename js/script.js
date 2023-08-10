'use strict';

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

    timerBlockDay.textContent = timer.day;
    timerBlockHour.textContent = timer.hours;
    timerBlockMin.textContent = timer.minutes;
    timerBlockSec.textContent = timer.seconds;

    const interbalId = setTimeout(start, 1000);

    if (timer.timeRemaning <= 0) {
      clearTimeout(interbalId);
      timerBlockHour.textContent = '00';
      timerBlockMin.textContent = '00';
      timerBlockSec.textContent = '00';
    }
  };

  start();
};

const timerElem = document.querySelector('.timer');
const deadline = timerElem.dataset.deadline;

console.log();

timer(deadline);
