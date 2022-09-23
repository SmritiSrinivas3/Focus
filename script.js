// Declarations and definitions
let pomodoro_time_in_min = document.getElementById('sel-1').value
let long_break_time_in_min = document.getElementById('sel-2').value
let short_break_time_in_min = document.getElementById('sel-3').value



// counting function
let time_passed_in_sec = 0

function count(){ 
   time_passed_in_sec++
   console.log(time_passed_in_sec)
  
   
}

function displayTimePomodoro(){
    document.getElementById('pomodoro_button_text').innerText = `${Math.floor(time_passed_in_sec/60)}:${time_passed_in_sec%60}`
}


function startPomodoro() {
    console.log('pomodoro started')
    let time_passed_in_sec = 0
    setInterval(()=>{count(), displayTimePomodoro()},1000)
}

