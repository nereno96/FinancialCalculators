"use strict";

window.onload = init;

function init()
{
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked()
{
    const principalField = document.getElementById("principalField");
    let num1 = Number(principalField.value);
    const interestField = document.getElementById("interestField");
    let num2 = Number(interestField.value);
    const loanLengthField = document.getElementById("loanLengthFieldField");
    let num3 = Number(loanLengthField.value);

    let ans = num1 * (1 + (num2 / 12)) ** (12 * num3)

    const paymentField = document.getElementById("paymentField");
    paymentField.value = ans;
}