let pomodoro_time = 0
let long_break_time = 0
let short_break_time = 0
let pomodoro_button_text = document.getElementById('pomodoro_button_text').innerText
// assigning the user-input time 
function assignTime() {
    pomodoro_time = document.getElementById('sel-1').value
    long_break_time = document.getElementById('sel-2').value
    short_break_time = document.getElementById('sel-3').value
}

//start pomodoro counting
function startPomodoro() {
    console.log('pomodoro started') // got this at the output
    let num_of_min = 0 // to keep track of number of minutes passed
    console.log(typeof (num_of_min)) // got it as 'number'
    setInterval((num_of_min) => {
        num_of_min++
        console.log(num_of_min) //getting NaN at the console
    }, 60000)


}