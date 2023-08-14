'use strict';

const arrWords = [
  ['день', 'дня', 'дней'],
  ['час', 'часа', 'часов'],
  ['минута', 'минуты', 'минут'],
  ['секунда', 'секунды', 'секунд'],
];

const createTimer = () => {
  const timerCounter = document.createElement('div');
  timerCounter.classList.add('timer__counter');

  const timerDays = document.createElement('p');
  timerDays.classList.add('timer__days');

  const timerHours = document.createElement('p');
  timerHours.classList.add('timer__hours');

  const timerMinutes = document.createElement('p');
  timerMinutes.classList.add('timer__minutes');

  const timerSeconds = document.createElement('p');
  timerSeconds.classList.add('timer__seconds');

  const contentDays = document.createElement('span');
  contentDays.classList.add('timer__number', 'timer__number_day');

  const contentHours = document.createElement('span');
  contentHours.classList.add('timer__number', 'timer__number_hour');

  const contentMinutes = document.createElement('span');
  contentMinutes.classList.add('timer__number', 'timer__number_min');

  const contentSeconds = document.createElement('span');
  contentSeconds.classList.add('timer__number', 'timer__number_sec');

  timerDays.append(contentDays);
  timerHours.append(contentHours);
  timerMinutes.append(contentMinutes);
  timerSeconds.append(contentSeconds);

  timerCounter.append(timerDays, timerHours, timerMinutes, contentSeconds);

  return timerCounter;
};


const declensionNum = (num, words) => {
  const word = words[(num % 100 > 4 && num % 100 < 20) ?
    2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];

  return `${num} ${word}`;
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

    timerBlockDay.textContent = declensionNum(timer.day, arrWords[0]);

    if (timer.hours < 10) {
      timerBlockHour.textContent = '0' + declensionNum(timer.hours, arrWords[1]);
    } else {
      timerBlockHour.textContent = declensionNum(timer.hours, arrWords[1]);
    }

    if (timer.minutes < 10) {
      timerBlockMin.textContent = '0' + declensionNum(timer.minutes, arrWords[2]);
    } else {
      timerBlockMin.textContent = declensionNum(timer.minutes, arrWords[2]);
    }

    if (timer.seconds < 10) {
      timerBlockSec.textContent = '0' + declensionNum(timer.seconds, arrWords[3]);
    } else {
      timerBlockSec.textContent = declensionNum(timer.seconds, arrWords[3]);
    }

    const interbalId = setTimeout(start, 1000);

    if (timer.timeRemaning <= 0) {
      clearTimeout(interbalId);
      timerBlockDay.textContent = '0';
      timerBlockHour.textContent = '0';
      timerBlockMin.textContent = '00';
      timerBlockSec.textContent = '00';
    }
  };

  start();
};

const searchTimer = () => {
  const timerElems = document.querySelectorAll('[data-timer-deadline]');

  timerElems.forEach(elem => {
    elem.append(createTimer());
    const deadline = elem.dataset.timerDeadline;
    timer(deadline);
  });
};

searchTimer();
