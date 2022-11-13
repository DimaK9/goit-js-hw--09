function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('.js-start'),
    btnStop: document.querySelector('.js-stop'),
};


let timerId = null; 

refs.btnStart.addEventListener('click', ontBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function ontBtnStartClick() {
    timerId = setInterval(() =>{
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
}

function onBtnStopClick() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.btnStop.disabled = true;
}
