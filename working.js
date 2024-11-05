let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector('#sec');
let millisec = document.querySelector('#millisec');
let lapBtn = document.querySelector('#lap');
let start = document.querySelector('#start');
let laps = document.querySelector("#laps");
let num = 1;

let intervalId;
start.addEventListener('click', () => {
    if (start.innerText == 'Start'){
        start.innerText = 'Stop';
        lapBtn.innerText = "Lap";
        startTime();
    }
    else {
        start.innerText = 'Start';
        lapBtn.innerText = "Reset";
        stopTime();
    }
})

lapBtn.addEventListener('click',()=>{
    if(lapBtn.innerText == "Lap"){
        //lapBtn.innerText = "Reset";
        addLap();
    }
    else{
        lapBtn.innerText = "Lap";
        laps.innerHTML = '';
        num = 1;
    }
})

function setTime(time) {
    return String(time).padStart(2, "0");
}

function startTime() {
    intervalId = setInterval(() => {
        let ms = parseInt(millisec.innerText, 10) + 1;
        if (ms === 100) {
            ms = 0;
            s = parseInt(sec.innerText, 10) + 1;
            if (s === 60) {
                s = 0;
                m = parseInt(min.innerText, 10) + 1;
                if (m === 60) {
                    m = 0;
                    h = parseInt(hour.innerText, 10) + 1;
                    hour.innerText = setTime(h);
                }
                min.innerText = setTime(m);
            }
            sec.innerText = setTime(s);
        }
        millisec.innerText = setTime(ms);
    }, 1);
}

function stopTime(){
    clearInterval(intervalId);
    hour.innerText = "00";
    min.innerText = "00";
    sec.innerText = "00";
    millisec.innerText = "00";
}

function addLap(){
    let lapDiv = document.createElement('div');
    lapDiv.setAttribute('class','lapDiv');
    let lapNum = document.createElement('span');
    lapNum.innerText = "Lap " + num;
    num++;
    let time = document.createElement('span');
    time.innerText = hour.innerText + " : " + min.innerText + " : " + sec.innerText + " : " + millisec.innerText;
    lapDiv.append(lapNum, time);
    laps.append(lapDiv);
}
