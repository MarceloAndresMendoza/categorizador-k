
function buttonClick(clickedElement) {
    const parentRow = clickedElement.parentElement.id;
    // alert (parentRow);
    const buttons = document.querySelectorAll("#" + parentRow + ' .table-dimension-button');
    buttons.forEach((currentButton) => {
        currentButton.classList.remove ("button-selected");
        if (currentButton === clickedElement) {
            currentButton.classList.add ("button-selected");
        }
    })
    score();
}


function score() {
    var scoreValue = 0;
    const selectedElements = document.querySelectorAll(".button-selected > .table-dimension-button-subtext");
    selectedElements.forEach((element)=> {
        scoreValue += Number(element.innerHTML);
    })
    var categoryName = "";
    var activityList = "";
    var sessions = "";
    if (scoreValue < 1){
        categoryName = "K5";
        activityList = "Sin indicación / NET 3D<br>0 puntos"
        sessions = ""
    } else if (scoreValue < 5) {
        categoryName = "K4";
        activityList = "Demanda baja<br>1 a 4 puntos"
        sessions = "1 atención"
    } else if (scoreValue < 8) {
        categoryName = "K3";
        activityList = "Demanda media<br>5 a 7 puntos"
        sessions = "2 atenciones"
    } else if (scoreValue < 11) {
        categoryName = "K2";
        activityList = "Demanda alta<br>8 a 10 puntos"
        sessions = "3 atenciones"
    } else {
        categoryName = "K1";
        activityList = "Demanda máxima<br>&gt; 11 puntos"
        sessions = "Al menos 4"
    }
    const scoreElement = document.querySelector(".score");
    scoreElement.innerHTML= "Puntos: " + scoreValue;
    const categoryElement = document.querySelector(".category");
    const activitiesElement = document.querySelector(".activities");
    const sessionsElement = document.querySelector(".sessions");
    scoreElement.innerHTML= scoreValue;
    categoryElement.innerHTML= categoryName;
    activitiesElement.innerHTML= activityList;
    sessionsElement.innerHTML= sessions;
}

window.onload = function() {
    score();
}


$(document).ready(function() {
    const clickAudio = new Audio('assets/sounds/clickUp.mp3');
    const releaseAudio = new Audio("assets/sounds/clickDown.mp3");
    clickAudio.load();
    releaseAudio.load();
    $('.table-dimension-button').mousedown(function() {
        clickAudio.volume = 0.07;
        clickAudio.play();
    });
    $('.table-dimension-button').mouseup(function() {
        releaseAudio.volume= 0.15;
        releaseAudio.play();
    });
});
