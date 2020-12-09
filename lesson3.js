const stopwatch = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let ms = 0;
let s = 0;
let m = 0;

let time = 0;
let timerId = null ;
let startTime = 0;
let elapsedTime = 0;
//startボタン//
start.addEventListener('click', function(){
  if( timerId !== null){ return;}
  startTime = new Date();
  timerId = setInterval(function(){ 
  time = new Date() - startTime + elapsedTime;
  stopwatch.innerHTML = formatTime();
  },100);
});

//stopボタン//
stop.addEventListener('click', (event) => {
    clearInterval(timerId);
    timerId = null;
    elapsedTime += new Date() - startTime;
});

let zeroMsec;
let zeroSec;
let zeroMin;
//resetボタン//
reset.addEventListener('click', (event) => {
  clearInterval(timerId)
  stopwatch.innerHTML = "00:00:00"
  elapsedTime = 0;
});


//分、秒のフォーマット//
function formatTime(){
  let ms = time % 1000;
  let temps = Math.floor(time / 1000);
  let s = temps % 60;
  let m = Math.floor(temps / 60);
  
  let zeroMin = zeroPadding(m);
let zeroSec = zeroPadding(s);
let zeroMsec = zeroPadding(Math.floor(ms / 10));


  return  zeroMin + ":" + zeroSec +":" + zeroMsec;
}

//ゼロ埋め//

function zeroPadding(value){
  if(value < 10){
    return "0" + value
  }
  else{
    return value
  }
}
