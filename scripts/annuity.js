"use strict";

window.onload = init;

function init()
{
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked()
{
    const payoutField = document.getElementById("payoutField");
    let num1 = Number(payoutField.value);
    const interestField = document.getElementById("interestField");
    let num2 = Number(interestField.value / 100);
    const yearsField = document.getElementById("yearsField");
    let num3 = Number(yearsField.value * 12);

    let pmt = num1;
    let r = num2 / 12;
    let n = num3;

    let numer = 1 - ((1)/Math.pow(1 + r, n))

    let ans = pmt * (numer / r);

    console.log(pmt);
    console.log(r);
    console.log(n);



    const valueField = document.getElementById("valueField");
    valueField.value = ans.toFixed(2);
}