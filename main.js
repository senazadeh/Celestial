
function updateTime(){
    var currentTime = new Date()
    var month = currentTime.getUTCMonth()
    var day = currentTime.getDate()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }
    var t_str = month + " " + day + " " + hours + ":" + minutes + ":" + seconds + " ";
    if (hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('time_span').innerHTML = t_str;
}
setInterval(updateTime, 1000);



var counter = 0;
function increaseCount() {
    document.getElementById('inc').value = ++counter;
}
function decreaseCount() {
    counter = 0;
    document.getElementById('inc').value = 0;
}