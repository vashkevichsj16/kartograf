"use strict"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Wear kaltrops after fight
 */
function wearKaltrops() {

    setTimeout(function () {
        document.getElementById('loc')
            .contentWindow.document.getElementById('showInfo')
            .contentWindow.document.querySelector("body > table > tbody > tr > td > form > table > tbody > " +
            "tr:nth-child(2) > td > input[type=image]:nth-child(1)").click();
        setTimeout(function () {
            document.getElementById('loc')
                .contentWindow.document.getElementById('showInfo')
                .contentWindow.document.querySelector("#i000").click();
            setTimeout(function () {
                document.getElementById('loc')
                    .contentWindow.document.getElementById('showInfo')
                    .contentWindow.document.querySelector("#i1777").click();
                setTimeout(function () {
                    for (let i = 0; i <= 7; i++) {
                        let tick = function () {
                            document.getElementById('loc')
                                .contentWindow.document.getElementById('showInfo')
                                .contentWindow.document.querySelector("#ita_133001 > table > tbody > tr:nth-child(2) > td:nth-child(2) > div").click();
                            console.log("Wearing caltrop");
                        };
                        let src = document.getElementById('loc')
                            .contentWindow.document.getElementById('showInfo')
                            .contentWindow.document.getElementById('scroll' + i)
                            .getElementsByTagName("img").item(0).getAttribute("src");
                        if (src.includes("scroll_none")) {
                            setTimeout(tick, 300 * i);
                        }
                    }
                }, 500);
            }, 500);
        }, 2000);
    }, 2000);
}