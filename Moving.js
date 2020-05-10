"use strict"

function makeOneMove(stopMoving) {
    console.log(getMoves());
    if (isLab()) {
        if (pickObjects()) {
            stopMoving();
        } else {
            makeMove(getMoves());
        }
    } else {
        stopMoving();
    }
}

function pickObjects() {
    let find = false;
    parseInt(document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelectorAll("#picks > table > tbody > tr").forEach(function (item) {
            item.querySelector("td:nth-child(1) > img").click();
            find = true;
        }))
    return find;
}

function isLab() {
    return document.getElementById('loc')
            .contentWindow.document.getElementById('noCombat') &&
        document.getElementById('loc')
            .contentWindow.document.getElementById('noCombat')
            .contentWindow.document.querySelector("#hru");
}

function makeMove(moveArray) {
    if (getExhausted()) {
        let moveTo = randomMove(moveArray)
        console.log("#" + moveTo + " > img");
        document.getElementById('loc')
            .contentWindow.document.getElementById('noCombat')
            .contentWindow.document.querySelector("#" + moveTo + " > img").click();
    }
}

function randomMove(moveArray) {
    return moveArray[Math.floor(Math.random() * moveArray.length)];
}

function getExhausted() {
    return parseInt(document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#hru").innerHTML.replace(/\D/g, '')) > 4
}

function getMoves() {
    let possibleMoves = [];

    let src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d1 > img").getAttribute("src");
    if (!src.includes("go_default")) {
        possibleMoves.push("d1");
    }

    src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d5 > img").getAttribute("src");
    if (!src.includes("go_default")) {
        possibleMoves.push("d5");
    }

    src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d7 > img").getAttribute("src");
    if (!src.includes("go_default")) {
        possibleMoves.push("d7");
    }

    src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d3 > img").getAttribute("src");
    if (!src.includes("go_default")) {
        possibleMoves.push("d3");
    }
    return possibleMoves
}

function findPossibleMoves() {
    let possibleMoves = new Map();

    let src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d1 > img").getAttribute("src");
    if (src.includes("go_default")) {
        possibleMoves.set("d1", false);
    } else {
        possibleMoves.set("d1", true);
    }

    src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d5 > img").getAttribute("src");
    if (src.includes("go_default")) {
        possibleMoves.set("d5", false);
    } else {
        possibleMoves.set("d5", true);
    }

    src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d7 > img").getAttribute("src");
    if (src.includes("go_default")) {
        possibleMoves.set("d7", false);
    } else {
        possibleMoves.set("d7", true);
    }

    src = document.getElementById('loc')
        .contentWindow.document.getElementById('noCombat')
        .contentWindow.document.querySelector("#d3 > img").getAttribute("src");
    if (src.includes("go_default")) {
        possibleMoves.set("d3", false);
    } else {
        possibleMoves.set("d3", true);
    }
    return possibleMoves
}