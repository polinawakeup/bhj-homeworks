let deadCounter = document.getElementById("dead");
let lostCounter = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++){
    let hole = getHole(i);
    hole.onclick = function () {
        if (hole.classList.contains( 'hole_has-mole' )){
            deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
        } else {
            lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
        };

        if (parseInt(deadCounter.textContent) === 10) {
            alert("Победа!");
            deadCounter.textContent = "0";
            lostCounter.textContent = "0";
        };

        if (parseInt(lostCounter.textContent) === 5) {
            alert("Вы проиграли");
            deadCounter.textContent = "0";
            lostCounter.textContent = "0";
        }
    };
}