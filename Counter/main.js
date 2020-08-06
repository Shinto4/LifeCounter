var life = 20;
var life1 = 20;

function plus() {
    life++;
    document.getElementById("counter").innerHTML = life;
}

function less() {
    life--;
    document.getElementById("counter").innerHTML = life;
}

function plus1() {
    life1++;
    document.getElementById("counter1").innerHTML = life1;
}

function less1() {
    life1--;
    document.getElementById("counter1").innerHTML = life1;
}

function restart() {
    life = 20;
    life1 = 20;
    document.getElementById("counter").innerHTML = life;
    document.getElementById("counter1").innerHTML = life1;
}