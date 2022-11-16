import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const text = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

const body = document.querySelector('body');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

const dateTimePicker = flatpickr(text, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', onClickStartBtn);

function onClickStartBtn(event) {
  const timer = setInterval(() => {
    const countdown = dateTimePicker.selectedDates[0].getTime() - Date.now();
    const { days, hours, minutes, seconds } = convertMs(countdown);
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
    if (countdown < 1000) {
      clearInterval(timer);
    }
  }, 1000);
}

// функція для підраухнку значень часу взята з ДЗ

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// const options = {
//     enableTime: true,  - вмикає значення вибору часу
//     time_24hr: true, Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
//     defaultDate: new Date(), Встановлює початкові вибрані дати.
//     minuteIncrement: 1, Регулює крок для введення хвилин (включно з прокручуванням)
//     onClose(selectedDates) {
//       console.log(selectedDates[0]); Функції, які запускаються щоразу, коли календар закривається.
//     },
//   };