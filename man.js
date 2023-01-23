let clock = document.querySelector("#clock");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let timerId;
let hours = 0;
let minutes = 0;
let seconds = 0;

start.addEventListener("click", ()=>{
    begin();
    timerId = setInterval(begin,1000);
    function begin(){
        seconds++;
        if(seconds>59){
            seconds = 0;
            minutes++;
        }
        if(minutes>59){
            minutes = 0;
            hours++;
        }
        if(hours>23){
            hours = 0;
        }
        hours = ToUnit(hours);
        minutes = ToUnit(minutes);
        seconds = ToUnit(seconds);
        clock.innerHTML = `${hours}:${minutes}:${seconds}`; 
    }
});

pause.addEventListener("click", ()=>{
    clearInterval(timerId);
});

reset.addEventListener("click", ()=>{
    clearInterval(timerId); 
    hours = 0;
    minutes = 0;
    seconds = 0;
    clock.innerHTML = `00:00:00`; 
});

function ToUnit(unit){
    unit = unit.toString();
    return unit.length < 2 ? "0" + unit : unit;
}
