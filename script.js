// Declarations and definitions
let pomodoro_time_in_min = 0
let long_break_time_in_min = 0
let short_break_time_in_min = 0
let alarm = new Audio("alarm.mp3")
// preventing the clicking of start buttons before setting time
document.getElementById('pomodoroButton').disabled = true
document.getElementById('smallBreakButton').disabled = true
document.getElementById('largeBreakButton').disabled = true


function assignTime() {
    pomodoro_time_in_min = document.getElementById('sel-1').value
    long_break_time_in_min = document.getElementById('sel-3').value
    short_break_time_in_min = document.getElementById('sel-2').value
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
    alarm.play()
}




function startPomodoro() {
    if(pomodoro_time_in_min == 0 || pomodoro_time_in_min == null){
        document.getElementById('pomodoroButton').disabled = true
    } 
    else{
        time_passed_in_sec = 0
        time_passed_in_min = Math.floor(time_passed_in_sec / 60)
        document.getElementById('name').innerText = 'FOCUS'
        document.getElementById('pomodoroButton').disabled = true  // to prevent multiple clicking
        document.getElementById('time-selection-button').disabled = true // to prevent multiple submission
        document.getElementById('smallBreakButton').disabled = true // to prevent breaks
        document.getElementById('largeBreakButton').disabled = true // to prevent breaks
        let pomoInt = setInterval(() => {
            count(), displayTime(pomodoro_button_text)
        }, 1000)
        setTimeout(() => {
            stopCount(pomoInt, pomodoro_button_text)
            document.getElementById('name').innerText = 'WOAH!! YOU HAVE COMPLETED A SESSION'
            document.getElementById('time-selection-button').disabled = false
            document.getElementById('pomodoroButton').disabled = false
            document.getElementById('smallBreakButton').disabled = false
            document.getElementById('largeBreakButton').disabled = false
        }, pomodoro_time_in_min * 60 * 1000);
    }
}


function startShortBreak() {
    if(short_break_time_in_min ==0 || short_break_time_in_min == null){
        document.getElementById('smallBreakButton').disabled = true
    }
    else{
    time_passed_in_sec = 0
    time_passed_in_min = Math.floor(time_passed_in_sec / 60)
    document.getElementById('name').innerText = 'FOCUS'
    document.getElementById('smallBreakButton').disabled = true  // to prevent multiple clicking
    document.getElementById('time-selection-button').disabled = true // to prevent multiple submission
    document.getElementById('pomodoroButton').disabled = true
    document.getElementById('largeBreakButton').disabled = true
    let shortBreakInt = setInterval(() => {
        count(), displayTime(short_break_button_text)
    }, 1000)
    setTimeout(() => {
        stopCount(shortBreakInt, short_break_button_text)
        document.getElementById('name').innerText = 'BREAK TIME IS OVER'
        document.getElementById('time-selection-button').disabled = false
        document.getElementById('smallBreakButton').disabled = false
        document.getElementById('pomodoroButton').disabled = false
        document.getElementById('largeBreakButton').disabled = false
    }, short_break_time_in_min * 60 * 1000)
}
}

function startLongBreak() {
    if(long_break_time_in_min == 0 || long_break_time_in_min == null){
        document.getElementById('largeBreakButton').disabled = true  
    }
    else{
    time_passed_in_sec = 0
    time_passed_in_min = Math.floor(time_passed_in_sec / 60)
    document.getElementById('name').innerText = 'FOCUS'
    document.getElementById('largeBreakButton').disabled = true  // to prevent multiple clicking
    document.getElementById('time-selection-button').disabled = true // to prevent multiple submission
    document.getElementById('smallBreakButton').disabled = true
    document.getElementById('pomodoroButton').disabled = true
    let longBreakInt = setInterval(() => {
        count(), displayTime(long_break_button_text)
    }, 1000)
    setTimeout(() => {
        stopCount(longBreakInt, long_break_button_text)
        document.getElementById('name').innerText = 'BREAK TIME IS OVER'
        document.getElementById('time-selection-button').disabled = false
        document.getElementById('smallBreakButton').disabled = false
        document.getElementById('pomodoroButton').disabled = false
        document.getElementById('largeBreakButton').disabled = false
    }, long_break_time_in_min * 60 * 1000)
}
}