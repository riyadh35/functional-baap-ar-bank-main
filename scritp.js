/* 
    we can do this like this 
    
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const privousDepsitTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + privousDepsitTotal;

    // update balance after deposit

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const privousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = privousBalanceTotal + depositAmount;
    // console.log(depositTotalText);
    //clear text
    depositInput.value = '';
})



document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const privousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + privousWithdrawTotal;

    // update balance total after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const privousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = privousBalanceTotal - withdrawAmount;

    // clear withdraw input
    withdrawInput.value = '';
}) */



// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5)
// const second = doubleIt(6)


/* New functional code */
function getInputValue() {
    const depositInput = document.getElementById('deposit-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    depositInput.value = '';
    return depositAmount;
}




/* New functional code ended */
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const privousDepsitTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + privousDepsitTotal;

    // update balance after deposit

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const privousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = privousBalanceTotal + depositAmount;
    // console.log(depositTotalText);
    //clear text
})



document.getElementById('btn-withdraw').addEventListener('click', function () {

    const depositAmount = getInputValue();

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const privousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + privousWithdrawTotal;

    // update balance total after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const privousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = privousBalanceTotal - withdrawAmount;

    // clear withdraw input
    withdrawInput.value = '';
}) 