const timer = document.getElementById("timer");
let secondsLeft = parseInt(timer.textContent);

getTime = function(seconds){
    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    seconds = String(seconds).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");

    timer.textContent = `${hours}:${minutes}:${seconds}`;
};

getTime(secondsLeft);

let intevalId = setInterval( function(){
    getTime(secondsLeft);
    secondsLeft--;
    
    if(secondsLeft === 0){
        alert("Вы победили в конкурсе!");
        clearInterval(intevalId);
    };
}, 1000);






