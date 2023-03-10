//  Variables for buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Vairables for set interval & timerstatus
let timerInterval = null;
let timerStatus = 'stopped';

// Stop Watch Function
function stopWatch() {
    seconds ++;
    if (seconds / 60 === 1) {
        minutes ++;
        seconds = 0;
        if (minutes / 60 === 1) {
            hours ++;
            minutes = 0;
        }
    }
    if (seconds < 10) {
        leadingSeconds = `0${seconds}`;
    }
    else {
        leadingSeconds = seconds;
    }
    if (minutes < 10) {
        leadingMinutes = `0${minutes}`;
    }
    else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = `0${hours}`;
    }
    else {
        leadingHours = hours;
    }
    let displayTimer =  document.querySelector('#timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}
 //

//Click events startStopBtn and resetBtn
startStopBtn.addEventListener('click', function() {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        timerStatus = 'started';
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
    }
    else {
        timerInterval = window.clearInterval(timerInterval);
        timerStatus = 'stopped';
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
    }
})

resetBtn.addEventListener('click', function() {
        window.clearInterval(timerInterval)
        seconds = 0;
        minutes = 0;
        hours = 0;
        displayTimer = document.querySelector('#timer').innerText = '00:00:00';
})


