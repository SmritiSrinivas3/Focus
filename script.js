// Declarations and definitions
let pomodoro_time_in_min = 0
let long_break_time_in_min = 0
let short_break_time_in_min = 0
document.getElementById('pomodoroButton').disabled = true
document.getElementById('smallBreakButton').disabled = true
document.getElementById('largeBreakButton').disabled = true



function assignTime(){
 pomodoro_time_in_min = document.getElementById('sel-1').value
 long_break_time_in_min = document.getElementById('sel-2').value
 short_break_time_in_min = document.getElementById('sel-3').value
 document.getElementById('pomodoroButton').disabled = false
 document.getElementById('smallBreakButton').disabled = false
 document.getElementById('largeBreakButton').disabled = false
}

// counting function
let time_passed_in_sec = 0

function count() {
    time_passed_in_sec++
    console.log(time_passed_in_sec)
}


// display text function
function displayTimePomodoro(elem) {
     elem.innerText  = `${Math.floor(time_passed_in_sec / 60)}:${time_passed_in_sec % 60}`
}

// stop count fucntion
function stopCount(elem){
    elem.innerText = 'START'
}


function startPomodoro() {
    document.getElementById('pomodoroButton').disabled = true
    document.getElementById('time-selection-button').disabled = true
    console.log('pomodoro started')
    console.log(pomodoro_time_in_min)
    let time_passed_in_sec = 0
    pomoInt = setInterval(() => { count(), displayTimePomodoro(pomodoro_button_text)}, 1000)
    //setTimeout(() => { stopCount(pomodoro_button_text), 
     //   document.getElementById('pomodoroButton').disabled = false
   // }, pomodoro_time_in_min*60);
}

