"use strict";

window.onload = init;

function init()
{
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked()
{
    const FahrenheitField = document.getElementById("FahrenheitField");
    let f = Number(FahrenheitField.value);

    let c = (f - 32) * (5 / 9);

    const CelsiusField = document.getElementById("CelsiusField");
    CelsiusField.value = c;
}