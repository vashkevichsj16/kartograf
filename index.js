"use strict"
/**
 * Starts with 37, finish with 30
 */

let checkbox = document.getElementById("radioButton");
let combatTimer;
let mainTimer;
let movingTimer;
let combatState = false;
let labState = false;
checkbox.onchange = function () {
    if (checkbox.checked) {
        mainTimer = setInterval(mainLoop, 1000);
    } else {
        console.log("Power off");
        clearInterval(mainTimer);
        finishCombat();
        stopMoving();
    }
};

/**
 * Starting main loop
 */
function mainLoop() {
    if (!combatState && isCombat()) {
        startCombat();
    }

    if (!labState && isLab()){
        startMoving();
    } else if (labState && !isLab()) {
        clearInterval(movingTimer);
        labState = false;
    }
}

function finishCombat() {
    setTimeout(wearKaltrops(), 2000);
    clearInterval(combatTimer);
    console.log("Callback working");
    combatState = false
}

function startCombat() {
    combatState = true;
    combatTimer = setInterval(makeCombatMove, 16000, finishCombat);
}

function startMoving() {
    labState = true;
    movingTimer = setInterval(makeOneMove, 3000, stopMoving);
}

function stopMoving() {
    labState = false;
    clearInterval(movingTimer);
}