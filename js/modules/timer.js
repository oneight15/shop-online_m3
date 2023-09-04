import * as fn from './functions.js';
import arrWords from './consts.js';

export const createTimer = () => {
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

export const renderTimer = deadline => {
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

    timerBlockDay.textContent = fn.declensionNum(timer.day, arrWords[0]);
    timerBlockHour.textContent = fn.declensionNum(fn.digitNum(timer.hours), arrWords[1]);
    timerBlockMin.textContent = fn.declensionNum(fn.digitNum(timer.minutes), arrWords[2]);
    timerBlockSec.textContent = fn.declensionNum(fn.digitNum(timer.seconds), arrWords[3]);

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
