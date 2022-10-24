"use strict";

window.onload = init;

function init()
{
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked()
{
    const depositField = document.getElementById("depositField");
    let p = Number(depositField.value);
    const interestField = document.getElementById("interestField");
    let r = Number(interestField.value);
    const yearsField = document.getElementById("yearsField");
    let n = Number(yearsField.value);

    let ans = p * Math.pow((1 + (r / 365 / 100)), n * 365);
    let ans2 = ans - p;



    const valueField = document.getElementById("valueField");
    valueField.value = ans.toFixed(2);
    const value2Field = document.getElementById("value2Field");
    value2Field.value = ans2.toFixed(2);
}