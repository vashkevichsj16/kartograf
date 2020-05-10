"use strict"
let body = document.getElementsByTagName("body")[0];
body.style.marginLeft = "50px";

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = '<input type="checkbox" id="radioButton">';
div.style.cssText = "position:fixed; left:0; top:10px";
body.prepend(div);