const DecreaseBtn = document.getElementById("decreaseButton");
const IncreaseBtn = document.getElementById("increaseButton");
const ResetBtn = document.getElementById("resetButton");

countlabel = document.getElementById("myH1");

let count = 0;  

DecreaseBtn.onclick = function() {

    count--;

    countlabel.textContent = count;

}

IncreaseBtn.onclick = function() {

    count++;

    countlabel.textContent = count;

}

ResetBtn.onclick = function() {

    count = 0;

    countlabel.textContent = count;

}