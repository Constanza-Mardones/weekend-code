var timer = 60;

function displayTimer(){
    document.getElementById("timer").innerHTML = timer;
}

function restTimer(){
    timer -= 1;
    if (timer <= 0){
        window.location.href = "lose.html";
    }
    displayTimer();
}

displayTimer();

setInterval(restTimer,1000);