// Global variables
const time_el = document.querySelector('.watch .time');
const btn_start = document.getElementById('start');
const btn_stop = document.getElementById('stop');
const btn_reset = document.getElementById('reset');

let seconds = 0;
let interval = null;

// EVENT LISTENER
btn_start.addEventListener('click', start);
btn_stop.addEventListener('click', stop);
btn_reset.addEventListener('click', reset);

// UPDATE TIME
function timer() {
    ++seconds;

    // format out time
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hours < 10) hours = '0' + hours;
    time_el.innerHTML = `${hours}:${mins}:${secs}`
}
timer();

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time_el.innerHTML = '00:00:00';
}