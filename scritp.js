/* 
    we can do this like this 
    
document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputField = document.getElementById('deposit-field');
    const depositAmountText = inputField.value;
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
    inputField.value = '';
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
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const AmountText = inputField.value;
    const Amount = parseFloat(AmountText);

    inputField.value = '';
    return Amount;
}


function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const privousTotal = parseFloat(totalText);
    totalElement.innerText = amount + privousTotal;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const privousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = privousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = privousBalanceTotal - depositAmount;
    }
}





/* New functional code ended */


document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-field')

    updateTotalField('deposit-total', depositAmount);

    // update balance after deposit
    updateBalance(depositAmount, true);

})



document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-field');
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false);

}) 