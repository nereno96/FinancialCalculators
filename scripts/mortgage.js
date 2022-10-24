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
    let num2 = Number(interestField.value) / 100;
    const loanLengthField = document.getElementById("loanLengthField");
    let num3 = Number(loanLengthField.value);



    let p = num1;
    let r = (num2) / 12;
    let n = num3 * 12;

    console.log(p);
    console.log(r);
    console.log(n);


    let ans = p * (r * Math.pow((1 + r), n) / (Math.pow((1 + r), n) - 1));

    let ans2 = (ans * n) - p;

    const paymentField = document.getElementById("paymentField");
    paymentField.value = ans.toFixed(2);
    const totalInterestField = document.getElementById("totalInterestField");
    totalInterestField.value = ans2.toFixed(2);
}