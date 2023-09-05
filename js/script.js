import * as timer from './modules/timer.js';

const searchTimer = () => {
  const timerElems = document.querySelectorAll('[data-timer-deadline]');

  timerElems.forEach(elem => {
    elem.append(timer.timerElem);
    const deadline = elem.dataset.timerDeadline;
    timer.renderTimer(deadline);
  });
};

searchTimer();
