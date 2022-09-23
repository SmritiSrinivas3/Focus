// Declarations and definitions
let pomodoro_time_in_min = 0
let long_break_time_in_min = 0
let short_break_time_in_min = 0
// preventing the clicking of start buttons before setting time
document.getElementById('pomodoroButton').disabled = true
document.getElementById('smallBreakButton').disabled = true
document.getElementById('largeBreakButton').disabled = true


function assignTime() {
    pomodoro_time_in_min = document.getElementById('sel-1').value
    long_break_time_in_min = document.getElementById('sel-2').value
    short_break_time_in_min = document.getElementById('sel-3').value
    // start buttons can be clicked now
    document.getElementById('pomodoroButton').disabled = false
    document.getElementById('smallBreakButton').disabled = false
    document.getElementById('largeBreakButton').disabled = false
}

// counting function
let time_passed_in_sec = 0
let time_passed_in_min = Math.floor(time_passed_in_sec / 60)
function count() {
    time_passed_in_sec++
    console.log(time_passed_in_sec)

}


// display text function
function displayTime(elem) {
    let min = Math.floor(time_passed_in_sec / 60)
    let sec = time_passed_in_sec % 60
    elem.innerText = min < 10 && sec < 10 ? `0${min}:0${sec}`
        : min < 10 && sec >= 10 ? `0${min}:${sec}`
            : `${min}:${sec}`
    
}

// stop count fucntion
function stopCount(intVar, elem) {
    clearInterval(intVar)
    intVar = null
    elem.innerText = 'START'
}


function startPomodoro() {
    document.getElementById('pomodoroButton').disabled = true  // to prevent multiple clicking
    document.getElementById('time-selection-button').disabled = true // to prevent multiple submission
    let pomoInt = setInterval(() => {
        count(), displayTime(pomodoro_button_text)
    }, 1000)



}

