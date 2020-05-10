"use strict"

const normalUnits = new Array(1901, 2901, 3901);

function setArmy(army_id) {
    const Http = new XMLHttpRequest();
    const url = 'http://www.fantasyland.ru/cgi/combat_ins.php?id=' + army_id + '&show=1';
    Http.open("GET", url);
    Http.send();
}

function isCombat() {
    return document.getElementById('loc').contentWindow.document.getElementById('combatPanelDiv');
}

function leaveCombat() {
    if (!(document.getElementById('loc')
        .contentWindow.document.getElementById('combat_panel')
        .contentWindow.document.getElementById('la').style.display == 'none')) {
        console.log("leaving combat");
        document.getElementById('loc')
            .contentWindow.document.getElementById('combat_panel')
            .contentWindow.document.getElementById('la')
            .getElementsByTagName("a").item(0).click();
        return true;
    }
    return false;
}

function getLastManuscript() {
    const difference = 30;
    const lastManuscript = 7;
    for (let i = lastManuscript; i >= 0; i--) {
        let src = document.getElementById('loc')
            .contentWindow.document.getElementById('your_army')
            .contentWindow.document.getElementById('scroll' + i)
            .getElementsByTagName("img").item(0).getAttribute("src");
        if (!src.includes("scroll_none")) {
            return i + difference;
        }
    }
    return undefined;
}

function makeCombatMove(combatFinishCallback) {
    if (isCombat()) {
        if (!leaveCombat()) {
            setKaltrop();
            setTimeout(() => setArmy(normalUnits[getRandomInt(0, 2)]), 1000);
        }
    } else {
        combatFinishCallback();
    }
}

function setKaltrop() {
    let manuscript = getLastManuscript();
    if (manuscript) {
        console.log("Kaltrop is " + manuscript);
        const Http = new XMLHttpRequest();
        const url = 'http://www.fantasyland.ru/cgi/combat_scroll_ins.php?id=' + manuscript + '&show=1';
        Http.open("GET", url);
        Http.send();
    }
}