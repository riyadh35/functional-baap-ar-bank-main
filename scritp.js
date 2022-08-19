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