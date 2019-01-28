var start_timer = document.getElementById("start-btn");
var stop_btn = document.getElementById("stop-btn");
var clr_btn = document.getElementById("clr-btn");
var timer_field = document.getElementById("timer");

var counter = -1;

start_timer.onclick = function(){
  timer();
}

clr_btn.onclick = function(){
  counter = -1;
  timer_field.innerHTML = 0;
}

function timer(){
  counter++;
  timer_field.innerHTML = counter;
  var timerId = setTimeout("timer()", 100);
  
  stop_btn.onclick = function(){
    clearTimeout(timerId);
  }
}