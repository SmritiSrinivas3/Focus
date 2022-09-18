let pomodoro_time = 0
let long_break_time = 0
let short_break_time = 0
let pomodoro_button_text = document.getElementById('pomodoro_button_text').innerText
// assigning the user-input time 
function assignTime(){
pomodoro_time = document.getElementById('sel-1').value
long_break_time = document.getElementById('sel-2').value
short_break_time = document.getElementById('sel-3').value
}


let num_of_min = 0 // to keep track of number of minutes passed

//counting logic
function count_min(num_of_min){
    num_of_min = num_of_min + 1
    pomodoro_button_text = num_of_min

}

//start pomodoro counting
function startPomodoro(){
    
    console.log('pomodoro started')
    setInterval((count_min, 60000) // incrementing num_of_min by 1 after every 60 seconds
    
    
}