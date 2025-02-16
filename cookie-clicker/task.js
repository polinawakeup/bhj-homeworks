let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");

let lastClickTime = Date.now();

cookie.onclick = function(){
    let clicksAmount = parseInt(counter.textContent)
    clicksAmount++;
    counter.textContent = clicksAmount
    clicksAmount % 2 === 0 ? cookie.width = 200 : cookie.width = 230;

    let now = Date.now();
    let difference = (now - lastClickTime) / 1000;
    let speed = 1 / difference;
    lastClickTime = now;
    document.getElementById("clicker__speed").textContent = speed;
};