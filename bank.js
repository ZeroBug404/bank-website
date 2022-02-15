// Handle deposit & balance total 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposited  
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = parseInt(depositInput.value);

    //update deposit total
    const depoitNumber = document.getElementById('depoit-number');
    const preViousDepositAmount = parseInt(depoitNumber.innerText);
    const newDepositTotal = preViousDepositAmount + newdepositAmount;
    depoitNumber.innerText = newDepositTotal;
    
    // update balance total 
    const balance = document.getElementById('banalce');
    const balanceTotal = parseInt(balance.innerText);
    const Total = balanceTotal + newdepositAmount;
    balance.innerText = Total;

    //clear the deposit input field
    depositInput.value = '';
})

// Handle Withdraw & balance total 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputVal = parseFloat(withdrawInput.value);

    const withdrawn = document.getElementById('withdrawn');
    const withdrawnVal = parseFloat(withdrawn.innerText);

    //update withdraw total
    const newWithdranAmount = withdrawnVal + withdrawInputVal;
    withdrawn.innerText = newWithdranAmount;

    // update balance total 
    const balance = document.getElementById('banalce');
    const balanceTotal = parseInt(balance.innerText);
    const Total = balanceTotal - newWithdranAmount;
    balance.innerText = Total;

    //clear the Withdraw input field
    withdrawInput.value = '';
})
