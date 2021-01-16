var timer = 1000;

function displayTimer(){
    document.getElementById("timer").innerHTML = timer;
}

function restTimer(){
    timer -= 1;
    displayTimer();
}

displayTimer();

setInterval(restTimer,1000);