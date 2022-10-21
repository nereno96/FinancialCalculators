"use strict";

window.onload = init;

function init()
{
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked()
{
    const CelsiusField = document.getElementById("CelsiusField");
    let c = Number(CelsiusField.value);

    let f = c * (9 / 5) + 32;

    const FahrenheitField = document.getElementById("FahrenheitField");
    FahrenheitField.value = f;
}